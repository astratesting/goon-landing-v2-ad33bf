import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Goon — AI Wellness Chat That Remembers You",
  description:
    "Memory-enhanced AI chatbot for young adults dealing with late-night anxiety. Personalized support that adapts to your emotional patterns, humor, and cultural context.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-goon-black text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
