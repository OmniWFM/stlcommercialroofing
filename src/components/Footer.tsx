import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto grid max-w-wrap gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-ember">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M2 11L12 3l10 8" stroke="#0d0d10" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 10v9h14v-9" stroke="#0d0d10" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>STL<span className="text-ember">Commercial</span>Roofing</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/60">
            Commercial roof systems installed, repaired, and restored across the St. Louis metro. Built to protect what is under your roof for decades.
          </p>
          <a
            href="tel:+18555091922"
            className="mt-6 inline-block rounded-full bg-ember px-6 py-3 text-sm font-semibold text-ink transition hover:bg-emberdark"
          >
            Call (855) 509-1922
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-bone">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-bone/60">
            <li><Link href="/" className="hover:text-ember">Home</Link></li>
            <li><Link href="/services" className="hover:text-ember">Services</Link></li>
            <li><Link href="/about" className="hover:text-ember">About</Link></li>
            <li><Link href="/contact" className="hover:text-ember">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-bone">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-bone/60">
            <li><a href="tel:+18555091922" className="hover:text-ember">(855) 509-1922</a></li>
            <li><a href="mailto:info@stlcommercialroofing.com" className="hover:text-ember">info@stlcommercialroofing.com</a></li>
            <li>St. Louis, MO &amp; surrounding metro</li>
            <li className="text-ember">24/7 Emergency Response</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-wrap flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-bone/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} STL Commercial Roofing. All rights reserved.</p>
          <p>Licensed &amp; Insured &bull; Serving the St. Louis Metro</p>
        </div>
      </div>
    </footer>
  );
}
