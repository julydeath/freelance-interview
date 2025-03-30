import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Database, Layers, RefreshCw } from "lucide-react";

export default function Overview() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
              Overview & Architecture
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              What is SAP SD?
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-8 text-center">
          <p className="text-gray-700 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            The SAP SD (Sales and Distribution) module optimizes the sales and
            distribution processes by streamlining order processing, pricing,
            billing, and delivery operations. It plays a pivotal role in
            managing end-to-end sales cycles by automating routine tasks,
            reducing manual intervention, and boosting operational efficiency.
          </p>
          <p className="mt-4 text-gray-700 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Seamlessly integrated with the SAP ERP suite, SAP SD enhances
            business performance by ensuring accurate order tracking, real-time
            billing, and efficient shipping management. This results in faster
            sales processing, improved customer satisfaction, and maximized
            profitability.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">
            Core Functionality and Purpose
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-blue-100 p-3">
                    <RefreshCw className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900">
                    Efficient Order Processing
                  </h4>
                  <p className="text-gray-600">
                    Automated workflows for quicker sales order management and
                    delivery execution.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900">
                    Accurate Pricing and Billing
                  </h4>
                  <p className="text-gray-600">
                    Real-time pricing calculations with customizable discount
                    structures.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Layers className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900">
                    Seamless ERP Integration
                  </h4>
                  <p className="text-gray-600">
                    Smooth data flow between SAP modules for enhanced business
                    performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl rounded-xl border border-blue-100 bg-white p-2 shadow-lg">
            <div className="aspect-[16/9] overflow-hidden rounded-lg bg-blue-50">
              <div className="flex h-full w-full items-center justify-center">
                <div className="p-8 text-center">
                  <Database className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">
                    SAP SD Architecture & Integration
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Integration diagram with ECC/S/4HANA/Public Cloud flows
                  </p>
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    View Full Architecture
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
