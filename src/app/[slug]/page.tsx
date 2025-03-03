import { getModule } from "@/api";
import DynamicModule from "@/components/DynamicModules";

import { getQueryClient } from "@/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

interface PageProps {
  params: Promise<{ slug: string }>;
}

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
