import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/layout/Sidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CompetitorsTable from "@/components/competitors/CompetitorsTable";
import { ArrowUpDown } from "lucide-react";

export default function CompetitorsPage() {
  return (
    <div>
        <Header />
        <DashboardLayout>
            <div className="flex items-center justify-between mb-6">
  
            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
                <h1 className="text-black text-xl font-semibold">
                Competitors list
                </h1>

                <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md bg-white text-gray-600 hover:bg-gray-100 transition">
                    <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    Sort by: CPC
                    </button>
            </div>

            {/* RIGHT SIDE */}
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                + Add new store
            </button>

            </div>


        <CompetitorsTable />
        </DashboardLayout>
    </div>
  );
}
