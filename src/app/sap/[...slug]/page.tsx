import dynamic from "next/dynamic";
import { getContentForSlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { parseUrlSegments, getStructureKey } from "@/lib/utils"; // pull this from your route.ts
import { templateMap } from "@/lib/templateMap";

// Dynamically import components
const MainModuleHero = dynamic(
  () => import("@/components/sections/MainModuleHero")
);
const MainModuleOverview = dynamic(
  () => import("@/components/sections/MainModuleOverview")
);
const CoreCapabilities = dynamic(
  () => import("@/components/sections/CoreCapabilities")
);
const BusinessContext = dynamic(
  () => import("@/components/sections/BusinessContext")
);
const DeliveryModels = dynamic(
  () => import("@/components/sections/DeliveryModel")
);
const IntegrationCapabilities = dynamic(
  () => import("@/components/sections/IntegrationCapabilities")
);
const TalentCloud = dynamic(() => import("@/components/sections/TalentCloud"));
const FeaturedConsultants = dynamic(
  () => import("@/components/sections/FeaturedConsultants")
);
const FAQs = dynamic(() => import("@/components/sections/FAQs"));
const Features = dynamic(() => import("@/components/sections/Features"));

const componentMap = {
  MainModuleHero,
  MainModuleOverview,
  CoreCapabilities,
  BusinessContext,
  DeliveryModels,
  IntegrationCapabilities,
  TalentCloud,
  FeaturedConsultants,
  FAQs,
  Features,
};

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = "/" + slug.join("/");

  console.log({ path });

  // Try to fetch content from DB
  let pageData = await getContentForSlug(path);

  // If not found, trigger OpenAI generation via API route
  if (!pageData) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/generate-content`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: path }),
      }
    );

    if (!res.ok) {
      notFound();
    }

    // Re-fetch the newly generated content
    pageData = await getContentForSlug(path);

    if (!pageData) {
      notFound();
    }

    revalidatePath(path);
  }

  const { content } = pageData;

  console.log({ content });

  // Use frontend-only logic to figure out what to render
  const parsed = parseUrlSegments(slug);
  const structureKey = getStructureKey(parsed);
  const { componentNames } =
    templateMap[structureKey] || templateMap["main-module"];

  console.log({ componentNames });

  return (
    <main className="container mx-auto py-8">
      {componentNames.map((componentName: string) => {
        const Component =
          componentMap[componentName as keyof typeof componentMap];
        if (!Component) {
          console.warn(`Component ${componentName} not found`);
          return null;
        }
        return <Component key={componentName} data={content} />;
      })}
    </main>
  );
}
