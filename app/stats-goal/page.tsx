"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const campaigns = Array.from({ length: 9 }).map(() => ({
  label: "24 dec – Lacos | Dress",
}));

export default function StatsGoalPage() {
  return (
    <div>
        <Header />
        <DashboardLayout>
        <div className="flex gap-6">

            {/* LEFT CAMPAIGN LIST */}
            <div className="w-64 bg-white border border-gray-300 rounded-xl drop-shadow-sm p-3 space-y-2">
            {campaigns.map((c, i) => (
                <div
                key={i}
                className={`px-3 py-4 rounded-lg text-sm cursor-pointer ${
                    i === 0
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                >
                {c.label}
                </div>
            ))}
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 space-y-6">

            {/* PAGE TITLE */}
            <div>
                <h1 className="text-xl font-semibold text-gray-900">Stats goal</h1>
                <p className="text-sm text-gray-500">
                Set goals for a good campaign and get tips.
                </p>
            </div>

            {/* GOAL CARDS (TOP) */}
            <div className="grid grid-cols-4 gap-4">
                <GoalCard title="SPENT" value="≤ €20" />
                <GoalCard title="CPC" value="< €0,60" />
                <GoalCard title="ATC" value="⇒ 3" />
                <GoalCard title="PURCHASE" value="⇒ 1" />
            </div>

            {/* CURRENT STATS */}
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Stats goal
                </h2>

                <div className="grid grid-cols-5 gap-4 mb-6">
                <StatCard title="SPENT" value="€17,94" />
                <StatCard title="CPC" value="€0,42" />
                <StatCard title="ATC" value="5" />
                <StatCard title="PURCHASE" value="2" />
                <StatCard title="CONVERSION" value="2,9%" />
                </div>

                {/* INSIGHTS + CREATIVES */}
                <div className="grid grid-cols-2 gap-6">

                {/* LEFT INSIGHTS */}
                <div className="bg-white border border-gray-300 rounded-xl drop-shadow-sm p-5 space-y-4">
                    <Insight label="Best creative format" value="Single image" />
                    <Insight label="Target Audience Age" value="54–65" />
                    <Insight label="Sale concept" value="Anniversary sale" />

                    <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                        What you need to do?
                    </p>
                    <ul className="text-sm text-gray-600 list-disc ml-4 space-y-1">
                        <li>Tip 1</li>
                        <li>Tip 1</li>
                        <li>Tip 1</li>
                    </ul>
                    </div>
                </div>

                {/* RIGHT TABLE */}
                <div className="bg-white border border-gray-300 rounded-xl drop-shadow-sm p-5">
                    <div className="grid grid-cols-4 text-xs font-medium text-gray-500 mb-3">
                    <div>CREATIVES</div>
                    <div>SPENT</div>
                    <div>CPC</div>
                    <div>AGE</div>
                    </div>

                    {[
                    ["Single image", "€9,94", "€0,39"],
                    ["Collage", "€4,94", "€0,43"],
                    ["Carousel", "€2,24", "€0,35"],
                    ["Single image", "€1,72", "€0,69"],
                    ["AI", "€0,92", "€0,92"],
                    ["AI", "€9,94", "€0,39"],
                    ].map((row, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-4 items-center text-sm py-2.5 border-t"
                    >
                        <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-black rounded-sm" />
                        {row[0]}
                        </div>
                        <div>{row[1]}</div>
                        <div>{row[2]}</div>
                        <div>54–65</div>
                    </div>
                    ))}
                </div>

                </div>
            </div>
            </div>
        </div>
        </DashboardLayout>
        <Footer />
    </div>
  );
}

function GoalCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-[#F6FAFB] p-4 border border-gray-300 rounded-xl drop-shadow-sm relative">
      <p className="text-xs text-gray-500 font-medium mb-1">{title}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
      <span className="absolute top-3 right-3 text-gray-400">⋮</span>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl drop-shadow-sm p-4">
      <p className="text-xs text-gray-500 font-medium mb-1">{title}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function Insight({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-100 border-gray-300 rounded-xl drop-shadow-sm px-3 py-2 text-sm">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  );
}
