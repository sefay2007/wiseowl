"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import CompetitorRow from "./CompetitorRow";
import { Competitor } from "../../app/types/competitor";

/* ---------- HELPERS ---------- */
const parseValue = (value: any) => {
  if (typeof value === "number") return value;

  if (typeof value === "string") {
    // datum
    if (!isNaN(Date.parse(value))) {
      return new Date(value).getTime();
    }
    return value.toLowerCase();
  }

  return value;
};

interface Props {
  competitors: Competitor[];
  onDelete: (id: string) => void;
}

export default function CompetitorsTable({ competitors, onDelete }: Props) {
  const [sortKey, setSortKey] = useState<keyof Competitor | null>(null);
  const [direction, setDirection] = useState<"asc" | "desc">("asc");

  function handleSort(key: keyof Competitor) {
    if (sortKey === key) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  }

  const sortedCompetitors = [...competitors].sort((a, b) => {
    if (!sortKey) return 0;

    const aVal = parseValue(a[sortKey]);
    const bVal = parseValue(b[sortKey]);

    if (aVal < bVal) return direction === "asc" ? -1 : 1;
    if (aVal > bVal) return direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div>
      {/* HEADER */}
      <div className="grid grid-cols-[2fr_1fr_1.2fr_1.2fr_1fr_1.5fr_0.8fr_1fr_1fr] gap-4 px-4 py-3 text-sm font-medium text-black items-center">
        <button onClick={() => handleSort("storeName")} className="flex items-center gap-1 hover:underline cursor-pointer">
          Store name <ArrowUpDown className="w-3 h-3" />
        </button>

        <div className="text-center">Website</div>
        <div>FB Library</div>

        <button onClick={() => handleSort("liveSince")} className="flex items-center gap-1 hover:underline cursor-pointer">
          Live since <ArrowUpDown className="w-3 h-3" />
        </button>

        <button onClick={() => handleSort("activeAds")} className="flex items-center gap-1 justify-center hover:underline cursor-pointer">
          Active ads <ArrowUpDown className="w-3 h-3" />
        </button>

        <button onClick={() => handleSort("products")} className="flex items-center gap-1 justify-center hover:underline cursor-pointer">
          Number of products <ArrowUpDown className="w-3 h-3" />
        </button>

        <button onClick={() => handleSort("country")} className="flex items-center gap-1 justify-center hover:underline cursor-pointer">
          Country <ArrowUpDown className="w-3 h-3" />
        </button>

        <div className="text-center">FB profile</div>

        <button onClick={() => handleSort("fbFollowers")} className="flex items-center gap-1 justify-center hover:underline cursor-pointer">
          FB followers <ArrowUpDown className="w-3 h-3" />
        </button>
      </div>

      {/* ROWS */}
      {sortedCompetitors.length === 0 && (
        <div className="px-4 py-6 text-sm text-gray-500">
          No competitors added yet
        </div>
      )}

      {sortedCompetitors.map((item) => (
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
  );
}
