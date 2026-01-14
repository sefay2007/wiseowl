"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { ArrowUpDown, AlertCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ---------- GRID ---------- */
const gridCols =
  "grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_0.8fr_0.8fr_1fr_1fr_1fr_0.8fr]";

const campaignsWithWarning = [1, 2, 3, 4, 5];


/* ---------- DATA ---------- */
const campaigns = [
  {
    id: 1,
    name: "Emily – Sweater",
    budget: "€50,77",
    spent: "€37,19",
    cpc: "€0,53",
    cpm: "€17,23",
    ctr: "5,69%",
    atc: 11,
    cpa: "€3,38",
    purchases: 4,
    cpp: "€9,30",
    roas: "3,89",
    clicks: 79,
  },
  {
    id: 2,
    name: "Anna – Hoodie",
    budget: "€80,00",
    spent: "€62,40",
    cpc: "€0,71",
    cpm: "€21,10",
    ctr: "4,12%",
    atc: 18,
    cpa: "€4,55",
    purchases: 6,
    cpp: "€10,40",
    roas: "2,95",
    clicks: 88,
  },
  {
    id: 3,
    name: "Lena – Jacket",
    budget: "€120,00",
    spent: "€98,30",
    cpc: "€0,89",
    cpm: "€24,80",
    ctr: "3,74%",
    atc: 22,
    cpa: "€6,20",
    purchases: 5,
    cpp: "€19,66",
    roas: "2,10",
    clicks: 110,
  },
  {
    id: 4,
    name: "Sophie – Dress",
    budget: "€65,00",
    spent: "€40,10",
    cpc: "€0,48",
    cpm: "€15,90",
    ctr: "6,22%",
    atc: 14,
    cpa: "€2,86",
    purchases: 7,
    cpp: "€5,72",
    roas: "4,25",
    clicks: 83,
  },
  {
    id: 5,
    name: "Noor – Blazer",
    budget: "€95,00",
    spent: "€78,60",
    cpc: "€0,67",
    cpm: "€19,40",
    ctr: "4,88%",
    atc: 19,
    cpa: "€4,13",
    purchases: 8,
    cpp: "€9,83",
    roas: "3,45",
    clicks: 117,
  },
  {
    id: 6,
    name: "Yuty – Pants",
    budget: "75,00",
    spent: "€71,41",
    cpc: "€0,35",
    cpm: "€12,60",
    ctr: "4,38%",
    atc: 17,
    cpa: "€8,45",
    purchases: 4,
    cpp: "€17,83",
    roas: "2,24",
    clicks: 125,
  },
  {
    id: 7,
    name: "Comfy – Sweater",
    budget: "€97,50",
    spent: "€81,20",
    cpc: "€0,70",
    cpm: "€18,90",
    ctr: "5,10%",
    atc: 21,
    cpa: "€3,19",
    purchases: 9,
    cpp: "€10,10",
    roas: "3,60",
    clicks: 120,
  },
];

/* ---------- HELPERS ---------- */
const parseValue = (value: any) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    return parseFloat(
      value.replace("€", "").replace("%", "").replace(",", ".")
    );
  }
  return value;
};

export default function MetaStatsPage() {
  const [sortKey, setSortKey] = useState<keyof typeof campaigns[0] | null>(null);
  const [direction, setDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (key: keyof typeof campaigns[0]) => {
    if (sortKey === key) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  };

  const sortedCampaigns = [...campaigns].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = parseValue(a[sortKey]);
    const bVal = parseValue(b[sortKey]);
    return direction === "asc" ? aVal - bVal : bVal - aVal;
  });

  return (
    <div>
      <Header />

      <DashboardLayout>
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Meta Ads Stats</h1>

          <div className="flex gap-3">
            <Link
              href="/finish-syncing"
              className="
                bg-blue-600 text-white px-4 py-2 rounded-md text-sm
                transition-all duration-200 ease-out
                hover:bg-blue-700
                hover:shadow-lg
                active:translate-y-0
                active:shadow-md
                focus:outline-none
                cursor-pointer
                focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
              "
            >
              Finish syncing
            </Link>

            <button
  className="
    bg-blue-600 text-white px-4 py-2 rounded-md text-sm
    transition-all duration-200 ease-out
    hover:bg-blue-700
    hover:shadow-md
    active:translate-y-0
    active:shadow-sm
    focus:outline-none
    cursor-pointer
    focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
  "
>
  + Sync ads from Meta
</button>

          </div>
        </div>

        {/* TABLE HEADER */}
        <div className={`px-4 py-3 grid ${gridCols} gap-4 text-sm font-medium`}>
          {[
            ["name", "Campaign"],
            ["budget", "Budget"],
            ["spent", "Spent"],
            ["cpc", "CPC"],
            ["cpm", "CPM"],
            ["ctr", "CTR"],
            ["atc", "ATC"],
            ["cpa", "CPA"],
            ["purchases", "Purchase"],
            ["cpp", "CPP"],
            ["roas", "ROAS"],
            ["clicks", "Clicks"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleSort(key as any)}
              className="flex items-center justify-center gap-1 hover:underline cursor-pointer"
            >
              {label}
              <ArrowUpDown className="w-3 h-3" />
            </button>
          ))}
        </div>

        {/* ROWS */}
        {sortedCampaigns.map((c) => {
  const showWarning = campaignsWithWarning.includes(c.id);

  return (
    <div key={c.id} className="flex items-center">
      {/* FIXED ICON COLUMN (always same width) */}
      <div className="w-8 flex justify-center">
        {showWarning && (
          <div className="relative group">
            <AlertCircle className="w-5 h-5 text-blue-600 cursor-pointer" />

            {/* Tooltip */}
            <div
              className="
                absolute left-7 top-1/2 -translate-y-1/2
                hidden group-hover:block whitespace-nowrap
                bg-gray-900 text-white text-xs px-3 py-1.5
                rounded-md shadow-lg z-50
              "
            >
              You need to finish syncing first
            </div>
          </div>
        )}
      </div>

      {/* CARD (same width for all rows) */}
      <div
        className={`flex-1 mx-2 my-3 rounded-lg border border-gray-200 shadow-sm bg-white px-4 py-8 grid ${gridCols} gap-4 text-sm text-gray-700 items-center`}
      >
        <div className="font-medium">{c.name}</div>
        <div className="text-center">{c.budget}</div>
        <div className="text-center">{c.spent}</div>
        <div className="text-center">{c.cpc}</div>
        <div className="text-center">{c.cpm}</div>
        <div className="text-center">{c.ctr}</div>
        <div className="text-center">{c.atc}</div>
        <div className="text-center">{c.cpa}</div>
        <div className="text-center">{c.purchases}</div>
        <div className="text-center">{c.cpp}</div>
        <div className="text-center">{c.roas}</div>
        <div className="text-center">{c.clicks}</div>
      </div>
    </div>
  );
})}

      </DashboardLayout>

      <Footer />
    </div>
  );
}
