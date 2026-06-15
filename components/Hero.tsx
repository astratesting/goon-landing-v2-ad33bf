"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-goon-flame/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-goon-magenta/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-goon-acid/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-goon-gray border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-goon-acid rounded-full pulse-green" />
          <span className="text-xs text-goon-muted">
            Early Access — Building in Public
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
          <span className="text-white">The AI that</span>
          <br />
          <span className="gradient-text">remembers you</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-goon-muted max-w-2xl mx-auto mb-4 leading-relaxed">
          Goon is a memory-enhanced wellness chatbot that learns your emotional
          patterns, adapts its tone and humor, and builds coping strategies
          unique to you — session after session.
        </p>
        <p className="text-sm text-goon-muted/60 max-w-xl mx-auto mb-10">
          For the 2am spirals, the Sunday scaries, and everything in between.
          Built for young adults navigating work stress, social pressure, and
          late-night anxiety.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="bg-goon-flame hover:bg-goon-flame/90 text-white font-medium px-8 py-3.5 rounded-full text-sm transition-all glow-flame"
          >
            Join the Waitlist
          </Link>
          <Link
            href="/demo"
            className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-3.5 rounded-full text-sm transition-all"
          >
            View Live Demo →
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-xs text-goon-muted/40">
          No credit card required · Free tier available · HIPAA-aware design
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-goon-black to-transparent" />
    </section>
  );
}
