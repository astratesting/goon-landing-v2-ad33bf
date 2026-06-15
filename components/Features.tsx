"use client";

const features = [
  {
    title: "Personalized Therapy Pathways",
    description:
      "Goon doesn't use one-size-fits-all CBT scripts. It builds adaptive pathways based on what actually works for you — blending mindfulness, DBT skills, motivational interviewing, and narrative techniques.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    accent: "text-goon-flame",
    bg: "bg-goon-flame/10",
  },
  {
    title: "Mood Tracking Over Time",
    description:
      "See your emotional landscape mapped across days, weeks, and months. Identify triggers, track progress, and understand patterns you never noticed before.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: "text-goon-magenta",
    bg: "bg-goon-magenta/10",
  },
  {
    title: "24/7 Availability",
    description:
      "Anxiety doesn't keep office hours. Goon is there at 2am on a Tuesday, during a panic attack before a presentation, or whenever you need to talk something through.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: "text-goon-acid",
    bg: "bg-goon-acid/10",
  },
  {
    title: "Privacy-First Design",
    description:
      "Your conversations are encrypted end-to-end. We don't sell data, run ads, or share anything with third parties. Your mental health journey is yours alone.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    accent: "text-goon-flame",
    bg: "bg-goon-flame/10",
  },
  {
    title: "Culturally Attuned Conversations",
    description:
      "Goon understands that mental health looks different across cultures. It adapts its language, references, and approaches to fit your background and values.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: "text-goon-magenta",
    bg: "bg-goon-magenta/10",
  },
  {
    title: "Licensed Telehealth Escalation",
    description:
      "When Goon detects you need more than AI support, it seamlessly connects you with a licensed therapist — with full context transfer so you never have to repeat your story.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    accent: "text-goon-acid",
    bg: "bg-goon-acid/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-goon-black via-goon-dark to-goon-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-goon-magenta tracking-widest uppercase mb-4">
            Features
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-4">
            Built for how you
            <br />
            <span className="text-goon-muted">actually feel</span>
          </h2>
          <p className="text-goon-muted max-w-xl mx-auto text-sm">
            Not another clinical chatbot. Goon combines memory-enhanced AI with
            real therapeutic techniques, wrapped in a conversational tone that
            doesn&apos;t feel like homework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="gradient-border group"
            >
              <div className="relative bg-goon-gray rounded-2xl p-7 h-full">
                <div
                  className={`w-10 h-10 ${feature.bg} rounded-xl flex items-center justify-center ${feature.accent} mb-5`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-goon-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
