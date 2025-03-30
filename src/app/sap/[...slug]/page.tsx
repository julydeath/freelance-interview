// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

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

// Component map for easy lookup
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

  console.log({ template, content });

  return (
    <main className="container mx-auto py-8">
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
