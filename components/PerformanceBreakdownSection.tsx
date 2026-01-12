'use client'

import Image from 'next/image'

export default function PerformanceBreakdownSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-500 to-blue-700 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 TOP – CENTERED HEADER */}
        <div className="text-center max-w-3xl mx-auto text-white mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Know exactly where performance breaks down — and why
          </h2>

          <p className="mt-6 text-white/80">
            Get a clear, store-wide view of your advertising and website performance —
            and understand whether issues come from ads or conversion.
          </p>
        </div>

        {/* 🔹 BOTTOM – 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – Dashboard visuals */}
          <div className="relative flex justify-center">
            <div className="relative w-[500px] h-[360px]">
              <Image
                src="/img/dashboard-main.png"
                alt="Dashboard overview"
                fill
                className="object-contain"
                priority
              />
            </div>

           
          </div>

          {/* RIGHT – Feature text */}
          <div className="text-white space-y-8">
            <Feature
              title="All key performance metrics in one place"
              text="See ad performance, website conversion metrics, and sales data combined into one clear overview."
            />
            <Feature
              title="Ads vs website diagnosis"
              text="Instantly understand whether poor results are caused by ineffective ads or website conversion issues."
            />
            <Feature
              title="Clear insights, not just numbers"
              text="WiseOwl turns complex performance data into clear conclusions you can act on immediately."
            />

            <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-blue-700 font-medium hover:bg-blue-50 transition">
              Show demo →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="mt-2 text-sm text-white/80 max-w-lg">{text}</p>
    </div>
  )
}
