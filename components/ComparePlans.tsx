export default function ComparePlans() {
  const rows = [
    { name: "Feature 1", s: true, b: true, e: true },
    { name: "Feature 1", s: true, b: true, e: true },
    { name: "Feature 1", s: true, b: true, e: true },
    { name: "Feature 1", s: false, b: true, e: true },
    { name: "Feature 1", s: false, b: true, e: true },
    { name: "Feature 1", s: false, b: false, e: true },
    { name: "Feature 1", s: false, b: false, e: true },
    { name: "Feature 1", s: false, b: false, e: true },
  ];

  return (
    <section className="py-24 bg-gray-50">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold mb-10 text-black">
        Compare plans
      </h2>

      <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl border border-gray-300 bg-white">

        <table className="w-full border-gray-300">
          {/* Header */}
          <thead>
            <tr className="bg-blue-600 text-white text-sm">
              <th className="w-1/3 px-6 py-4 text-left font-medium border-r border-blue-500"></th>
              <th className="px-6 py-4 font-medium border-r border-blue-500">
                Starter
              </th>
              <th className="px-6 py-4 font-medium border-r border-blue-500">
                Business
              </th>
              <th className="px-6 py-4 font-medium">
                Enterprise
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-t border-gray-300 text-sm"
              >
                {/* Feature name */}
                <td className="px-6 py-4 text-black border-r border-gray-300">
                  {row.name}
                </td>

                <PlanCell value={row.s} />
                <PlanCell value={row.b} />
                <PlanCell value={row.e} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </section>
  );
}

function PlanCell({ value }: { value: boolean }) {
  return (
    <td className="px-6 py-4 text-center border-r border-gray-300 last:border-r-0">
      <span
        className={`inline-block w-3 h-3 rounded-full ${
          value ? "bg-teal-400" : "bg-red-400"
        }`}
      />
    </td>
  );
}
