"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Dec 13", revenue: 1420 },
  { date: "Dec 15", revenue: 3240 },
  { date: "Dec 18", revenue: 4901 },
  { date: "Dec 21", revenue: 3591 },
  { date: "Dec 24", revenue: 5892 },
  { date: "Dec 27", revenue: 5414 },
  { date: "Dec 30", revenue: 7918 },
  { date: "Jan 2", revenue: 9041 },
  { date: "Jan 5", revenue: 10420 },
  { date: "Jan 8", revenue: 12420 },
  { date: "Jan 10", revenue: 11820 },
  { date: "Jan 12", revenue: 13400 },
];

const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0);

export default function RevenueLineChart() {
  return (
    <div className="h-full flex flex-col p-6">
      {/* Header */}
      <div className="mb-4">
        <p className=" text-sm text-gray-500">Revenue (last 30 days)</p>
        <p className="text-2xl font-semibold text-gray-800">
          €{totalRevenue.toLocaleString()}
        </p>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
