"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Sparkles,
  Settings,
  Layers
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Meta Ad stats",
    href: "/metastats",
    icon: BarChart3,
  },
  {
    label: "Competitor list",
    href: "/competitor_list",
    icon: Users,
  },
  {
    label: "Feature 4",
    href: "#",
    icon: Sparkles,
  },
  {
    label: "Feature 5",
    href: "#",
    icon: Layers,
  },
  {
    label: "Feature 6",
    href: "#",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white px-4 py-6">
      {/* Store */}
      <div className="flex items-center gap-2 mb-6 font-semibold text-gray-700">
        <Image src="/img/shopify.png" alt="Shopify" width={16} height={16} />
        AnnaMariusOslo.com
      </div>
  
  {/* Divider */}
<div className="my-4 border-t border-gray-200" />

      {/* Menu */}
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
