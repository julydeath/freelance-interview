
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getContentForSlug } from '@/lib/data';

// Dynamically import components
const HeroModule = dynamic(
  () => import("@/components/sections/HeroModule").then((module) => module.HeroModule),
  {
   //ssr:false,
  }
);
const HeroSubModule = dynamic(
  () => import("@/components/sections/HeroSubModule").then((module) => module.HeroSubmodule),
  {
   //ssr:false,
  }
);
const HeroRole = dynamic(
  () => import("@/components/sections/HeroRole").then((module) => module.HeroRole),
  {
   //ssr:false,
  }
);
const Certifications = dynamic(
  () => import("@/components/sections/Certifications").then((module) => module.Certifications),
  {
   //ssr:false,
  }
);

const Features = dynamic(
  () => import("@/components/sections/Features").then((module) => module.Features),
  {
   //ssr:false,
  }
);
const IndustryUseCase = dynamic(
  () => import("@/components/sections/IndustryUseCases").then((module) => module.IndustryUseCases),
  {
   //ssr:false,
  }
);
const ProjectHeader = dynamic(
  () => import("@/components/sections/ProjectHeader"),
  {
   //ssr:false,
  }
);

const RoleTable = dynamic(
  () => import("@/components/sections/RoleTable").then((module) => module.RoleTable),
  {
   //ssr:false,
  }
);

const SkillsRequired = dynamic(
  () => import("@/components/sections/SkillsRequired").then((module) => module.SkillsRequired),
  {
   //ssr:false,
  }
);

const Team = dynamic(
  () => import("@/components/sections/Team").then((module) => module.Team),
  {
   //ssr:false,
  }
);

const Timeline = dynamic(
  () => import("@/components/sections/Timeline").then((module) => module.Timeline),
  {
   //ssr:false,
  }
);


// Component map for easy lookup
const componentMap = {
  HeroModule,
  Features,
  Certifications,
  RoleTable,
  ProjectHeader,
  Team,
  Timeline,
  HeroSubModule,
  HeroRole,
  IndustryUseCase,
  SkillsRequired
};

export default async function SlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  // Convert array of slug segments to URL path

  const { slug } = await params

  const path = '/' + slug.join('/')

  
  // Fetch data based on the URL path
  const pageData = await getContentForSlug(path);

  console.log({pageData})
  
  // If no data found, return 404
  if (!pageData) {
    notFound();
  }
  
  const { template, content } = pageData;
  const { component_names: componentNames } = template;

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl text-black font-bold mb-8">{content.title || content.company || 'Content'}</h1>
      
      {/* Render each component from the template */}
      {componentNames.map((componentName: string) => {
        const Component = componentMap[componentName as keyof typeof componentMap];
        
        if (!Component) {
          console.warn(`Component ${componentName} not found`);
          return null;
        }
        
        return <Component key={componentName} data={content}/>;
      })}
    </main>
  );
}