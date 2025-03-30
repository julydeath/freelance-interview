export const mainModuleHeroData = {
  badgeText: "SAP Module",
  title: "SAP SD",
  titleHighlight: "(Sales and Distribution)",
  description: "Streamline your enterprise sales and distribution with SAP SD.",
  primaryButtonText: "Get Started",
  secondaryButtonText: "Learn More",
  image: {
    src: "/placeholder.svg?height=600&width=800",
    alt: "SAP SD Dashboard",
    width: 800,
    height: 600,
  },
};

export const overviewData = {
  badgeText: "Overview & Architecture",
  title: "What is SAP SD?",
  description: [
    "The SAP SD (Sales and Distribution) module optimizes the sales and distribution processes by streamlining order processing, pricing, billing, and delivery operations. It plays a pivotal role in managing end-to-end sales cycles by automating routine tasks, reducing manual intervention, and boosting operational efficiency.",
    "Seamlessly integrated with the SAP ERP suite, SAP SD enhances business performance by ensuring accurate order tracking, real-time billing, and efficient shipping management. This results in faster sales processing, improved customer satisfaction, and maximized profitability.",
  ],
  featuresTitle: "Core Functionality and Purpose",
  features: [
    {
      icon: "RefreshCw",
      title: "Efficient Order Processing",
      description:
        "Automated workflows for quicker sales order management and delivery execution.",
    },
    {
      icon: "CheckCircle",
      title: "Accurate Pricing and Billing",
      description:
        "Real-time pricing calculations with customizable discount structures.",
    },
    {
      icon: "Layers",
      title: "Seamless ERP Integration",
      description:
        "Smooth data flow between SAP modules for enhanced business performance.",
    },
  ],
  architecture: {
    title: "SAP SD Architecture & Integration",
    description: "Integration diagram with ECC/S/4HANA/Public Cloud flows",
    buttonText: "View Full Architecture",
  },
};

export const coreCapabilitiesData = {
  badgeText: "Core Capabilities",
  title: "Powerful Features for Your Business",
  description:
    "Discover how SAP SD can transform your sales and distribution processes",

  features: [
    {
      iconName: "ShoppingCart",
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
      iconName: "CreditCard",
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
      iconName: "Zap",
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
      iconName: "Truck",
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
      iconName: "Users",
      title: "CRM Integration",
      description:
        "Enables seamless integration with SAP CRM, synchronizing customer data across sales and support. Improves lead-to-cash visibility and customer interactions.",
      benefits: [
        "Unified customer profiles across sales and support teams",
        "Better customer experience through personalized sales offers",
        "Increased sales efficiency with centralized customer data",
      ],
    },
  ],
  benefits: {
    businessImpact: [
      {
        iconName: "Zap",
        title: "Faster Order-to-Cash",
        description:
          "Reduce order processing time by up to 60% with automated workflows",
      },
      {
        iconName: "CheckCircle",
        title: "Improved Accuracy",
        description:
          "Minimize errors with automated data validation and real-time updates",
      },
      {
        iconName: "Users",
        title: "Customer Satisfaction",
        description:
          "Enhance customer experience with accurate orders and on-time deliveries",
      },
    ],
    roiMetrics: [
      {
        value: "30%",
        description: "Reduction in Order Processing Time",
      },
      {
        value: "25%",
        description: "Increase in Order Accuracy",
      },
      {
        value: "20%",
        description: "Reduction in Operational Costs",
      },
      {
        value: "15%",
        description: "Increase in Customer Satisfaction",
      },
    ],
  },
  implementationPhases: [
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
  ],
  downloadButtonText: "Download Feature Checklist",
};

