"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Dress", value: 44 },
  { name: "Jackets", value: 23 },
  { name: "Shoes", value: 18 },
  { name: "Accessories", value: 12 },
];

const COLORS = ["#2563eb", "#60a5fa", "#93c5fd", "#bfdbfe"];

const totalOrders = data.reduce((sum, d) => sum + d.value, 0);

export default function OrdersDonutChart() {
  return (
    <div className="h-full flex p-6">
      {/* Chart */}
      <div className="w-1/2 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="w-1/2 pl-6 flex flex-col justify-center">
        <p className="text-sm text-gray-500 mb-2">Total orders</p>
        <p className="text-black text-2xl font-semibold mb-4">{totalOrders}</p>

        <div className="space-y-2">
          {data.map((item, i) => (
            <div key={item.name} className="flex items-center gap-2 text-sm">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[i] }}
              />
              <span className="text-gray-700">
                {item.value} {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
