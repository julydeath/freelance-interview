/* eslint-disable @typescript-eslint/no-explicit-any */
const sectionStyles = "py-16 px-4 sm:px-6 lg:px-8";
const titleStyles = "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl";

export const Features = ({ data } : any) => (
  <div className={`${sectionStyles} bg-gray-50 text-black`}>
    <div className="max-w-7xl mx-auto">
      <h2 className={`${titleStyles} text-center mb-12`}>Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.features?.map((feature : any, index: number) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-semibold">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);