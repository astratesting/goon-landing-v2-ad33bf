"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="font-heading text-2xl tracking-tight">
              <span className="text-white">GOO</span>
              <span className="text-goon-flame">N</span>
            </Link>
            <p className="text-goon-muted text-sm mt-4 leading-relaxed">
              AI wellness support that remembers your story. Built for the late-night
              spirals and the everyday stress.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#features"
                  className="text-sm text-goon-muted hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-goon-muted hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-goon-muted hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-goon-muted hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-goon-muted hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-goon-muted hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-goon-muted hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-goon-muted hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-goon-muted hover:text-white transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@goon.ai"
                  className="text-sm text-goon-muted hover:text-white transition-colors"
                >
                  hello@goon.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-goon-muted/40">
            © {new Date().getFullYear()} Goon. All rights reserved.
          </p>
          <p className="text-xs text-goon-muted/40">
            Goon is a wellness tool, not a medical device. If you&apos;re in
            crisis, please contact{" "}
            <a
              href="tel:988"
              className="underline hover:text-white transition-colors"
            >
              988 Suicide & Crisis Lifeline
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
