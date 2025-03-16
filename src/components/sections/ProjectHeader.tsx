/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ProjectHeader({ data }: { data: any }) {
    return (
      <section className="bg-gray-100 rounded-lg p-6 mb-8 text-black">
        <h2 className="text-2xl font-bold mb-2">{data.company} Project</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">{data.duration}</p>
          </div>
          {data.budget && (
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-500">Budget</p>
              <p className="font-medium">{data.budget}</p>
            </div>
          )}
        </div>
      </section>
    );
  }