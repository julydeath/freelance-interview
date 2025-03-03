"use client";

import { getModule } from "@/api";
import Loader from "@/app/loading";
import NotFound from "@/app/not-found";
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

export default function DynamicModule({ slug }: { slug: string }) {
  const { data: module, isLoading } = useQuery({
    queryKey: [slug, "module"],
    queryFn: () => getModule(slug),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!module) {
    return <NotFound slug={slug} />;
  }

  return (
    <>
      <Hero transportModule={module} />
      <Overview overView={module.overview} moduleName={module.module_name} />
      <Features
        features={module.features}
        shortName={module.module_short_name}
      />
      <SubModules
        subModules={module.submodules}
        shortName={module.module_short_name}
      />
      <FeaturedConsultant
        consultants={module.consultants}
        shortName={module.module_short_name}
      />
      <InteractiveTutorials
        tutorials={module.tutorials}
        shortName={module.module_short_name}
      />
      <CaseStudies caseStudies={module.case_studies} />
      <Resources
        resources={module.resources}
        shortName={module.module_short_name}
      />
      <FAQs faqs={module.faqs} shortName={module.module_short_name} />
    </>
  );
}
