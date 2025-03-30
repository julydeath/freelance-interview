/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

export default function Overview({ data }: { data: any }) {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
              {data?.overviewData?.badgeText}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              {data?.overviewData?.title}
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-8 text-center">
          {data.overviewData.description.map((desc: string, index: number) => (
            <p
              key={index}
              className="text-gray-700 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed"
            >
              {desc}
            </p>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">
            {data.overviewData.featuresTitle}
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {data.overviewData.features.map((feature: any) => {
              const IconComponent =
                LucideIcons[feature.icon] || LucideIcons.HelpCircle;
              return (
                <Card
                  key={feature.title}
                  className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="rounded-full bg-blue-100 p-3">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-blue-900">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl rounded-xl border border-blue-100 bg-white p-2 shadow-lg">
            <div className="aspect-[16/9] overflow-hidden rounded-lg bg-blue-50">
              <div className="flex h-full w-full items-center justify-center">
                <div className="p-8 text-center">
                  <LucideIcons.Database className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">
                    {data.overviewData.architecture.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {data.overviewData.architecture.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    {data.overviewData.architecture.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
