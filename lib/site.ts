// Central config for the landing page. Edit links, contact details and
// content here — components read from this file.

const ACADEMY = "https://academy.toptierstudy.com";

export const site = {
  name: "TopTier Study",
  url: "https://toptierstudy.com",
  description:
    "Barrister-led study abroad consultancy in Banani, Dhaka. Free IELTS & PTE practice, university admissions and student visa support for the UK, Australia, Malaysia, Canada, the USA and Europe.",

  phoneDisplay: "+880 1770-609199",
  phoneTel: "tel:+8801770609199",
  whatsapp:
    "https://wa.me/8801770609199?text=" +
    encodeURIComponent("Hi TopTier, I'd like to book a free consultation."),
  email: "contact@toptierconsultant.com",
  address: "Suite C1, House 120, Road 1, Block F, Banani, Dhaka 1213, Bangladesh",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("House 120, Road 1, Block F, Banani, Dhaka 1213"),

  social: {
    facebook: "https://www.facebook.com/toptier.edc",
    instagram: "https://www.instagram.com/toptier.edc",
    linkedin: "https://www.linkedin.com/company/toptierec",
    youtube: "https://www.youtube.com/@TopTierEducationConsultant",
  },

  // Parent consultancy website (no "www." — that host doesn't resolve)
  consultant: {
    url: "https://toptiereducationconsultant.com",
    label: "toptiereducationconsultant.com",
  },

  // Exam-prep portal (white-label, served on our subdomain)
  academy: {
    home: ACADEMY,
    login: `${ACADEMY}/login/`,
    diagnostic: `${ACADEMY}/language-tests/diagnostic/`,
    freeTest: `${ACADEMY}/language-tests/free-test/`,
    personality: `${ACADEMY}/psychometrics/free-test/`,
    allPrep: `${ACADEMY}/language-tests/`,
    journey: `${ACADEMY}/journey/`,
    calculator: `${ACADEMY}/immigration/calculator/`,
  },
} as const;

// Top-of-page banners. Edit text/links here to change the offers.
export const banners = {
  mockTest: {
    badge: "Free",
    text: "IELTS & PTE full mock test — real exam timing, instant feedback",
    short: "IELTS & PTE mock test",
    cta: "Take it free",
    href: site.academy.freeTest,
  },
  consultant: {
    text: "Planning to study abroad? Visit TopTier Education Consultant",
    short: "Visit TopTier Education Consultant",
    cta: site.consultant.label,
    href: site.consultant.url,
  },
};

// Test catalogue on TopTier Academy (all included in the platform).
export type TestGroup = "english" | "professional" | "admissions";

export const testGroups: { id: "all" | TestGroup; label: string }[] = [
  { id: "all", label: "All Tests" },
  { id: "english", label: "English" },
  { id: "professional", label: "Professional" },
  { id: "admissions", label: "Admissions" },
];

export const tests: {
  code: string;
  name: string;
  tag: string;
  tone: "amber" | "blue" | "rose" | "emerald" | "violet";
  group: TestGroup;
  body: string;
  feature: string;
  href: string;
}[] = [
  { code: "IELTS", name: "IELTS Preparation", tag: "Most popular", tone: "amber", group: "english", body: "Academic and General Training practice with AI feedback on Writing and Speaking.", feature: "Free mock test", href: site.academy.freeTest },
  { code: "PTE", name: "PTE Academic", tag: "AI scored", tone: "blue", group: "english", body: "Full PTE practice in the real exam format with instant scoring.", feature: "Free mock test", href: site.academy.freeTest },
  { code: "TOEFL", name: "TOEFL iBT", tag: "US universities", tone: "rose", group: "english", body: "Reading, listening, speaking and writing practice for TOEFL iBT.", feature: "Section practice", href: site.academy.allPrep },
  { code: "DET", name: "Duolingo English Test", tag: "Online test", tone: "emerald", group: "english", body: "Adaptive practice for the Duolingo English Test, anytime on any device.", feature: "Section practice", href: site.academy.allPrep },
  { code: "OET", name: "OET", tag: "Healthcare", tone: "rose", group: "professional", body: "English test practice for doctors, nurses and healthcare professionals.", feature: "Full practice", href: site.academy.home },
  { code: "CEL", name: "CELPIP", tag: "Canada", tone: "blue", group: "professional", body: "Practice for Canada's general English test used for immigration.", feature: "Full practice", href: site.academy.home },
  { code: "GRE", name: "GRE & GMAT", tag: "Graduate", tone: "violet", group: "admissions", body: "Quant, verbal and writing practice for master's and MBA admissions.", feature: "Full practice", href: site.academy.home },
  { code: "SAT", name: "SAT", tag: "Undergraduate", tone: "amber", group: "admissions", body: "Practice for undergraduate admissions in the USA.", feature: "Full practice", href: site.academy.home },
];

export const stats = [
  { value: "2014", label: "Established" },
  { value: "250+", label: "Global university partners" },
  { value: "6", label: "Study destinations" },
];

