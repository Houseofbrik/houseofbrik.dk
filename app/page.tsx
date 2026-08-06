"use client";

import { useState } from "react";

type View = "home" | "events" | "findos" | "praktisk" | "booking";

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [isMapOpen, setIsMapOpen] = useState(false);

  const goHome = () => {
    setView("home");
    setIsMapOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToView = (nextView: View) => {
    setView(nextView);
    setIsMapOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#162F24] text-[#F5F1E8]">
      {/* Fast vandmærke */}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 top-[126px] z-0 flex items-center justify-center overflow-hidden md:top-[142px]">
        <img
          src="/logo-watermark-transparent.png"
          alt=""
          aria-hidden="true"
          className="max-h-full max-w-full select-none object-contain opacity-[0.34]"
          style={{
            width: "min(58vw, 660px)",
            height: "auto",
            filter: "brightness(0.28) contrast(1.6) blur(0.2px)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Mørk vignette */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 top-[88px] z-0 bg-[radial-gradient(circle_at_center,rgba(22,47,36,0.00)_0%,rgba(22,47,36,0.06)_52%,rgba(14,29,21,0.62)_100%)] md:top-[104px]" />

      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#163224]/70 px-4 py-3 backdrop-blur-xl sm:px-6 md:px-14">
        <div className="flex items-center gap-7 md:gap-12">
          <button
            onClick={goHome}
            className="relative z-[60] transition duration-200 hover:scale-[1.04] hover:opacity-90"
            type="button"
            aria-label="Gå til forsiden"
          >
            <img
              src="/logo-watermark-transparent.png"
              alt="House of Brik"
              className="h-20 w-20 object-contain md:h-24 md:w-24"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(93%) sepia(13%) saturate(375%) hue-rotate(334deg) brightness(105%) contrast(94%)",
              }}
            />
          </button>

          <nav className="hidden items-center gap-12 text-sm text-[#F5F1E8]/80 md:flex">
            <button onClick={goHome} className="transition hover:text-white">
              Home
            </button>

            <button
              onClick={() => goToView("events")}
              className="transition hover:text-white"
            >
              Events
            </button>

            <button
              onClick={() => goToView("findos")}
              className="transition hover:text-white"
            >
              Find os
            </button>

            <button
              onClick={() => goToView("praktisk")}
              className="transition hover:text-white"
            >
              Praktisk info
            </button>
          </nav>
        </div>

        <button
          onClick={() => goToView("booking")}
          className="rounded-full bg-[#214A34]/90 px-5 py-3 text-xs font-semibold text-[#F5F1E8] shadow-lg shadow-black/20 transition hover:bg-[#2B5B41] sm:px-6 md:px-7 md:py-4 md:text-sm"
          type="button"
        >
          Book bord
        </button>
      </header>

      {view === "home" ? (
        <HomePage onOpenMap={() => setIsMapOpen(true)} />
      ) : view === "events" ? (
        <EventsPage />
      ) : view === "findos" ? (
        <FindUsPage onOpenMap={() => setIsMapOpen(true)} />
      ) : view === "booking" ? (
        <InfoPage label="Book bord" title="Booking åbner snart." />
      ) : (
        <InfoPage label="Praktisk info" title="Kommer snarest." />
      )}

      {isMapOpen && <MapModal onClose={() => setIsMapOpen(false)} />}
    </main>
  );
}

