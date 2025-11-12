import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "TalkToYou AI, Talk again, remember forever",
  description: "Upload WhatsApp or Messenger chats as a txt file, add photos or voice, talk again through AI chat and FaceTime style video. Your memories, protected by design."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 bg-mist/80 backdrop-blur z-40 border-b border-gray-200">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-deep">
              TalkToYou <span className="text-aqua">AI</span>
            </Link>
            <div className="space-x-6 text-sm">
              <Link href="/how-it-works">How it works</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto px-4">{children}</main>
        <footer className="max-w-6xl mx-auto px-4 py-12 text-sm text-gray-600">
          <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} TalkToYou AI</p>
            <div className="space-x-4">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
