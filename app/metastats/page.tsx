import DashboardLayout from "@/components/layout/DashboardLayout";
import { Calendar, ArrowUpDown } from "lucide-react";
import Link from "next/link";

const mockRows = Array.from({ length: 9 });

export default function MetaStatsPage() {
  return (
    <DashboardLayout>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Meta Ads Stats
          </h1>

          <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md bg-white text-gray-600 hover:bg-gray-100">
          <Calendar className="w-4 h-4 text-gray-500" /> Today
          </button>

          <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md bg-white text-gray-600 hover:bg-gray-100">
          <ArrowUpDown className="w-4 h-4 text-gray-500" /> Sort by: Budget
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            <Link href="/finish-syncing">
                Finish syncing
            </Link>           
          </button>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            + Sync ads from Meta
          </button>
        </div>
      </div>

      <div className="px-4 py-3 grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_0.8fr_0.8fr_1fr_1fr_1fr_0.8fr] gap-4 text-sm font-medium text-black items-center">
  <div>Campaign</div>
  <div className="text-center">Budget</div>
  <div className="text-center">Spent</div>
  <div className="text-center">CPC</div>
  <div className="text-center">CPM</div>
  <div className="text-center">CTR</div>
  <div className="text-center">ATC</div>
  <div className="text-center">CPA</div>
  <div className="text-center">Purchase</div>
  <div className="text-center">CPP</div>
  <div className="text-center">ROAS</div>
  <div className="text-center">Clicks</div>
</div>


      {mockRows.map((_, i) => (
        <div
          key={i}
          className="
            mx-2
            my-3
            rounded-lg
            border
            border-gray-200
            shadow-sm
            bg-white
            px-4
            py-8
            grid
            grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_0.8fr_1fr_1fr_1fr_1fr_1fr]
            gap-4
            text-sm
            text-gray-700
            items-center
          "
        >
          <div className="font-medium text-gray-800">
            Emily – Sweater
          </div>

          <div className="tabular-nums">€50,77</div>
          <div className="tabular-nums">€37,19</div>
          <div className="tabular-nums">€0,53</div>
          <div className="tabular-nums">€17,23</div>
          <div className="tabular-nums">5,69%</div>
          <div className="tabular-nums text-center">11</div>
          <div className="tabular-nums">€3,38</div>
          <div className="tabular-nums text-center">4</div>
          <div className="tabular-nums">€9,30</div>
          <div className="tabular-nums">3,89</div>
          <div className="tabular-nums text-center">79</div>
        </div>
      ))}

    </DashboardLayout>
  );
}
