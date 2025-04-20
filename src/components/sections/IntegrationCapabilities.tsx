/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import { CheckCircle } from "lucide-react";

export default function IntegrationCapabilities({ data }) {
  const integrations = data?.IntegrationCapabilities;

  if (!integrations || !Array.isArray(integrations.integrations)) return null;

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
              Integration Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              {integrations.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg/relaxed">
              {integrations.description}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Core SAP Integrations
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {integrations.integrations.map((integration, index) => {
              const IconComponent =
                LucideIcons[integration.icon] || LucideIcons.HelpCircle;
              return (
                <Card
                  key={index}
                  className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="rounded-full bg-blue-100 p-3">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-blue-900">
                        {integration.system}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {integration.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
