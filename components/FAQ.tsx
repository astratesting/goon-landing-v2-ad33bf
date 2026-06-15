"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How is Goon different from other mental health chatbots?",
    a: "Goon uses memory-enhanced AI that builds a persistent understanding of your emotional patterns, preferred coping styles, humor tolerance, and cultural context. Unlike Woebot (clinical CBT scripts) or Wysa (structured exercises), Goon adapts its personality and approach based on who you are — it feels like talking to a friend who actually remembers your history.",
  },
  {
    q: "Is Goon a replacement for therapy?",
    a: "No. Goon is a wellness tool, not a clinical service. It helps with everyday stress, anxiety, and emotional processing. If you're in crisis or need clinical treatment, Goon can connect you with a licensed therapist through our telehealth integration. We're transparent about our limitations.",
  },
  {
    q: "How does the memory system work?",
    a: "Goon builds a secure, encrypted profile of your conversations over time. It tracks emotional patterns, topics that help or trigger you, your communication preferences, and which coping techniques resonate. This data stays private and is never sold or shared. You can delete it anytime.",
  },
  {
    q: "Is my data private?",
    a: "Yes. All conversations are encrypted end-to-end. We don't sell data, run ads, or share anything with third parties. We're building with HIPAA-aware principles from day one. You own your data and can export or delete it at any time.",
  },
  {
    q: "What does the free plan include?",
    a: "The free plan gives you unlimited chat sessions with Goon's full conversational AI, including memory, adaptive tone, and basic coping techniques. No time limits, no paywalls on core conversation. Pro adds personalized therapy pathways, mood tracking, mindfulness exercises, and telehealth access.",
  },
  {
    q: "Who is Goon built for?",
    a: "Young adults (18-34) experiencing everyday anxiety, stress, and emotional overwhelm — especially the late-night variety. Goon is designed for people who find traditional therapy apps too clinical or impersonal, and who want support that feels culturally relevant and conversational.",
  },
  {
    q: "Can I cancel Pro anytime?",
    a: "Yes. Cancel anytime from your account settings with one click. No cancellation fees, no guilt trips, no dark patterns. If you cancel, you keep Pro features until the end of your billing period, then revert to the free plan.",
  },
  {
    q: "When will telehealth be available?",
    a: "Licensed telehealth integration is part of the Pro plan and is currently being built. We're partnering with licensed therapists to ensure seamless handoff — your Goon conversation history transfers so you never have to repeat your story. We'll announce availability on our waitlist first.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-goon-black via-goon-dark to-goon-black" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-goon-flame tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-white">
            Questions?
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-goon-gray border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-white">
                  {faq.q}
                </span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 text-goon-muted transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-goon-muted leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
