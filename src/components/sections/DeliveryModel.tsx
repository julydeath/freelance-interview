"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  CheckCircle,
  Code,
  Cog,
  FileText,
  Gauge,
  Globe,
  HardDrive,
  Leaf,
  Recycle,
  ShieldCheck,
  PenToolIcon as Tool,
  Wrench,
} from "lucide-react";

export default function DeliveryModels() {
  // Simplify the engagement models data by reducing text length
  const engagementModels = [
    {
      icon: <Leaf className="h-6 w-6 text-blue-600" />,
      title: "🌱 Greenfield Implementation",
      description: "Deploy SAP SD from scratch in a new environment.",
      activities: [
        "Blueprinting and customization",
        "End-to-end process implementation",
      ],
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-600" />,
      title: "🔧 Brownfield Implementation",
      description: "Upgrade existing SAP SD system to a newer version.",
      activities: [
        "Data migration and system conversion",
        "Process optimization",
      ],
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "🌍 Rollouts",
      description: "Expand SAP SD to new regions or business units.",
      activities: [
        "Localization and tax configuration",
        "Regional compliance setup",
      ],
    },
    {
      icon: <Tool className="h-6 w-6 text-blue-600" />,
      title: "🛠️ Support & Maintenance",
      description: "Ongoing assistance for smooth SAP SD operations.",
      activities: ["Troubleshooting and bug fixes", "Performance optimization"],
    },
    {
      icon: <Recycle className="h-6 w-6 text-blue-600" />,
      title: "🔄 Migrations",
      description: "Transfer data and processes between systems.",
      activities: ["Data extraction and loading", "Validation and testing"],
    },
    {
      icon: <Cog className="h-6 w-6 text-blue-600" />,
      title: "⚙️ Enhancements",
      description: "Extend SAP SD functionalities for specific needs.",
      activities: ["Custom development", "Workflow optimization"],
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: "✅ Compliance",
      description: "Ensure SAP SD meets regulatory standards.",
      activities: ["Compliance audits", "Performance tuning"],
    },
  ];

  const roleSpecializations = [
    "Functional Consultant",
    "Technical Consultant",
    "Business Analyst",
    "Solution Architect",
    "Support Specialist",
    "Quality Assurance",
    "Project Manager",
    "Integration Specialist",
  ];

  const industries = [
    { name: "Retail", icon: <Building className="h-4 w-4" /> },
    { name: "Manufacturing", icon: <Cog className="h-4 w-4" /> },
    { name: "Automotive", icon: <Gauge className="h-4 w-4" /> },
    { name: "Pharmaceutical", icon: <FileText className="h-4 w-4" /> },
    { name: "FMCG", icon: <ShieldCheck className="h-4 w-4" /> },
    { name: "Logistics", icon: <Globe className="h-4 w-4" /> },
    { name: "Electronics", icon: <HardDrive className="h-4 w-4" /> },
    { name: "Chemicals", icon: <Code className="h-4 w-4" /> },
  ];

  const platformLandscapes = [
    {
      name: "ECC 6.0",
      description:
        "Legacy SAP ERP widely used for core business processes. Proven stability for on-premise operations with extensive SAP SD capabilities.",
      benefits: [
        "Order-to-Cash processes with robust customization.",
        "Reliable for complex pricing and billing scenarios.",
      ],
    },
    {
      name: "S/4HANA (On-Prem)",
      description:
        "Next-gen SAP ERP suite designed for on-premise deployment. Enhanced real-time data processing for streamlined sales and distribution workflows.",
      benefits: [
        "Faster order processing and billing cycles.",
        "Real-time inventory tracking and availability checks.",
      ],
    },
    {
      name: "S/4HANA Public Cloud",
      description:
        "Cloud-based SAP ERP offering scalability and flexibility. Optimized for agile SD operations with minimal infrastructure overhead.",
      benefits: [
        "Faster deployment of sales and distribution processes.",
        "Automated compliance and reporting.",
      ],
    },
    {
      name: "RISE with SAP",
      description:
        "SAP's business-transformation-as-a-service. Bundles cloud ERP, business network, and analytics for agile SD operations.",
      benefits: [
        "End-to-end sales transformation with cloud agility.",
        "Integrated AI-driven insights for demand forecasting.",
      ],
    },
    {
      name: "Two-Tier & Hybrid ERP",
      description:
        "Flexible ERP model combining core (Tier 1) and subsidiary (Tier 2) systems. Ideal for multi-entity SAP SD operations.",
      benefits: [
        "Centralized pricing and contracts across entities.",
        "Seamless order fulfillment and shipping coordination.",
      ],
    },
  ];

  // Simplify the project categories data
  const projectCategories = [
    {
      title: "Implementation Projects",
      description: "Setting up and configuring SAP SD from scratch.",
      activities: ["System design and configuration", "Testing and go-live"],
    },
    {
      title: "Rollout Projects",
      description: "Expanding SAP SD to new regions or business units.",
      activities: [
        "Localization for country requirements",
        "Data replication and deployment",
      ],
    },
    {
      title: "Migration Projects",
      description: "Moving from legacy systems to S/4HANA.",
      activities: ["Data extraction and migration", "Validation and testing"],
    },
    {
      title: "Support Projects",
      description: "Ongoing support for SAP SD systems.",
      activities: ["Incident management", "Performance optimization"],
    },
    {
      title: "Upgrade Projects",
      description: "Upgrading to newer SAP versions.",
      activities: ["Version upgrade and testing", "Custom code adjustments"],
    },
    {
      title: "Enhancement Projects",
      description: "Adding new functionalities to SAP SD.",
      activities: ["Custom development", "Integration with other systems"],
    },
    {
      title: "Compliance Projects",
      description: "Ensuring regulatory compliance in SAP SD.",
      activities: ["Compliance checks", "Process optimization"],
    },
  ];

  // Update the card rendering to be more compact and prevent overflow
  return (
    <section className="w-full py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
              Delivery Models & Talent Categories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Flexible Implementation Approaches
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg/relaxed">
              Tailored delivery models to meet your specific business
              requirements
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Engagement Models
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {engagementModels.map((model, index) => (
              <Card
                key={index}
                className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-blue-100 p-2">
                        {model.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-blue-900 truncate">
                        {model.title}
                      </h4>
                    </div>

                    <p className="text-gray-700 text-md">{model.description}</p>

                    <div>
                      <h5 className="text-sm font-medium text-blue-800 mb-1">
                        Key Activities:
                      </h5>
                      <ul className="space-y-1">
                        {model.activities.map((activity, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 truncate">
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Role Specializations
              </h3>
              <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                <div className="flex flex-wrap gap-2">
                  {roleSpecializations.map((role, index) => (
                    <Badge
                      key={index}
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 text-sm"
                    >
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mt-6 font-bold text-blue-900 mb-6">
                Industries We Serve
              </h3>
              <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                <div className="flex gap-2">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 whitespace-nowrap flex-shrink-0"
                    >
                      {industry.icon}
                      <span className="text-blue-800 font-medium">
                        {industry.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Platform Landscapes
            </h3>
            <Tabs defaultValue={platformLandscapes[0].name} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-blue-100">
                {platformLandscapes.map((platform) => (
                  <TabsTrigger
                    key={platform.name}
                    value={platform.name}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs md:text-sm"
                  >
                    {platform.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {platformLandscapes.map((platform) => (
                <TabsContent
                  key={platform.name}
                  value={platform.name}
                  className="mt-6"
                >
                  <Card className="border-blue-100">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-blue-900 mb-2">
                        {platform.name}
                      </h4>
                      <p className="text-gray-700 mb-4 text-sm">
                        {platform.description}
                      </p>

                      <div>
                        <h5 className="text-sm font-medium text-blue-800 mb-2">
                          Key Benefits:
                        </h5>
                        <ul className="space-y-2">
                          {platform.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Project Categories
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {projectCategories.map((project, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-blue-100"
                >
                  <AccordionTrigger className="text-blue-900 hover:text-blue-700 py-4">
                    {project.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="space-y-4">
                      <p className="text-gray-700 text-sm">
                        {project.description}
                      </p>

                      <div>
                        <h5 className="text-sm font-medium text-blue-800 mb-2">
                          Key Activities:
                        </h5>
                        <ul className="space-y-2">
                          {project.activities.map((activity, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
