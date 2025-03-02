"use client";

import { getControllingModule } from "@/api";
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

export default function ControllingModule() {
  const { data: controllingModule } = useQuery({
    queryKey: ["co"],
    queryFn: getControllingModule,
  });

  return (
    <>
      <Hero transportModule={controllingModule} />
      <Overview
        overView={controllingModule.overview}
        moduleName={controllingModule.module_name}
      />
      <Features
        features={controllingModule.features}
        shortName={controllingModule.module_short_name}
      />
      <SubModules
        subModules={controllingModule.submodules}
        shortName={controllingModule.module_short_name}
      />
      <FeaturedConsultant
        consultants={controllingModule.consultants}
        shortName={controllingModule.module_short_name}
      />
      <InteractiveTutorials
        tutorials={controllingModule.tutorials}
        shortName={controllingModule.module_short_name}
      />
      <CaseStudies caseStudies={controllingModule.case_studies} />
      <Resources
        resources={controllingModule.resources}
        shortName={controllingModule.module_short_name}
      />
      <FAQs
        faqs={controllingModule.faqs}
        shortName={controllingModule.module_short_name}
      />
    </>
  );
}
