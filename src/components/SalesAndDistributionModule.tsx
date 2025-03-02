"use client";

import { getSalesAndDistributionModule } from "@/api";
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

export default function SalesAndDistributionModule() {
  const { data: salesModule } = useQuery({
    queryKey: ["sd"],
    queryFn: getSalesAndDistributionModule,
  });

  return (
    <>
      <Hero transportModule={salesModule} />
      <Overview
        overView={salesModule.overview}
        moduleName={salesModule.module_name}
      />
      <Features
        features={salesModule.features}
        shortName={salesModule.module_short_name}
      />
      <SubModules
        subModules={salesModule.submodules}
        shortName={salesModule.module_short_name}
      />
      <FeaturedConsultant
        consultants={salesModule.consultants}
        shortName={salesModule.module_short_name}
      />
      <InteractiveTutorials
        tutorials={salesModule.tutorials}
        shortName={salesModule.module_short_name}
      />
      <CaseStudies caseStudies={salesModule.case_studies} />
      <Resources
        resources={salesModule.resources}
        shortName={salesModule.module_short_name}
      />
      <FAQs faqs={salesModule.faqs} shortName={salesModule.module_short_name} />
    </>
  );
}