export const businessContextData = {
  useCases: [
    {
      title: "O2C Automation",
      description:
        "Streamlined order-to-cash processes with automated workflows.",
    },
    {
      title: "Multi-Channel Distribution",
      description:
        "Efficient management of orders from multiple sales channels.",
    },
    {
      title: "Pricing Control",
      description: "Automated pricing strategies with real-time adjustments.",
    },
    {
      title: "Credit & Risk Management",
      description: "Optimized credit checks and reduced payment risks.",
    },
    {
      title: "Shipping & Logistics",
      description:
        "Improved delivery accuracy with automated shipping processes.",
    },
  ],

  caseStudies: [
    {
      region: "Europe",
      iconName: "Globe",
      industry: "Retail",
      solution: [
        "Automated multi-channel O2C flow for a leading retail chain.",
        "Reduced processing time by 40% through streamlined workflows.",
      ],
      impact:
        "Faster order processing, improved accuracy, and better customer satisfaction.",
    },
    {
      region: "North America",
      iconName: "Building",
      industry: "Manufacturing",
      solution: [
        "SAP SD implementation for a manufacturing company.",
        "Optimized pricing and billing processes.",
      ],
      impact:
        "Enhanced revenue management and improved operational efficiency.",
    },
    {
      region: "Middle East",
      iconName: "Globe",
      industry: "FMCG",
      solution: [
        "Streamlined logistics and export processes for a large FMCG distributor.",
        "Boosted efficiency by 35% with optimized workflows.",
      ],
      impact: "Faster delivery cycles and reduced supply chain bottlenecks.",
    },
  ],

  // Modernization options data
  modernizationOptions: [
    {
      title: "S/4HANA On-Premise",
      iconName: "Server",
      badge: "Full control with on-site data",
      description: "Ideal for large enterprises needing customization",
    },
    {
      title: "S/4HANA Public Cloud",
      iconName: "Cloud",
      badge: "Agile and cost-effective",
      description: "Flexible deployment with lower upfront costs",
    },
    {
      title: "RISE with SAP",
      iconName: "Database",
      badge: "End-to-end transformation",
      description: "Combines ERP, cloud, and business services",
    },
  ],

  title: "Real-World Applications",
  description: "Discover how SAP SD drives business efficiency",
  badgeText: "Business Context & Modernization",
};

export const deliveryModelsData = {
  // Page information
  title: "Flexible Implementation Approaches",
  description:
    "Tailored delivery models to meet your specific business requirements",
  badgeText: "Delivery Models & Talent Categories",

  // Engagement models data
  engagementModels: [
    {
      iconName: "Leaf",
      title: "🌱 Greenfield Implementation",
      description: "Deploy SAP SD from scratch in a new environment.",
      activities: [
        "Blueprinting and customization",
        "End-to-end process implementation",
      ],
    },
    {
      iconName: "Wrench",
      title: "🔧 Brownfield Implementation",
      description: "Upgrade existing SAP SD system to a newer version.",
      activities: [
        "Data migration and system conversion",
        "Process optimization",
      ],
    },
    {
      iconName: "Globe",
      title: "🌍 Rollouts",
      description: "Expand SAP SD to new regions or business units.",
      activities: [
        "Localization and tax configuration",
        "Regional compliance setup",
      ],
    },
    {
      iconName: "Tool",
      title: "🛠️ Support & Maintenance",
      description: "Ongoing assistance for smooth SAP SD operations.",
      activities: ["Troubleshooting and bug fixes", "Performance optimization"],
    },
    {
      iconName: "Recycle",
      title: "🔄 Migrations",
      description: "Transfer data and processes between systems.",
      activities: ["Data extraction and loading", "Validation and testing"],
    },
    {
      iconName: "Cog",
      title: "⚙️ Enhancements",
      description: "Extend SAP SD functionalities for specific needs.",
      activities: ["Custom development", "Workflow optimization"],
    },
    {
      iconName: "ShieldCheck",
      title: "✅ Compliance",
      description: "Ensure SAP SD meets regulatory standards.",
      activities: ["Compliance audits", "Performance tuning"],
    },
  ],

  // Role specializations data
  roleSpecializations: [
    "Functional Consultant",
    "Technical Consultant",
    "Business Analyst",
    "Solution Architect",
    "Support Specialist",
    "Quality Assurance",
    "Project Manager",
    "Integration Specialist",
  ],

  // Industries data
  industries: [
    { name: "Retail", iconName: "Building" },
    { name: "Manufacturing", iconName: "Cog" },
    { name: "Automotive", iconName: "Gauge" },
    { name: "Pharmaceutical", iconName: "FileText" },
    { name: "FMCG", iconName: "ShieldCheck" },
    { name: "Logistics", iconName: "Globe" },
    { name: "Electronics", iconName: "HardDrive" },
    { name: "Chemicals", iconName: "Code" },
  ],

  // Platform landscapes data
  platformLandscapes: [
    {
      name: "ECC 6.0",
      description:
        "Legacy SAP ERP widely used for core business processes. Proven stability for on-premise operations with extensive SAP SD capabilities.",
      benefits: [
        "Order-to-Cash processes with robust customization.",
        "Reliable for complex pricing and billing scenarios.",
      ],
    },
    {
      name: "S/4HANA (On-Prem)",
      description:
        "Next-gen SAP ERP suite designed for on-premise deployment. Enhanced real-time data processing for streamlined sales and distribution workflows.",
      benefits: [
        "Faster order processing and billing cycles.",
        "Real-time inventory tracking and availability checks.",
      ],
    },
    {
      name: "S/4HANA Public Cloud",
      description:
        "Cloud-based SAP ERP offering scalability and flexibility. Optimized for agile SD operations with minimal infrastructure overhead.",
      benefits: [
        "Faster deployment of sales and distribution processes.",
        "Automated compliance and reporting.",
      ],
    },
    {
      name: "RISE with SAP",
      description:
        "SAP's business-transformation-as-a-service. Bundles cloud ERP, business network, and analytics for agile SD operations.",
      benefits: [
        "End-to-end sales transformation with cloud agility.",
        "Integrated AI-driven insights for demand forecasting.",
      ],
    },
    {
      name: "Two-Tier & Hybrid ERP",
      description:
        "Flexible ERP model combining core (Tier 1) and subsidiary (Tier 2) systems. Ideal for multi-entity SAP SD operations.",
      benefits: [
        "Centralized pricing and contracts across entities.",
        "Seamless order fulfillment and shipping coordination.",
      ],
    },
  ],

  // Project categories data
  projectCategories: [
    {
      title: "Implementation Projects",
      description: "Setting up and configuring SAP SD from scratch.",
      activities: ["System design and configuration", "Testing and go-live"],
    },
    {
      title: "Rollout Projects",
      description: "Expanding SAP SD to new regions or business units.",
      activities: [
        "Localization for country requirements",
        "Data replication and deployment",
      ],
    },
    {
      title: "Migration Projects",
      description: "Moving from legacy systems to S/4HANA.",
      activities: ["Data extraction and migration", "Validation and testing"],
    },
    {
      title: "Support Projects",
      description: "Ongoing support for SAP SD systems.",
      activities: ["Incident management", "Performance optimization"],
    },
    {
      title: "Upgrade Projects",
      description: "Upgrading to newer SAP versions.",
      activities: ["Version upgrade and testing", "Custom code adjustments"],
    },
    {
      title: "Enhancement Projects",
      description: "Adding new functionalities to SAP SD.",
      activities: ["Custom development", "Integration with other systems"],
    },
    {
      title: "Compliance Projects",
      description: "Ensuring regulatory compliance in SAP SD.",
      activities: ["Compliance checks", "Process optimization"],
    },
  ],
};

