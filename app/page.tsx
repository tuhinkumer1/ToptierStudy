import type { ReactNode } from "react";
import Image from "next/image";
import studentsDuo from "@/public/hero/students-duo.png";
import studentBubble from "@/public/hero/student-bubble.png";
import TestCatalog from "@/components/TestCatalog";
import {
  banners,
  credentials,
  destinations,
  faqs,
  pillars,
  services,
  site,
  steps,
} from "@/lib/site";
import {
  Briefcase,
  Cap,
  Check,
  Compass,
  Doc,
  Facebook,
  Home,
  Instagram,
  LinkedIn,
  Mail,
  Menu,
  Passport,
  Phone,
  Pin,
  Plane,
  Plus,
  Scale,
  WhatsApp,
  YouTube,
} from "@/components/icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const nav = [
  { href: "#top", label: "Home" },
  { href: "#tests", label: "Test Prep" },
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#contact", label: "Contact Us" },
];

const serviceIcons = [Cap, Doc, Passport, Briefcase, Plane, Home];
const destFlags: Record<string, string> = { UK: "🇬🇧", AU: "🇦🇺", MY: "🇲🇾", CA: "🇨🇦", US: "🇺🇸", EU: "🇪🇺" };

/* ------------------------------------------------------------------ */
/* Primitives (Stitch style)                                           */
/* ------------------------------------------------------------------ */

