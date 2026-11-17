import type { Metadata } from "next";
import HouseOfBrikClient from "../HouseOfBrikClient";

export const metadata: Metadata = {
  title: "Velkommen til House of Brik | Brætspilscafé i Lyngby",
  description:
    "Oplev House of Brik i Kongens Lyngby. En hyggelig brætspilscafé med spil, kaffe og nærvær. Et samlingssted for venner, familier og gode oplevelser.",
};

export default function VelkommenPage() {
  return <HouseOfBrikClient initialView="welcome" />;
}