export const integrationCapabilitiesData = {
  badgeText: "Integration Capabilities",
  title: "Seamless Connectivity",
  description: "Connect SAP SD with other modules and systems",
  coreIntegrationsTitle: "Core SAP Integrations",
  coreIntegrations: [
    {
      icon: "FileText",
      title: "SAP FI (Financial Accounting)",
      description:
        "Seamless integration for accurate billing, invoicing, and revenue recognition.",
      benefits: [
        "Automated financial postings",
        "Improved financial reporting",
      ],
    },
    {
      icon: "Database",
      title: "SAP MM (Materials Management)",
      description: "Real-time inventory tracking and streamlined procurement.",
      benefits: ["Accurate availability checks", "Automated stock updates"],
    },
    {
      icon: "Truck",
      title: "SAP TM (Transportation Management)",
      description: "Efficient shipping and logistics integration.",
      benefits: [
        "Optimized delivery scheduling",
        "Real-time shipment tracking",
      ],
    },
    {
      icon: "Users",
      title: "SAP CRM (Customer Relationship Management)",
      description: "Enhanced customer engagement with synchronized sales data.",
      benefits: ["360° customer view", "Improved conversion rates"],
    },
    {
      icon: "Database",
      title: "SAP EWM (Extended Warehouse Management)",
      description: "Precise order fulfillment with warehouse operations.",
      benefits: ["Accurate picking and packing", "Enhanced inventory control"],
    },
  ],
  intelligentExtensionsTitle: "Intelligent Extensions",
  intelligentExtensions: [
    {
      icon: "Zap",
      title: "SAP BTP (Business Technology Platform)",
      description:
        "Cloud-based services, APIs, and low-code tools for extensibility.",
      benefits: [
        "Faster application development",
        "Seamless external connectivity",
      ],
    },
    {
      icon: "Zap",
      title: "Embedded Analytics",
      description: "Real-time insights for data-driven decision-making.",
      benefits: ["Actionable sales insights", "Improved forecasting"],
    },
    {
      icon: "Zap",
      title: "E-commerce & CRM Integration",
      description: "Unified customer and sales management across platforms.",
      benefits: ["Automated order synchronization", "Improved order accuracy"],
    },
    {
      icon: "Zap",
      title: "RPA & AI",
      description: "Automation of repetitive tasks with AI-powered insights.",
      benefits: ["Faster order processing", "AI-powered forecasting"],
    },
    {
      icon: "Zap",
      title: "SAP Signavio",
      description: "Business process modeling and optimization.",
      benefits: ["Visual process mapping", "Better process standardization"],
    },
    {
      icon: "Zap",
      title: "Composable ERP",
      description: "Flexible ERP components for customized ecosystems.",
      benefits: ["Modular structure", "Improved agility"],
    },
    {
      icon: "Zap",
      title: "2-Tier ERP",
      description:
        "Combined central and local systems for multi-entity operations.",
      benefits: ["Streamlined subsidiary operations", "Consistent data flow"],
    },
  ],
  architecture: {
    title: "Integration Architecture",
    description:
      "Seamless data flow between systems, optimizing your end-to-end business processes.",
    keyFeatures: ["API-First", "Real-Time Sync", "Event-Driven", "Cloud-Ready"],
  },
};

