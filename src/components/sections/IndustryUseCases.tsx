/* eslint-disable @typescript-eslint/no-explicit-any */
const sectionStyles = "py-16 px-4 sm:px-6 lg:px-8";
const titleStyles = "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl";

export const IndustryUseCases = ({ data } : any) => (
    <div className={`${sectionStyles} bg-gray-50 text-black`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`${titleStyles} text-center mb-12`}>Industries Using SAP</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {data?.industries?.map((industry : any, index : number) => (
            <span key={index} className="px-6 py-2 bg-white rounded-full border border-gray-200 hover:bg-blue-50 transition-colors">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </div>
  );