/* eslint-disable @typescript-eslint/no-explicit-any */

const sectionStyles = "py-16 px-4 sm:px-6 lg:px-8";
const titleStyles = "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl";

export const Team = ({ data } : any) => (
  <div className={`${sectionStyles} bg-gray-50 text-black`}>
    <div className="max-w-7xl mx-auto">
      <h2 className={`${titleStyles} text-center mb-12`}>Project Team</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.team?.map((member : any, index : number) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="inline-block h-24 w-24 rounded-full bg-gray-200 mb-4"></div>
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <p className="text-lg text-gray-600 mt-1">{member.role}</p>
            <p className="text-gray-500 mt-2">{member.experience}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);