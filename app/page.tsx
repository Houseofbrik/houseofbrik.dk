"use client";

import { useState } from "react";

type View = "home" | "events" | "findos" | "praktisk" | "booking";

export default function Home() {
  const [view, setView] = useState<View>("home");

  const goHome = () => {
    setView("home");
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
              onClick={() => setView("events")}
              className="transition hover:text-white"
            >
              Events
            </button>
            <button
              onClick={() => setView("findos")}
              className="transition hover:text-white"
            >
              Find os
            </button>
            <button
              onClick={() => setView("praktisk")}
              className="transition hover:text-white"
            >
              Praktisk info
            </button>
          </nav>
        </div>

        <button
          onClick={() => setView("booking")}
          className="rounded-full bg-[#214A34]/90 px-5 py-3 text-xs font-semibold text-[#F5F1E8] shadow-lg shadow-black/20 transition hover:bg-[#2B5B41] sm:px-6 md:px-7 md:py-4 md:text-sm"
        >
          Book bord
        </button>
      </header>

      {view === "home" ? (
        <HomePage setView={setView} />
      ) : view === "events" ? (
        <EventsPage />
      ) : view === "findos" ? (
        <InfoPage
          label="Find os"
          title="Der går ikke lang tid før vi har etableret os i Lyngby... Vi glæder os!"
        />
      ) : view === "booking" ? (
        <InfoPage label="Book bord" title="Booking åbner snart." />
      ) : (
        <InfoPage label="Praktisk info" title="Kommer snarest." />
      )}
    </main>
  );
}

function HomePage({ setView }: { setView: (view: View) => void }) {
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
              <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="4" />
              <path d="M32 12V52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M15 22L49 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M15 42L49 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
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
              <path d="M24 20C20 16 28 13 24 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M32 20C28 16 36 13 32 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M40 20C36 16 44 13 40 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M16 26H43V36C43 44 38 49 30 49H29C21 49 16 44 16 36V26Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
              <path d="M43 30H48C53 30 55 33 54 37C53 42 49 44 43 43" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 55H48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="mb-3 text-xl font-medium">Hyggelig atmosfære</h3>
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
          onClick={() => setView("findos")}
          className="rounded-2xl bg-[#2C4934] px-8 py-8 text-left shadow-xl shadow-black/20 transition hover:bg-[#355842]"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#9FB69F]">
            Find os
          </p>
          <p className="text-2xl leading-10">Kgs. Lyngby</p>
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