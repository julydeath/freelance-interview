import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Layers, Users } from "lucide-react";

export default function TalentCloud() {
  return (
    <section className="w-full py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
              Talent Cloud for SAP SD
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Specialized Consultants On-Demand
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg/relaxed">
              Our talent cloud offers a diverse pool of SAP SD experts
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border-blue-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Expertise by Role
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-800 font-medium">
                      Functional, Technical, BAs, Architects, QA, PMs
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      Comprehensive coverage across all SAP SD roles
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-800 font-medium">
                      Specialized support and migration experts
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      Ensuring smooth implementations and upgrades
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Regional Coverage
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-800 font-medium">
                      Global talent availability
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      North America, Europe, APAC, and MEA
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-800 font-medium">
                      Localized expertise
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      Understanding of local tax and legal requirements
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Domain Specialization
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800">Retail</Badge>
                <Badge className="bg-blue-100 text-blue-800">
                  Manufacturing
                </Badge>
                <Badge className="bg-blue-100 text-blue-800">Automotive</Badge>
                <Badge className="bg-blue-100 text-blue-800">Pharma</Badge>
                <Badge className="bg-blue-100 text-blue-800">FMCG</Badge>
                <Badge className="bg-blue-100 text-blue-800">Logistics</Badge>
              </div>
              <p className="text-sm text-gray-600">
                Industry-specific best practices and configurations
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Platform Proficiency
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800">ECC 6.0</Badge>
                <Badge className="bg-blue-100 text-blue-800">
                  S/4HANA On-Prem
                </Badge>
                <Badge className="bg-blue-100 text-blue-800">
                  S/4HANA Cloud
                </Badge>
                <Badge className="bg-blue-100 text-blue-800">
                  RISE with SAP
                </Badge>
                <Badge className="bg-blue-100 text-blue-800">Hybrid ERP</Badge>
              </div>
              <p className="text-sm text-gray-600">
                Comprehensive knowledge of all SAP platforms
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Why Choose Our SAP SD Talent Cloud?
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Layers className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900">
                    Scalability
                  </h4>
                  <p className="text-sm text-gray-600">
                    Instantly scale your team based on project demands, from
                    small teams to large-scale rollouts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900">
                    Flexibility
                  </h4>
                  <p className="text-sm text-gray-600">
                    Adaptable engagement models for short-term, long-term, or
                    ad-hoc support needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 transition-all duration-200 hover:shadow-md hover:border-blue-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900">
                    Speed of Deployment
                  </h4>
                  <p className="text-sm text-gray-600">
                    Rapid onboarding with access to vetted SAP SD specialists
                    within days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