function HomePage({ onOpenMap }: { onOpenMap: () => void }) {
  return (
    <section className="relative z-10 px-6 pt-24 text-center md:pt-28">
      <div className="mx-auto flex min-h-screen max-w-6xl -translate-y-8 flex-col items-center justify-center">
        <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
          Mere nærvær,
          <br />
          Mindre skærm,
          <br />
          Offline hygge starter her!
        </h1>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 pb-16 md:grid-cols-3">
        <div className="rounded-2xl bg-[#F5F1E8] px-8 py-8 text-center text-[#314B39] shadow-xl shadow-black/20">
          <div className="mb-4 text-4xl">♕</div>

          <h3 className="mb-3 text-xl font-medium">+300 spil</h3>

          <p className="leading-7 text-[#314B39]/85">
            Brætspil og kortspil til alle aldre og niveauer.
          </p>
        </div>

        <div className="rounded-2xl bg-[#F5F1E8] px-8 py-8 text-center text-[#314B39] shadow-xl shadow-black/20">
          <div className="mb-4 flex justify-center">
            <svg width="38" height="38" viewBox="0 0 64 64" fill="none">
              <circle
                cx="32"
                cy="32"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                d="M32 12V52"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M15 22L49 42"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M15 42L49 22"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="32" cy="32" r="3.5" fill="currentColor" />
            </svg>
          </div>

          <h3 className="mb-3 text-xl font-medium">Til alle</h3>

          <p className="leading-7 text-[#314B39]/85">
            Familie, venner, kollegaer - alle er velkomne.
          </p>
        </div>

        <div className="rounded-2xl bg-[#F5F1E8] px-8 py-8 text-center text-[#314B39] shadow-xl shadow-black/20">
          <div className="mb-4 flex justify-center">
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
              <path
                d="M24 20C20 16 28 13 24 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M32 20C28 16 36 13 32 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M40 20C36 16 44 13 40 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M16 26H43V36C43 44 38 49 30 49H29C21 49 16 44 16 36V26Z"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <path
                d="M43 30H48C53 30 55 33 54 37C53 42 49 44 43 43"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 55H48"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3 className="mb-3 text-xl font-medium">
            Hyggelig atmosfære
          </h3>

          <p className="leading-7 text-[#314B39]/85">
            Slap af og nyd et godt spil i rolige omgivelser.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 pb-20 md:grid-cols-2">
        <div className="rounded-2xl bg-[#2C4934] px-8 py-8 text-left shadow-xl shadow-black/20">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#9FB69F]">
            Åbningstider
          </p>

          <p className="text-2xl leading-10">
            Man-fre: 12-22
            <br />
            Lør-søn: 10-22
          </p>
        </div>

        <button
          onClick={onOpenMap}
          className="group rounded-2xl bg-[#2C4934] px-8 py-8 text-left shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#355842]"
          type="button"
          aria-label="Se kort og adresse"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#9FB69F]">
                Find os
              </p>

              <p className="text-2xl leading-9">
                Likørstræde 3
                <br />
                <span className="text-lg text-[#F5F1E8]/75">
                  2800 Kongens Lyngby
                </span>
              </p>
            </div>

            <span
              aria-hidden="true"
              className="mt-1 text-2xl text-[#F5F1E8]/60 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F5F1E8]"
            >
              ↗
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}

function EventsPage() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-16 pt-36 md:pt-44">
      <div className="max-w-4xl rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/80 px-8 py-12 shadow-2xl shadow-black/30 backdrop-blur-md md:px-16 md:py-16">
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#9FB69F]">
          Events
        </p>

        <h1 className="mb-8 font-serif text-4xl text-[#F5F1E8] md:text-6xl">
          Events hos House of Brik
        </h1>

        <div className="space-y-6 text-base leading-8 text-[#D6D1C7] md:text-lg md:leading-9">
          <p>
            Leder du efter de perfekte rammer til din næste begivenhed? Hos
            House of Brik skaber vi unikke og inspirerende omgivelser til
            receptioner, bogudgivelser, netværksarrangementer,
            produktlanceringer, virksomhedsevents og andre særlige anledninger.
          </p>

          <p>
            Med vores karakterfulde atmosfære og fleksible lokaler får dit
            arrangement de bedste forudsætninger for at gøre et varigt indtryk
            på dine gæster. Uanset om du planlægger en intim sammenkomst eller
            et større event, hjælper vi gerne med at skabe en oplevelse, der
            bliver husket.
          </p>

          <p>
            Kontakt os for at høre mere om mulighederne eller få et
            uforpligtende tilbud på:
          </p>

          <a
            href="mailto:info@houseofbrik.dk"
            className="inline-block font-semibold text-[#F4E1CA] underline decoration-[#F4E1CA]/40 underline-offset-4 transition hover:text-white"
          >
            info@houseofbrik.dk
          </a>
        </div>
      </div>
    </section>
  );
}

function FindUsPage({ onOpenMap }: { onOpenMap: () => void }) {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-16 pt-36 md:pt-44">
      <div className="w-full max-w-4xl rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/80 px-8 py-12 text-center shadow-2xl shadow-black/30 backdrop-blur-md md:px-16 md:py-16">
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#9FB69F]">
          Find os
        </p>

        <h1 className="mb-5 font-serif text-4xl text-[#F5F1E8] md:text-6xl">
          Midt i Lyngby
        </h1>

        <p className="mb-9 text-lg leading-8 text-[#D6D1C7] md:text-xl">
          Likørstræde 3
          <br />
          2800 Kongens Lyngby
        </p>

        <button
          onClick={onOpenMap}
          className="rounded-full bg-[#F5F1E8] px-7 py-4 text-sm font-semibold text-[#183226] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
          type="button"
        >
          Se kort og rute
        </button>
      </div>
    </section>
  );
}

function InfoPage({ label, title }: { label: string; title: string }) {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-28 text-center">
      <div className="max-w-4xl rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/70 px-8 py-14 shadow-2xl shadow-black/30 backdrop-blur-md md:px-16">
        <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#7FA083]">
          {label}
        </p>

        <h1 className="font-serif text-4xl md:text-6xl">{title}</h1>
      </div>
    </section>
  );
}

function MapModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08130E]/85 px-4 py-8 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="map-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-full w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#183226] p-3 shadow-2xl shadow-black/60 sm:p-5"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Luk kort"
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#10251A]/90 text-xl text-[#F5F1E8] shadow-lg backdrop-blur-md transition hover:bg-[#284B37]"
        >
          ×
        </button>

        <div className="overflow-hidden rounded-[1.5rem] bg-[#F5F1E8]">
          <img
            src="/find-os-kort.png"
            alt="Kort over House of Briks placering på Likørstræde 3 i Kongens Lyngby"
            className="h-auto max-h-[62vh] w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 px-3 pb-3 pt-7 sm:flex-row sm:items-end sm:justify-between sm:px-5 sm:pb-5">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#9FB69F]">
              Find os
            </p>

            <h2
              id="map-modal-title"
              className="font-serif text-3xl text-[#F5F1E8] sm:text-4xl"
            >
              Likørstræde 3
            </h2>

            <p className="mt-2 text-[#D6D1C7]">
              2800 Kongens Lyngby
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Likørstræde+3,+2800+Kongens+Lyngby"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#F5F1E8] px-6 py-4 text-sm font-semibold text-[#183226] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Åbn i Google Maps
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}