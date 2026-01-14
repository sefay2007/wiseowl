import StatCard from "../cards/StatCard";
import Image from "next/image";

export default function StoreStats({ stats }: any) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3 font-semibold text-gray-700">
  <Image
    src="/img/shopify.png"
    alt="Shopify"
    width={16}
    height={16}
    className="object-contain"
  />
  AnnaMariusOslo.com
</div>


      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <StatCard title="Revenue" value={stats.revenue} />
        <StatCard title="Orders" value={stats.orders.toString()} />
        <StatCard title="Sessions" value={stats.sessions.toLocaleString("nl-NL")} />
        <StatCard title="Add to cart" value={stats.addToCart.toString()} />
        <StatCard title="Conversion" value={stats.conversion} />

      </div>
    </div>
  );
}