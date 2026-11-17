import type { Metadata } from "next";
import HouseOfBrikClient from "../HouseOfBrikClient";

export const metadata: Metadata = {
  title: "Kontakt House of Brik | Brætspilscafé i Kongens Lyngby",
  description:
    "Find House of Brik på Likørstræde 3 i Kongens Lyngby. Se vores adresse, åbningstider og vej til brætspilscaféen tæt på Lyngby Station.",
};

export default function KontaktPage() {
  return <HouseOfBrikClient initialView="findos" />;
}