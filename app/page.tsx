"use client";

import { useState, type ReactNode } from "react";

type View = "home" | "welcome" | "events" | "findos" | "praktisk" | "booking";

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
      <div className="pointer-events-none fixed inset-x-0 bottom-4 top-[104px] z-0 flex items-center justify-center overflow-hidden md:top-[112px]">
        <img
          src="/logo-watermark-transparent.png"
          alt=""
          aria-hidden="true"
          className="max-h-full max-w-full select-none object-contain opacity-[0.34]"
          style={{
            width: "min(54vw, 620px)",
            height: "auto",
            filter: "brightness(0.28) contrast(1.6) blur(0.2px)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* MØRK VIGNETTE */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 top-[88px] z-0 bg-[radial-gradient(circle_at_center,rgba(22,47,36,0.00)_0%,rgba(22,47,36,0.06)_52%,rgba(14,29,21,0.62)_100%)] md:top-[104px]" />

      {/* HEADER */}
<header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#163224]/75 px-4 py-3 backdrop-blur-xl sm:px-6 md:px-12">        <div className="mx-auto flex w-full max-w-[1500px] items-center">
          <div className="flex items-center gap-7 md:gap-12">
            {/* LOGO */}
            <button
              onClick={goHome}
              className="relative z-[60] transition duration-200 hover:scale-[1.04] hover:opacity-90"
              type="button"
              aria-label="Gå til forsiden"
            >
              <img
                src="/logo-watermark-transparent.png"
                alt="House of Brik"
className="h-24 w-24 object-contain md:h-28 md:w-28"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(93%) sepia(13%) saturate(375%) hue-rotate(334deg) brightness(105%) contrast(94%)",
                }}
              />
            </button>

            {/* NAVIGATION */}
            <nav className="hidden items-center gap-8 text-sm text-[#F5F1E8]/80 md:flex">
              <button
                onClick={() => goToView("welcome")}
                className="transition hover:text-white"
                type="button"
              >
                Velkommen
              </button>

              <button
                onClick={() => goToView("booking")}
                type="button"
                className="rounded-full bg-[#F5F1E8] px-6 py-3 font-semibold text-[#183226] shadow-lg shadow-black/15 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
              >
                Book bord
              </button>

              <button
                onClick={() => goToView("praktisk")}
                className="transition hover:text-white"
                type="button"
              >
                Før dit besøg
              </button>

              <button
                onClick={() => goToView("findos")}
                className="transition hover:text-white"
                type="button"
              >
                Kontakt
              </button>

              <button
                onClick={() => goToView("events")}
                className="transition hover:text-white"
                type="button"
              >
                Events
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
      ) : view === "welcome" ? (
  <WelcomePage />
) : view === "events" ? (
  <EventsPage />
      ) : view === "findos" ? (
        <FindUsPage />
      ) : view === "booking" ? (
        <InfoPage label="Book bord" title="Booking åbner snart." />
      ) : (
        <InfoPage label="Før dit besøg" title="Kommer snarest." />
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
    <section className="relative z-10 px-4 pb-8 pt-[128px] text-center sm:px-6 md:pt-[140px]">
      {/* USP-KORT ØVERST */}
      <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-3">
        <FeatureCard
          icon={<span className="text-xl">♕</span>}
          title="+300 spil"
          text="Brætspil og kortspil til alle aldre og niveauer."
        />

        <FeatureCard
          icon={
            <svg
              width="25"
              height="25"
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
          text="Familie, venner og kollegaer – alle er velkomne."
        />

        <FeatureCard
          icon={
            <svg
              width="29"
              height="29"
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

      {/* KOMPAKT HERO */}
      <div className="mx-auto flex min-h-[calc(100svh-300px)] max-w-6xl flex-col items-center justify-center py-5 md:min-h-[calc(100svh-274px)] md:py-4">
        <p className="mb-3 text-[10px] uppercase tracking-[0.42em] text-[#A7BCA8] sm:text-xs">
          Spil • Smil • Sjov
        </p>

        <h1 className="font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          Mere nærvær,
          <br />
          Mindre skærm,
          <br />
          Offline hygge starter her!
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#D6D1C7] sm:text-base sm:leading-7 md:text-lg">
          En varm og afslappet boardgame lounge midt i Kongens Lyngby – skabt
          til gode spil, kaffe og tid sammen.
        </p>

        <button
          onClick={onOpenBooking}
          type="button"
          className="mt-5 min-w-[220px] rounded-full bg-[#F5F1E8] px-10 py-4 text-base font-semibold text-[#183226] shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:bg-white sm:min-w-[250px] sm:px-12 sm:text-lg"
        >
          Book bord
        </button>

        <button
          onClick={onOpenFindUs}
          type="button"
          className="mt-4 text-xs leading-6 text-[#D6D1C7] transition hover:text-white sm:text-sm"
        >
          <span className="block font-medium text-[#F5F1E8]">
            Likørstræde 3 · 2800 Kongens Lyngby
          </span>

          <span className="block text-[#D6D1C7]/80">
            Man–ons 09–19 · Tor–søn 09–21
          </span>
        </button>
      </div>
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
    <article className="rounded-[1.35rem] border border-[#314B39]/5 bg-[#F5F1E8] px-5 py-4 text-center text-[#314B39] shadow-lg shadow-black/15 transition duration-300 hover:-translate-y-0.5">
      <div className="mb-1 flex min-h-7 items-center justify-center text-[#314B39]">
        {icon}
      </div>

      <h2 className="font-serif text-lg leading-tight md:text-xl">{title}</h2>

      <p className="mx-auto mt-1.5 max-w-xs text-xs leading-5 text-[#314B39]/75 md:text-sm">
        {text}
      </p>
    </article>
  );
}
function WelcomePage() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-5 pt-24 md:pt-28">
      <div className="w-full max-w-5xl rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/80 px-8 py-7 shadow-2xl shadow-black/30 backdrop-blur-md md:px-14 md:py-8">
        <p className="mb-2 text-center text-xs uppercase tracking-[0.4em] text-[#9FB69F] md:text-sm">
          Velkommen
        </p>

        <h1 className="text-center font-serif text-4xl leading-tight text-[#F5F1E8] md:text-5xl">
          Det næste træk er dit…
        </h1>

        <div className="mx-auto mt-5 max-w-4xl space-y-3 text-base leading-6 text-[#D6D1C7] md:text-[17px] md:leading-7">
          <p className="text-center text-lg font-medium leading-7 text-[#F5F1E8]">
            Tag plads ved bordet, vælg et spil, bestil en god kop kaffe, en
            forfriskende drik eller en let snack – og nyd et par timer, hvor
            nærvær, fællesskab og hygge er i centrum.
          </p>

          <p>
            House of Brik blev skabt med en enkel ambition: at skabe et
            samlingssted, hvor mennesker samles omkring et bord, nærvær får
            plads, og gode oplevelser opstår helt naturligt.
          </p>

          <p>
            Her handler det ikke om at skynde sig videre. Her handler det om at
            sætte tempoet ned, lægge telefonen væk og nyde tiden sammen med
            familie, venner, kolleger eller én, du holder af.
          </p>

          <p>
            Hos os finder du{" "}
            <strong className="font-semibold text-[#F5F1E8]">+300</strong>{" "}
            moderne bræt- og kortspil – fra de velkendte klassikere til nye
            favoritter, der venter på at blive opdaget. Uanset om du er erfaren
            brætspiller eller aldrig har prøvet moderne brætspil før, er der
            noget for alle – uanset erfaring og alder.
          </p>

          <div className="pt-2 text-center">
            <p className="font-serif text-xl text-[#F5F1E8] md:text-2xl">
              House of Brik handler ikke kun om spil.
            </p>

            <p className="mt-1">
              Det handler om nærvær, fællesskab og gode oplevelser.
            </p>

            <p className="mt-3 font-semibold text-[#F5F1E8]">
              Vi glæder os til at se dig.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsPage() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-16 pt-32 md:pt-36">
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
    <section className="relative z-10 min-h-screen px-5 pb-20 pt-28 sm:px-6 md:pt-32">
      <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#9FB69F]">
          Kontakt
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
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24 text-center">
      <div className="max-w-4xl rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/70 px-8 py-14 shadow-2xl shadow-black/30 backdrop-blur-md md:px-16">
        <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#7FA083]">
          {label}
        </p>

        <h1 className="font-serif text-4xl md:text-6xl">{title}</h1>
      </div>
    </section>
  );
}