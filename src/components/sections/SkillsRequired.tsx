/* eslint-disable @typescript-eslint/no-explicit-any */

const sectionStyles = "py-16 px-4 sm:px-6 lg:px-8";
const titleStyles = "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl";


export const SkillsRequired = ({ data } : any) => (
    <div className={`${sectionStyles} bg-gray-50 text-black`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`${titleStyles} text-center mb-12`}>Required Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {data?.skills?.map((skill : any, index : number) => (
            <span key={index} className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full text-lg font-medium hover:bg-blue-600 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );