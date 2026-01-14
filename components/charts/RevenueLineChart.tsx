"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Currency = "EUR" | "USD";

/* ===============================
   Seeded random
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

/* ===============================
   Hourly distribution
================================ */

function generateHourlyRevenue(
  date: string,
  totalRevenue: number
) {
  const rand = seededRandom(date);

  const weights = Array.from({ length: 24 }, (_, hour) => {
    const activity =
      hour < 6 || hour > 22
        ? 0.15
        : hour < 9
        ? 0.6
        : hour < 18
        ? 1
        : 0.8;

    return rand() * activity;
  });

  const sum = weights.reduce((a, b) => a + b, 0);
  let remaining = totalRevenue;

  return weights.map((w, hour) => {
    const value =
      hour === 23
        ? remaining
        : Math.round((w / sum) * totalRevenue);

    remaining -= value;

    return {
      hour: `${hour.toString().padStart(2, "0")}:00`,
      revenue: value,
    };
  });
}

/* ===============================
   Component
================================ */

export default function RevenueLineChart({
  date,
  totalRevenue,
  currency,
}: {
  date: string;
  totalRevenue: number;
  currency: Currency;
}) {
  if (!totalRevenue || isNaN(totalRevenue)) return null;

  const data = generateHourlyRevenue(date, totalRevenue);

  return (
    <div className="h-full flex flex-col p-6">
      <div className="mb-4">
        <p className="text-sm text-gray-500">Revenue (day view)</p>
        <p className="text-2xl font-semibold text-gray-800">
          {new Intl.NumberFormat("nl-NL", {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
          }).format(totalRevenue)}
        </p>
      </div>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="hour" interval={2} />
            <YAxis />
            <Tooltip
            formatter={(value) => [
              new Intl.NumberFormat("nl-NL", {
                style: "currency",
                currency,
                maximumFractionDigits: 0,
              }).format(Number(value)),
              "Revenue",
            ]}
          />
            <Line
              type="basis"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={2.5}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
