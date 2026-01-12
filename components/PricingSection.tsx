"use client";

import { useState } from "react";

const MONTHLY_PRICES = {
  starter: 25,
  business: 49,
  enterprise: 75,
};

const features = {
  starter: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  business: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  enterprise: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
};

function calculateAnnual(monthly: number) {
  return Math.round(monthly * 12 * 0.75);
}

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annually">("annually");

  const getPrice = (monthly: number) =>
    billing === "monthly" ? monthly : calculateAnnual(monthly);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-20">
      {/* Header */}
      <h1 className="text-black text-4xl font-semibold mb-4">Try WiseOwl 7 days for free</h1>
      <p className="text-gray-500 max-w-xl text-center mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Toggle */}
      <div className="flex bg-gray-100 rounded-lg p-1 mb-14">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-6 py-2 rounded-md text-sm font-medium transition ${
            billing === "monthly" ? "bg-blue-600 text-white" : "text-gray-600"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("annually")}
          className={`px-6 py-2 rounded-md text-sm font-medium transition ${
            billing === "annually" ? "bg-blue-600 text-white" : "text-gray-600"
          }`}
        >
          Annually
        </button>
      </div>

      {/* Cards */}
      <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Starter */}
        <PricingCard
          title="Starter"
          price={getPrice(MONTHLY_PRICES.starter)}
          billing={billing}
          features={features.starter}
        />

        {/* Business */}
        <PricingCard
          title="Business"
          price={getPrice(MONTHLY_PRICES.business)}
          billing={billing}
          features={features.business}
          highlighted
        />

        {/* Enterprise */}
        <PricingCard
          title="Enterprise"
          price={getPrice(MONTHLY_PRICES.enterprise)}
          billing={billing}
          features={features.enterprise}
        />
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  billing,
  features,
  highlighted = false,
}: {
  title: string;
  price: number;
  billing: "monthly" | "annually";
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-8 flex flex-col ${
        highlighted ? "border-teal-400 shadow-lg" : "border-gray-200"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-400 text-white text-xs px-3 py-1 rounded-full">
          Best choice
        </span>
      )}

<div className="flex items-center gap-2 mb-4">
  <h3
    className={`text-lg font-semibold ${
      highlighted ? "text-blue-600" : "text-blue-600"
    }`}
  >
    {title}
  </h3>

  {billing === "annually" && (
    <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
      -25%
    </span>
  )}
</div>

      <div className="mb-6">
        <span className="text-3xl font-bold">€{price}</span>
        <span className="text-gray-500 ml-1">
          {billing === "monthly" ? "/mo" : "/yr"}
        </span>
      </div>

      <button className="bg-blue-600 text-white rounded-md py-2 text-sm font-medium mb-6">
        Free 7-days Trial
      </button>

      <ul className="space-y-3 text-sm text-gray-600">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            {/* Icon placeholder */}
            <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
