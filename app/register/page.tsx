"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // later backend / auth
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center px-8 py-6">
        <Link href="/">
            <img src="/img/wiseowl-logo.png" alt="WiseOwl Logo" className="h-15 ml-16" />
        </Link>
      </header>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-4xl">
          
          {/* Login link (rechtsboven buiten card) */}
          <div className="flex justify-end mb-2">
            <p className="text-sm text-gray-500">
              Already have account?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:underline font-medium cursor-pointer"
              >
                Log in
              </Link>
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="p-10">
              <h1 className="text-black text-2xl font-semibold mb-1">
                Start now for free!
              </h1>
              <p className="text-sm text-gray-500 mb-6">
                Sign today and benefit of our 7 days free trial
              </p>

              {/* Name + Surname */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Surname
                  </label>
                  <input
                    name="surname"
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Repeat password
                  </label>
                  <input
                    type="password"
                    name="repeatPassword"
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer"
              >
                Start for free
              </button>
            </form>

            {/* Right side image */}
            <div className="hidden md:flex items-center justify-center p-6">
              <Image
                src="/img/owl.png"
                alt="WiseOwl"
                width={400}
                height={400}
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
