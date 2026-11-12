import type { ReactNode } from "react";
import {
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
  ArrowRight,
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

const serviceIcons = [Cap, Doc, Passport, Briefcase, Plane, Home];
const pillarIcons = [Doc, Scale, Compass];

const nav = [
  { href: "#why", label: "Why TopTier" },
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#test-prep", label: "Test prep" },
  { href: "#faq", label: "FAQ" },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-gold-300" : "text-gold-600"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-gold-300" : "bg-gold-500"}`} />
      {children}
    </p>
  );
}

function Btn({
  href,
  children,
  variant = "gold",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline-light" | "navy" | "outline";
  external?: boolean;
}) {
  const styles = {
    gold: "bg-gold-500 text-navy-950 hover:bg-gold-400",
    navy: "bg-navy-900 text-white hover:bg-navy-800",
    "outline-light": "border border-white/30 text-white hover:border-gold-300 hover:text-gold-300",
    outline: "border border-navy-900/20 text-navy-900 hover:border-gold-500 hover:text-gold-600",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? ext : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 ${styles}`}
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-baseline gap-1.5 text-white">
          <span className="font-serif text-xl font-semibold tracking-tight">TopTier</span>
          <span className="font-serif text-xl italic text-gold-400">Study</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-gold-300">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={site.academy.login}
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-white/80 hover:text-gold-300 sm:inline-block"
          >
            Student login
          </a>
          <a
            href={site.whatsapp}
            {...ext}
            className="hidden rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-gold-400 sm:inline-block"
          >
            Free consultation
          </a>
          <details className="relative lg:hidden">
            <summary
              aria-label="Open menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </summary>
            <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-white/10 bg-navy-900 p-2 shadow-2xl">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="block rounded-xl px-4 py-3 text-sm text-white/85 hover:bg-white/5">
                  {n.label}
                </a>
              ))}
              <a href={site.academy.login} className="block rounded-xl px-4 py-3 text-sm text-white/85 hover:bg-white/5">
                Student login
              </a>
              <a
                href={site.whatsapp}
                {...ext}
                className="mt-1 block rounded-xl bg-gold-500 px-4 py-3 text-center text-sm font-semibold text-navy-950"
              >
                Free consultation
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gold-500/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:pb-28 lg:pt-24">
        <div>
          <Eyebrow light>Barrister-led study abroad · Banani, Dhaka</Eyebrow>
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Your global future, handled with{" "}
            <em className="font-medium text-gold-400">legal precision.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            We help students from Bangladesh get into world-renowned universities in the UK, Australia, Malaysia,
            Canada, the USA and Europe — with every document, deadline and visa step checked properly.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Btn href={site.whatsapp} external>
              <WhatsApp className="h-5 w-5" /> Book a free consultation
            </Btn>
            <Btn href={site.academy.diagnostic} variant="outline-light">
              Take a free English check <ArrowRight className="h-4 w-4" />
            </Btn>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
          <dl className="grid grid-cols-3 gap-4 border-b border-white/10 pb-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-3xl font-semibold text-gold-400 sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">We send students to</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {destinations.map((d) => (
              <li key={d.code} className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/85">
                {d.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="border-b border-navy-900/10 bg-cream">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-serif text-2xl leading-snug text-navy-900 sm:text-3xl">
          “Strong students lose great offers over one wrong document or one missed deadline.”
        </p>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
          That&apos;s the gap TopTier was built to close. With a barrister leading the team, your file is prepared the
          way a legal case is — complete, consistent and on time.
        </p>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Not just another consultant</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Why a barrister-led consultancy makes a difference
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-navy-900/10 bg-navy-900/10 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <div key={p.title} className="bg-white p-8 lg:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-navy-900">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
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
    <section className="bg-navy-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div>
          <Eyebrow light>Credentials</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Trained in London. <span className="italic text-gold-400">Practising in Dhaka.</span>
          </h2>
          <div className="mt-10 border-l-2 border-gold-500 pl-6">
            <p className="font-serif text-2xl font-semibold">Barrister Muhammad Omar Soeb Chowdhury</p>
            <p className="mt-1 text-sm text-white/60">Founder &amp; CEO, TopTier Education Consultant</p>
          </div>
          <p className="mt-8 max-w-md leading-relaxed text-white/70">
            Every new student can start with a short free consultation to talk through goals, eligibility and the right
            next step.
          </p>
          <div className="mt-8">
            <Btn href={site.whatsapp} external>
              <WhatsApp className="h-5 w-5" /> Speak to the team
            </Btn>
          </div>
        </div>
        <ul className="space-y-3 self-center">
          {credentials.map((c) => (
            <li key={c} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span className="leading-relaxed text-white/85">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Complete support, from first question to first semester
            </h2>
          </div>
          <p className="leading-relaxed text-muted lg:pb-1">
            University admissions, visa processing and work permit guidance — step by step, with one team accountable
            throughout.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <article
                key={s.title}
                className="group rounded-3xl border border-navy-900/10 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-8 w-8 text-gold-500" />
                  <span className="font-serif text-sm text-navy-900/30">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
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
    <section id="destinations" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Where you can go</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Six destinations, one trusted team
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Pick the country that fits your course, budget and long-term plans — we&apos;ll walk you through what each
            one requires.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <article
              key={d.code}
              className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 text-white"
            >
              <span
                aria-hidden
                className="absolute -right-3 -top-6 font-serif text-[7rem] font-bold leading-none text-white/[0.05]"
              >
                {d.code}
              </span>
              <h3 className="relative font-serif text-2xl font-semibold">{d.name}</h3>
              <p className="relative mt-3 leading-relaxed text-white/70">{d.blurb}</p>
              <span className="relative mt-6 block h-px w-12 bg-gold-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestPrep() {
  return (
    <section id="test-prep" className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-gold-500/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:py-28">
        <div>
          <Eyebrow light>Get test-ready</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Build the English score your offer letter needs
          </h2>
          <p className="mt-5 leading-relaxed text-white/70">
            Most universities and visa routes ask for an IELTS or PTE score. Practise on TopTier Academy, see where you
            stand, and walk into your consultation knowing exactly what to work on.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Full-length IELTS and PTE practice in a real exam format",
              "Instant feedback on writing and speaking",
              "Practise anytime, on any device",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-white/85">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Btn href={site.academy.home}>
              Open TopTier Academy <ArrowRight className="h-4 w-4" />
            </Btn>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {prepTools.map((t) => (
            <a
              key={t.title}
              href={t.href}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-gold-400/60 hover:bg-white/[0.07]"
            >
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                  t.tag === "Free" ? "bg-gold-500 text-navy-950" : "bg-white/10 text-white"
                }`}
              >
                {t.tag}
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">{t.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
                {t.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Your path, step by step
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            A clear sequence, so you always know what&apos;s done and what&apos;s next.
          </p>
        </div>
        <ol className="mt-14 grid gap-8 md:grid-cols-5 md:gap-5">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="flex items-center gap-4 md:block">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-white font-serif text-lg font-semibold text-navy-900">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span aria-hidden className="absolute left-14 right-0 top-6 hidden h-px bg-gold-500/40 md:block" />
                )}
                <h3 className="font-serif text-lg font-semibold text-navy-900 md:mt-5">{s.title}</h3>
              </div>
              <p className="mt-2 pl-16 text-sm leading-relaxed text-muted md:pl-0">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Btn href={site.academy.journey} variant="navy">
            Plan your study abroad journey <ArrowRight className="h-4 w-4" />
          </Btn>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:py-28">
        <div>
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Need help? Start here.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Still have questions? The team is happy to talk them through with you.
          </p>
          <div className="mt-8">
            <Btn href={site.whatsapp} variant="outline" external>
              <WhatsApp className="h-5 w-5" /> Ask on WhatsApp
            </Btn>
          </div>
        </div>
        <div className="divide-y divide-navy-900/10 border-y border-navy-900/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 text-left font-serif text-lg font-semibold text-navy-900">
                {f.q}
                <Plus className="faq-icon h-5 w-5 shrink-0 text-gold-500 transition-transform" />
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contact" className="bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="rounded-[2rem] border border-gold-500/30 bg-gradient-to-br from-navy-800 to-navy-950 p-8 sm:p-12 lg:p-16">
          <Eyebrow light>Your next step</Eyebrow>
          <h2 className="max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Start with a free consultation — and a free English check.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
            Find out where you stand today, then sit down with the TopTier team to map out the right university, course
            and visa route for you.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Btn href={site.whatsapp} external>
              <WhatsApp className="h-5 w-5" /> Chat on WhatsApp
            </Btn>
            <Btn href={site.phoneTel} variant="outline-light">
              <Phone className="h-5 w-5" /> Call {site.phoneDisplay}
            </Btn>
            <Btn href={site.academy.diagnostic} variant="outline-light">
              Take the free check <ArrowRight className="h-4 w-4" />
            </Btn>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <a href={site.mapUrl} {...ext} className="flex gap-4 rounded-2xl p-2 hover:bg-white/[0.03]">
            <Pin className="h-6 w-6 shrink-0 text-gold-400" />
            <div>
              <p className="font-semibold">Visit our office</p>
              <p className="mt-1 text-sm leading-relaxed text-white/65">{site.address}</p>
            </div>
          </a>
          <a href={site.phoneTel} className="flex gap-4 rounded-2xl p-2 hover:bg-white/[0.03]">
            <Phone className="h-6 w-6 shrink-0 text-gold-400" />
            <div>
              <p className="font-semibold">Call us</p>
              <p className="mt-1 text-sm text-white/65">{site.phoneDisplay}</p>
            </div>
          </a>
          <a href={`mailto:${site.email}`} className="flex gap-4 rounded-2xl p-2 hover:bg-white/[0.03]">
            <Mail className="h-6 w-6 shrink-0 text-gold-400" />
            <div>
              <p className="font-semibold">Email us</p>
              <p className="mt-1 break-all text-sm text-white/65">{site.email}</p>
            </div>
          </a>
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
    <footer className="border-t border-white/10 bg-navy-950 text-white/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-baseline gap-1.5 text-white">
              <span className="font-serif text-xl font-semibold">TopTier</span>
              <span className="font-serif text-xl italic text-gold-400">Study</span>
            </p>
            <p className="mt-2 max-w-sm text-sm">A study-abroad and test-prep service of TopTier Education Consultant.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href={site.academy.home} className="hover:text-gold-300">TopTier Academy</a>
            <a href={site.academy.login} className="hover:text-gold-300">Student login</a>
            <a href={site.academy.calculator} className="hover:text-gold-300">Immigration calculator</a>
            <a href="#faq" className="hover:text-gold-300">FAQ</a>
          </div>
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                {...ext}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-gold-400 hover:text-gold-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40">
          <p>© 2014–2026 TopTier Education Consultant. All rights reserved.</p>
          <p className="mt-2">
            IELTS is a registered trademark of the British Council, IDP Education and Cambridge University Press &amp;
            Assessment. PTE is a trademark of Pearson. TOEFL is a registered trademark of ETS. TopTier Study is not
            affiliated with or endorsed by these organisations.
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
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
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
