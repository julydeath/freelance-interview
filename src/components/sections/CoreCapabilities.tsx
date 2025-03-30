"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Download,
  ShoppingCart,
  Truck,
  Users,
  Zap,
} from "lucide-react";

export default function CoreCapabilities() {
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    {
      title: "Phase 1: Project Preparation",
      description:
        "This phase defines the project scope, goals, and key milestones.",
      activities: [
        "Project Kick-off: Establishing project objectives and aligning with stakeholders.",
        "Define Scope: Outlining the functional and technical scope of SAP SD.",
        "Resource Allocation: Assigning internal and external resources.",
        "Risk Analysis and Mitigation: Identifying potential risks.",
        "Project Governance Structure: Defining escalation paths.",
        "Training Plan: Outlining the employee training schedule.",
      ],
    },
    {
      title: "Phase 2: Business Blueprint",
      description:
        "This phase focuses on creating a detailed business blueprint, mapping the existing processes to SAP SD functionalities.",
      activities: [
        "Requirement Gathering: Collecting functional and technical requirements.",
        "Sales Process Mapping: Defining the end-to-end sales process.",
        "Pricing Strategy Configuration: Setting up pricing conditions and rules.",
        "Billing Workflows: Designing billing structures.",
        "Customer Credit Limit Setup: Implementing credit management rules.",
      ],
    },
    {
      title: "Phase 3: Realization",
      description:
        "This phase involves the technical configuration and customization of SAP SD.",
      activities: [
        "Order Management Workflows: Setting up standard and custom sales order workflows.",
        "Shipping and Logistics Setup: Configuring shipping types and delivery schedules.",
        "Pricing Customization: Creating pricing conditions and rules.",
        "Integration with SAP FI and MM: Ensuring seamless financial and material management integration.",
      ],
    },
    {
      title: "Phase 4: Final Preparation",
      description:
        "Ensures system readiness and user proficiency before going live.",
      activities: [
        "User Training and Documentation: Conducting hands-on training sessions.",
        "Final Integration Testing: Verifying end-to-end processes.",
        "UAT (User Acceptance Testing): Testing by key business users.",
        "Data Migration and Validation: Transferring live data to production.",
      ],
    },
    {
      title: "Phase 5: Go-Live and Support",
      description:
        "The final phase, ensuring smooth go-live and post-launch support.",
      activities: [
        "Post-Go-Live Monitoring: Performance optimization and troubleshooting.",
        "Continuous Support: Regular updates and issue resolution.",
      ],
    },
  ];

  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-blue-600" />,
      title: "Order-to-Cash Automation",
      description:
        "Automates the entire sales order lifecycle: from order creation to final payment processing. Streamlines invoice generation, reducing billing errors and manual interventions.",
      benefits: [
        "Reduced order processing time by up to 60%",
        "Minimized manual data entry errors",
        "Improved cash flow management",
      ],
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: "Pricing and Discount Management",
      description:
        "Enables dynamic pricing configurations with flexible discounts, rebates, and surcharge rules. Supports condition techniques for real-time pricing adjustments.",
      benefits: [
        "Accurate price calculations with automated discount application",
        "Customizable pricing rules based on customer profiles, products, and regions",
        "Improved revenue control through optimized pricing structures",
      ],
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Billing and Revenue Recognition",
      description:
        "Automates invoice generation with customizable templates. Ensures real-time revenue tracking linked with SAP FI.",
      benefits: [
        "Automated invoice creation reduces human errors",
        "Seamless revenue recognition improves financial accuracy",
        "Real-time integration with SAP FI for faster reporting",
      ],
    },
    {
      icon: <Truck className="h-6 w-6 text-blue-600" />,
      title: "Shipping and Logistics Optimization",
      description:
        "Streamlines shipping operations by integrating with SAP TM. Provides real-time delivery tracking and route optimization.",
      benefits: [
        "Enhanced shipping accuracy with automated scheduling",
        "Optimized route planning for faster deliveries",
        "Improved customer satisfaction with real-time shipment tracking",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "CRM Integration",
      description:
        "Enables seamless integration with SAP CRM, synchronizing customer data across sales and support. Improves lead-to-cash visibility and customer interactions.",
      benefits: [
        "Unified customer profiles across sales and support teams",
        "Better customer experience through personalized sales offers",
        "Increased sales efficiency with centralized customer data",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "CRM Integration",
      description:
        "Enables seamless integration with SAP CRM, synchronizing customer data across sales and support. Improves lead-to-cash visibility and customer interactions.",
      benefits: [
        "Unified customer profiles across sales and support teams",
        "Better customer experience through personalized sales offers",
        "Increased sales efficiency with centralized customer data",
      ],
    },
  ];

  const nextPhase = () => {
    setCurrentPhase((prev) => (prev < phases.length - 1 ? prev + 1 : prev));
  };

  const prevPhase = () => {
    setCurrentPhase((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="w-full py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
              Core Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Powerful Features for Your Business
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg/relaxed">
              Discover how SAP SD can transform your sales and distribution
              processes
            </p>
          </div>
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
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-blue-100 overflow-hidden transition-all duration-200 hover:shadow-md hover:border-blue-200"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="rounded-full bg-blue-100 p-3 w-fit">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>

                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-blue-800 mb-2">
                          Key Benefits:
                        </h4>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        variant="ghost"
                        className="mt-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto"
                      >
                        <span className="text-sm">Learn more</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download Feature Checklist
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-900">
                    Business Impact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-2 mr-3">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900">
                          Faster Order-to-Cash
                        </h4>
                        <p className="text-sm text-gray-600">
                          Reduce order processing time by up to 60% with
                          automated workflows
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-2 mr-3">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900">
                          Improved Accuracy
                        </h4>
                        <p className="text-sm text-gray-600">
                          Minimize errors with automated data validation and
                          real-time updates
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-2 mr-3">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900">
                          Customer Satisfaction
                        </h4>
                        <p className="text-sm text-gray-600">
                          Enhance customer experience with accurate orders and
                          on-time deliveries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[250px] md:h-auto rounded-lg overflow-hidden bg-blue-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      ROI Metrics
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-3xl font-bold text-blue-600">
                          30%
                        </div>
                        <div className="text-sm text-gray-600">
                          Reduction in Order Processing Time
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-3xl font-bold text-blue-600">
                          25%
                        </div>
                        <div className="text-sm text-gray-600">
                          Increase in Order Accuracy
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-3xl font-bold text-blue-600">
                          20%
                        </div>
                        <div className="text-sm text-gray-600">
                          Reduction in Operational Costs
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-3xl font-bold text-blue-600">
                          15%
                        </div>
                        <div className="text-sm text-gray-600">
                          Increase in Customer Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="best-practices" className="mt-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                SAP SD Implementation Phases
              </h3>

              <div className="mb-8">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        Phase {currentPhase + 1} of {phases.length}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                    <div
                      style={{
                        width: `${((currentPhase + 1) / phases.length) * 100}%`,
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">
                    {phases[currentPhase].title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {phases[currentPhase].description}
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-medium text-blue-800 mb-2">
                      Key Activities:
                    </h5>
                    <ul className="space-y-2">
                      {phases[currentPhase].activities.map(
                        (activity, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={prevPhase}
                    disabled={currentPhase === 0}
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    Previous Phase
                  </Button>
                  <Button
                    onClick={nextPhase}
                    disabled={currentPhase === phases.length - 1}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Next Phase
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
