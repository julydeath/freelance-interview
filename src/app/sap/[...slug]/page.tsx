import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getContentForSlug } from "@/lib/data";

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

// Component map for easy lookup
const componentMap = {
  MainModuleHero,
  MainModuleOverview,
  CoreCapabilities,
};

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  // Convert array of slug segments to URL path

  const { slug } = await params;

  const path = "/" + slug.join("/");

  // Fetch data based on the URL path
  const pageData = await getContentForSlug(path);

  // If no data found, return 404
  if (!pageData) {
    notFound();
  }

  const { template, content } = pageData;
  const { component_names: componentNames } = template;

  return (
    <main className="container mx-auto py-8">
      {/* <h1 className="text-3xl text-black font-bold mb-8">{content.title || content.company || 'Content'}</h1> */}

      {/* Render each component from the template */}
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
