"use client";

import { getFinancialModule } from "@/api";
import CaseStudies from "@/components/CaseStudies";
import FAQs from "@/components/FAQs";
import FeaturedConsultant from "@/components/FeaturedConsultant";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import InteractiveTutorials from "@/components/InteractiveTutorials";
import Overview from "@/components/OverView";
import Resources from "@/components/Resources";
import SubModules from "@/components/SubModules";
import { useQuery } from "@tanstack/react-query";

export default function FinancialModule() {
  const { data: financialModule } = useQuery({
    queryKey: ["fi"],
    queryFn: getFinancialModule,
  });

  console.log({ financialModule });

  return (
    <>
      <Hero transportModule={financialModule} />
      <Overview
        overView={financialModule.overview}
        moduleName={financialModule.module_name}
      />
      <Features
        features={financialModule.features}
        shortName={financialModule.module_short_name}
      />
      <SubModules
        subModules={financialModule.submodules}
        shortName={financialModule.module_short_name}
      />
      <FeaturedConsultant
        consultants={financialModule.consultants}
        shortName={financialModule.module_short_name}
      />
      <InteractiveTutorials
        tutorials={financialModule.tutorials}
        shortName={financialModule.module_short_name}
      />
      <CaseStudies caseStudies={financialModule.case_studies} />
      <Resources
        resources={financialModule.resources}
        shortName={financialModule.module_short_name}
      />
      <FAQs
        faqs={financialModule.faqs}
        shortName={financialModule.module_short_name}
      />
    </>
  );
}
