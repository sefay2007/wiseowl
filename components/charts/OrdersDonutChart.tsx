"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

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

const CATEGORIES = ["Dress", "Jackets", "Shoes", "Accessories"];
const COLORS = ["#2563eb", "#60a5fa", "#93c5fd", "#bfdbfe"];


export default function OrdersDonutChart({
  totalOrders,
  seed,
}: {
  totalOrders: number;
  seed: string; 
}) {
  const rand = seededRandom(seed);

  const weights = CATEGORIES.map(() => rand());
  const weightSum = weights.reduce((a, b) => a + b, 0);

  let remaining = totalOrders;

  const data = CATEGORIES.map((name, i) => {
    const value =
      i === CATEGORIES.length - 1
        ? remaining
        : Math.round((weights[i] / weightSum) * totalOrders);

    remaining -= value;

    return { name, value };
  });

  return (
    <div className="h-full flex p-6 border border-gray-200 rounded-xl shadow-sm">
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

      <div className="w-1/2 pl-6 flex flex-col justify-center">
        <p className="text-sm text-gray-500 mb-2">Total orders</p>
        <p className="text-black text-2xl font-semibold mb-4">
          {totalOrders}
        </p>

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
