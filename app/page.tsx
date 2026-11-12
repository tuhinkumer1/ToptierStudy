import type { ReactNode } from "react";
import {
  banners,
  credentials,
  destinations,
  faqs,
  pillars,
  prepTools,
  services,
  site,
  stats,
  steps,
} from "@/lib/site";
import {
  ArrowUpRight,
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
  PaperPlane,
  Passport,
  Phone,
  Pin,
  Plane,
  Plus,
  Scale,
  Swirl,
  WhatsApp,
  YouTube,
} from "@/components/icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const nav = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#test-prep", label: "Test Prep" },
  { href: "#contact", label: "Contact Us" },
];

const serviceIcons = [Cap, Doc, Passport, Briefcase, Plane, Home];
const pillarIcons = [Doc, Scale, Compass];

/* Bright accent swatches reused for icon tiles / bubbles */
const swatches = [
  "from-[#ff9a3d] to-[#f0504a]",
  "from-[#f0466b] to-[#4f6bff]",
  "from-[#8a6cff] to-[#d27dff]",
  "from-[#2fb6e9] to-[#3d56c9]",
  "from-[#e14a8c] to-[#8a2a9c]",
  "from-[#22c39a] to-[#1c8fd6]",
];

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

/** Split pill: label pill + separate square arrow tab */
function SplitBtn({
  href,
  children,
  variant = "grad",
  external = false,
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: "grad" | "white" | "dark";
  external?: boolean;
  icon?: ReactNode;
}) {
  const body = {
    grad: "bg-grad text-white shadow-lg shadow-violet-500/25",
    white: "bg-white text-ink shadow-md shadow-violet-900/5",
    dark: "bg-ink text-white",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? ext : {})}
      className="group inline-flex items-stretch gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
    >
      <span className={`flex items-center gap-2 rounded-2xl px-6 py-3.5 font-display text-[15px] font-medium ${body}`}>
        {icon}
        {children}
      </span>
      <span
        className={`flex w-14 items-center justify-center rounded-2xl transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${body}`}
      >
        <ArrowUpRight className="h-6 w-6" />
      </span>
    </a>
  );
}

function SectionTitle({
  pre,
  grad,
  post,
  sub,
  center = false,
  light = false,
}: {
  pre: string;
  grad: string;
  post?: string;
  sub?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2
        className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {pre} <span className={light ? "text-violet-300" : "text-grad"}>{grad}</span>
        {post ? ` ${post}` : ""}
      </h2>
      {sub && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/75" : "text-ink-soft"}`}>{sub}</p>
      )}
    </div>
  );
}

