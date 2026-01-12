export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-xl px-5 py-6 shadow-sm min-h-[104px]">
      
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-600 transition"
        aria-label="Card options"
      >
        ⋮
      </button>

      <p className="text-xs text-gray-500 mb-1 uppercase">
        {title}
      </p>

      <p className="text-lg font-medium text-gray-800">
        {value}
      </p>
    </div>
  );
}
