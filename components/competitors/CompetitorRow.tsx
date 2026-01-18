"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";

interface Props {
  data: {
    id: string;
    name: string;
    liveSince: string;
    ads: number;
    products: number;
    country: string;
    followers: number;
    website: string;
    fbLibrary: string;
    fbProfile: string;
  };
  onDelete: (id: string) => void;
}

export default function CompetitorRow({ data, onDelete }: Props) {
  return (
    <div className="relative">
      <div
        className="
          mx-2 my-3 rounded-lg border border-gray-200 shadow-sm bg-white
          px-4 py-7.5 grid
          grid-cols-[2fr_1fr_1.2fr_1.2fr_1fr_1.5fr_0.8fr_1fr_1fr]
          gap-4 text-sm text-gray-700 items-center
        "
      >
        <div className="font-medium text-gray-800">
          {data.name}
        </div>

        <div className="flex justify-center">
          <Link href={data.website} target="_blank">
            <img src="/img/website.png" className="w-6.5 h-auto" />
          </Link>
        </div>

        <div className="flex justify-start">
  <Link href={data.fbLibrary} target="_blank">
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
          <Link href={data.fbProfile} target="_blank">
            <img src="/img/facebook.png" className="w-7 h-auto" />
          </Link>
        </div>

        <div className="text-center tabular-nums">
          {data.followers}
        </div>
      </div>

      <button
        onClick={() => onDelete(data.id)}
        className="
          absolute top-1/2 -right-6 -translate-y-1/2
          text-red-500 hover:text-red-700
        "
        title="Delete competitor"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