function Bubble({
  text,
  swatch,
  className = "",
  size = "md",
  round = false,
  tail = "left",
}: {
  text: string;
  swatch: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  round?: boolean;
  tail?: "left" | "right";
}) {
  const sz = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-lg",
    lg: "px-5 py-2.5 text-2xl",
  }[size];
  return (
    <div aria-hidden className={`absolute ${className}`}>
      <div
        className={`relative bg-gradient-to-br ${swatch} font-display font-semibold uppercase tracking-wide text-white shadow-lg ${
          round ? "flex aspect-square items-center justify-center rounded-full p-3 text-sm" : `rounded-2xl ${sz}`
        }`}
      >
        {text}
        <span
          className={`bubble-tail absolute -bottom-2.5 h-4 w-4 bg-gradient-to-br ${swatch} ${
            tail === "left" ? "left-4" : "right-4 -scale-x-100"
          }`}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function TopBanners() {
  const { mockTest, consultant } = banners;
  return (
    <div className="grid text-sm md:grid-cols-2">
      <a
        href={mockTest.href}
        className="group flex items-center justify-center gap-3 bg-grad px-4 py-2.5 text-white"
      >
        <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-violet-600">
          {mockTest.badge}
        </span>
        <span className="min-w-0 truncate font-medium">
          <span className="xl:hidden">{mockTest.short}</span>
          <span className="hidden xl:inline">{mockTest.text}</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 font-semibold underline-offset-4 group-hover:underline">
          <span className="hidden sm:inline">{mockTest.cta}</span>
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>
      <a
        href={consultant.href}
        {...ext}
        className="group flex items-center justify-center gap-3 bg-lilac-100 px-4 py-2.5 text-ink hover:bg-violet-300/50"
      >
        <Cap className="h-5 w-5 shrink-0 text-violet-600" />
        <span className="min-w-0 truncate">
          <span className="xl:hidden">{consultant.short}</span>
          <span className="hidden xl:inline">{consultant.text}</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-violet-700 underline-offset-4 group-hover:underline">
          <span className="hidden min-[1400px]:inline">{consultant.cta}</span>
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-white">
        <Cap className="h-6 w-6" />
      </span>
      <span className="font-display text-lg font-bold leading-none text-ink">
        TopTier
        <span className="block text-xs font-medium tracking-[0.25em] text-violet-600">STUDY</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between rounded-3xl bg-white/95 px-4 shadow-lg shadow-violet-900/5 backdrop-blur sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-9 font-display text-[15px] text-ink lg:flex">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              className={`border-b-2 pb-0.5 transition-colors hover:text-violet-600 ${
                i === 0 ? "border-ink font-semibold" : "border-transparent"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={site.academy.login} className="hidden items-stretch gap-1 sm:inline-flex">
            <span className="bg-grad flex items-center rounded-xl px-5 py-2.5 font-display text-[15px] text-white">
              Log In
            </span>
            <span className="bg-grad flex w-11 items-center justify-center rounded-xl text-white">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </a>
          <details className="relative lg:hidden">
            <summary
              aria-label="Open menu"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-lilac-100 text-ink"
            >
              <Menu className="h-6 w-6" />
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-3xl bg-white p-2 shadow-2xl shadow-violet-900/15">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="block rounded-2xl px-4 py-3 font-display text-ink hover:bg-lilac-50">
                  {n.label}
                </a>
              ))}
              <a href={site.academy.login} className="bg-grad mt-1 block rounded-2xl px-4 py-3 text-center font-display text-white">
                Log In
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function ScoreCard() {
  const bands = [
    { k: "Listening", v: 8.0 },
    { k: "Reading", v: 7.5 },
    { k: "Writing", v: 7.0 },
    { k: "Speaking", v: 7.5 },
  ];
  return (
    <div className="relative w-full max-w-[19rem] rounded-[1.75rem] bg-white p-5 shadow-2xl sm:p-6 shadow-violet-900/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Mock test · IELTS</p>
          <p className="font-display text-sm font-semibold text-ink">Sample result</p>
        </div>
        <span className="rounded-full bg-lilac-100 px-2.5 py-1 text-xs font-semibold text-violet-700">AI scored</span>
      </div>
      <div className="mt-5 flex items-end gap-2">
        <span className="text-grad font-display text-6xl font-extrabold leading-none">7.5</span>
        <span className="pb-1.5 text-sm text-ink-soft">Overall band</span>
      </div>
      <ul className="mt-5 space-y-3">
        {bands.map((b) => (
          <li key={b.k}>
            <div className="flex justify-between text-sm">
              <span className="text-ink-soft">{b.k}</span>
              <span className="font-display font-semibold text-ink">{b.v.toFixed(1)}</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-lilac-100">
              <div className="bg-grad h-2 rounded-full" style={{ width: `${(b.v / 9) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative -mt-[5.25rem] overflow-hidden pt-[5.25rem]">
      <div className="bg-hero-wash absolute inset-0" />
      {/* dotted line leading into headline */}
      <span aria-hidden className="absolute left-0 top-[42%] hidden h-1 w-[6%] border-t-4 border-dotted border-ink/60 xl:block" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-20">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-violet-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            Barrister-led study abroad · Banani, Dhaka
          </p>
          <h1 className="font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            Your Global Future, Handled With <span className="text-grad">Legal Precision</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/85 sm:text-xl">
            We help students from Bangladesh get into world-renowned universities in the UK, Australia, Malaysia,
            Canada, the USA and Europe — with every document, deadline and visa step checked properly.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <SplitBtn href={site.academy.diagnostic}>Take a free English check</SplitBtn>
            <SplitBtn href={site.whatsapp} variant="white" external>
              Book a free consultation
            </SplitBtn>
          </div>
          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-ink">{s.value}</dd>
                <dd className="text-sm text-ink-soft">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual composition */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] sm:aspect-square">
          <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-violet-400/40 via-orchid-400/30 to-blush-300/50 blur-2xl" />
          <div className="absolute inset-[14%] rounded-full border-2 border-dashed border-white/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-floaty w-[60%] sm:min-w-[15rem]">
              <ScoreCard />
            </div>
          </div>
          <Bubble text="IELTS" swatch={swatches[1]} size="lg" className="right-[2%] top-0 sm:right-[6%] sm:top-[2%]" />
          <Bubble text="PTE" swatch={swatches[0]} className="left-[2%] top-[3%] sm:left-[6%] sm:top-[12%]" tail="right" />
          <Bubble text="TOEFL" swatch={swatches[2]} className="right-0 top-[44%] sm:right-[-4%] sm:top-[34%]" />
          <Bubble text="DET" swatch={swatches[3]} round className="left-[0%] top-[46%] w-16" tail="right" />
          <Bubble text="UK" swatch={swatches[4]} round className="bottom-[2%] right-[6%] w-16 sm:bottom-[10%] sm:right-[4%]" />
          <Bubble text="Band 7+" swatch={swatches[5]} size="sm" className="bottom-[1%] left-[4%] sm:bottom-[4%] sm:left-[14%]" />
          <PaperPlane className="absolute -top-2 left-[30%] hidden w-24 rotate-[-8deg] drop-shadow-lg sm:block" />
          <Swirl className="absolute -right-6 bottom-[26%] hidden w-40 text-ink/70 sm:block" />
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="relative overflow-hidden bg-white">
      <Swirl dash="10 8" className="absolute -right-10 top-10 hidden w-72 text-violet-400 lg:block" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionTitle
          pre="Why Choose"
          grad="TopTier Study"
          sub="Strong students lose great offers over one wrong document or one missed deadline. With a barrister leading the team, your file is prepared the way a legal case is — complete, consistent and on time."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <div key={p.title} className="rounded-[2rem] bg-lilac-50 p-8 transition-transform hover:-translate-y-1">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${swatches[i]} text-white shadow-lg`}>
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="px-3 sm:px-5">
      <div className="bg-grad relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] text-white">
        <Swirl className="absolute -left-6 bottom-6 w-56 text-white/40" />
        <div className="relative grid gap-12 px-6 py-16 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-20">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Credentials</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Trained in London. Practising in Dhaka.
            </h2>
            <div className="mt-8 rounded-3xl bg-white/15 p-6 backdrop-blur">
              <p className="font-display text-xl font-semibold">Barrister Muhammad Omar Soeb Chowdhury</p>
              <p className="mt-1 text-sm text-white/80">Founder &amp; CEO, TopTier Education Consultant</p>
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-white/85">
              Every new student can start with a short free consultation to talk through goals, eligibility and the
              right next step.
            </p>
            <div className="mt-8">
              <SplitBtn href={site.whatsapp} variant="white" external icon={<WhatsApp className="h-5 w-5 text-[#25D366]" />}>
                Speak to the team
              </SplitBtn>
            </div>
          </div>
          <ul className="space-y-3 self-center">
            {credentials.map((c) => (
              <li key={c} className="flex gap-4 rounded-2xl bg-white p-5 text-ink shadow-lg shadow-violet-900/10">
                <span className="bg-grad flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionTitle
          pre="Complete Support, From"
          grad="First Question"
          post="to First Semester"
          sub="University admissions, visa processing and work permit guidance — step by step, with one team accountable throughout."
          center
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <article
                key={s.title}
                className="group rounded-[2rem] border border-lilac-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/10"
              >
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${swatches[i]} text-white`}>
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="bg-hero-wash relative overflow-hidden">
      <PaperPlane className="absolute right-[8%] top-10 hidden w-24 rotate-12 drop-shadow-lg md:block" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionTitle
          pre="Six Destinations,"
          grad="One Trusted Team"
          sub="Pick the country that fits your course, budget and long-term plans — we'll walk you through what each one requires."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <article key={d.code} className="relative rounded-[2rem] bg-white/85 p-8 shadow-lg shadow-violet-900/5 backdrop-blur">
              <div
                className={`absolute -top-4 right-6 rounded-2xl bg-gradient-to-br ${swatches[i]} px-4 py-1.5 font-display text-lg font-bold text-white shadow-lg`}
              >
                {d.code}
                <span className={`bubble-tail absolute -bottom-2.5 left-4 h-4 w-4 bg-gradient-to-br ${swatches[i]}`} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink">{d.name}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{d.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestPrep() {
  return (
    <section id="test-prep" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:py-28">
        <div>
          <SectionTitle
            pre="Build the English Score Your"
            grad="Offer Letter"
            post="Needs"
            sub="Most universities and visa routes ask for an IELTS or PTE score. Practise on TopTier Academy, see where you stand, and walk into your consultation knowing exactly what to work on."
          />
          <ul className="mt-8 space-y-3">
            {[
              "Full-length IELTS and PTE practice in a real exam format",
              "Instant feedback on writing and speaking",
              "Practise anytime, on any device",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-ink">
                <span className="bg-grad flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <SplitBtn href={site.academy.home}>Open TopTier Academy</SplitBtn>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {prepTools.map((t, i) => (
            <a
              key={t.title}
              href={t.href}
              className={`group flex flex-col rounded-[2rem] p-7 transition-transform hover:-translate-y-1 ${
                i === 0 ? "bg-grad text-white shadow-xl shadow-violet-500/30" : "bg-lilac-50 text-ink"
              }`}
            >
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                  i === 0 ? "bg-white text-violet-600" : t.tag === "Free" ? "bg-grad text-white" : "bg-ink text-white"
                }`}
              >
                {t.tag}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{t.title}</h3>
              <p className={`mt-2 flex-1 text-sm leading-relaxed ${i === 0 ? "text-white/85" : "text-ink-soft"}`}>{t.body}</p>
              <span className={`mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold ${i === 0 ? "" : "text-violet-700"}`}>
                {t.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="bg-lilac-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionTitle
          pre="Your Path,"
          grad="Step by Step"
          sub="A clear sequence, so you always know what's done and what's next."
          center
        />
        <ol className="mt-16 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-[2rem] bg-white p-6 text-center shadow-sm">
              <span className={`mx-auto -mt-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${swatches[i]} font-display text-xl font-bold text-white shadow-lg`}>
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex justify-center">
          <SplitBtn href={site.academy.journey} variant="dark">
            Plan your study abroad journey
          </SplitBtn>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:py-28">
        <div>
          <SectionTitle pre="Need Help?" grad="Start Here." sub="Still have questions? The team is happy to talk them through with you." />
          <div className="mt-8">
            <SplitBtn href={site.whatsapp} variant="dark" external icon={<WhatsApp className="h-5 w-5 text-[#25D366]" />}>
              Ask on WhatsApp
            </SplitBtn>
          </div>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-3xl bg-lilac-50 px-6 open:bg-white open:shadow-lg open:shadow-violet-900/10 open:ring-1 open:ring-lilac-100">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-display text-lg font-medium text-ink">
                {f.q}
                <span className="bg-grad flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white">
                  <Plus className="faq-icon h-4 w-4 transition-transform" />
                </span>
              </summary>
              <p className="pb-6 pr-10 leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contact" className="px-3 pb-6 sm:px-5">
      <div className="bg-hero-wash relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
        <PaperPlane className="absolute right-10 top-8 hidden w-28 -rotate-6 drop-shadow-lg md:block" />
        <Swirl className="absolute bottom-6 right-24 hidden w-48 text-ink/50 md:block" />
        <div className="relative max-w-3xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Start With a <span className="text-grad">Free Consultation</span> — and a Free English Check.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            Find out where you stand today, then sit down with the TopTier team to map out the right university,
            course and visa route for you.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <SplitBtn href={site.whatsapp} external icon={<WhatsApp className="h-5 w-5" />}>
              Chat on WhatsApp
            </SplitBtn>
            <SplitBtn href={site.phoneTel} variant="white" icon={<Phone className="h-5 w-5 text-violet-600" />}>
              Call {site.phoneDisplay}
            </SplitBtn>
          </div>
        </div>
        <div className="relative mt-14 grid gap-4 md:grid-cols-3">
          {[
            { Icon: Pin, title: "Visit our office", body: site.address, href: site.mapUrl, external: true },
            { Icon: Phone, title: "Call us", body: site.phoneDisplay, href: site.phoneTel, external: false },
            { Icon: Mail, title: "Email us", body: site.email, href: `mailto:${site.email}`, external: false },
          ].map(({ Icon, title, body, href, external }) => (
            <a
              key={title}
              href={href}
              {...(external ? ext : {})}
              className="flex gap-4 rounded-3xl bg-white/80 p-5 backdrop-blur transition-colors hover:bg-white"
            >
              <span className="bg-grad flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-display font-semibold text-ink">{title}</p>
                <p className="mt-1 break-words text-sm leading-relaxed text-ink-soft">{body}</p>
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
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="bg-grad flex h-11 w-11 items-center justify-center rounded-2xl text-white">
                <Cap className="h-6 w-6" />
              </span>
              <span className="font-display text-lg font-bold leading-none text-white">
                TopTier
                <span className="block text-xs font-medium tracking-[0.25em] text-violet-300">STUDY</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              A study-abroad and test-prep service of{" "}
              <a href={site.consultant.url} {...ext} className="text-violet-300 hover:underline">
                TopTier Education Consultant
              </a>
              .
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 font-display text-sm">
            <a href={site.academy.home} className="hover:text-white">TopTier Academy</a>
            <a href={site.academy.login} className="hover:text-white">Student login</a>
            <a href={site.academy.freeTest} className="hover:text-white">Free mock test</a>
            <a href={site.academy.calculator} className="hover:text-white">Immigration calculator</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                {...ext}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition-colors hover:bg-violet-500 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/45">
          <p>© 2014–2026 TopTier Education Consultant. All rights reserved.</p>
          <p className="mt-2">
            IELTS is a registered trademark of the British Council, IDP Education and Cambridge University Press &amp;
            Assessment. PTE is a trademark of Pearson. TOEFL is a registered trademark of ETS. Duolingo English Test
            (DET) is a trademark of Duolingo. TopTier Study is not affiliated with or endorsed by these organisations.
          </p>
        </div>
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
    <>
      <TopBanners />
      <Header />
      <main>
        <Hero />
        <Why />
        <Founder />
        <Services />
        <Destinations />
        <TestPrep />
        <Steps />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
