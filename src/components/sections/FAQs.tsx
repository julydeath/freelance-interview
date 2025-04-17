"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as LucideIcons from "lucide-react";

export default function FAQs({ data }) {
  // Simplify FAQ answers to be shorter and prevent overflow

  // Update the tabs to be more responsive on mobile
  return (
    <section className="w-full py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
              FAQs & Support
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Expert Support for Your SAP SD Needs
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg/relaxed">
              Find answers to common questions and get the support you need
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Tabs
            defaultValue={data.FAQsData.categories[0].id}
            className="w-full"
          >
            <div className="overflow-x-auto pb-2">
              <TabsList className="inline-flex min-w-max bg-blue-100 mb-6">
                {data.FAQsData.categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-xs md:text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white px-3 py-1.5"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {data.FAQsData.categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {category.name}
                  </h3>

                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-blue-100"
                      >
                        <AccordionTrigger className="text-blue-900 hover:text-blue-700 py-4 text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-sm">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {data.FAQsData.buttons.map((button, index) => {
            const IconComponent =
              LucideIcons[button?.icon] || LucideIcons.HelpCircle;
            return (
              <div
                key={index}
                className="mt-8 items-center flex-row gap-4 flex justify-center"
              >
                <Button variant={button.variant}>
                  <IconComponent className="mr-2 h-4 w-4" />
                  {button.text}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
