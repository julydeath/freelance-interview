/* eslint-disable @typescript-eslint/no-explicit-any */

const sectionStyles = "py-16 px-4 sm:px-6 lg:px-8";
const titleStyles = "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl";



export const Timeline = ({ data } : any) => (
    <div className={`${sectionStyles}`}>
      <div className="max-w-7xl mx-auto text-black">
        <h2 className={`${titleStyles} text-center mb-12`}>Project Timeline</h2>
        <div className="relative pl-8 sm:pl-32 py-6 space-y-10">
          <div className="absolute left-0 sm:left-1/2 w-1 bg-gray-200 h-full"></div>
          {data.timeline?.map((event : any, index : number) => (
            <div key={index} className="relative flex items-center space-x-4">
              <div className="absolute left-0 sm:left-1/2 -ml-4 -mt-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                {index + 1}
              </div>
              <div className="sm:ml-16 bg-white p-6 rounded-lg shadow-lg w-full">
                <p className="text-xl font-medium">{event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );