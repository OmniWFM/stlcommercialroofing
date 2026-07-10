"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/sai@treasureadvertising.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        }
      );

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ember/30 bg-charcoal p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember/15">
          <svg
            className="h-7 w-7 text-ember"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">Request received</h3>
        <p className="mt-3 text-bone/70">
          Thanks — your inspection request is in. We&apos;ll be in touch shortly. For
          storm emergencies, call{" "}
          <a href="tel:+18555091922" className="font-semibold text-ember">
            (855) 509-1922
          </a>{" "}
          any time.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-charcoal p-8"
    >
      <input type="hidden" name="_subject" value="New inspection request — STL Commercial Roofing" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-sm text-bone/70">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-bone outline-none focus:border-ember"
            placeholder="Jane Doe"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-sm text-bone/70">Company</label>
          <input
            type="text"
            name="company"
            className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-bone outline-none focus:border-ember"
            placeholder="Company / Property"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-sm text-bone/70">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-bone outline-none focus:border-ember"
            placeholder="you@company.com"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-sm text-bone/70">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-bone outline-none focus:border-ember"
            placeholder="(555) 555-5555"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm text-bone/70">How can we help?</label>
          <textarea
            rows={5}
            name="message"
            className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-bone outline-none focus:border-ember"
            placeholder="Tell us about your roof, building size, and what is going on."
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-ember">
          Something went wrong sending your request. Please call us at (855) 509-1922.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-ember px-8 py-3.5 font-semibold text-ink transition hover:bg-emberdark disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Request My Free Inspection"}
      </button>
    </form>
  );
}
