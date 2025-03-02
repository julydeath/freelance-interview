import { getSalesAndDistributionModule } from "@/api";
import SalesAndDistributionModule from "@/components/SalesAndDistributionModule";

import { getQueryClient } from "@/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP Sales and Distribution (SD) Module",
  description:
    "SAP Sales and Distribution (SD) is a core functional module in SAP ERP that helps organizations manage and execute the processes of order-to-cash, including selling, shipping, and billing products and services. It's designed to facilitate the transactions involved in selling, shipping, and invoicing customers.",
};

export default async function Sd() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["sd"],
    queryFn: getSalesAndDistributionModule,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SalesAndDistributionModule />
      </HydrationBoundary>
    </>
  );
}