const ArrowSm = ({ className = "" }: { className?: string }) => (
  <svg className={`stroke-current stroke-2 ${className}`} fill="none" height="12" viewBox="0 0 16 16" width="12" aria-hidden>
    <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function PrimaryBtn({ href, children, external = false, icon }: { href: string; children: ReactNode; external?: boolean; icon?: ReactNode }) {
  return (
    <a
      href={href}
      {...(external ? ext : {})}
      className="inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-violet-500/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl hover:shadow-violet-500/40"
    >
      {icon}
      <span>{children}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
        <ArrowSm />
      </span>
    </a>
  );
}

function SecondaryBtn({ href, children, external = false, icon }: { href: string; children: ReactNode; external?: boolean; icon?: ReactNode }) {
  return (
    <a
      href={href}
      {...(external ? ext : {})}
      className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-[15px] font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-50 hover:shadow"
    >
      {icon}
      <span>{children}</span>
      <ArrowSm className="text-slate-700" />
    </a>
  );
}

function SectionTitle({ pre, accent, post, sub }: { pre: string; accent: string; post?: string; sub?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {pre} <span className="text-brand">{accent}</span>
        {post ? ` ${post}` : ""}
      </h2>
      {sub && <p className="mt-3 text-base text-slate-500 sm:text-lg">{sub}</p>}
    </div>
  );
}

function DottedSwoosh({ className = "" }: { className?: string }) {
  return (
    <svg fill="none" height="40" viewBox="0 0 220 40" width="220" aria-hidden className={className}>
      <path d="M5,25 Q60,-5 120,20 T215,10" stroke="#7e5bef" strokeDasharray="5 6" strokeWidth="3" />
    </svg>
  );
}

/** Speech-bubble pill with a rotated-square tail */
function Bubble({
  text,
  color,
  className,
  anim = "animate-float",
  tail = "left",
  big = false,
}: {
  text: string;
  color: string;
  className: string;
  anim?: string;
  tail?: "left" | "right";
  big?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`absolute z-20 flex items-center justify-center px-3.5 py-1.5 text-xs font-bold tracking-wide text-white shadow-lg sm:text-sm ${
        big ? "rounded-2xl px-4 py-2 font-extrabold" : "rounded-full"
      } ${anim} ${className}`}
      style={{ backgroundColor: color }}
    >
      {text}
      <span
        className={`absolute -bottom-1.5 h-3 w-3 rotate-45 ${tail === "left" ? "left-4" : "right-4"}`}
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function TopBanners() {
  const { mockTest, consultant } = banners;
  return (
    <div className="relative z-20 mx-auto mb-3 grid max-w-[1440px] gap-2 text-sm md:grid-cols-2">
      <a href={mockTest.href} className="group flex items-center justify-center gap-3 rounded-2xl bg-white/15 px-4 py-2.5 text-white backdrop-blur hover:bg-white/25">
        <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-brand">
          {mockTest.badge}
        </span>
        <span className="min-w-0 truncate font-medium">
          <span className="xl:hidden">{mockTest.short}</span>
          <span className="hidden xl:inline">{mockTest.text}</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 font-bold group-hover:underline">
          <span className="hidden sm:inline">{mockTest.cta}</span>
          <ArrowSm />
        </span>
      </a>
      <a href={consultant.href} {...ext} className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-4 py-2.5 text-ink hover:bg-lilac">
        <Cap className="h-5 w-5 shrink-0 text-brand" />
        <span className="min-w-0 truncate">
          <span className="xl:hidden">{consultant.short}</span>
          <span className="hidden xl:inline">{consultant.text}</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 font-bold text-brand group-hover:underline">
          <span className="hidden min-[1400px]:inline">{consultant.cta}</span>
          <ArrowSm />
        </span>
      </a>
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "#ffffff" : "#1b1b38";
  const cut = light ? "#1b1b38" : "#ffffff";
  return (
    <a href="#top" className="group flex items-center gap-3">
      <svg fill="none" height="38" viewBox="0 0 44 40" width="42" aria-hidden>
        <path d="M22 3L2 14L22 23L42 14L22 3Z" fill={ink} />
        <path d="M37 17.5V26.5C37 26.5 35 30 22 30C9 30 7 26.5 7 26.5V17.5" stroke={ink} strokeLinecap="round" strokeWidth="3" />
        <path d="M22 25C26 25 31 22 35 19V32C31 34 26 35 22 35C18 35 13 34 9 32V19C13 22 18 25 22 25Z" fill={ink} />
        <ellipse cx="22" cy="14" rx="7" ry="5" stroke={cut} strokeWidth="1.2" />
        <line stroke={cut} strokeWidth="1.2" x1="22" x2="22" y1="9" y2="19" />
      </svg>
      <div className="flex flex-col">
        <span className={`text-lg font-extrabold leading-none tracking-tight ${light ? "text-white" : "text-slate-900"}`}>TopTier</span>
        <span className={`text-[10px] font-bold uppercase tracking-wider ${light ? "text-violet-300" : "text-violet-600"}`}>Study</span>
      </div>
    </a>
  );
}

function Header() {
  return (
    <header className="relative z-30 flex items-center justify-between pb-8">
      <Logo />
      <nav className="hidden items-center gap-8 text-[15px] font-semibold text-slate-700 md:flex">
        {nav.map((n, i) =>
          i === 0 ? (
            <a
              key={n.href}
              href={n.href}
              className="relative font-bold text-slate-950 after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-slate-900"
            >
              {n.label}
            </a>
          ) : (
            <a key={n.href} href={n.href} className="text-slate-600 transition-colors hover:text-brand">
              {n.label}
            </a>
          ),
        )}
      </nav>
      <div className="flex items-center gap-3">
        <a
          href={site.academy.login}
          className="hidden items-center gap-2 rounded-full bg-[#815cf0] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition-all hover:bg-brand-dark active:scale-95 sm:inline-flex"
        >
          Log In <ArrowSm />
        </a>
        <details className="relative md:hidden">
          <summary aria-label="Open menu" className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-ink shadow-sm">
            <Menu className="h-6 w-6" />
          </summary>
          <div className="absolute right-0 mt-3 w-60 rounded-3xl bg-white p-2 shadow-2xl shadow-violet-900/15">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="block rounded-2xl px-4 py-3 font-semibold text-ink hover:bg-lilac">
                {n.label}
              </a>
            ))}
            <a href={site.academy.login} className="mt-1 block rounded-2xl bg-brand px-4 py-3 text-center font-semibold text-white">
              Log In
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-mesh relative overflow-hidden px-6 pb-20 pt-6 sm:px-10 lg:px-16">
      {/* Orbit rings & dotted trajectories */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden>
        <svg className="absolute h-full w-full" fill="none" viewBox="0 0 1300 800" preserveAspectRatio="xMidYMid slice">
          <ellipse cx="980" cy="460" opacity="0.75" rx="380" ry="380" stroke="#e0d5fa" strokeDasharray="8 8" strokeWidth="1.8" />
          <ellipse cx="980" cy="460" opacity="0.65" rx="260" ry="260" stroke="#f6c2c2" strokeDasharray="6 6" strokeWidth="1.5" />
          <ellipse cx="980" cy="460" opacity="0.4" rx="160" ry="160" stroke="#8c68ec" strokeDasharray="4 6" strokeWidth="1.5" />
          <path d="M1020,160 C1100,120 1140,240 1080,270 C1030,295 1060,380 1180,360" opacity="0.6" stroke="#221e3b" strokeDasharray="5 6" strokeWidth="2.2" />
        </svg>
      </div>

      <Header />

      <div className="relative z-10 grid min-h-[520px] grid-cols-1 items-center gap-8 pb-8 pt-4 lg:grid-cols-12 lg:pb-0">
        {/* Copy */}
        <div className="max-w-2xl pt-4 lg:col-span-6 lg:pt-0 xl:col-span-7">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block w-8 border-b-2 border-dashed border-slate-700" />
            <span className="rounded-md bg-violet-100/80 px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-widest text-violet-700">
              Barrister-led study abroad
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">
            Your Global Future, Handled With <span className="text-[#805cf1]">Legal Precision</span>
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg lg:text-[19px]">
            We help students from Bangladesh get into world-renowned universities in the UK, Australia, Malaysia,
            Canada, the USA and Europe — with every document, deadline and visa step checked properly.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <PrimaryBtn href={site.academy.diagnostic}>Take a free English check</PrimaryBtn>
            <SecondaryBtn href={site.whatsapp} external>
              Book a free consultation
            </SecondaryBtn>
          </div>
          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-violet-200/50 pt-6 text-sm text-slate-600">
            <div className="flex -space-x-2">
              {["🇬🇧", "🇨🇦", "🇦🇺"].map((f) => (
                <span key={f} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-base ring-2 ring-white">
                  {f}
                </span>
              ))}
            </div>
            <div>
              Trusted since <span className="font-bold text-slate-900">2014</span> with{" "}
              <span className="font-semibold text-violet-700">250+</span> global university partners
            </div>
          </div>
        </div>

        {/* Students + multilingual bubbles */}
        <div className="relative mt-6 flex h-[420px] select-none items-end justify-center sm:h-[540px] lg:col-span-6 lg:mt-0 lg:h-[600px] xl:col-span-5">
          <Bubble text="HABARI" color="#ef6d48" className="left-[8%] top-10 sm:left-24 sm:top-14" />
          <Bubble text="SALUT" color="#e64c5d" anim="animate-float-alt" tail="right" className="right-16 top-4 sm:right-28 sm:top-6" />
          <Bubble text="HELLO" color="#855ef2" anim="badge-pop" tail="right" big className="right-2 top-28 sm:right-6 sm:top-32" />
          <Bubble text="HOLA" color="#2764a8" className="left-2 top-44 sm:left-12 sm:top-56" />
          <Bubble text="你好" color="#93304c" anim="animate-float-alt" className="right-0 top-52 sm:right-4 sm:top-60" />
          <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
            <div className="h-80 w-80 rounded-full bg-gradient-to-t from-violet-200/50 to-pink-100/40 blur-2xl sm:h-96 sm:w-96" />
          </div>
          <Image
            src={studentsDuo}
            alt="Two happy students holding books"
            sizes="(min-width: 1024px) 40vw, 90vw"
            loading="eager"
            fetchPriority="high"
            className="relative z-10 h-full max-h-[580px] w-auto object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

function WhyTests() {
  return (
    <section id="tests" className="relative bg-white px-6 pb-20 pt-10 sm:px-10 lg:px-16">
      <div className="pointer-events-none -mt-6 mb-2 flex justify-end pr-16 sm:pr-48">
        <DottedSwoosh />
      </div>
      <SectionTitle pre="Why Choose" accent="TopTier Study" sub="Free practice tests, AI feedback and barrister-led guidance — in one place" />
      <TestCatalog />

      {/* Feature badges */}
      <div className="mt-14 grid grid-cols-1 gap-6 border-t border-slate-100 pt-10 md:grid-cols-3">
        {pillars.map((p, i) => {
          const Icon = [Doc, Scale, Compass][i];
          const tint = ["bg-violet-50/60", "bg-orange-50/60", "bg-pink-50/60"][i];
          const tile = ["bg-violet-600", "bg-orange-500", "bg-pink-500"][i];
          return (
            <div key={p.title} className={`flex items-start gap-4 rounded-2xl p-4 ${tint}`}>
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md ${tile}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">{p.title}</h4>
                <p className="mt-1 text-sm text-slate-500">{p.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function MockTestPromo() {
  const letters = [
    ["T", "text-rose-500", "-rotate-6", "h-4"],
    ["O", "text-amber-500", "rotate-3", "h-5"],
    ["P", "text-emerald-500", "-rotate-3", "h-4"],
    ["T", "text-sky-500", "rotate-6", "h-6"],
    ["I", "text-violet-500", "-rotate-6", "h-4"],
    ["E", "text-orange-500", "rotate-3", "h-5"],
    ["R", "text-pink-500", "-rotate-3", "h-4"],
  ];
  return (
    <section className="relative bg-white px-6 pb-16 sm:px-10 lg:px-16">
      <div className="hero-mesh relative grid items-end gap-6 overflow-hidden rounded-[2.5rem] px-6 pt-10 sm:px-10 lg:grid-cols-[1fr_1.1fr] lg:pt-0">
        {/* Student holding bubble + overlay badge */}
        <div className="relative mx-auto w-72 sm:w-96 lg:mx-0 lg:w-[440px]">
          <Image src={studentBubble} alt="Smiling student holding a speech bubble" sizes="(min-width: 1024px) 440px, 380px" className="h-auto w-full object-contain drop-shadow-xl" />
          <div className="absolute right-[3%] top-[14%] w-[48%] -rotate-3 rounded-3xl border-2 border-violet-200/90 bg-white p-3 shadow-2xl sm:p-4">
            <div className="mb-2 flex items-center justify-center gap-1.5">
              <div className="h-7 w-5 rotate-6 rounded-sm bg-violet-300 shadow-sm" />
              <div className="flex h-9 w-7 -rotate-3 flex-col justify-around rounded-sm bg-teal-400 p-0.5 shadow-sm">
                <div className="h-0.5 bg-white/70" />
                <div className="h-0.5 bg-white/70" />
              </div>
              <div className="h-8 w-6 rotate-12 rounded-sm bg-amber-500 shadow-sm" />
              <div className="h-10 w-7 -rotate-6 rounded-sm bg-rose-500 shadow-sm" />
              <div className="h-9 w-2 rounded-sm border border-yellow-400 bg-yellow-300" />
            </div>
            <div className="text-center">
              <span className="block text-sm font-extrabold leading-tight text-slate-800 sm:text-base">Free</span>
              <span className="block text-base font-extrabold leading-tight tracking-tight text-brand sm:text-lg">Mock Test</span>
            </div>
            <div className="mt-2.5 flex items-center justify-center gap-1 border-t border-slate-100 pt-2">
              <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-800">IELTS</span>
              <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[9px] font-bold text-rose-800">PTE</span>
              <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[9px] font-bold text-blue-800">TOEFL</span>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="pb-10 lg:py-14">
          <span className="rounded-md bg-violet-100/80 px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-widest text-violet-700">
            {banners.mockTest.badge} on TopTier Academy
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Build the English Score Your <span className="text-brand">Offer Letter</span> Needs
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            Most universities and visa routes ask for an IELTS or PTE score. Practise on TopTier Academy, see where you
            stand, and walk into your consultation knowing exactly what to work on.
          </p>
          <ul className="mt-6 space-y-2.5">
            {["Full-length IELTS and PTE practice in a real exam format", "Instant feedback on writing and speaking", "Practise anytime, on any device"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-slate-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryBtn href={site.academy.freeTest}>Take the free mock test</PrimaryBtn>
            <SecondaryBtn href={site.academy.home}>Open TopTier Academy</SecondaryBtn>
          </div>
        </div>

        {/* Colourful lettering */}
        <div aria-hidden className="pointer-events-none absolute right-6 top-6 hidden items-end gap-1.5 rounded-2xl border border-violet-100 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm xl:flex">
          {letters.map(([l, c, r, h], i) => (
            <div key={i} className="flex flex-col items-center">
              <span className={`text-2xl font-black ${c} ${r}`}>{l}</span>
              <div className={`w-3.5 rounded-t-sm bg-amber-200 shadow-inner ${h}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="bg-white px-6 pb-20 sm:px-10 lg:px-16">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-white">
        <svg className="absolute -right-10 -top-6 hidden w-80 lg:block" fill="none" viewBox="0 0 180 140" aria-hidden>
          <path d="M20,10 C60,-15 130,5 110,65 C90,115 170,120 190,70" stroke="#845ff4" strokeDasharray="6 6" strokeWidth="2.5" />
        </svg>
        <div className="relative grid gap-12 px-6 py-14 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-20">
          <div>
            <span className="rounded-md bg-white/10 px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-widest text-violet-300">Credentials</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Trained in London. <span className="text-[#a98bff]">Practising in Dhaka.</span>
            </h2>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xl font-bold">Barrister Muhammad Omar Soeb Chowdhury</p>
              <p className="mt-1 text-sm text-white/60">Founder &amp; CEO, TopTier Education Consultant</p>
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-white/75">
              Every new student can start with a short free consultation to talk through goals, eligibility and the
              right next step.
            </p>
            <div className="mt-8">
              <PrimaryBtn href={site.whatsapp} external icon={<WhatsApp className="h-5 w-5" />}>
                Speak to the team
              </PrimaryBtn>
            </div>
          </div>
          <ul className="space-y-3 self-center">
            {credentials.map((c) => (
              <li key={c} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="leading-relaxed text-white/90">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const tiles = ["bg-violet-600", "bg-orange-500", "bg-pink-500", "bg-sky-500", "bg-emerald-500", "bg-amber-500"];
  return (
    <section id="services" className="bg-white px-6 pb-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none mb-2 flex justify-start pl-10 sm:pl-40">
        <DottedSwoosh />
      </div>
      <SectionTitle
        pre="Complete Support, From"
        accent="First Question"
        post="to First Semester"
        sub="University admissions, visa processing and work permit guidance — step by step, with one team accountable throughout."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = serviceIcons[i];
          return (
            <article
              key={s.title}
              className="group rounded-3xl border border-violet-100 bg-gradient-to-b from-[#fbfaff] to-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md ${tiles[i]}`}>
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink transition-colors group-hover:text-brand">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Destinations() {
  const tones = [
    "bg-blue-50 border-blue-200",
    "bg-amber-50 border-amber-200",
    "bg-rose-50 border-rose-200",
    "bg-red-50 border-red-200",
    "bg-sky-50 border-sky-200",
    "bg-violet-50 border-violet-200",
  ];
  return (
    <section id="destinations" className="hero-mesh px-6 py-20 sm:px-10 lg:px-16">
      <SectionTitle
        pre="Six Destinations,"
        accent="One Trusted Team"
        sub="Pick the country that fits your course, budget and long-term plans — we'll walk you through what each one requires."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d, i) => (
          <article key={d.code} className="flex gap-4 rounded-3xl border border-white bg-white/80 p-6 shadow-md backdrop-blur">
            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-2xl shadow-sm ${tones[i]}`}>
              {destFlags[d.code]}
            </span>
            <div>
              <h3 className="text-xl font-bold text-ink">{d.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">{d.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Steps() {
  const tiles = ["bg-violet-600", "bg-orange-500", "bg-pink-500", "bg-sky-500", "bg-emerald-500"];
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <SectionTitle pre="Your Path," accent="Step by Step" sub="A clear sequence, so you always know what's done and what's next." />
      <ol className="mt-14 grid gap-10 md:grid-cols-5 md:gap-5">
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-3xl border border-violet-100 bg-gradient-to-b from-[#fbfaff] to-white p-6 pt-0 text-center shadow-md">
            <span className={`mx-auto -mt-6 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-extrabold text-white shadow-md ${tiles[i]}`}>
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 flex justify-center">
        <PrimaryBtn href={site.academy.journey}>Plan your study abroad journey</PrimaryBtn>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-white px-6 pb-20 sm:px-10 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Need Help? <span className="text-brand">Start Here.</span>
          </h2>
          <p className="mt-3 text-base text-slate-500 sm:text-lg">Still have questions? The team is happy to talk them through with you.</p>
          <div className="mt-8">
            <SecondaryBtn href={site.whatsapp} external icon={<WhatsApp className="h-5 w-5 text-[#25D366]" />}>
              Ask on WhatsApp
            </SecondaryBtn>
          </div>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-3xl border border-violet-100 bg-[#fbfaff] px-6 open:bg-white open:shadow-lg open:shadow-violet-900/5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-base font-bold text-ink sm:text-lg">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Plus className="faq-icon h-4 w-4 transition-transform" />
                </span>
              </summary>
              <p className="pb-6 pr-10 leading-relaxed text-slate-500">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  const contacts = [
    { Icon: Pin, title: "Visit our office", body: site.address, href: site.mapUrl, external: true, tile: "bg-violet-600" },
    { Icon: Phone, title: "Call us", body: site.phoneDisplay, href: site.phoneTel, external: false, tile: "bg-orange-500" },
    { Icon: Mail, title: "Email us", body: site.email, href: `mailto:${site.email}`, external: false, tile: "bg-pink-500" },
  ];
  return (
    <section id="contact" className="bg-white px-6 pb-16 sm:px-10 lg:px-16">
      <div className="hero-mesh relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 lg:px-16">
        <svg className="pointer-events-none absolute right-6 top-6 hidden md:block" fill="none" height="150" viewBox="0 0 220 150" width="220" aria-hidden>
          <path d="M-20,90 Q40,110 90,60 T180,30" stroke="#845ff4" strokeDasharray="6 6" strokeWidth="2.5" />
          <g transform="translate(130, 20) rotate(-15)">
            <polygon fill="#ffffff" points="0,20 40,0 25,28 15,22" stroke="#333333" strokeWidth="2" />
            <polygon fill="#e2e8f0" points="25,28 40,0 32,32" stroke="#333333" strokeWidth="2" />
            <line stroke="#333333" strokeWidth="1.5" x1="0" x2="25" y1="20" y2="28" />
          </g>
        </svg>
        <div className="relative max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Start With a <span className="text-brand">Free Consultation</span> — and a Free English Check.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Find out where you stand today, then sit down with the TopTier team to map out the right university, course
            and visa route for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryBtn href={site.whatsapp} external icon={<WhatsApp className="h-5 w-5" />}>
              Chat on WhatsApp
            </PrimaryBtn>
            <SecondaryBtn href={site.phoneTel} icon={<Phone className="h-5 w-5 text-brand" />}>
              Call {site.phoneDisplay}
            </SecondaryBtn>
          </div>
        </div>
        <div className="relative mt-12 grid gap-4 md:grid-cols-3">
          {contacts.map(({ Icon, title, body, href, external, tile }) => (
            <a key={title} href={href} {...(external ? ext : {})} className="flex items-start gap-4 rounded-2xl bg-white/85 p-4 transition-colors hover:bg-white">
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md ${tile}`}>
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h4 className="text-base font-bold text-slate-900">{title}</h4>
                <p className="mt-1 break-words text-sm text-slate-500">{body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { href: site.social.facebook, label: "Facebook", Icon: Facebook },
    { href: site.social.instagram, label: "Instagram", Icon: Instagram },
    { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedIn },
    { href: site.social.youtube, label: "YouTube", Icon: YouTube },
  ];
  return (
    <footer className="bg-ink px-6 py-14 text-white/70 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            A study-abroad and test-prep service of{" "}
            <a href={site.consultant.url} {...ext} className="text-violet-300 hover:underline">
              TopTier Education Consultant
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm font-semibold">
          <a href={site.academy.home} className="hover:text-white">TopTier Academy</a>
          <a href={site.academy.login} className="hover:text-white">Student login</a>
          <a href={site.academy.freeTest} className="hover:text-white">Free mock test</a>
          <a href={site.academy.calculator} className="hover:text-white">Immigration calculator</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
        <div className="flex gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a key={label} href={href} {...ext} aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand hover:text-white">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/45">
        <p>© 2014–2026 TopTier Education Consultant. All rights reserved.</p>
        <p className="mt-2">
          IELTS is a registered trademark of the British Council, IDP Education and Cambridge University Press &amp;
          Assessment. PTE is a trademark of Pearson. TOEFL and GRE are registered trademarks of ETS. GMAT is a trademark
          of GMAC. SAT is a registered trademark of the College Board. Duolingo English Test is a trademark of Duolingo.
          OET and CELPIP are trademarks of their respective owners. TopTier Study is not affiliated with or endorsed by
          these organisations.
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      {...ext}
      aria-label="Chat with TopTier on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
}

export default function Page() {
  return (
    <div className="p-2 sm:p-4 md:p-6 lg:p-8">
      <TopBanners />
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Paper plane & dashed trail behind the frame */}
        <div className="pointer-events-none absolute -left-4 -top-6 z-0 hidden opacity-90 lg:block" aria-hidden>
          <svg fill="none" height="150" viewBox="0 0 220 150" width="220">
            <path d="M-20,90 Q40,110 90,60 T180,30" stroke="white" strokeDasharray="6 6" strokeWidth="2.5" />
            <g transform="translate(130, 20) rotate(-15)">
              <polygon fill="#ffffff" points="0,20 40,0 25,28 15,22" stroke="#333333" strokeWidth="2" />
              <polygon fill="#e2e8f0" points="25,28 40,0 32,32" stroke="#333333" strokeWidth="2" />
              <line stroke="#333333" strokeWidth="1.5" x1="0" x2="25" y1="20" y2="28" />
            </g>
          </svg>
        </div>
        <div className="pointer-events-none absolute -right-2 -top-4 z-0 hidden opacity-75 lg:block" aria-hidden>
          <svg fill="none" height="140" viewBox="0 0 180 140" width="180">
            <path d="M20,10 C60,-15 130,5 110,65 C90,115 170,120 190,70" stroke="white" strokeDasharray="6 6" strokeWidth="2.5" />
          </svg>
        </div>

        {/* Main white app frame */}
        <div className="frame-shadow relative z-10 w-full overflow-hidden rounded-[28px] border border-white/50 bg-white sm:rounded-[36px] md:rounded-[48px]">
          <Hero />
          <main>
            <WhyTests />
            <MockTestPromo />
            <Founder />
            <Services />
            <Destinations />
            <Steps />
            <Faq />
            <Cta />
          </main>
          <Footer />
        </div>
      </div>
      <FloatingWhatsApp />
    </div>
  );
}
