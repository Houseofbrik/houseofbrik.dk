"use client";

import { useState, type ReactNode } from "react";

type View = "home" | "welcome" | "events" | "findos" | "praktisk" | "booking" | "menu";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps?q=55.769296185603004,12.504498671447118";

export default function Home() {
  const [view, setView] = useState<View>("home");
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                onClick={() => goToView("praktisk")}
                className="transition hover:text-white"
                type="button"
              >
                Før dit besøg
              </button>
<button
  onClick={() => goToView("menu")}
  className="transition hover:text-white"
  type="button"
>
  Menu
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
{/* MOBIL MENU-KNAP */}
<button
  onClick={() => setIsMobileMenuOpen(true)}
  type="button"
  className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F1E8]/20 text-[#F5F1E8] transition hover:bg-[#F5F1E8]/10 md:hidden"
  aria-label="Åbn menu"
>
  <span className="flex flex-col gap-[5px]">
    <span className="block h-[1px] w-5 bg-current" />
    <span className="block h-[1px] w-5 bg-current" />
    <span className="block h-[1px] w-5 bg-current" />
  </span>
</button>
          </div>
        </div>
      </header>

{isMobileMenuOpen && (
  <div className="fixed inset-0 z-[100] md:hidden">
    <button
      type="button"
      aria-label="Luk menu"
      onClick={() => setIsMobileMenuOpen(false)}
      className="absolute inset-0 bg-black/40"
    />

    <div className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-[#163224] px-8 py-8 shadow-2xl">
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(false)}
        className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F1E8]/20 text-2xl text-[#F5F1E8]"
        aria-label="Luk menu"
      >
        ×
      </button>

      <nav className="mt-16 flex flex-col gap-8 font-serif text-3xl text-[#F5F1E8]">
        <button
          type="button"
          onClick={() => {
            goToView("welcome");
            setIsMobileMenuOpen(false);
          }}
          className="text-left"
        >
          Velkommen
        </button>

        <button
          type="button"
          onClick={() => {
            goToView("praktisk");
            setIsMobileMenuOpen(false);
          }}
          className="text-left"
        >
          Før dit besøg
        </button>

        <button
          type="button"
          onClick={() => {
            goToView("findos");
            setIsMobileMenuOpen(false);
          }}
          className="text-left"
        >
          Kontakt
        </button>

        <button
          type="button"
          onClick={() => {
            goToView("events");
            setIsMobileMenuOpen(false);
          }}
          className="text-left"
        >
          Events
        </button>
      </nav>
    </div>
  </div>
)}
{/* SIDER */}
      {/* SIDER */}
      {view === "home" ? (
        <HomePage
          onOpenFindUs={() => goToView("findos")}
          onOpenBooking={() => goToView("booking")}
        />
      ) : view === "welcome" ? (
  <WelcomePage />
) : view === "menu" ? (
<MenuPage />
) : view === "events" ? (
  <EventsPage />
      ) : view === "findos" ? (
        <FindUsPage />
      ) : view === "booking" ? (
        <InfoPage label="Book bord" title="Booking åbner snart." />
 ) : (
        <InfoPage
          label="Før dit besøg"
          title="De sidste brikker er ved at være på plads..."
        />
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
<section className="relative z-10 flex flex-col px-4 pb-6 pt-[140px] text-center sm:px-6 md:pt-[148px]">
      {/* USP-KORT ØVERST */}
    <div className="order-2 mx-auto grid w-full max-w-6xl gap-3 md:grid-cols-3">
        <FeatureCard
         icon={<span className="text-3xl leading-none">♕</span>}
      title="Masser af spil"
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
      <div className="order-1 mx-auto flex min-h-[calc(100svh-340px)] max-w-6xl flex-col items-center justify-center py-3 md:min-h-[calc(100svh-330px)] md:py-3">
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
<section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-5 pt-32 md:pt-36">
<div className="w-full max-w-5xl rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/80 px-8 pt-8 pb-16 shadow-2xl shadow-black/30 backdrop-blur-md">        <p className="mb-2 text-center text-xs uppercase tracking-[0.4em] text-[#9FB69F] md:text-sm">
          Velkommen
        </p>

       <h1 className="text-center font-serif text-4xl text-[#F5F1E8] md:text-4xl">
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
  Hos os finder du et stort udvalg af moderne bræt- og kortspil – fra de
  velkendte klassikere til nye favoritter, der venter på at blive opdaget.
  Uanset om du er erfaren brætspiller eller aldrig har prøvet moderne
  brætspil før, er der noget for alle – uanset erfaring og alder.
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



function MenuPage() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-5 pt-36 md:pt-40">
      <div className="w-full max-w-5xl rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/80 px-8 py-16 text-center shadow-2xl shadow-black/30 backdrop-blur-md">
        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#7FA083]">
          Menu
        </p>

        <h1 className="font-serif text-4xl text-[#F5F1E8] md:text-4xl">
          Kommer snarest…
        </h1>
      </div>
    </section>
  );
}function EventsPage() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-16 pt-32 md:pt-36">
   <div className="max-w-5xl rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/80 px-8 py-14 shadow-2xl shadow-black/30 backdrop-blur-md md:px-16 md:py-16">
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#9FB69F]">
  Events
</p>
        <h1 className="mb-5 font-serif text-4xl text-[#F5F1E8] md:text-4xl">
          Events hos House of Brik
        </h1>

        <div className="space-y-4 text-base leading-6 text-[#D6D1C7] md:text-[17px]">
  <p>

  Leder du efter de perfekte rammer til din næste begivenhed? Hos
  House of Brik skaber vi hyggelige og stemningsfulde omgivelser til
  receptioner, bogudgivelser, netværksarrangementer,
  produktlanceringer, virksomhedsevents og andre særlige anledninger.
</p>

<p>
  Med vores særlige atmosfære og fleksible lokaler er der plads til
  både den intime sammenkomst og det større arrangement. Vi hjælper
  gerne med at skabe de rette rammer, så I kan koncentrere jer om det
  vigtigste – at være sammen og få en god oplevelse.
</p>

<p>
  Kontakt os for at høre mere om mulighederne eller få et
  uforpligtende tilbud på:
</p>

<a
  href="mailto:info@houseofbrik.dk"
  className="inline-block font-semibold text-[#F4E1CA] underline decoration-[#F4E1CA]/40 underline-offset-4"
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
 <section className="relative z-10 min-h-screen px-5 pb-4 pt-32 sm:px-6 md:pb-4 md:pt-36">
     <div className="mx-auto mb-3 max-w-5xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#9FB69F]">
          Kontakt
        </p>

        <h1 className="font-serif text-4xl text-[#F5F1E8] md:text-4xl">
          Her finder du os
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-6 text-[#D6D1C7] md:text-[17px]">
          Midt i Kongens Lyngby – få minutters gang fra stationen.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl overflow-hidden rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/80 shadow-2xl shadow-black/30 backdrop-blur-md lg:grid-cols-[1.1fr_0.9fr]">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative min-h-[280px] overflow-hidden border-b border-[#F5F1E8]/10 lg:min-h-[360px] lg:border-b-0 lg:border-r lg:border-[#F5F1E8]/10"
          aria-label="Åbn House of Briks placering i Google Maps"
        >
          <img
            src="/find-os-kort.png"
            alt="Kort over House of Brik på Likørstræde 3 i Kongens Lyngby"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1F15]/65 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <div className="rounded-2xl border border-[#F5F1E8]/10 bg-[#14251C]/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.28em] text-[#9FB69F]">
                House of Brik
              </p>
              <p className="mt-2 font-serif text-2xl text-[#F5F1E8]">
                Likørstræde 3
              </p>
              <p className="mt-1 text-sm text-[#D6D1C7]">
                2800 Kongens Lyngby
              </p>
            </div>

            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5F1E8] text-xl text-[#14251C] shadow-lg">
              ↗
            </span>
          </div>
        </a>

        <div className="flex flex-col justify-center px-6 py-4 sm:px-6 sm:py-4">
          <div>
            <h2 className="font-serif text-2xl text-[#F5F1E8]">
              House of Brik
            </h2>

            <p className="mt-3 text-base leading-7 text-[#D6D1C7]">
              Likørstræde 3
              <br />
              2800 Kongens Lyngby
            </p>
          </div>

          <div className="my-4 h-px bg-[#F5F1E8]/10" />

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#9FB69F]">
              Åbningstider
            </p>

            <div className="mt-3 space-y-1 text-sm leading-6 text-[#D6D1C7]">
              <p>Mandag–onsdag · 09.00–19.00</p>
              <p>Torsdag–søndag · 09.00–21.00</p>
            </div>
          </div>

          <div className="my-4 h-px bg-[#F5F1E8]/10" />

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#9FB69F]">
              Kontakt
            </p>

            <div className="mt-3 space-y-1 text-sm leading-6 text-[#D6D1C7]">
              <p>info@houseofbrik.dk</p>
              <p>Tlf.: Brik Brik</p>
            </div>
          </div>

          <div className="my-6 h-px bg-[#F5F1E8]/10" />

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#9FB69F]">
              Kommer du i bil?
            </p>

            <a
  href="https://www.ltk.dk/borger/trafik-og-veje/parkering/parkeringsrestriktioner-og-randzoner"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 inline-block text-sm leading-6 text-[#D6D1C7] underline decoration-[#9FB69F]/50 underline-offset-4 transition hover:text-[#F5F1E8]"
>
  Parkeringsinfo →
</a>
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#F5F1E8] px-6 py-3 text-sm font-semibold text-[#14251C] transition hover:bg-white"
          >
            Åbn i Google Maps
          </a>
        </div>
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
  const isPractical = label === "Før dit besøg";

  return (
<section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-5 pt-36 md:pt-40">
  <div className="w-full max-w-5xl rounded-[2rem] border border-[#F5F1E8]/10 bg-[#14251C]/80 px-8 pt-8 pb-16 text-center shadow-2xl shadow-black/30 backdrop-blur-md">
  <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#7FA083]">
    {label}
  </p>
<h1 className="font-serif text-4xl text-[#F5F1E8] md:text-4xl">
  {title}
</h1>

<div className="mx-auto mt-4 max-w-4xl space-y-3 text-left text-base leading-6 text-[#D6D1C7] md:text-[17px] md:leading-7"></div><div className="mx-auto mt-4 max-w-4xl space-y-3 text-left text-base leading-8 text-[#D6D1C7] sm:text-lg">
<p className="text-lg font-medium leading-7 text-[#F5F1E8]">
  Det skal være nemt at være gæst hos House of Brik.
</p>

<p>
  Gå på opdagelse i vores brætspilsbibliotek – fyldt med velkendte klassikere, moderne favoritter og spil, du måske ikke har mødt endnu.
</p>

<p>
  Biblioteket vokser hele tiden, og vi tilføjer løbende nye spil, så der altid er noget nyt at opdage.
</p>

<p>
  I kan skifte spil undervejs og prøve lige så mange, I har lyst til.
</p>

<p>
  Du behøver ikke være garvet brætspiller. Kom med vennerne, familien, kollegaerne eller din date. Her er plads til både dem, der kender reglerne udenad, og dem, der bare har lyst til at være med.
</p>

<p>
  Vi serverer selv kaffe, kolde drikke og snacks, og derfor er det ikke muligt at medbringe egen mad og drikke.
</p>

            <div className="pt-2 text-center">
              <p className="font-serif text-xl text-[#F5F1E8] md:text-2xl">
                Mød op • Find et spil • Sæt jer ned
              </p>

              <p className="mt-2 text-xs font-medium uppercase tracking-[0.32em] text-[#9FB69F] md:text-sm">
                Spil • Smil • Sjov
              </p>

              <p className="mt-2 font-medium text-[#F5F1E8]">
                Så enkelt er det.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}