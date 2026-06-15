"use client";

const steps = [
  {
    number: "01",
    title: "Chat",
    description:
      "Start talking — about your day, your anxiety, your 3am thoughts. Goon meets you where you are with zero judgment and zero scripts.",
    accent: "border-goon-flame",
    dot: "bg-goon-flame",
  },
  {
    number: "02",
    title: "AI Learns",
    description:
      "Goon builds a memory of your emotional patterns, preferred coping styles, humor tolerance, and cultural context. Each conversation sharpens the next.",
    accent: "border-goon-magenta",
    dot: "bg-goon-magenta",
  },
  {
    number: "03",
    title: "Personalized Support",
    description:
      "Over time, Goon delivers tailored mindfulness exercises, journaling prompts, and real-time interventions — like a trusted friend who actually remembers your history.",
    accent: "border-goon-acid",
    dot: "bg-goon-acid",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-goon-flame tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-white">
            Your AI gets smarter
            <br />
            <span className="text-goon-muted">every conversation</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative bg-goon-gray rounded-2xl p-8 border ${step.accent} border-opacity-20 hover:border-opacity-50 transition-all group`}
            >
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
              )}

              <div className={`w-2 h-2 ${step.dot} rounded-full mb-6`} />
              <span className="text-xs text-goon-muted font-mono">
                {step.number}
              </span>
              <h3 className="font-heading text-2xl text-white mt-2 mb-4">
                {step.title}
              </h3>
              <p className="text-goon-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
