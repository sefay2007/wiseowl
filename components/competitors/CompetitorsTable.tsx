"use client";

import CompetitorRow from "./CompetitorRow";
import { Competitor } from "../../app/types/competitor";

interface Props {
  competitors: Competitor[];
  onDelete: (id: string) => void;
}


export default function CompetitorsTable({ competitors, onDelete }: Props) {
  return (
    <div>
      {/* HEADER */}
      <div className="grid grid-cols-[2fr_1fr_1.2fr_1.2fr_1fr_1.5fr_0.8fr_1fr_1fr] gap-4 px-4 py-3 text-sm font-medium text-black items-center">
        <div>Store name</div>
        <div className="text-center">Website</div>
        <div>FB Library</div>
        <div>Live since</div>
        <div className="text-center">Active ads</div>
        <div className="text-center">Number of products</div>
        <div className="text-center">Country</div>
        <div className="text-center">FB profile</div>
        <div className="text-center">FB followers</div>
      </div>

      {/* ROWS */}
      <div>
        {competitors.length === 0 && (
          <div className="px-4 py-6 text-sm text-gray-500">
            No competitors added yet
          </div>
        )}

        {competitors.map((item) => (
          <CompetitorRow
            key={item.id}
            data={{
              id: item.id,
              name: item.storeName,
              liveSince: item.liveSince,
              ads: item.activeAds,
              products: item.products,
              country: item.country,
              followers: item.fbFollowers,
              website: item.website,
              fbLibrary: item.fbLibrary,
              fbProfile: item.fbProfile,
            }}
            onDelete={onDelete}
          />
        ))}

      </div>
    </div>
  );
}
