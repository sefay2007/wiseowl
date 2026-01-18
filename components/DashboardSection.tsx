import Link from "next/dist/client/link";

export default function HeroDashboardSection() {
  return (
    <section className="bg-gradient-to-b from-white via-white to-[#116cf3] py-32">
      <div className="mx-auto max-w-3xl mb-24 text-center">
        <h1 className="text-[60px] font-bold leading-tight text-gray-900 mb-6">
          <span className="text-[#116cf3]">Understand</span> what really <br />
          drives your <span className="text-[#116cf3]">sales</span>
        </h1>

        <p className="text-gray-600 text-base leading-relaxed mb-8">
          WiseOwl helps ecommerce businesses identify whether performance
          issues come from ads or website conversion — so you can make
          smarter decisions.
        </p>

        <button className="inline-flex items-center justify-center rounded-lg bg-[#116cf3] px-7 py-3 text-sm font-semibold text-white hover:bg-[#0e5bd0] transition">
          <Link href="/register">
            BOOK DEMO →
          </Link>
        </button>
      </div>

      <div className="flex justify-center">
        <div
          className="
            grid max-w-[920px] w-full
            grid-cols-[1fr_1fr_1.4fr]
            grid-rows-[150px_230px]
            gap-6
            rounded-3xl
            bg-white/80
            backdrop-blur
            border border-gray-200
            shadow-xl
            p-6
          "
        >
          <div className="rounded-2xl bg-white p-6 text-left shadow-sm hover:shadow-md transition">
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
              Revenue
            </p>
            <p className="text-3xl font-bold text-gray-900">€52.247</p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-left shadow-sm hover:shadow-md transition">
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
              Conversion
            </p>
            <p className="text-3xl font-bold text-[#116cf3]">3.4%</p>
          </div>

          <div className="col-span-2 rounded-2xl bg-white p-6 text-left shadow-sm hover:shadow-md transition">
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
              Visitors
            </p>
            <p className="text-4xl font-bold text-gray-900">18.483</p>
          </div>
            <div
              className="
                col-start-3
                row-start-1
                row-span-2
                rounded-2xl
                bg-white
                p-6
                text-left
                shadow-sm
                hover:shadow-md
                transition
                flex
                flex-col
                justify-between
              "
            >
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Sales
            </p>
            <p className="text-5xl font-bold text-gray-900">1342</p>
            <p className="text-sm text-green-600 font-medium">
              ▲ +12% vs Last Month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
