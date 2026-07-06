"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-ember">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M2 11L12 3l10 8" stroke="#0d0d10" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 10v9h14v-9" stroke="#0d0d10" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>STL<span className="text-ember">Commercial</span>Roofing</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-bone/80 transition hover:text-ember">
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+18555091922"
            className="rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-emberdark"
          >
            (855) 509-1922
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d={open ? "M6 6l12 12M18 6L6 18" : "M3 6h18M3 12h18M3 18h18"} stroke="#f4f1ec" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-white/10 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-bone/80 transition hover:text-ember"
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+18555091922" className="mt-2 rounded-full bg-ember px-5 py-2.5 text-center text-sm font-semibold text-ink">
              Call (855) 509-1922
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
