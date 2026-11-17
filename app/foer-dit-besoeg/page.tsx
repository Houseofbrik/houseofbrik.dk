import type { Metadata } from "next";
import HouseOfBrikClient from "../HouseOfBrikClient";

export const metadata: Metadata = {
  title: "Før dit besøg | House of Brik – Brætspilscafé i Lyngby",
  description:
    "Skal du besøge House of Brik i Kongens Lyngby? Se, hvordan vores brætspilscafé fungerer, og glæd dig til hyggelige stunder med spil, venner og familie.",
};

export default function FoerDitBesoegPage() {
  return <HouseOfBrikClient initialView="praktisk" />;
}