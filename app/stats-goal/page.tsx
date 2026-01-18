"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ------------------ DATA ------------------ */

const campaigns = [
  {
    id: "emily",
    label: "Emily – Sweater",
    goals: { spent: "≤ €20", cpc: "< €0,60", atc: "⇒ 3", purchase: "⇒ 1" },
    stats: {
      spent: "€17,94",
      cpc: "€0,42",
      atc: "5",
      purchase: "2",
      conversion: "2,9%",
    },
    insights: {
      format: "Single image",
      age: "54–65",
      sale: "Winter sale",
    },
    creatives: [
      ["Single image", "€9,94", "€0,39"],
      ["Collage", "€4,94", "€0,43"],
      ["Video", "€2,24", "€0,35"],
      ["Carousel", "€1,84", "€0,35"],
      ["AI", "€0,92", "€0,46"],
    ],
  },
  {
    id: "sophie",
    label: "Sophie – Dress",
    goals: { spent: "≤ €20", cpc: "< €0,60", atc: "⇒ 3", purchase: "⇒ 1" },
    stats: {
      spent: "€19,10",
      cpc: "€0,55",
      atc: "6",
      purchase: "3",
      conversion: "3,4%",
    },
    insights: {
      format: "Carousel",
      age: "45–60",
      sale: "Anniversary sale",
    },
    creatives: [
      ["Carousel", "€12,20", "€0,52"],
      ["Single image", "€5,10", "€0,48"],
      ["Collage", "€2,45", "€0,48"],
      ["AI", "€1,94", "€0,48"],
    ],
  },
  {
    id: "yuty",
    label: "Yuty – Pants",
    goals: { spent: "≤ €20", cpc: "< €0,60", atc: "⇒ 3", purchase: "⇒ 1" },
    stats: {
      spent: "€13,80",
      cpc: "€0,38",
      atc: "3",
      purchase: "1",
      conversion: "2,1%",
    },
    insights: {
      format: "Single image",
      age: "35–50",
      sale: "Summer sale",
    },
    creatives: [
      ["Single image", "€13,80", "€0,36"],
      ["AI", "€5,20", "€0,40"],
      ["Video", "€2,53", "€0,40"],
      ["Carousel", "€1,86", "€0,40"],
    ],
  },
];

/* ------------------ PAGE ------------------ */

export default function StatsGoalPage() {
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);

  return (
    <div>
      <Header />

      <DashboardLayout>
        <div className="flex gap-8">

          {/* LEFT SIDEBAR */}
          <aside className="w-64 shrink-0 bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
            <p className="text-s font-medium text-gray-700 px-3 mb-2">
              Campaigns
            </p>

            {campaigns.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCampaign(c)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition cursor-pointer mb-3 ${
                  selectedCampaign.id === c.id
                    ? "bg-blue-50 text-blue-700 font-medium shadow-inner"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {c.label}
              </button>
            ))}
          </aside>

          {/* MAIN */}
          <main className="flex-1 space-y-8">

            {/* HEADER */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Stats goal
              </h1>
              <p className="text-sm text-gray-500">
                Set goals for a good campaign and get tips.
              </p>
            </div>

            {/* GOALS */}
            <div className="grid grid-cols-4 gap-4">
              <GoalCard title="SPENT" value={selectedCampaign.goals.spent} />
              <GoalCard title="CPC" value={selectedCampaign.goals.cpc} />
              <GoalCard title="ATC" value={selectedCampaign.goals.atc} />
              <GoalCard title="PURCHASE" value={selectedCampaign.goals.purchase} />
            </div>

            {/* STATS */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Current performance
              </h2>

              <div className="grid grid-cols-5 gap-4 mb-8">
                <StatCard title="SPENT" value={selectedCampaign.stats.spent} />
                <StatCard title="CPC" value={selectedCampaign.stats.cpc} />
                <StatCard title="ATC" value={selectedCampaign.stats.atc} />
                <StatCard title="PURCHASE" value={selectedCampaign.stats.purchase} />
                <StatCard title="CONVERSION" value={selectedCampaign.stats.conversion} />
              </div>

              {/* INSIGHTS + TABLE */}
              <div className="grid grid-cols-2 gap-6">

                {/* INSIGHTS */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <Insight label="Best creative format" value={selectedCampaign.insights.format} />
                  <Insight label="Target audience age" value={selectedCampaign.insights.age} />
                  <Insight label="Sale concept" value={selectedCampaign.insights.sale} />

                  <div className="pt-2">
                    <p className="text-sm font-medium text-gray-900 mb-2">
                      Recommended actions
                    </p>
                    <ul className="text-sm text-gray-600 list-disc ml-4 space-y-1">
                      <li>Scale best performing creative</li>
                      <li>Increase budget gradually</li>
                      <li>Test new audience</li>
                    </ul>
                  </div>
                </div>

                {/* CREATIVES */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="grid grid-cols-4 text-xs font-medium text-gray-500 pb-3 border-b">
                    <div>CREATIVE</div>
                    <div>SPENT</div>
                    <div>CPC</div>
                    <div>AGE</div>
                  </div>

                  {selectedCampaign.creatives.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-4 items-center text-sm py-3 border-b last:border-none"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        {row[0]}
                      </div>
                      <div>{row[1]}</div>
                      <div>{row[2]}</div>
                      <div className="text-gray-500">
                        {selectedCampaign.insights.age}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          </main>
        </div>
      </DashboardLayout>

      <Footer />
    </div>
  );
}

/* ------------------ COMPONENTS ------------------ */

function GoalCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm relative">
      <p className="text-xs text-gray-500 font-medium">{title}</p>
      <p className="text-lg font-semibold text-gray-900 mt-1">{value}</p>
      <span className="absolute top-3 right-3 text-gray-400">⋮</span>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <p className="text-xs text-gray-500 font-medium">{title}</p>
      <p className="text-lg font-semibold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function Insight({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  );
}
