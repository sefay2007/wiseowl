export default function HeroDashboardSection() {
  return (
    <section
      className="
        bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_50%,#116cf3_50%,#116cf3_100%)]
        py-32
        text-center
      "
    >
      {/* HERO CONTENT */}
      <div className="mx-auto max-w-3xl mb-24">
        <h1 className="text-[42px] font-bold leading-tight text-gray-900 mb-6">
          <span className="text-[#116cf3]">Understand</span> what really <br />
          drives your <span className="text-[#116cf3]">sales</span>
        </h1>

        <p className="text-gray-600 text-base leading-relaxed mb-8">
          WiseOwl helps ecommerce businesses identify whether performance
          issues come from ads or website conversion — so you can make
          smarter decisions.
        </p>

        <button
          className="
            inline-flex items-center justify-center
            rounded-lg bg-[#116cf3]
            px-6 py-3
            text-sm font-semibold text-white
            hover:bg-[#0e5bd0]
            transition
          "
        >
          BOOK DEMO →
        </button>
      </div>

      {/* DASHBOARD */}
      <div className="flex justify-center">
        <div
          className="
            grid
            max-w-[900px] w-full
            grid-cols-[1fr_1fr_1.4fr]
            grid-rows-[140px_220px]
            gap-5
            rounded-3xl
            bg-[#d9d9d9]
            p-6
          "
        >
          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-5 text-left flex flex-col justify-center">
            <h4 className="text-sm font-medium text-gray-500 mb-1">Omzet</h4>
            <p className="text-2xl font-semibold text-gray-900">€2.042</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white p-5 text-left flex flex-col justify-center">
            <h4 className="text-sm font-medium text-gray-500 mb-1">Conversie</h4>
            <p className="text-2xl font-semibold text-gray-900">3.4%</p>
          </div>

          {/* Card 3 (large left) */}
          <div
            className="
              col-span-2
              row-start-2
              rounded-2xl bg-white p-5 text-left
              flex flex-col justify-center
            "
          >
            <h4 className="text-sm font-medium text-gray-500 mb-1">Bezoekers</h4>
            <p className="text-2xl font-semibold text-gray-900">12.483</p>
          </div>

          {/* Card 4 (large right) */}
          <div
            className="
              row-span-2
              rounded-2xl bg-white p-5 text-left
              flex flex-col justify-center
            "
          >
            <h4 className="text-sm font-medium text-gray-500 mb-1">Sales</h4>
            <p className="text-2xl font-semibold text-gray-900">342</p>
          </div>
        </div>
      </div>
    </section>
  )
}
