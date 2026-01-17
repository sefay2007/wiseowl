"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "sefay211@gmail.com" && password === "123") {
  localStorage.setItem("loggedIn", "true");
  router.push("/dashboard");
} else {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <Link href="/">
            <img src="/img/wiseowl-logo.png" alt="WiseOwl Logo" className="h-15 ml-16" />
        </Link>
      </header>

      {/* Card */}
      <div className="flex flex-1 items-center justify-center">
  <div className="w-full max-w-3xl">
  {/* Register link rechtsboven buiten card */}
  <div className="flex justify-end mb-2">
    <p className="text-sm text-gray-500">
      Don&apos;t have account yet?{" "}
      <Link
        href="/register"
        className="text-blue-600 hover:underline font-medium"
      >
        Register
      </Link>
    </p>
  </div>

  {/* Login card */}
  <div className="bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
    {/* Form */}
    <form onSubmit={handleLogin} className="p-10">
      <h1 className="text-black text-2xl font-semibold mb-6">Log in</h1>

      <div className="mb-4">
        <label className="block text-sm text-black mb-1">
          Email address
        </label>
        <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border rounded-md px-3 py-2 
             text-black placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
/>
      </div>

      <div className="mb-2">
        <label className="block text-sm text-gray-600 mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="text-sm text-blue-600 mb-4 cursor-pointer">
        Forgot password?
      </div>

      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer"
      >
        Login
      </button>
    </form>

    {/* Right side image */}
    <div className="hidden md:flex items-center justify-center p-6">
      <Image
        src="/img/owl.png"
        alt="WiseOwl"
        width={360}
        height={360}
        className="object-contain"
        priority
      />
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
