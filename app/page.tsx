import type { Metadata } from "next";
import HouseOfBrikClient from "./HouseOfBrikClient";

export const metadata: Metadata = {
  title: "Brætspilscafé i Lyngby | House of Brik",
  description:
    "Leder du efter noget hyggeligt at lave i Lyngby? Besøg House of Brik – en moderne brætspilscafé med spil, kaffe og hyggelige oplevelser for venner, par og familier.",
};

export default function Page() {
  return <HouseOfBrikClient />;
}