import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/cards/StatCard";
import LargePanel from "@/components/cards/LargePanel";
import StoreStats from "@/components/store/StoreStats";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import OrdersDonutChart from "@/components/charts/OrdersDonutChart";
import { Calendar, Euro } from "lucide-react";


export default function DashboardPage() {
  return (
    <div>
        <Header />
        <DashboardLayout>
          <div className="flex items-center justify-start gap-4 mb-6">
      <h1 className="text-black text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md bg-white text-gray-600 hover:bg-gray-100 transition">
          <Calendar className="w-4 h-4 text-gray-500" />
          Yesterday
        </button>

        <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md bg-white text-gray-600 hover:bg-gray-100 transition">
          <Euro className="w-4 h-4 text-gray-500" />
          Euro
        </button>
      </div>
    </div>
            {/* Top stats */}
            <div className="flex flex-col flex-1">
  
  {/* Top stats */}
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
    <StatCard title="Spend" value="€3.858,27" />
    <StatCard title="CPC" value="€0.41" />
    <StatCard title="CTR" value="4.7%" />
    <StatCard title="ROAS" value="3.47" />
    <StatCard title="Revenue" value="€13.397,95" />
  </div>

  {/* Big panels (vaste maar mooie hoogte) */}
  <div
  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
  style={{ height: "calc(100vh - 520px)" }}
>
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
    <RevenueLineChart />
  </div>

  <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
    <OrdersDonutChart />
  </div>
</div>


  {/* Store section */}
  <StoreStats />
</div>

            </DashboardLayout>
            <Footer/>
    </div>
    
  );
}
