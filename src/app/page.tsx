import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "25+", label: "Years on St. Louis roofs" },
  { value: "4.2M", label: "Sq. ft. installed & restored" },
  { value: "0.71", label: "EMR safety rating" },
  { value: "24/7", label: "Emergency response" },
];

const services = [
  {
    title: "Commercial Roof Installation",
    desc: "New TPO, EPDM, PVC, and standing-seam metal systems engineered for your building, budget, and warranty goals.",
    icon: (
      <path d="M3 12L12 4l9 8M6 10v9h12v-9" stroke="#ff5a1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Repair & Preventive Service",
    desc: "Leak diagnostics, flashing repairs, and scheduled maintenance that add years to the roof you already own.",
    icon: (
      <path d="M14 6l4 4-8 8-4 1 1-4 7-9zM3 21h6" stroke="#ff5a1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Restoration & Coatings",
    desc: "Silicone and acrylic roof coating systems that seal, reflect, and extend service life at a fraction of replacement cost.",
    icon: (
      <path d="M4 20h16M6 16l4-8 4 5 3-4 1 7" stroke="#ff5a1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Architectural Cladding",
    desc: "Metal wall panels and facade systems that finish the building envelope with a clean, modern line.",
    icon: (
      <path d="M4 4h16v16H4zM4 9h16M4 14h16M9 4v16" stroke="#ff5a1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Glass & Glazing",
    desc: "Storefronts, curtain wall, and skylights installed and sealed to keep the envelope tight and energy efficient.",
    icon: (
      <path d="M5 3h14v18H5zM12 3v18M5 12h14" stroke="#ff5a1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Storm & Emergency Response",
    desc: "Rapid tarping, dry-in, and insurance-ready documentation after hail and wind events — around the clock.",
    icon: (
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="#ff5a1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

const reasons = [
  { title: "Commercial-only focus", desc: "We work exclusively on commercial and industrial roofs — no residential distractions, just deep low-slope expertise." },
  { title: "Value engineering", desc: "We spec the system that fits your budget and building, not the one that pads our invoice." },
  { title: "Safety you can trust", desc: "A sub-1.0 EMR and OSHA-trained crews mean less risk on your property and in your contract file." },
  { title: "Warranty-backed work", desc: "Manufacturer-certified installs backed by workmanship warranties and clear documentation." },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden grid-texture">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-charcoal to-ink" />
          <div className="absolute -top-32 right-0 -z-10 h-[520px] w-[520px] rounded-full bg-ember/20 blur-[140px]" />
          <div className="mx-auto max-w-wrap px-6 pb-24 pt-40 md:pt-48">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ember">
                <span className="h-2 w-2 rounded-full bg-ember" /> St. Louis Commercial Roofing
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
                We protect what is{" "}
                <span className="gradient-text">under your roof.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/70">
                Commercial roof systems installed, repaired, and restored across the St. Louis metro — engineered for the long haul and backed by crews who show up when it matters.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-ember px-7 py-3.5 font-semibold text-ink transition hover:bg-emberdark">
                  Get a Free Roof Inspection
                </Link>
                <Link href="/services" className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-bone transition hover:border-ember hover:text-ember">
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-white/10 bg-charcoal">
          <div className="mx-auto grid max-w-wrap grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div>
                  <div className="font-display text-4xl font-bold text-ember md:text-5xl">{s.value}</div>
                  <div className="mt-2 text-sm text-bone/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-wrap px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-ember">Who we are</span>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
                  A commercial roofing partner, not just a contractor.
                </h2>
                <p className="mt-6 leading-relaxed text-bone/70">
                  For more than two decades we have kept St. Louis buildings dry — warehouses, retail centers, schools, medical facilities, and industrial plants. We do not chase the cheapest patch. We build roof systems that hold up through Midwest hail, heat, and hard winters, and we stand behind every square foot.
                </p>
                <p className="mt-4 leading-relaxed text-bone/70">
                  From the first inspection to the final warranty walk, you deal with people who know your building by name.
                </p>
                <Link href="/about" className="mt-8 inline-block font-semibold text-ember hover:text-emberdark">
                  More about us &rarr;
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-stone to-charcoal p-8">
                <div className="grid-texture absolute inset-0 opacity-40" />
                <div className="relative space-y-5">
                  {reasons.map((r) => (
                    <div key={r.title} className="rounded-xl border border-white/10 bg-ink/50 p-5">
                      <h3 className="font-display font-semibold text-bone">{r.title}</h3>
                      <p className="mt-1 text-sm text-bone/60">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-white/10 bg-charcoal">
          <div className="mx-auto max-w-wrap px-6 py-24">
            <Reveal>
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-wider text-ember">What we do</span>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
                  Full-scope commercial roofing.
                </h2>
                <p className="mt-4 text-bone/70">
                  One accountable team for the entire building envelope — install, service, restore, and protect.
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 100}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-ink/60 p-7 transition hover:-translate-y-1 hover:border-ember/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember/10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-bone/60">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ember to-emberdark" />
          <div className="mx-auto max-w-wrap px-6 py-20 text-center">
            <Reveal>
              <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
                Storm damage? A nagging leak? Let us take a look — free.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl text-ink/80">
                Get a no-obligation roof inspection with a written report and honest recommendations. If it can be repaired, we will tell you.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="rounded-full bg-ink px-8 py-3.5 font-semibold text-bone transition hover:bg-ink/80">
                  Schedule My Inspection
                </Link>
                <a href="tel:+18555091922" className="rounded-full border border-ink/30 px-8 py-3.5 font-semibold text-ink transition hover:bg-ink/10">
                  Call (855) 509-1922
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
