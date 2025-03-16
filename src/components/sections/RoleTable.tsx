/* eslint-disable @typescript-eslint/no-explicit-any */
const titleStyles = "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl";

export const RoleTable = ({ data } : any) => (
  <div className="py-16 px-4 sm:px-6 lg:px-8 text-black">
    <div className="max-w-7xl mx-auto">
      <h2 className={`${titleStyles} text-center mb-12`}>Roles & Salaries</h2>
      <div className="shadow-lg rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Role</th>
              <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Average Salary</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.roles?.map(({ role, salary } : {role : any, salary : any}, index: number) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-lg font-medium">{role}</td>
                <td className="px-6 py-4 text-lg text-gray-700">{salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);