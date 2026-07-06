import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact & Free Roof Inspection",
  description:
    "Request a free commercial roof inspection or 24/7 emergency service in the St. Louis metro. Call STL Commercial Roofing at (855) 509-1922.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden grid-texture">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-charcoal to-ink" />
          <div className="absolute -top-32 left-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-ember/20 blur-[130px]" />
          <div className="mx-auto max-w-wrap px-6 pb-16 pt-40 md:pt-48">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-ember">Contact</span>
              <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Get your free roof inspection.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-bone/70">
                Tell us about your building and we will schedule a no-obligation inspection with a written report. Storm emergency? Call us any time, day or night.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-wrap px-6 py-20">
          <div className="grid gap-10 md:grid-cols-5">
            <Reveal className="md:col-span-3">
              <form className="rounded-2xl border border-white/10 bg-charcoal p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm text-bone/70">Name</label>
                    <input type="text" className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-bone outline-none focus:border-ember" placeholder="Jane Doe" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm text-bone/70">Company</label>
                    <input type="text" className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-bone outline-none focus:border-ember" placeholder="Company / Property" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm text-bone/70">Email</label>
                    <input type="email" className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-bone outline-none focus:border-ember" placeholder="you@company.com" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm text-bone/70">Phone</label>
                    <input type="tel" className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-bone outline-none focus:border-ember" placeholder="(555) 555-5555" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm text-bone/70">How can we help?</label>
                    <textarea rows={5} className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-bone outline-none focus:border-ember" placeholder="Tell us about your roof, building size, and what is going on." />
                  </div>
                </div>
                <button type="submit" className="mt-6 w-full rounded-full bg-ember px-8 py-3.5 font-semibold text-ink transition hover:bg-emberdark sm:w-auto">
                  Request My Free Inspection
                </button>
              </form>
            </Reveal>

            <Reveal delay={120} className="md:col-span-2">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-charcoal p-7">
                  <h3 className="font-display text-lg font-semibold">Call us</h3>
                  <a href="tel:+18555091922" className="mt-2 block text-2xl font-bold text-ember">(855) 509-1922</a>
                  <p className="mt-1 text-sm text-bone/60">24/7 emergency response available.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-charcoal p-7">
                  <h3 className="font-display text-lg font-semibold">Email</h3>
                  <a href="mailto:info@stlcommercialroofing.com" className="mt-2 block text-bone/80 hover:text-ember">info@stlcommercialroofing.com</a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-charcoal p-7">
                  <h3 className="font-display text-lg font-semibold">Service area</h3>
                  <p className="mt-2 text-bone/80">St. Louis, MO and the surrounding metro — Missouri and Metro-East Illinois.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
