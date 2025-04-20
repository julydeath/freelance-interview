// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Card, CardContent } from "@/components/ui/card";

export default function Overview({ data }) {
  const overview = data?.MainModuleOverview;

  if (!overview) return null;

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              {overview.title}
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-6 text-center">
          <p className="text-gray-700 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            {overview.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {overview.items?.map((item, index) => (
            <Card
              key={index}
              className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200"
            >
              <CardContent className="p-6 text-center space-y-2">
                <h4 className="text-xl font-semibold text-blue-900">
                  {item.label}
                </h4>
                <p className="text-gray-600">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
