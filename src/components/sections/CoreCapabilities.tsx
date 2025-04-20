/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
"use client";

import { useState } from "react";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";

export default function CoreCapabilities({ data }: { data: any }) {
  const capabilities = data?.coreCapabilitiesData;

  if (!capabilities || !Array.isArray(capabilities.items)) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPhase, setCurrentPhase] = useState(0);

  const defaultPhases = [
    {
      title: "Phase 1: Project Preparation",
      description: "Define goals and assign project roles.",
      activities: [
        "Kickoff meeting",
        "Define scope",
        "Risk analysis",
        "Training plan setup",
      ],
    },
    {
      title: "Phase 2: Business Blueprint",
      description: "Map current processes to SAP capabilities.",
      activities: [
        "Requirement gathering",
        "Process mapping",
        "Blueprint document creation",
      ],
    },
    {
      title: "Phase 3: Realization",
      description: "Configure and build the system.",
      activities: ["System configuration", "Development", "Unit testing"],
    },
    {
      title: "Phase 4: Final Prep",
      description: "Test and migrate data.",
      activities: ["UAT", "End-user training", "Data migration"],
    },
    {
      title: "Phase 5: Go-Live",
      description: "System is live and supported.",
      activities: ["Go-live", "Hypercare support", "Handover to operations"],
    },
  ];

  const nextPhase = () =>
    setCurrentPhase((p) => Math.min(p + 1, defaultPhases.length - 1));
  const prevPhase = () => setCurrentPhase((p) => Math.max(p - 1, 0));

  return (
    <section className="w-full py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
            Core Capabilities
          </div>
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl md:text-5xl">
            {capabilities.title}
          </h2>
        </div>

        <Tabs defaultValue="features" className="mt-12">
          <TabsList className="grid w-full grid-cols-3 bg-blue-100">
            <TabsTrigger
              value="features"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="benefits"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Benefits
            </TabsTrigger>
            <TabsTrigger
              value="best-practices"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Best Practices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.items.map((item, index) => {
                const Icon = LucideIcons[item.icon] || LucideIcons.HelpCircle;
                return (
                  <Card key={index} className="border-blue-100 hover:shadow-md">
                    <CardContent className="p-6 space-y-4 text-center">
                      <div className="rounded-full bg-blue-100 p-3 w-fit mx-auto">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex justify-center mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download Checklist
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Why It Matters
              </h3>
              <p className="text-gray-600 mb-6">
                Experience measurable outcomes with streamlined SAP processes.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">+30%</div>
                  <p className="text-sm text-gray-600">Faster Processes</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">-25%</div>
                  <p className="text-sm text-gray-600">Error Reduction</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="best-practices" className="mt-6">
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                SAP Implementation Phases
              </h3>

              <div className="mb-4 text-right text-sm text-blue-600">
                Phase {currentPhase + 1} of {defaultPhases.length}
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold text-blue-900">
                  {defaultPhases[currentPhase].title}
                </h4>
                <p className="text-gray-600 mb-3">
                  {defaultPhases[currentPhase].description}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  {defaultPhases[currentPhase].activities.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={prevPhase}
                  disabled={currentPhase === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={nextPhase}
                  disabled={currentPhase === defaultPhases.length - 1}
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
