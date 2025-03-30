"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Database,
  FileText,
  Network,
  Truck,
  Users,
  Zap,
} from "lucide-react";

export default function IntegrationCapabilities() {
  // Simplify the integration descriptions to be shorter and prevent overflow
  const coreSapIntegrations = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "SAP FI (Financial Accounting)",
      description:
        "Seamless integration for accurate billing, invoicing, and revenue recognition.",
      benefits: [
        "Automated financial postings",
        "Improved financial reporting",
      ],
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "SAP MM (Materials Management)",
      description: "Real-time inventory tracking and streamlined procurement.",
      benefits: ["Accurate availability checks", "Automated stock updates"],
    },
    {
      icon: <Truck className="h-6 w-6 text-blue-600" />,
      title: "SAP TM (Transportation Management)",
      description: "Efficient shipping and logistics integration.",
      benefits: [
        "Optimized delivery scheduling",
        "Real-time shipment tracking",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "SAP CRM (Customer Relationship Management)",
      description: "Enhanced customer engagement with synchronized sales data.",
      benefits: ["360° customer view", "Improved conversion rates"],
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "SAP EWM (Extended Warehouse Management)",
      description: "Precise order fulfillment with warehouse operations.",
      benefits: ["Accurate picking and packing", "Enhanced inventory control"],
    },
  ];

  // Simplify the intelligent extensions descriptions
  const intelligentExtensions = [
    {
      title: "SAP BTP (Business Technology Platform)",
      description:
        "Cloud-based services, APIs, and low-code tools for extensibility.",
      benefits: [
        "Faster application development",
        "Seamless external connectivity",
      ],
    },
    {
      title: "Embedded Analytics",
      description: "Real-time insights for data-driven decision-making.",
      benefits: ["Actionable sales insights", "Improved forecasting"],
    },
    {
      title: "E-commerce & CRM Integration",
      description: "Unified customer and sales management across platforms.",
      benefits: ["Automated order synchronization", "Improved order accuracy"],
    },
    {
      title: "RPA & AI",
      description: "Automation of repetitive tasks with AI-powered insights.",
      benefits: ["Faster order processing", "AI-powered forecasting"],
    },
    {
      title: "SAP Signavio",
      description: "Business process modeling and optimization.",
      benefits: ["Visual process mapping", "Better process standardization"],
    },
    {
      title: "Composable ERP",
      description: "Flexible ERP components for customized ecosystems.",
      benefits: ["Modular structure", "Improved agility"],
    },
    {
      title: "2-Tier ERP",
      description:
        "Combined central and local systems for multi-entity operations.",
      benefits: ["Streamlined subsidiary operations", "Consistent data flow"],
    },
  ];

  // Update the card rendering to be more compact
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
              Integration Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Seamless Connectivity
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg/relaxed">
              Connect SAP SD with other modules and systems
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Core SAP Integrations
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {coreSapIntegrations.map((integration, index) => (
              <Card
                key={index}
                className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="rounded-full bg-blue-100 p-3">
                      {integration.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      {integration.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {integration.description}
                    </p>

                    <div className="w-full">
                      <h5 className="text-sm font-medium text-blue-800 mb-2 text-left">
                        Key Benefits:
                      </h5>
                      <ul className="space-y-2 text-left">
                        {integration.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
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
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Intelligent Extensions
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {intelligentExtensions.map((extension, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-blue-100"
                >
                  <AccordionTrigger className="text-blue-900 hover:text-blue-700 py-4">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-blue-600 mr-2" />
                      <span>{extension.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="space-y-4">
                      <p className="text-gray-700 text-sm">
                        {extension.description}
                      </p>

                      <div>
                        <h5 className="text-sm font-medium text-blue-800 mb-2">
                          Key Benefits:
                        </h5>
                        <ul className="space-y-2">
                          {extension.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
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

          <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Integration Architecture
                </h3>
                <p className="text-gray-700 mb-4">
                  Seamless data flow between systems, optimizing your end-to-end
                  business processes.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-800">API-First</Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    Real-Time Sync
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    Event-Driven
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    Cloud-Ready
                  </Badge>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-video bg-white rounded-lg shadow-md border border-blue-100 flex items-center justify-center">
                  <Network className="h-16 w-16 text-blue-600" />
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-sm font-medium text-blue-900">
                      Integration Architecture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
