"use client";

import { useState } from "react";
import Header from "@/components/Header";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useRouter } from "next/navigation";

/* OPTIONS */
const PRODUCT_TYPES = ["Sweater", "Dress", "Jacket", "Shoes", "Bag", "T-shirt"];
const GENDERS = ["Woman", "Man", "Unisex"];
const FORMATS = ["Carousel", "AI Image", "Video", "Collection", "Collage", "Single Image"];
const CONCEPTS = ["Anniversary sale", "New collection", "Discount", "Winter Sale", "Summer Sale", "Holiday Sale"];

const GRID = "grid-cols-[2fr_1.5fr_1.5fr_1.5fr_1.5fr]";

/* INITIAL DATA */
const initialGroups = [
  {
    label: "25 dec – Emily",
    rows: Array.from({ length: 5 }).map(() => ({
      campaign: "Emily – Sweater",
      productType: "Sweater",
      gender: "Woman",
      format: "Carousel",
      concept: "Anniversary sale",
    })),
  },
  {
    label: "25 dec – Dress",
    rows: Array.from({ length: 3 }).map(() => ({
      campaign: "Lacost – Dress",
      productType: "Dress",
      gender: "Woman",
      format: "Carousel",
      concept: "Anniversary sale",
    })),
  },
];

export default function FinishSyncingPage() {
  const [groups, setGroups] = useState(initialGroups);
const router = useRouter();

  /* UPDATE SINGLE ROW */
  const updateRow = (
    groupIndex: number,
    rowIndex: number,
    key: string,
    value: string
  ) => {
    setGroups((prev) =>
      prev.map((group, gi) =>
        gi !== groupIndex
          ? group
          : {
              ...group,
              rows: group.rows.map((row, ri) =>
                ri !== rowIndex ? row : { ...row, [key]: value }
              ),
            }
      )
    );
  };

  /* APPLY TO ALL ROWS IN GROUP */
  const applyToAll = (
    groupIndex: number,
    key: string,
    value: string
  ) => {
    setGroups((prev) =>
      prev.map((group, gi) =>
        gi !== groupIndex
          ? group
          : {
              ...group,
              rows: group.rows.map((row) => ({
                ...row,
                [key]: value,
              })),
            }
      )
    );
  };

  return (
    <>
      <Header />

      <DashboardLayout>
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Finish syncing
            </h1>
            <p className="text-sm text-gray-500">
              Finalize adset settings
            </p>
          </div>

          <div className="flex gap-3">
            <button
                onClick={() => router.push("/metastats")}
                className="rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200"
                >
                Cancel syncing
                </button>

                <button
                onClick={() => router.push("/metastats")}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                Save syncing
            </button>

          </div>
        </div>

        {/* TABLE HEADER */}
        <div
          className={`grid ${GRID} px-6 py-3 text-sm font-medium text-gray-700 border-b`}
        >
          <div>Adsets</div>
          <div>Product type</div>
          <div>Targeting gender</div>
          <div>Creative format</div>
          <div>Sale concept</div>
        </div>

        {/* GROUPS */}
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="mt-6">
            {/* GROUP SELECT */}
            <div className="px-6 mb-3">
                <option>{group.label}</option>
            </div>

            {/* ROWS */}
            {group.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`mx-2 my-3 rounded-lg border border-gray-200 bg-[#F6FAFB] px-6 py-4 grid ${GRID} gap-4 items-center text-sm`}
              >
                {/* Campaign */}
                <div className="font-medium text-gray-800">
                  {row.campaign}
                </div>

                {/* Product type */}
                <div className="flex items-center gap-2">
                  <select
                    value={row.productType}
                    onChange={(e) =>
                      updateRow(
                        groupIndex,
                        rowIndex,
                        "productType",
                        e.target.value
                      )
                    }
                    className="rounded-md border px-2 py-1 text-sm"
                  >
                    {PRODUCT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() =>
                      applyToAll(
                        groupIndex,
                        "productType",
                        row.productType
                      )
                    }
                    className="text-xs rounded bg-blue-600 px-2 py-1 text-white"
                  >
                    Apply to all
                  </button>
                </div>

                {/* Gender */}
                <div className="flex items-center gap-2">
                  <select
                    value={row.gender}
                    onChange={(e) =>
                      updateRow(
                        groupIndex,
                        rowIndex,
                        "gender",
                        e.target.value
                      )
                    }
                    className="rounded-md border px-2 py-1 text-sm"
                  >
                    {GENDERS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() =>
                      applyToAll(groupIndex, "gender", row.gender)
                    }
                    className="text-xs rounded bg-blue-600 px-2 py-1 text-white"
                  >
                    Apply to all
                  </button>
                </div>

                {/* Format */}
                <div className="flex items-center gap-2">
                  <select
                    value={row.format}
                    onChange={(e) =>
                      updateRow(
                        groupIndex,
                        rowIndex,
                        "format",
                        e.target.value
                      )
                    }
                    className="rounded-md border px-2 py-1 text-sm"
                  >
                    {FORMATS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() =>
                      applyToAll(groupIndex, "format", row.format)
                    }
                    className="text-xs rounded bg-blue-600 px-2 py-1 text-white"
                  >
                    Apply to all
                  </button>
                </div>

                {/* Concept */}
                <div className="flex items-center gap-2">
                  <select
                    value={row.concept}
                    onChange={(e) =>
                      updateRow(
                        groupIndex,
                        rowIndex,
                        "concept",
                        e.target.value
                      )
                    }
                    className="rounded-md border px-2 py-1 text-sm"
                  >
                    {CONCEPTS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() =>
                      applyToAll(groupIndex, "concept", row.concept)
                    }
                    className="text-xs rounded bg-blue-600 px-2 py-1 text-white"
                  >
                    Apply to all
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </DashboardLayout>
    </>
  );
}
