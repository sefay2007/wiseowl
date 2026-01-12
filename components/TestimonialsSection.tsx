'use client'

import Image from 'next/image'

const REVIEWS = [
  {
    name: 'Luuk Jacks',
    time: '2 weeks ago',
    text: `WiseOwl gave me clarity I was missing for a long time. My ads looked good on paper, but sales were disappointing. With the ads vs website diagnosis, I could finally see that the issue wasn’t my ads, but my product page. That saved me a lot of unnecessary ad testing and budget.`,
  },
  {
    name: 'Luuk Jacks',
    time: '2 weeks ago',
    text: `WiseOwl gave me clarity I was missing for a long time. My ads looked good on paper, but sales were disappointing. With the ads vs website diagnosis, I could finally see that the issue wasn’t my ads, but my product page. That saved me a lot of unnecessary ad testing and budget.`,
  },
  {
    name: 'Luuk Jacks',
    time: '2 weeks ago',
    text: `WiseOwl gave me clarity I was missing for a long time. My ads looked good on paper, but sales were disappointing. With the ads vs website diagnosis, I could finally see that the issue wasn’t my ads, but my product page. That saved me a lot of unnecessary ad testing and budget.`,
  },
  {
    name: 'Luuk Jacks',
    time: '2 weeks ago',
    text: `WiseOwl gave me clarity I was missing for a long time. My ads looked good on paper, but sales were disappointing. With the ads vs website diagnosis, I could finally see that the issue wasn’t my ads, but my product page. That saved me a lot of unnecessary ad testing and budget.`,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className=" text-black text-2xl md:text-3xl font-semibold">
            What <span className="text-blue-600">users</span> say about{' '}
            <span className="text-blue-600">WiseOwl</span>
          </h2>
        </div>

        {/* Reviews */}
        <div className=" text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({
  name,
  time,
  text,
}: {
  name: string
  time: string
  text: string
}) {
  return (
    <div className="relative rounded-2xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition">
      {/* Google badge */}
      <div className="absolute top-4 right-4">
        <Image
          src="/img/google-logo.png"
          alt="Google"
          width={18}
          height={18}
        />
      </div>

      {/* User */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-400">{time}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  )
}

function Star() {
  return (
    <svg
      className="w-4 h-4 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.21 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
    </svg>
  )
}
