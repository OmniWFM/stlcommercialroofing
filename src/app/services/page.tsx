import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Commercial Roofing Services",
  description:
    "TPO, EPDM, PVC, and metal roof installation, repair, restoration, coatings, cladding, glazing, and 24/7 emergency service for commercial buildings across St. Louis.",
};

const services = [
  {
    title: "Commercial Roof Installation",
    desc: "Full tear-off and re-roof or new construction. We install single-ply TPO, EPDM, and PVC, built-up and modified bitumen, and standing-seam metal — specified to your building use, insulation targets, and warranty needs.",
    points: ["TPO / EPDM / PVC single-ply", "Standing-seam & architectural metal", "Tapered insulation & drainage design", "Manufacturer-certified installation"],
  },
  {
    title: "Repair & Preventive Maintenance",
    desc: "Small problems get expensive fast. Our leak diagnostics, flashing and seam repairs, and scheduled maintenance programs keep your roof — and your warranty — in good standing.",
    points: ["Leak detection & moisture surveys", "Flashing, seam & penetration repair", "Preventive maintenance plans", "Documented condition reports"],
  },
  {
    title: "Restoration & Coatings",
    desc: "Restore, do not replace. Silicone and acrylic coating systems seal leaks, reflect heat, and add years of service life — often at a fraction of the cost of a full replacement, with potential tax advantages.",
    points: ["Silicone & acrylic coating systems", "Energy-reflective, cool-roof options", "Ponding-water treatment", "Renewable warranty options"],
  },
  {
    title: "Architectural Cladding",
    desc: "Finish the building envelope with insulated metal panels and modern facade systems that improve efficiency and curb appeal while sealing the structure.",
    points: ["Insulated metal wall panels", "Composite & metal facades", "Soffit & fascia systems", "Weather-tight detailing"],
  },
  {
    title: "Glass & Glazing",
    desc: "Storefronts, curtain wall, skylights, and daylighting systems installed and sealed to keep the envelope tight, bright, and energy efficient.",
    points: ["Storefront & curtain wall", "Skylights & daylighting", "Glazing repair & resealing", "Energy-efficient assemblies"],
  },
  {
    title: "Storm & 24/7 Emergency Response",
    desc: "When hail or wind hits, we move. Rapid tarping and dry-in stop the damage, and our insurance-ready documentation makes your claim easier to win.",
    points: ["Around-the-clock dispatch", "Emergency tarping & dry-in", "Hail & wind damage assessment", "Insurance claim documentation"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden grid-texture">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-charcoal to-ink" />
          <div className="absolute -top-32 left-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-ember/20 blur-[130px]" />
          <div className="mx-auto max-w-wrap px-6 pb-16 pt-40 md:pt-48">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-ember">Services</span>
              <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Everything above your building, handled.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-bone/70">
                One accountable commercial roofing team for the full envelope — from new installs to emergency repairs across the St. Louis metro.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-wrap px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-charcoal p-8 transition hover:border-ember/50">
                  <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-bone/60">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-bone/80">
                        <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ember/15">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#ff5a1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ember to-emberdark" />
          <div className="mx-auto max-w-wrap px-6 py-20 text-center">
            <Reveal>
              <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold text-ink md:text-5xl">
                Not sure what your roof needs? We will tell you straight.
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="rounded-full bg-ink px-8 py-3.5 font-semibold text-bone transition hover:bg-ink/80">
                  Get a Free Inspection
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
