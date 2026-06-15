"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong");
        setLoading(false);
        return;
      }

      // Auto sign in after signup
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      setLoading(false);

      if (result?.error) {
        setError("Account created but sign-in failed. Try logging in.");
      } else {
        router.push("/dashboard");
      }
    } catch {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-goon-black flex items-center justify-center px-6">
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-goon-magenta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-goon-acid/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-heading text-3xl tracking-tight">
            <span className="text-white">GOO</span>
            <span className="text-goon-flame">N</span>
          </Link>
          <p className="text-goon-muted text-sm mt-3">
            Create your account. Start free.
          </p>
        </div>

        <div className="bg-goon-gray border border-white/10 rounded-2xl p-8">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-5">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-goon-muted mb-1.5">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-goon-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-goon-muted/40 focus:outline-none focus:border-goon-flame/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-goon-muted mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@email.com"
                className="w-full bg-goon-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-goon-muted/40 focus:outline-none focus:border-goon-flame/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-goon-muted mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="At least 6 characters"
                className="w-full bg-goon-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-goon-muted/40 focus:outline-none focus:border-goon-flame/50 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-goon-flame hover:bg-goon-flame/90 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg text-sm transition-all"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-goon-muted mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-goon-flame hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
