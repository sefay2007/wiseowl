"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setOpen(false);
    router.push("/");
  };

  const goToDashboard = () => {
  setOpen(false);
  router.push("/dashboard");
};

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        
        <Link href="/">
          <Image
            src="/img/wiseowl-logo.png"
            alt="WiseOwl Logo"
            width={180}
            height={180}
            className="cursor-pointer"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="#" className="hover:text-gray-900">
            FEATURES
          </Link>
          <Link href="#" className="hover:text-gray-900">
            RESOURCES
          </Link>
          <Link href="/pricing" className="hover:text-gray-900">
            PRICING
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            CONTACT
          </Link>
        </nav>

        <div className="flex items-center gap-4 relative">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                LOG IN
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                BOOK DEMO →
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => setOpen(!open)}
                className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
              >
                👤
              </button>

              {open && (
                <div className="absolute right-0 top-12 w-44 rounded-lg border bg-white shadow-md overflow-hidden">
                  
                  <button
                    onClick={goToDashboard}
                    className="cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </button>

                  <button
                    onClick={handleLogout}
                    className="cursor-pointer w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Log out
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
