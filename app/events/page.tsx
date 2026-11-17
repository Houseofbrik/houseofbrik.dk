import type { Metadata } from "next";
import HouseOfBrikClient from "../HouseOfBrikClient";

export const metadata: Metadata = {
  title: "Events og arrangementer | House of Brik i Lyngby",
  description:
    "Hold dit næste arrangement hos House of Brik i Kongens Lyngby. Vi tilbyder hyggelige rammer til firmaevents, receptioner, netværksarrangementer og særlige begivenheder.",
};

export default function EventsPage() {
  return <HouseOfBrikClient initialView="events" />;
}