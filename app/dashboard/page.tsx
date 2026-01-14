"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/cards/StatCard";
import StoreStats from "@/components/store/StoreStats";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import OrdersDonutChart from "@/components/charts/OrdersDonutChart";
import { Euro } from "lucide-react";

/* ===============================
   Types & constants
================================ */

type Currency = "EUR" | "USD";

const todayISO = new Date().toISOString().split("T")[0];
const EUR_TO_USD = 1.1;

/* ===============================
   Helpers
================================ */

function seededRandom(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return () => {
    hash = (hash * 9301 + 49297) % 233280;
    return hash / 233280;
  };
}

function generateStatsForDate(date: string) {
  const rand = seededRandom(date);

  const between = (min: number, max: number) =>
    Math.floor(rand() * (max - min + 1)) + min;

  return {
    spend: between(2000, 6000),
    cpc: Number((rand() * 1).toFixed(2)),
    ctr: Number((rand() * 10).toFixed(1)),
    roas: Number((rand() * 5).toFixed(2)),
    revenue: between(8000, 20000),
    orders: between(40, 150),
    sessions: between(800, 3000),
    addToCart: between(100, 400),
    conversion: Number((rand() * 5).toFixed(1)),
  };
}

function convertCurrency(value: number, currency: Currency) {
  return currency === "USD" ? value * EUR_TO_USD : value;
}

function formatCurrency(
  value: number,
  currency: Currency,
  decimals = 0
) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/* ===============================
   Page
================================ */

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState(todayISO);
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const [stats, setStats] =
    useState<ReturnType<typeof generateStatsForDate> | null>(null);

  /* Load persisted state */
  useEffect(() => {
    const savedDate = localStorage.getItem("dashboard:date");
    const savedCurrency = localStorage.getItem("dashboard:currency");

    if (savedDate) setSelectedDate(savedDate);
    if (savedCurrency === "EUR" || savedCurrency === "USD") {
      setCurrency(savedCurrency);
    }
  }, []);

  /* Regenerate stats on date change */
  useEffect(() => {
    setStats(generateStatsForDate(selectedDate));
    localStorage.setItem("dashboard:date", selectedDate);
  }, [selectedDate]);

  /* Persist currency */
  useEffect(() => {
    localStorage.setItem("dashboard:currency", currency);
  }, [currency]);

  /* Close currency dropdown on outside click */
  useEffect(() => {
    function close() {
      setCurrencyOpen(false);
    }
    if (currencyOpen) {
      document.addEventListener("click", close);
    }
    return () => document.removeEventListener("click", close);
  }, [currencyOpen]);

  if (!stats) return null;

  return (
    <div>
      <Header />

      <DashboardLayout>
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-xl font-semibold text-black">
            Dashboard
          </h1>

          <div className="flex items-center gap-3">
            <input
              type="date"
              value={selectedDate}
              max={todayISO}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg bg-white text-gray-600"
              onChange={(e) => setSelectedDate(e.target.value)}
            />

            {/* Currency dropdown */}
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setCurrencyOpen((o) => !o)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded-lg bg-white text-gray-600"
              >
                <Euro className="w-4 h-4 text-gray-500" />
                {currency === "EUR" ? "Euro" : "Dollar"}
              </button>

              {currencyOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => {
                      setCurrency("EUR");
                      setCurrencyOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-sm text-left hover:bg-gray-100 ${
                      currency === "EUR"
                        ? "font-medium text-gray-900"
                        : "text-gray-600"
                    }`}
                  >
                    € Euro
                  </button>

                  <button
                    onClick={() => {
                      setCurrency("USD");
                      setCurrencyOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-sm text-left hover:bg-gray-100 ${
                      currency === "USD"
                        ? "font-medium text-gray-900"
                        : "text-gray-600"
                    }`}
                  >
                    $ Dollar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Top stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Spend"
            value={formatCurrency(
              convertCurrency(stats.spend, currency),
              currency
            )}
          />
          <StatCard
            title="CPC"
            value={formatCurrency(
              convertCurrency(stats.cpc, currency),
              currency,
              2
            )}
          />
          <StatCard title="CTR" value={`${stats.ctr}%`} />
          <StatCard title="ROAS" value={stats.roas.toFixed(2)} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 h-[420px]">
          <div className="bg-white border border-gray-300 rounded-xl">
            <RevenueLineChart
              date={selectedDate}
              totalRevenue={convertCurrency(
                stats.revenue,
                currency
              )}
              currency={currency}
            />
          </div>

          <div className="bg-white border border-gray-300 rounded-xl">
            <OrdersDonutChart
              totalOrders={stats.orders}
              seed={selectedDate}
            />
          </div>
        </div>

        {/* Store stats */}
        <StoreStats
          stats={{
            ...stats,
            revenue: formatCurrency(
              convertCurrency(stats.revenue, currency),
              currency
            ),
          }}
        />
      </DashboardLayout>

      <Footer />
    </div>
  );
}