export const destinations = [
  { name: "United Kingdom", code: "UK", blurb: "Historic universities and focused one-year master's programmes." },
  { name: "Australia", code: "AU", blurb: "Globally ranked universities and a welcoming student lifestyle." },
  { name: "Malaysia", code: "MY", blurb: "Affordable, internationally recognised degrees close to home." },
  { name: "Canada", code: "CA", blurb: "High-quality education in a diverse, safe environment." },
  { name: "United States", code: "US", blurb: "World-leading research, STEM and business programmes." },
  { name: "Europe", code: "EU", blurb: "Diverse study options across leading European countries." },
];

export const pillars = [
  {
    title: "Precision on paperwork",
    body: "Academic records, financial documents, statements and offer letters are reviewed for gaps and inconsistencies before anything is submitted.",
  },
  {
    title: "Visa rules, properly understood",
    body: "Immigration requirements change often. You get guidance grounded in how the rules actually read, not guesswork.",
  },
  {
    title: "A clear strategy for your field",
    body: "Business, engineering, law, arts or beyond — you get a roadmap matched to your profile, budget and career goals.",
  },
];

export const credentials = [
  "LL.B and Diploma in Law",
  "Post Graduate Diploma in Law, City University of London",
  "Called to the Bar by the Honourable Society of Lincoln's Inn, London",
  "Enrolled as an Advocate, District & Sessions Judge Court, Dhaka",
  "Registered as an Advocate of the Supreme Court of Bangladesh",
];

export const services = [
  {
    title: "University & course selection",
    body: "Shortlists built around your grades, budget, intake and career plans from a network of 250+ global university partners.",
  },
  {
    title: "Applications & documents",
    body: "Application forms, statements and supporting documents prepared carefully and submitted ahead of deadlines.",
  },
  {
    title: "Student visa processing",
    body: "Visa files assembled and checked against current requirements, with preparation for any interview stage.",
  },
  {
    title: "Work permit guidance",
    body: "Advice on work rights during and after study, so your education plan lines up with your career plan.",
  },
  {
    title: "Pre-departure support",
    body: "Practical briefing before you fly, so you arrive knowing what to expect and what to carry.",
  },
  {
    title: "Post-arrival & post-study",
    body: "Support continues after you land and after you graduate — you're not on your own once the visa is approved.",
  },
];

export const prepTools = [
  {
    tag: "Free",
    title: "Quick diagnostic",
    body: "A short test that shows your current English level in minutes.",
    cta: "Start now",
    href: site.academy.diagnostic,
  },
  {
    tag: "Free",
    title: "Full practice test",
    body: "A complete mock exam with real timing and pressure.",
    cta: "Take the test",
    href: site.academy.freeTest,
  },
  {
    tag: "Free",
    title: "Personality & career fit",
    body: "Understand your strengths before you choose a course.",
    cta: "Discover yours",
    href: site.academy.personality,
  },
  {
    tag: "Practice",
    title: "All test prep",
    body: "Every IELTS and PTE module, section by section.",
    cta: "Explore",
    href: site.academy.allPrep,
  },
];

export const steps = [
  { title: "Free consultation", body: "Talk through your goals, grades, budget and preferred destinations." },
  { title: "Profile & English check", body: "We review your documents and you check your English level on the platform." },
  { title: "Shortlist & apply", body: "Choose the right universities and submit strong, complete applications." },
  { title: "Visa file", body: "Your visa application is prepared and checked against current requirements." },
  { title: "Fly & settle", body: "Pre-departure briefing, then support after you arrive." },
];

export const faqs = [
  {
    q: "What makes TopTier different from other education consultants?",
    a: "TopTier is founded and led by a UK-trained barrister who is also an Advocate of the Supreme Court of Bangladesh. That legal background shapes how every application and visa file is prepared — carefully, completely and on time.",
  },
  {
    q: "How can TopTier help me study abroad?",
    a: "We guide you through the whole process — choosing the right university and course, preparing applications, visa processing and pre-departure support.",
  },
  {
    q: "Which countries do you cover?",
    a: "We work with students heading to the UK, Australia, Malaysia, Canada, the USA and various European countries.",
  },
  {
    q: "Can I apply with low grades or a gap in my studies?",
    a: "In many cases, yes. Requirements vary by university and country, so the best first step is a free consultation where we review your profile honestly and tell you which options are realistic.",
  },
  {
    q: "Can TopTier help with my visa application too?",
    a: "Yes. Visa processing is a core part of what we do, alongside admissions and work permit guidance.",
  },
  {
    q: "What documents will I usually need?",
    a: "Typically your academic certificates, an English test score (IELTS or PTE), your passport, financial documents and an offer letter from a university. We'll give you an exact checklist for your case.",
  },
  {
    q: "Do you support students after they arrive?",
    a: "Yes. TopTier offers post-arrival and post-study support, so help continues once you've started your course.",
  },
];
