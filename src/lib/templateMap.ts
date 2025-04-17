// lib/templates/templateMap.ts

export const templateMap: Record<
  string,
  { templateName: string; componentNames: string[] }
> = {
  "main-module": {
    templateName: "main_module_template",
    componentNames: [
      "MainModuleHero",
      "MainModuleOverview",
      "CoreCapabilities",
      "BusinessContext",
      "FAQs",
    ],
  },

  "main-module+sub-module": {
    templateName: "sub_module_template",
    componentNames: [
      "MainModuleHero",
      "MainModuleOverview",
      "CoreCapabilities",
      "IntegrationCapabilities",
      "FAQs",
    ],
  },

  "main-module+role": {
    templateName: "role_template",
    componentNames: [
      "MainModuleHero",
      "DeliveryModels",
      "TalentCloud",
      "FeaturedConsultants",
      "FAQs",
    ],
  },

  "main-module+jobs": {
    templateName: "jobs_template",
    componentNames: [
      "MainModuleHero",
      "TalentCloud",
      "FeaturedConsultants",
      "FAQs",
    ],
  },

  "main-module+role+jobs": {
    templateName: "role_jobs_template",
    componentNames: [
      "MainModuleHero",
      "TalentCloud",
      "FeaturedConsultants",
      "FAQs",
    ],
  },

  "main-module+industry": {
    templateName: "industry_template",
    componentNames: [
      "MainModuleHero",
      "BusinessContext",
      "DeliveryModels",
      "FAQs",
    ],
  },

  "main-module+industry+role": {
    templateName: "industry_role_template",
    componentNames: ["MainModuleHero", "DeliveryModels", "TalentCloud", "FAQs"],
  },

  "main-module+role+industry": {
    templateName: "role_industry_template",
    componentNames: [
      "MainModuleHero",
      "BusinessContext",
      "TalentCloud",
      "FAQs",
    ],
  },

  "main-module+ecc": {
    templateName: "ecc_template",
    componentNames: [
      "MainModuleHero",
      "MainModuleOverview",
      "CoreCapabilities",
      "IntegrationCapabilities",
      "FAQs",
    ],
  },

  "main-module+ecc+role": {
    templateName: "ecc_role_template",
    componentNames: [
      "MainModuleHero",
      "TalentCloud",
      "FeaturedConsultants",
      "FAQs",
    ],
  },

  "main-module+ecc+industry": {
    templateName: "ecc_industry_template",
    componentNames: [
      "MainModuleHero",
      "BusinessContext",
      "DeliveryModels",
      "FAQs",
    ],
  },

  "main-module+ecc+industry+role": {
    templateName: "ecc_industry_role_template",
    componentNames: [
      "MainModuleHero",
      "TalentCloud",
      "DeliveryModels",
      "FeaturedConsultants",
      "FAQs",
    ],
  },

  "main-module+s4hana": {
    templateName: "s4hana_template",
    componentNames: [
      "MainModuleHero",
      "MainModuleOverview",
      "CoreCapabilities",
      "IntegrationCapabilities",
      "FAQs",
    ],
  },

  "main-module+s4hana+role": {
    templateName: "s4hana_role_template",
    componentNames: [
      "MainModuleHero",
      "TalentCloud",
      "FeaturedConsultants",
      "FAQs",
    ],
  },

  "main-module+s4hana+functional-consultant": {
    templateName: "s4hana_fc_template",
    componentNames: ["MainModuleHero", "TalentCloud", "FAQs"],
  },

  "main-module+s4hana+technical-consultant": {
    templateName: "s4hana_tc_template",
    componentNames: ["MainModuleHero", "TalentCloud", "FAQs"],
  },

  "main-module+s4hana+solution-architect": {
    templateName: "s4hana_architect_template",
    componentNames: ["MainModuleHero", "TalentCloud", "FAQs"],
  },

  "main-module+s4hana+techno-functional-consultant": {
    templateName: "s4hana_tf_template",
    componentNames: ["MainModuleHero", "TalentCloud", "FAQs"],
  },

  "main-module+s4hana+analyst": {
    templateName: "s4hana_analyst_template",
    componentNames: ["MainModuleHero", "TalentCloud", "FAQs"],
  },

  "main-module+s4hana+project-manager": {
    templateName: "s4hana_pm_template",
    componentNames: ["MainModuleHero", "TalentCloud", "FAQs"],
  },

  "main-module+s4hana+industry": {
    templateName: "s4hana_industry_template",
    componentNames: [
      "MainModuleHero",
      "BusinessContext",
      "DeliveryModels",
      "FAQs",
    ],
  },

  "main-module+s4hana+industry+role": {
    templateName: "s4hana_industry_role_template",
    componentNames: [
      "MainModuleHero",
      "TalentCloud",
      "FeaturedConsultants",
      "FAQs",
    ],
  },
};
