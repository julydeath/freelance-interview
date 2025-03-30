// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, Globe, User } from "lucide-react";

export default function FeaturedConsultants() {
  const [activeFilters, setActiveFilters] = useState({
    platform: null,
    experience: null,
    industry: null,
    availability: null,
    region: null,
  });

  const consultants = [
    {
      name: "John Smith",
      role: "SAP SD Functional Consultant",
      platforms: ["ECC 6.0", "S/4HANA On-Prem"],
      industries: ["Retail", "Logistics"],
      experience: "10+ years",
      location: "North America",
      availability: "Immediately",
      skills: ["Pricing", "Billing", "SD-FI Integration"],
    },
    {
      name: "Sarah Johnson",
      role: "SAP SD Technical Consultant",
      platforms: ["S/4HANA On-Prem", "S/4HANA Cloud"],
      industries: ["Manufacturing", "Automotive"],
      experience: "5-10 years",
      location: "Europe",
      availability: "1-week notice",
      skills: ["ABAP", "Custom Development", "Integration"],
    },
    {
      name: "Michael Chen",
      role: "SAP SD Solution Architect",
      platforms: ["S/4HANA Cloud", "RISE with SAP"],
      industries: ["Pharma", "FMCG"],
      experience: "10+ years",
      location: "APAC",
      availability: "Immediately",
      skills: ["Solution Design", "Process Optimization", "Global Rollouts"],
    },
    {
      name: "Priya Sharma",
      role: "SAP SD Project Manager",
      platforms: ["ECC 6.0", "S/4HANA On-Prem", "Hybrid ERP"],
      industries: ["Retail", "Manufacturing"],
      experience: "5-10 years",
      location: "MEA",
      availability: "2-week notice",
      skills: ["Project Management", "Team Leadership", "Implementation"],
    },
  ];

  const filters = {
    platform: ["ECC 6.0", "S/4HANA On-Prem", "S/4HANA Cloud"],
    experience: ["1-5 years", "5-10 years", "10+ years"],
    industry: ["Retail", "Manufacturing", "Automotive"],
    availability: ["Immediately", "1-week notice", "2-week notice"],
    region: ["North America", "Europe", "APAC", "MEA"],
  };

  const toggleFilter = (category, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  };

  const filteredConsultants = consultants.filter((consultant) => {
    if (
      activeFilters.platform &&
      !consultant.platforms.includes(activeFilters.platform)
    )
      return false;
    if (
      activeFilters.experience &&
      consultant.experience !== activeFilters.experience
    )
      return false;
    if (
      activeFilters.industry &&
      !consultant.industries.includes(activeFilters.industry)
    )
      return false;
    if (
      activeFilters.availability &&
      consultant.availability !== activeFilters.availability
    )
      return false;
    if (activeFilters.region && consultant.location !== activeFilters.region)
      return false;
    return true;
  });

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Meet Our SAP SD Experts
          </h2>
          <p className="text-gray-600 mt-2">
            Find the perfect consultant for your SAP SD project needs
          </p>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-900">
                Filter Consultants
              </h3>
            </div>
            {Object.values(activeFilters).some((f) => f !== null) && (
              <Button
                variant="outline"
                className="text-blue-600 border-blue-200 hover:bg-blue-50"
                onClick={() =>
                  setActiveFilters({
                    platform: null,
                    experience: null,
                    industry: null,
                    availability: null,
                    region: null,
                  })
                }
              >
                Clear Filters
              </Button>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {Object.keys(filters).map((category) => (
              <div key={category}>
                <h4 className="text-sm font-medium text-blue-800 mb-2 capitalize">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {filters[category].map((value) => (
                    <Badge
                      key={value}
                      className={`cursor-pointer px-3 py-1 rounded-full transition-all ${
                        activeFilters[category] === value
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                      }`}
                      onClick={() => toggleFilter(category, value)}
                    >
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {filteredConsultants.map((consultant, index) => (
            <Card
              key={index}
              className="border border-blue-200 shadow-md relative"
            >
              <CardContent className="p-6 pb-20">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3">
                    <User className="h-6 w-6 text-blue-600" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900">
                        {consultant.name}
                      </h4>
                      <p className="text-sm text-gray-600">{consultant.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <Globe className="h-4 w-4 text-blue-600" />
                    <span>{consultant.location}</span>
                    <span>•</span>
                    <span>{consultant.experience}</span>
                  </div>
                </div>
              </CardContent>
              <div className="absolute bottom-4 left-0 w-full px-6">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
