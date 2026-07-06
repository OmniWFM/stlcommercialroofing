import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "STL Commercial Roofing is a St. Louis commercial roofing contractor built on craftsmanship, safety, and long-term relationships with the building owners and property managers we serve.",
};

const values = [
  { title: "Craftsmanship", desc: "We install every system by the book — the manufacturer's and ours. The details you never see are the ones that keep you dry." },
  { title: "Integrity", desc: "Honest assessments, clear scopes, and fair pricing. If a repair will do, we will not sell you a replacement." },
  { title: "Safety", desc: "OSHA-trained crews and a sub-1.0 EMR keep our people safe and protect your property and your liability exposure." },
  { title: "Relationships", desc: "Most of our work comes from owners and managers who call us back. That trust is the whole business." },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden grid-texture">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-charcoal to-ink" />
          <div className="absolute -top-32 right-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-ember/20 blur-[130px]" />
          <div className="mx-auto max-w-wrap px-6 pb-16 pt-40 md:pt-48">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-ember">About</span>
              <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Built on trust, craftsmanship, and a handshake that holds.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-bone/70">
                We do not just build roof systems — we build long-term relationships with the people responsible for keeping St. Louis buildings running.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-wrap px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="space-y-4 leading-relaxed text-bone/70">
                <p>
                  STL Commercial Roofing was founded on a simple idea: commercial building owners deserve a roofing partner who treats their property like their own. Over 25 years, we have grown from a small local crew into one of the metro's trusted commercial roofing teams — and we have kept the same hands-on approach the whole way.
                </p>
                <p>
                  We work exclusively on commercial and industrial buildings, so our crews live in the world of low-slope systems, coatings, and complex details every single day. That focus shows up in cleaner installs, fewer callbacks, and roofs that hit their full service life.
                </p>
                <p>
                  Whether it is a 2,000 sq. ft. storefront or a 400,000 sq. ft. distribution center, you get the same thing: a straight answer, a fair price, and work we are proud to put our name on.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "25+", l: "Years in business" },
                  { v: "4.2M", l: "Sq. ft. completed" },
                  { v: "0.71", l: "EMR safety rating" },
                  { v: "100%", l: "Commercial focus" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-white/10 bg-charcoal p-6">
                    <div className="font-display text-3xl font-bold text-ember">{s.v}</div>
                    <div className="mt-1 text-sm text-bone/60">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-white/10 bg-charcoal">
          <div className="mx-auto max-w-wrap px-6 py-20">
            <Reveal>
              <h2 className="font-display text-4xl font-bold md:text-5xl">What we stand on.</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 4) * 90}>
                  <div className="h-full rounded-2xl border border-white/10 bg-ink/60 p-7">
                    <h3 className="font-display text-xl font-semibold text-ember">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-bone/60">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ember to-emberdark" />
          <div className="mx-auto max-w-wrap px-6 py-20 text-center">
            <Reveal>
              <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold text-ink md:text-5xl">
                Let us earn a spot on your building.
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="rounded-full bg-ink px-8 py-3.5 font-semibold text-bone transition hover:bg-ink/80">
                  Start With a Free Inspection
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
