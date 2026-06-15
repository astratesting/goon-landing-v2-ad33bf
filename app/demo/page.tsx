"use client";

import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// Auto-login as demo user and redirect to dashboard
export default function DemoPage() {
  const router = useRouter();

  useEffect(() => {
    async function autoLogin() {
      const result = await signIn("credentials", {
        email: "demo@demo.app",
        password: "demo123",
        redirect: false,
      });
      if (result?.ok) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    }
    autoLogin();
  }, [router]);

  return (
    <div className="min-h-screen bg-goon-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-goon-flame border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-goon-muted text-sm">
          Setting up your demo session...
        </p>
      </div>
    </div>
  );
}
