"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, MessageSquare } from "lucide-react";

export default function FAQs() {
  // Simplify FAQ answers to be shorter and prevent overflow
  const faqCategories = [
    {
      id: "general",
      name: "General Questions",
      faqs: [
        {
          question: "What is SAP SD and how does it benefit my business?",
          answer:
            "SAP SD (Sales and Distribution) optimizes sales processes by streamlining order processing, pricing, billing, and delivery operations. It automates routine tasks, reduces manual work, and boosts efficiency.",
        },
        {
          question: "How long does a typical SAP SD implementation take?",
          answer:
            "A typical implementation takes 3-9 months depending on complexity, scope, and customization requirements.",
        },
      ],
    },
    {
      id: "order-management",
      name: "Order Management",
      faqs: [
        {
          question: "How does SAP SD handle complex pricing scenarios?",
          answer:
            "SAP SD uses condition techniques for multiple pricing factors including customer-specific pricing, volume discounts, and promotional pricing.",
        },
        {
          question: "Can SAP SD integrate with our existing billing system?",
          answer:
            "Yes, SAP SD integrates with existing billing systems through standard interfaces, APIs, or custom integration solutions.",
        },
      ],
    },
    {
      id: "shipping",
      name: "Shipping & Credit",
      faqs: [
        {
          question: "How does credit management work in SAP SD?",
          answer:
            "SAP SD allows setting credit limits, performing automatic credit checks during order processing, and blocking orders that exceed limits.",
        },
        {
          question: "Can SAP SD optimize shipping routes?",
          answer:
            "Yes, when integrated with SAP TM, it can optimize shipping routes considering factors like distance, priorities, and capacity.",
        },
      ],
    },
    {
      id: "implementation",
      name: "Implementation",
      faqs: [
        {
          question: "What resources are needed for implementation?",
          answer:
            "You'll need business analysts, functional consultants, technical consultants, project managers, and executive sponsorship.",
        },
        {
          question: "What support options are available after go-live?",
          answer:
            "Options include SAP Enterprise Support, partner-managed support, or internal support teams for issue resolution and enhancements.",
        },
      ],
    },
    {
      id: "modernization",
      name: "Modernization",
      faqs: [
        {
          question: "How can we optimize our existing SAP SD?",
          answer:
            "Through process streamlining, automation, performance tuning, and integration with advanced technologies like AI.",
        },
        {
          question: "Benefits of migrating to S/4HANA?",
          answer:
            "Faster processing, real-time analytics, simplified data models, enhanced user experience, and innovative features.",
        },
      ],
    },
    {
      id: "best-practices",
      name: "Best Practices",
      faqs: [
        {
          question: "Key best practices for implementation?",
          answer:
            "Business process mapping, clean master data, standardized pricing, comprehensive testing, and proper change management.",
        },
        {
          question: "What certifications should consultants have?",
          answer:
            "SAP Certified Application Associate - Sales and Distribution, and specialized certifications based on project needs.",
        },
      ],
    },
    {
      id: "s4hana",
      name: "S/4HANA",
      faqs: [
        {
          question: "Brownfield or greenfield migration?",
          answer:
            "Depends on system complexity, customization level, data quality, and business transformation goals.",
        },
        {
          question: "How does S/4HANA change the user experience?",
          answer:
            "It provides intuitive interfaces with responsive design, simplified screens, and personalized dashboards.",
        },
      ],
    },
  ];

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
          <Tabs defaultValue={faqCategories[0].id} className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="inline-flex min-w-max bg-blue-100 mb-6">
                {faqCategories.map((category) => (
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

            {faqCategories.map((category) => (
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

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Download Full FAQ PDF
            </Button>
            <Button
              variant="outline"
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Ask an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
