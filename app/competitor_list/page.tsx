"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CompetitorsTable from "@/components/competitors/CompetitorsTable";
import AddCompetitorModal from "@/components/competitors/CompTable";
import { Competitor } from "../types/competitor";
import { getCompetitors, saveCompetitors } from "../lib/competitorsStorage";

export default function CompetitorsPage() {
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCompetitors(getCompetitors());
  }, []);

  function addCompetitor(newOne: Competitor) {
    const updated = [...competitors, newOne];
    setCompetitors(updated);
    saveCompetitors(updated);
  }

  function deleteCompetitor(id: string) {
  const updated = competitors.filter((c) => c.id !== id);
  setCompetitors(updated);
  saveCompetitors(updated);
}


  return (
    <div>
      <Header />
      <DashboardLayout>
        <div className="flex justify-between mb-6">
          <h1 className="text-xl font-semibold">Competitors list</h1>

          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 rounded bg-blue-600 text-white px-4 py-2 rounded-md text-sm
    transition-all duration-200 ease-out
    hover:bg-blue-700
    hover:shadow-md
    active:translate-y-0
    active:shadow-sm
    focus:outline-none
    cursor-pointer
    focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            + Add new store
          </button>
        </div>

<CompetitorsTable
  competitors={competitors}
  onDelete={deleteCompetitor}
/>
      </DashboardLayout>

      <AddCompetitorModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onAdd={addCompetitor}
      />

      <Footer />
    </div>
  );
}
