"use client";

import { getTransportModule } from "@/api";
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

export default function TransportModule() {
  const { data: transportModule } = useQuery({
    queryKey: ["tm"],
    queryFn: getTransportModule,
  });

  return (
    <>
      <Hero transportModule={transportModule} />
      <Overview
        overView={transportModule.overview}
        moduleName={transportModule.module_name}
      />
      <Features
        features={transportModule.features}
        shortName={transportModule.module_short_name}
      />
      <SubModules
        subModules={transportModule.submodules}
        shortName={transportModule.module_short_name}
      />
      <FeaturedConsultant
        consultants={transportModule.consultants}
        shortName={transportModule.module_short_name}
      />
      <InteractiveTutorials
        tutorials={transportModule.tutorials}
        shortName={transportModule.module_short_name}
      />
      <CaseStudies caseStudies={transportModule.case_studies} />
      <Resources
        resources={transportModule.resources}
        shortName={transportModule.module_short_name}
      />
      <FAQs
        faqs={transportModule.faqs}
        shortName={transportModule.module_short_name}
      />
    </>
  );
}
