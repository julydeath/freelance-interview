/* eslint-disable @typescript-eslint/no-explicit-any */
import { getModule, getModules } from "@/api";
import DynamicModule from "@/components/DynamicModules";

import { getQueryClient } from "@/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async() => {
  const modules = await getModules();
  return modules.map((module : any) => ({
    slug: module.slug
  }));
}

export const generateMetadata = async({params} : PageProps): Promise<Metadata> => {
  const syncParams = await params;
  const { slug } = syncParams;
  const data = await getModule(slug);
  if (!data) {
    return {
      title: "SAP Module Not Found",
      description: "SAP provides innovative solutions that empower businesses and drive success.",
    };
  }

  return {
    title: data.module_name,
    description: data.overview,
    openGraph: {
      images :{
        url: data.banner_image,
        width: 1200,
        height: 630,
        alt: data.module_name,
      }
    }
  };
}

//getModules() only called once when the page loads

const Page = async ({ params }: PageProps) => {
  const syncParams = await params;
  const { slug } = syncParams;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["module", slug],
    queryFn: () => getModule(slug),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DynamicModule slug={slug} />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