export const TalentCloudData = {
  badgeText: "Talent Cloud for SAP SD",
  title: "Specialized Consultants On-Demand",
  description: "Our talent cloud offers a diverse pool of SAP SD experts.",
  sections: [
    {
      title: "Expertise by Role",
      items: [
        {
          icon: "CheckCircle",
          title: "Functional, Technical, BAs, Architects, QA, PMs",
          description: "Comprehensive coverage across all SAP SD roles",
        },
        {
          icon: "CheckCircle",
          title: "Specialized support and migration experts",
          description: "Ensuring smooth implementations and upgrades",
        },
      ],
    },
    {
      title: "Regional Coverage",
      items: [
        {
          icon: "CheckCircle",
          title: "Global talent availability",
          description: "North America, Europe, APAC, and MEA",
        },
        {
          icon: "CheckCircle",
          title: "Localized expertise",
          description: "Understanding of local tax and legal requirements",
        },
      ],
    },
    {
      title: "Domain Specialization",
      badges: [
        "Retail",
        "Manufacturing",
        "Automotive",
        "Pharma",
        "FMCG",
        "Logistics",
      ],
      description: "Industry-specific best practices and configurations",
    },
    {
      title: "Platform Proficiency",
      badges: [
        "ECC 6.0",
        "S/4HANA On-Prem",
        "S/4HANA Cloud",
        "RISE with SAP",
        "Hybrid ERP",
      ],
      description: "Comprehensive knowledge of all SAP platforms",
    },
    {
      title: "Why Choose Our SAP SD Talent Cloud?",
      items: [
        {
          icon: "Layers",
          title: "Scalability",
          description:
            "Instantly scale your team based on project demands, from small teams to large-scale rollouts.",
        },
        {
          icon: "Users",
          title: "Flexibility",
          description:
            "Adaptable engagement models for short-term, long-term, or ad-hoc support needs.",
        },
        {
          icon: "Clock",
          title: "Speed of Deployment",
          description:
            "Rapid onboarding with access to vetted SAP SD specialists within days.",
        },
      ],
    },
  ],
};

export const FeaturedConsultants = {
  badgeText: "Featured Consultants",
  title: "Meet Our SAP SD Experts",
  description: "Find the perfect consultant for your SAP SD project needs",
  filters: {
    platform: ["ECC 6.0", "S/4HANA On-Prem", "S/4HANA Cloud"],
    experience: ["1-5 years", "5-10 years", "10+ years"],
    industry: ["Retail", "Manufacturing", "Automotive"],
    availability: ["Immediately", "1-week notice", "2-week notice"],
    region: ["North America", "Europe", "APAC", "MEA"],
  },
  consultants: [
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
  ],
};

export const FAQsData = {
  badgeText: "FAQs & Support",
  title: "Expert Support for Your SAP SD Needs",
  description: "Find answers to common questions and get the support you need",
  categories: [
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
  ],
  buttons: [
    {
      text: "Download Full FAQ PDF",
      icon: "Download",
      variant: "primary",
    },
    {
      text: "Ask an Expert",
      icon: "MessageSquare",
      variant: "outline",
    },
  ],
};
