import { getControllingModule } from "@/api";
import ControllingModule from "@/components/ControllingModule";

import { getQueryClient } from "@/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP Controlling (CO) Module",
  description:
    "SAP Controlling (CO) supports coordinated monitoring, reporting, and planning of processes involved in business management. This module helps your organization manage and streamline its costing, budgeting, performance analysis, and profitability.",
};

export default async function Co() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["co"],
    queryFn: getControllingModule,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ControllingModule />
      </HydrationBoundary>
    </>
  );
}
