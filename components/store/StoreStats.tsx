import StatCard from "../cards/StatCard";
import Image from "next/image";
export default function StoreStats() {
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
        <StatCard title="Revenue" value="€13.397,95" />
        <StatCard title="Orders" value="97" />
        <StatCard title="Sessions" value="1.203" />
        <StatCard title="Add to cart" value="214" />
        <StatCard title="Conversion" value="2.4%" />
      </div>
    </div>
  );
}
