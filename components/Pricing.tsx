"use client";

import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Full access to Goon's core conversational AI. No time limits.",
    features: [
      "Unlimited chat sessions",
      "Memory-enhanced conversations",
      "Adaptive tone & humor",
      "Basic coping techniques",
      "Privacy-first encryption",
    ],
    cta: "Start Chatting",
    ctaHref: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Everything in Free plus advanced tools for deeper wellness work.",
    features: [
      "Everything in Free",
      "Personalized therapy pathways",
      "Mood tracking & analytics",
      "Guided mindfulness exercises",
      "Journaling prompt library",
      "Licensed telehealth access",
      "Priority response speed",
    ],
    cta: "Start Free Trial",
    ctaHref: "/signup",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-goon-acid tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-goon-muted max-w-lg mx-auto text-sm">
            Start free. Upgrade when you&apos;re ready. Cancel anytime — no
            tricks, no guilt trips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-goon-gray border-2 border-goon-flame/50"
                  : "bg-goon-gray border border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-goon-flame text-white text-xs font-medium px-4 py-1 rounded-full">
                  Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-xl text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl text-white">
                    {plan.price}
                  </span>
                  <span className="text-goon-muted text-sm">{plan.period}</span>
                </div>
                <p className="text-goon-muted text-sm mt-3">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-goon-muted"
                  >
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-goon-flame" : "text-goon-acid"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`block text-center text-sm font-medium py-3 rounded-full transition-all ${
                  plan.highlighted
                    ? "bg-goon-flame hover:bg-goon-flame/90 text-white glow-flame"
                    : "bg-white/10 hover:bg-white/15 text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-goon-muted/50 mt-8">
          Pro plan includes a 7-day free trial. Cancel anytime from your account
          settings. Telehealth sessions billed separately.
        </p>
      </div>
    </section>
  );
}
