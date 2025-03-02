import { getFinancialModule } from "@/api";
import FinancialModule from "@/components/FinancialModule";

import { getQueryClient } from "@/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP Financial Accounting (FI) Module",
  description:
    "SAP Financial Accounting (FI) is a cornerstone module designed for companies to manage their financial transactions and reporting with accuracy and ease. As part of SAP ERP, it integrates seamlessly with other modules, offering a comprehensive view of your financial landscape to ensure compliance and informed decision-making.",
};

export default async function fi() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["fi"],
    queryFn: getFinancialModule,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FinancialModule />
      </HydrationBoundary>
    </>
  );
}
