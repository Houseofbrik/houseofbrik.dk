import type { Metadata } from "next";
import HouseOfBrikClient from "../HouseOfBrikClient";

export const metadata: Metadata = {
  title: "Menukort | House of Brik – Café i Kongens Lyngby",
  description:
    "Se menukortet hos House of Brik i Kongens Lyngby. Nyd kaffe, kolde drikke, panini, snacks og søde fristelser i hyggelige omgivelser med brætspil.",
};

export default function MenuPage() {
  return <HouseOfBrikClient initialView="menu" />;
}