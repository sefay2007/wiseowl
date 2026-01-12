'use client'

import Image from 'next/image'

export default function LogoScroller() {
  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="flex w-max motion-safe:animate-[marquee_25s_linear_infinite]">
        <Logos />
        <Logos />
      </div>
    </section>
  )
}

function Logos() {
  return (
    <div className="flex items-center gap-20 pr-20 whitespace-nowrap">
      <Logo /><Logo /><Logo /><Logo />
      <Logo /><Logo /><Logo /><Logo />
    </div>
  )
}

function Logo() {
  return (
    <div className="shrink-0 opacity-90">
      <Image
        src="/img/wiseowl-logo.png"
        alt="WiseOwl"
        width={180}
        height={50}
      />
    </div>
  )
}
