"use client";

import { useState } from "react";
import Link from "next/link";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-goon-gray border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-goon-flame/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-goon-magenta/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-medium text-goon-acid tracking-widest uppercase mb-4">
              Early Access
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-white mb-4">
              Be first in line
            </h2>
            <p className="text-goon-muted text-sm max-w-md mx-auto mb-8">
              We&apos;re building Goon in public and launching soon. Join the
              waitlist to get early access, shape the product, and lock in
              founding-member pricing.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-goon-black border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-goon-muted/50 focus:outline-none focus:border-goon-flame/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-goon-flame hover:bg-goon-flame/90 disabled:opacity-60 text-white font-medium px-6 py-3 rounded-full text-sm transition-all glow-flame whitespace-nowrap"
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            ) : (
              <div className="bg-goon-acid/10 border border-goon-acid/20 rounded-xl p-4 max-w-md mx-auto">
                <p className="text-goon-acid text-sm font-medium">
                  You&apos;re on the list! We&apos;ll be in touch soon.
                </p>
              </div>
            )}

            <p className="text-xs text-goon-muted/40 mt-6">
              No spam, ever. Unsubscribe anytime. We only email about Goon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
