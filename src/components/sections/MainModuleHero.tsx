import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MainModuleHero({ data }: { data: any }) {
  console.log({ data });
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-2">
              {data?.mainModuleHeroData?.badgeText}
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              {data?.mainModuleHeroData?.title}{" "}
              <span className="text-blue-600">
                {data?.mainModuleHeroData?.titleHighlight}
              </span>
            </h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data?.mainModuleHeroData?.description}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                {data?.mainModuleHeroData?.primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                {data?.mainModuleHeroData?.secondaryButtonText}
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="SAP SD Dashboard"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
