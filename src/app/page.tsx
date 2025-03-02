import { getTransportModule } from "@/api";
import TransportModule from "@/components/TransportModule";

import { getQueryClient } from "@/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP Transportation Management (TM) Module",
  description:
    "SAP Transportation Management (TM) is designed to enhance freight, fleet, and logistics management for businesses of all sizes. It offers tools for planning, executing, and settling transportation processes,increasing visibility and control over the transportation chain",
};

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tm"],
    queryFn: getTransportModule,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TransportModule />
      </HydrationBoundary>
    </>
  );
}
