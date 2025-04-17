// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import OpenAI from "openai";
import { templateMap } from "@/lib/templateMap";
import { schemaSnippets } from "@/lib/schemaSnippets";
import { parseUrlSegments, getStructureKey } from "@/lib/utils";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const sql = neon(process.env.DATABASE_URL!);

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Invalid URL input." },
        { status: 400 }
      );
    }

    const segments = url.split("/").filter(Boolean);
    const parsed = parseUrlSegments(segments);
    if (!parsed.mainModule) {
      return NextResponse.json(
        { error: "Invalid or unknown main module." },
        { status: 400 }
      );
    }

    const pattern = `/${segments.join("/")}`;
    const moduleDescription = `Auto-generated SAP content for ${pattern}`;
    const structureKey = getStructureKey(parsed);
    const { templateName, componentNames } =
      templateMap[structureKey] || templateMap["main-module"];

    const content = await generateContent(parsed, componentNames);

    const urlPatternResult = await sql`
      INSERT INTO url_patterns (pattern, template_name, description, example_url)
      VALUES (${pattern}, ${templateName}, ${moduleDescription}, ${pattern})
      RETURNING id
    `;

    const urlPatternId = urlPatternResult[0].id;

    await sql`
      INSERT INTO content_blocks (url_pattern_id, data)
      VALUES (${urlPatternId}, ${JSON.stringify(content)})
    `;

    return NextResponse.json({
      message: "Content generated and stored successfully.",
    });
  } catch (err) {
    console.error("Error generating content:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

async function generateContent(parsed, requiredSections) {
  const context = Object.entries(parsed)
    .filter(([, val]) => val)
    .map(([key, val]) => `${key}: ${val}`)
    .join(", ");

  const schema = requiredSections
    .map((section) => schemaSnippets[section] || "")
    .filter(Boolean)
    .join(",\n\n");

  const prompt = `You are an expert SAP content writer. Generate JSON content for a SAP page using this context:

Context: ${context}

Required sections: ${requiredSections.join(",\n")}

Schema:
${schema}

Instructions:
- Return only valid JSON with the required section keys.
- Use realistic SAP content. Do not add extra text or explanations.`;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "You are an SAP expert content generator. Always return strictly valid JSON only.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const text = response.choices[0].message.content?.trim();
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  const jsonString = text.slice(jsonStart, jsonEnd + 1);

  return JSON.parse(jsonString);
}
