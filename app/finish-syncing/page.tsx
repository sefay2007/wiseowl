"use client";

import { useState } from "react";
import Header from "@/components/Header";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useRouter } from "next/navigation";

const PRODUCT_TYPES = ["Sweater", "Dress", "Jacket", "Shoes", "Bag", "T-shirt"];
const GENDERS = ["Woman", "Man", "Unisex"];
const FORMATS = [
  "Carousel",
  "AI Image",
  "Video",
  "Collection",
  "Collage",
  "Single Image",
];
const CONCEPTS = [
  "Anniversary sale",
  "New collection",
  "Discount",
  "Winter Sale",
  "Summer Sale",
  "Holiday Sale",
];

const GRID = "grid-cols-[2fr_1.5fr_1.5fr_1.5fr_1.5fr]";

const initialGroups = [
  {
    label: "Emily – Sweater",
    productType: "Sweater",
    gender: "Woman",
    concept: "Anniversary sale",
    rows: Array.from({ length: 5 }).map(() => ({
      campaign: "Emily – Sweater",
      format: "Carousel",
    })),
  },
  {
    label: "Anna – Hoodie",
    productType: "Hoodie",
    gender: "Woman",
    concept: "Winter Sale",
    rows: Array.from({ length: 4 }).map(() => ({
      campaign: "Anna – Hoodie",
      format: "Video",
    })),
  },
  {
    label: "Lena – Jacket",
    productType: "Jacket",
    gender: "Woman",
    concept: "New collection",
    rows: Array.from({ length: 6 }).map(() => ({
      campaign: "Lena – Jacket",
      format: "Carousel",
    })),
  },
  {
    label: "Sophie – Dress",
    productType: "Dress",
    gender: "Woman",
    concept: "Holiday Sale",
    rows: Array.from({ length: 4 }).map(() => ({
      campaign: "Sophie – Dress",
      format: "Single Image",
    })),
  },
  {
    label: "Noor – Blazer",
    productType: "Blazer",
    gender: "Woman",
    concept: "Discount",
    rows: Array.from({ length: 5 }).map(() => ({
      campaign: "Noor – Blazer",
      format: "Collection",
    })),
  },
];


export default function FinishSyncingPage() {
  const [groups, setGroups] = useState(initialGroups);
  const router = useRouter();

  const updateGroupField = (
    groupIndex: number,
    key: "productType" | "gender" | "concept",
    value: string
  ) => {
    setGroups((prev) =>
      prev.map((group, gi) =>
        gi === groupIndex ? { ...group, [key]: value } : group
      )
    );
  };

  const updateRowFormat = (
    groupIndex: number,
    rowIndex: number,
    value: string
  ) => {
    setGroups((prev) =>
      prev.map((group, gi) =>
        gi !== groupIndex
          ? group
          : {
              ...group,
              rows: group.rows.map((row, ri) =>
                ri === rowIndex ? { ...row, format: value } : row
              ),
            }
      )
    );
  };

  return (
    <>
      <Header />

      <DashboardLayout>
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
              className="rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 cursor-pointer"
            >
              Cancel syncing
            </button>

            <button
              onClick={() => router.push("/metastats")}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer"
            >
              Save syncing
            </button>
          </div>
        </div>

        <div
          className={`grid ${GRID} px-6 py-3 text-sm font-medium text-gray-700 border-b`}
        >
          <div>Adsets</div>
          <div>Product type</div>
          <div>Targeting gender</div>
          <div>Creative format</div>
          <div>Sale concept</div>
        </div>

        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="mt-6 relative">

            <div
              className={`mx-2 my-3 rounded-lg border border-gray-300 bg-blue-500 px-6 py-4 grid ${GRID} gap-4 items-center text-sm`}
            >
              <div className="flex items-center gap-2 font-semibold text-white">
                {group.label}
              </div>

              <select
                value={group.productType}
                onChange={(e) =>
                  updateGroupField(
                    groupIndex,
                    "productType",
                    e.target.value
                  )
                }
                className="h-8 w-auto rounded-md bg-white px-2 text-sm"
              >
                {PRODUCT_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>

              <select
                value={group.gender}
                onChange={(e) =>
                  updateGroupField(groupIndex, "gender", e.target.value)
                }
                className="h-8 w-auto rounded-md bg-white px-2 text-sm"
              >
                {GENDERS.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>

              <div />

              <select
                value={group.concept}
                onChange={(e) =>
                  updateGroupField(groupIndex, "concept", e.target.value)
                }
                className="h-8 w-auto rounded-md bg-white px-2 text-sm"
              >
                {CONCEPTS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {group.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`mx-2 my-2 border border-gray-300 rounded-lg shadow-sm bg-white px-6 py-4 grid ${GRID} gap-4 items-center text-sm`}
              >
                <div className="relative flex items-center  text-gray-800">
                  <span>{row.campaign}</span>
                </div>

                <div />
                <div />

                <select
                  value={row.format}
                  onChange={(e) =>
                    updateRowFormat(
                      groupIndex,
                      rowIndex,
                      e.target.value
                    )
                  }
                  className="h-8 w-auto rounded-md border border-gray-300 bg-white px-2 text-sm"
                >
                  {FORMATS.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>

                <div />
              </div>
            ))}
          </div>
        ))}
      </DashboardLayout>
    </>
  );
}
