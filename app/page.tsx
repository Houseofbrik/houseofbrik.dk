"use client";

import { useState, type ReactNode } from "react";

type View = "home" | "events" | "findos" | "praktisk" | "booking";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps?q=55.769296185603004,12.504498671447118";

export default function Home() {
  const [view, setView] = useState<View>("home");

  const goHome = () => {
    setView("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToView = (nextView: View) => {
    setView(nextView);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#162F24] text-[#F5F1E8]">
      {/* FAST VANDMÆRKE */}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 top-[104px] z-0 flex items-center justify-center overflow-hidden md:top-[120px]">
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

      {/* MØRK VIGNETTE */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 top-[88px] z-0 bg-[radial-gradient(circle_at_center,rgba(22,47,36,0.00)_0%,rgba(22,47,36,0.06)_52%,rgba(14,29,21,0.62)_100%)] md:top-[104px]" />

      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#163224]/70 px-4 py-3 backdrop-blur-xl sm:px-6 md:px-14">
        <div className="mx-auto flex w-full max-w-[1500px] items-center">
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
              <button
                onClick={goHome}
                className="transition hover:text-white"
                type="button"
              >
                Home
              </button>

              <button
                onClick={() => goToView("events")}
                className="transition hover:text-white"
                type="button"
              >
                Events
              </button>

              <button
                onClick={() => goToView("findos")}
                className="transition hover:text-white"
                type="button"
              >
                Find os
              </button>

              <button
                onClick={() => goToView("praktisk")}
                className="transition hover:text-white"
                type="button"
              >
                Praktisk info
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* SIDER */}
      {view === "home" ? (
        <HomePage
          onOpenFindUs={() => goToView("findos")}
          onOpenBooking={() => goToView("booking")}
        />
      ) : view === "events" ? (
        <EventsPage />
      ) : view === "findos" ? (
        <FindUsPage />
      ) : view === "booking" ? (
        <InfoPage label="Book bord" title="Booking åbner snart." />
      ) : (
        <InfoPage label="Praktisk info" title="Kommer snarest." />
      )}
    </main>
  );
}

function HomePage({
  onOpenFindUs,
  onOpenBooking,
}: {
  onOpenFindUs: () => void;
  onOpenBooking: () => void;
}) {
  return (
    <section className="relative z-10 px-5 pb-20 pt-24 text-center sm:px-6 md:pt-28">
      {/* HERO */}
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center pb-8 pt-12 sm:min-h-[62vh] md:pb-10">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#A7BCA8] sm:text-sm">
          Spil • Smil • Sjov
        </p>

        <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
          Mere nærvær,
          <br />
          Mindre skærm,
          <br />
          Offline hygge starter her!
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#D6D1C7] sm:text-lg md:text-xl">
          En varm og afslappet boardgame lounge midt i Kongens Lyngby — skabt
          til gode spil, kaffe og tid sammen.
        </p>

        <button
          onClick={onOpenBooking}
          type="button"
          className="mt-9 min-w-[220px] rounded-full bg-[#F5F1E8] px-10 py-5 text-base font-semibold text-[#183226] shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:bg-white sm:min-w-[250px] sm:px-12 sm:py-5 sm:text-lg"
        >
          Book bord
        </button>

        <button
          onClick={onOpenFindUs}
          type="button"
          className="mt-7 text-sm leading-7 text-[#D6D1C7] transition hover:text-white"
        >
          <span className="block font-medium text-[#F5F1E8]">
            Likørstræde 3 · 2800 Kongens Lyngby
          </span>

          <span className="block text-[#D6D1C7]/80">
            Man–ons 09–19 · Tor–søn 09–21
          </span>
        </button>
      </div>

      {/* TRE HVIDE KORT */}
      <div className="mx-auto grid max-w-5xl gap-4 pb-16 md:grid-cols-3">
        <FeatureCard
          icon={<span className="text-3xl">♕</span>}
          title="+300 spil"
          text="Brætspil og kortspil til alle aldre og niveauer."
        />

        <FeatureCard
          icon={
            <svg
              width="34"
              height="34"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
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
          }
          title="Til alle"
          text="Familie, venner, kollegaer – alle er velkomne."
        />

        <FeatureCard
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
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
          }
          title="Hyggelig atmosfære"
          text="Slap af og nyd et godt spil i rolige omgivelser."
        />
      </div>

      <button
        onClick={onOpenFindUs}
        type="button"
        className="rounded-full border border-[#F5F1E8]/20 px-7 py-4 text-sm font-medium text-[#F5F1E8] transition duration-300 hover:-translate-y-0.5 hover:border-[#F5F1E8]/40 hover:bg-[#F5F1E8]/5"
      >
        Find os og se ruten
      </button>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl bg-[#F5F1E8] px-6 py-6 text-center text-[#314B39] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1">
      <div className="mb-4 flex min-h-10 items-center justify-center text-[#314B39]">
        {icon}
      </div>

      <h2 className="mb-2 font-serif text-xl">{title}</h2>

      <p className="text-sm leading-6 text-[#314B39]/80">{text}</p>
    </article>
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

function FindUsPage() {
  return (
    <section className="relative z-10 min-h-screen px-5 pb-20 pt-32 sm:px-6 md:pt-40">
      <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#9FB69F]">
          Find os
        </p>

        <h1 className="font-serif text-4xl leading-tight text-[#F5F1E8] sm:text-5xl md:text-7xl">
          Find vej til
          <br />
          House of Brik
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#D6D1C7] sm:text-lg md:text-xl">
          Midt i hjertet af Kongens Lyngby – få minutters gang fra stationen.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/75 shadow-2xl shadow-black/30 sm:min-h-[520px]"
          aria-label="Åbn House of Briks placering i Google Maps"
        >
          <img
            src="/find-os-kort.png"
            alt="Kort over House of Brik på Likørstræde 3 i Kongens Lyngby"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1E15]/55 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 rounded-2xl border border-white/10 bg-[#132A1E]/75 p-5 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A6BDA7]">
                House of Brik
              </p>

              <p className="mt-2 font-serif text-2xl text-[#F5F1E8] sm:text-3xl">
                Likørstræde 3
              </p>

              <p className="mt-1 text-sm text-[#D6D1C7] sm:text-base">
                2800 Kongens Lyngby
              </p>
            </div>

            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5F1E8] text-xl text-[#183226] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </div>
        </a>

        <div className="rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/82 p-7 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-9">
          <div className="border-b border-white/10 pb-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[#9FB69F]">
              Adresse
            </p>

            <h2 className="mt-4 font-serif text-3xl text-[#F5F1E8] sm:text-4xl">
              House of Brik
            </h2>

            <p className="mt-4 text-lg leading-8 text-[#D6D1C7]">
              Likørstræde 3
              <br />
              2800 Kongens Lyngby
            </p>
          </div>

          <div className="divide-y divide-white/10">
            <InformationRow
              icon="🚆"
              title="Fra Lyngby Station"
              text="Få minutters gang fra stationen."
            />

            <InformationRow
              icon="🚗"
              title="Parkering"
              text="Der findes flere parkeringsmuligheder få minutters gang fra caféen."
            />

            <InformationRow
              icon="☕"
              title="Midt i byen"
              text="Perfekt placeret blandt caféer, restauranter og butikker."
            />

            <InformationRow
              icon="🕒"
              title="Åbningstider"
              text={
                <>
                  Mandag–onsdag: 09.00–19.00
                  <br />
                  Torsdag–søndag: 09.00–21.00
                </>
              }
            />
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#F5F1E8] px-6 py-4 text-sm font-semibold text-[#183226] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Åbn i Google Maps
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-[#F5F1E8]/10 bg-[#294633]/70 px-7 py-10 text-center shadow-xl shadow-black/20 backdrop-blur-md sm:px-10 md:mt-10 md:py-14">
        <p className="font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
          Vi glæder os til at byde dig velkommen.
        </p>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#D6D1C7] sm:text-lg">
          Uanset om du kommer for et hurtigt spil, en kop kaffe eller en hel
          aften med vennerne, glæder vi os til at skabe rammerne om en hyggelig
          oplevelse.
        </p>
      </div>
    </section>
  );
}

function InformationRow({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: ReactNode;
}) {
  return (
    <div className="flex gap-4 py-6">
      <span
        aria-hidden="true"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#294633] text-lg"
      >
        {icon}
      </span>

      <div>
        <h3 className="font-medium text-[#F5F1E8]">{title}</h3>

        <div className="mt-2 text-sm leading-7 text-[#D6D1C7]">{text}</div>
      </div>
    </div>
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