'use client'

import Image from 'next/image'
import { useState } from 'react'

const FEATURES = [
  {
    id: 'ads',
    title: 'Ad performance insights',
    description:
      'Gain clear insights into how your ads perform across campaigns, creatives, and markets.',
    image: '/img/feature-ads.png',
  },
  {
    id: 'website',
    title: 'Website & Shopify insights',
    description:
      'Understand how users behave on your website and where conversions are won or lost.',
    image: '/img/feature-website.png',
  },
  {
    id: 'concept',
    title: 'Ad concept comparison',
    description:
      'Compare ad concepts to see which angles, messages, and visuals truly drive performance.',
    image: '/img/feature-concept.png',
  },
  {
    id: 'diagnosis',
    title: 'Clear diagnosis & recommendations',
    description:
      'Get a clear diagnosis of performance issues with actionable recommendations.',
    image: '/img/feature-diagnosis.png',
  },
]

export default function HowItWorksSection() {
  const [active, setActive] = useState(FEATURES[0].id)

  const activeFeature = FEATURES.find(f => f.id === active)!

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-black">
            How <span className="text-blue-600">WiseOwl</span> delivers clarity
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Combine advertising and website data to understand what’s working — and why.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left cards */}
          <div className="space-y-4">
            {FEATURES.map(feature => {
              const isActive = feature.id === active

              return (
                <div
                  key={feature.id}
                  onMouseEnter={() => setActive(feature.id)}
                  onFocus={() => setActive(feature.id)}
                  className={`
                    group cursor-pointer rounded-2xl p-6 transition-all duration-300
                    ${isActive
                      ? 'bg-gray-100 shadow-md scale-[1.02]'
                      : 'bg-gray-50 hover:bg-gray-100'}
                  `}
                >
                  <h3 className="font-medium text-gray-900 flex items-center gap-2">
                    {feature.title}
                  </h3>

                  <div
                    className={`
                      overflow-hidden transition-all duration-300
                      ${isActive ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right image */}
          <div className="relative w-full h-[360px] rounded-2xl bg-gray-100 overflow-hidden">
            <Image
              key={activeFeature.image}
              src={activeFeature.image}
              alt={activeFeature.title}
              fill
              className="object-cover transition-opacity duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
