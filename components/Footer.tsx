'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div>
            <div className="flex items-center gap-3">
              <Link href="/">
              <Image
                src="/img/wiseowl-logo.png"
                alt="WiseOwl"
                width={256}
                height={256}
                />
              </Link>
            </div>
          </div>

          <div className="text-black space-y-10">
            <FooterColumn title="Features">
              <FooterLink text="Ad Performance Insight" />
              <FooterLink text="Website & Shopify Insights" />
              <FooterLink text="Ad Concept Comparison" />
              <FooterLink text="Clear Diagnosis & Recommendations" />
            </FooterColumn>

            <FooterColumn title="Pricing">
              <FooterLink text="Pricing overview" />
            </FooterColumn>
          </div>

          <div className="text-black space-y-10">
            <FooterColumn title="Resources">
              <FooterLink text="Ad Performance Insight" />
              <FooterLink text="Website & Shopify Insights" />
              <FooterLink text="Ad Concept Comparison" />
              <FooterLink text="Clear Diagnosis & Recommendations" />
            </FooterColumn>

            <FooterColumn title="Contact">
              <FooterLink text="Contact us" />
            </FooterColumn>
          </div>

          <div>
            <h4 className="text-black text-sm font-medium mb-4">Social Media</h4>
            <div className="flex items-center gap-3">
              <SocialIcon href="#" icon="/img/icon-instagram.png" />
              <SocialIcon href="#" icon="/img/icon-facebook.png" />
              <SocialIcon href="#" icon="/img/icon-youtube.png" />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2026 WiseOwl Platform. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-600">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-gray-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h4 className="text-sm font-medium mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-500">
        {children}
      </ul>
    </div>
  )
}

function FooterLink({ text }: { text: string }) {
  return (
    <li>
      <Link href="#" className="hover:text-gray-700 transition">
        {text}
      </Link>
    </li>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <Link
      href={href}
      className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
    >
      <Image src={icon} alt="" width={18} height={18} />
    </Link>
  )
}
