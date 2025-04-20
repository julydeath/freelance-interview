/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function BusinessContext({ data }: { data: any }) {
  const context = data?.BusinessContext;

  if (!context || !Array.isArray(context.contextPoints)) return null;

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
            Business Context
          </div>
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl md:text-5xl">
            {context.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {context.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {context.contextPoints.map((point: any, index: number) => (
            <Card
              key={index}
              className="border-blue-100 hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <h4 className="text-lg font-semibold text-blue-900">
                    {point.heading}
                  </h4>
                </div>
                <p className="text-gray-700 text-sm">{point.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
