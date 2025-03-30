"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  CheckCircle,
  Cloud,
  Database,
  Globe,
  Server,
} from "lucide-react";

export default function BusinessContext() {
  const [activeCase, setActiveCase] = useState(0);

  const useCases = [
    {
      title: "O2C Automation",
      description:
        "Streamlined order-to-cash processes with automated workflows.",
    },
    {
      title: "Multi-Channel Distribution",
      description:
        "Efficient management of orders from multiple sales channels.",
    },
    {
      title: "Pricing Control",
      description: "Automated pricing strategies with real-time adjustments.",
    },
    {
      title: "Credit & Risk Management",
      description: "Optimized credit checks and reduced payment risks.",
    },
    {
      title: "Shipping & Logistics",
      description:
        "Improved delivery accuracy with automated shipping processes.",
    },
  ];

  const caseStudies = [
    {
      region: "Europe",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      industry: "Retail",
      solution: [
        "Automated multi-channel O2C flow for a leading retail chain.",
        "Reduced processing time by 40% through streamlined workflows.",
      ],
      impact:
        "Faster order processing, improved accuracy, and better customer satisfaction.",
    },
    {
      region: "North America",
      icon: <Building className="h-6 w-6 text-blue-600" />,
      industry: "Manufacturing",
      solution: [
        "SAP SD implementation for a manufacturing company.",
        "Optimized pricing and billing processes.",
      ],
      impact:
        "Enhanced revenue management and improved operational efficiency.",
    },
    {
      region: "Middle East",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      industry: "FMCG",
      solution: [
        "Streamlined logistics and export processes for a large FMCG distributor.",
        "Boosted efficiency by 35% with optimized workflows.",
      ],
      impact: "Faster delivery cycles and reduced supply chain bottlenecks.",
    },
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev < caseStudies.length - 1 ? prev + 1 : prev));
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Simplify the case studies to be more concise and prevent overflow
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
              Business Context & Modernization
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Real-World Applications
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg/relaxed">
              Discover how SAP SD drives business efficiency
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-blue-800 hover:bg-blue-100 transition-colors cursor-pointer"
              >
                <div className="text-sm font-medium">{useCase.title}</div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Case Studies
            </h3>
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    {caseStudies[activeCase].icon}
                  </div>
                  <div className="ml-4">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {caseStudies[activeCase].region}
                    </Badge>
                    <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {caseStudies[activeCase].industry}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      Solution:
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {caseStudies[activeCase].solution.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      Impact:
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm">
                      {caseStudies[activeCase].impact}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={prevCase}
                    disabled={activeCase === 0}
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={nextCase}
                    disabled={activeCase === caseStudies.length - 1}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Modernizing with SAP SD
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="rounded-full bg-blue-100 p-3">
                      <Server className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900">
                      S/4HANA On-Premise
                    </h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Full control with on-site data
                    </Badge>
                    <ul className="mt-2 space-y-2 text-left w-full">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Ideal for large enterprises needing customization
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="rounded-full bg-blue-100 p-3">
                      <Cloud className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900">
                      S/4HANA Public Cloud
                    </h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Agile and cost-effective
                    </Badge>
                    <ul className="mt-2 space-y-2 text-left w-full">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Flexible deployment with lower upfront costs
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="rounded-full bg-blue-100 p-3">
                      <Database className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900">
                      RISE with SAP
                    </h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      End-to-end transformation
                    </Badge>
                    <ul className="mt-2 space-y-2 text-left w-full">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Combines ERP, cloud, and business services
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
