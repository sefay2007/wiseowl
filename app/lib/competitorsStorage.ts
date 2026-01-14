import { Competitor } from "../types/competitor";

const STORAGE_KEY = "competitors";

export function getCompetitors(): Competitor[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function saveCompetitors(data: Competitor[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
