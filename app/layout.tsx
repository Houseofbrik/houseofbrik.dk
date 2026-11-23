import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brætspilscafé i Kongens Lyngby | House of Brik",
  description: "House of Brik er en hyggelig brætspilscafé i Kongens Lyngby. Gå på opdagelse i vores brætspil, og nyd kaffe, snacks og nærvær med venner og familie.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
  <html
     lang="da"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <body className="min-h-full flex flex-col">
      {children}
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
name: "House of Brik",
alternateName: "House of Brick",
url: "https://www.houseofbrik.dk",
              amenityFeature: [
  {
    "@type": "LocationFeatureSpecification",
    name: "Brætspil og kortspil",
    value: true,
  },
  {
    "@type": "LocationFeatureSpecification",
    name: "Sociale spiloplevelser for venner, par og familier",
    value: true,
  },
  {
    "@type": "LocationFeatureSpecification",
    name: "Indendørs aktiviteter",
    value: true,
  },
],
              description:
                "House of Brik er en moderne brætspilscafé og social café i Kongens Lyngby. Her mødes venner, par og familier om brætspil, kortspil, kaffe og hyggelige oplevelser. Et oplagt sted til en date, en hyggelig eftermiddag med familien eller en sjov aften med vennerne. House of Brik tilbyder indendørs aktiviteter og socialt samvær i afslappede, hyggelige omgivelser tæt på København.",
                address: {
                "@type": "PostalAddress",
                streetAddress: "Likørstræde 3",
                postalCode: "2800",
                addressLocality: "Kongens Lyngby",
                addressCountry: "DK",
              },
            }),
          }}
        />
      <Analytics />
    </body>
  </html>
);
}