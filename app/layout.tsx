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
  title: "House of Brik | Brætspilscafé & Café i Kongens Lyngby",
  description: "House of Brik er en hyggelig café og brætspilscafé i Kongens Lyngby. Nyd god kaffe, kolde drikke, snacks og brætspil i afslappede omgivelser med venner og familie.",  icons: {
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
              url: "https://www.houseofbrik.dk",
              description:
                "House of Brik er en moderne café og brætspilscafé (board game café) i Kongens Lyngby. Et hyggeligt samlingssted med brætspil, kaffe, snacks og gode oplevelser.",
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