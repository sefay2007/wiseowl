import Image from "next/image";
import Link from "next/link";

export default function CompetitorRow({ data }: any) {
  return (
    <div className="mx-2 my-3 rounded-lg border border-gray-200 shadow-sm bg-white px-4 py-7.5 grid grid-cols-[2fr_1fr_1.2fr_1.2fr_1fr_1.5fr_0.8fr_1fr_1fr] gap-4 text-sm text-gray-700 items-center">

  <div className="font-medium text-gray-800">
    {data.name}
  </div>

  <div className="flex justify-center">
    <Link href="https://super-pantaloni.com/">
      <img src="/img/website.png" className="w-6.5 h-auto" />
    </Link>
  </div>

  <div className="flex items-center gap-1">
    <Link href="https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&impression_search_field=has_impressions_lifetime&q=super%20pantaloni&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped">
        <img src="/img/meta.png" className="w-13 h-auto" />
    
    </Link>
  </div>

  <div className="tabular-nums">
    {data.liveSince}
  </div>

  <div className="text-center tabular-nums">
    {data.ads}
  </div>

  <div className="text-center tabular-nums">
    {data.products}
  </div>

  <div className="text-center font-medium">
    {data.country}
  </div>

  <div className="flex justify-center">
    <Link href="https://www.facebook.com/lizamilano0">
      <img src="/img/facebook.png" className="w-7 h-auto" />
    </Link>
  </div>

  <div className="text-center tabular-nums">
    {data.followers}
  </div>
</div>

  );
}

