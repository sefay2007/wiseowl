"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Competitor } from "../../app/types/competitor";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (competitor: Competitor) => void;
}

export default function AddCompetitorModal({ isOpen, onClose, onAdd }: Props) {
  const [form, setForm] = useState({
    storeName: "",
    website: "",
    fbLibrary: "",
    liveSince: "",
    activeAds: "",
    products: "",
    country: "",
    fbProfile: "",
    fbFollowers: "",
  });

  if (!isOpen) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onAdd({
      id: crypto.randomUUID(),
      storeName: form.storeName,
      website: form.website,
      fbLibrary: form.fbLibrary,
      liveSince: form.liveSince,
      activeAds: Number(form.activeAds),
      products: Number(form.products),
      country: form.country,
      fbProfile: form.fbProfile,
      fbFollowers: Number(form.fbFollowers),
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white w-full max-w-3xl rounded-xl shadow-xl p-6">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-semibold">Add new competitor</h2>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
          <Input name="storeName" label="Store name" onChange={handleChange} />
          <Input name="country" label="Country" onChange={handleChange} />

          <Input name="website" label="Website URL" onChange={handleChange} />
          <Input name="fbLibrary" label="FB Library URL" onChange={handleChange} />

          <Input type="date" name="liveSince" label="Live since" onChange={handleChange} />
          <Input type="number" name="activeAds" label="Active ads" onChange={handleChange} />

          <Input type="number" name="products" label="Number of products" onChange={handleChange} />
          <Input type="number" name="fbFollowers" label="FB followers" onChange={handleChange} />

          <div className="md:col-span-2">
            <Input name="fbProfile" label="FB profile URL" onChange={handleChange} />
          </div>

          <div className="md:col-span-2 flex justify-end gap-3 mt-6">
            <button type="button" onClick={onClose} className="border px-4 py-2 rounded cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm
              transition-all duration-200 ease-out
              hover:bg-blue-700
              hover:shadow-md
              active:translate-y-0
              active:shadow-sm
              focus:outline-none
              cursor-pointer
              focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Save competitor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", onChange }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className="w-full border px-3 py-2 rounded mt-1"
      />
    </div>
  );
}
