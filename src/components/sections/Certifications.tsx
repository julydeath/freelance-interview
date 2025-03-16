/* eslint-disable @typescript-eslint/no-explicit-any */

export const Certifications = ({ data } : any) => {
  return (
    <div className="py-16 px-4 sm:px-6 text-black lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-center mb-12`}>Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.certifications?.map((cert : any, index : number) => (
          <div key={index} className="flex items-start p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
            <div className="flex-shrink-0">
              <span className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">✓</span>
            </div>
            <p className="text-xl font-medium">{cert}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
};