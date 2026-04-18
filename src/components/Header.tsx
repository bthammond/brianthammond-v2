"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/architecture", label: "The Architecture" },
  { href: "/how-i-help", label: "How I help" },
  { href: "/who-i-help", label: "Who I help" },
  { href: "/readiness", label: "Readiness" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container-site flex items-center justify-between h-20">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
          Brian T. Hammond
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft hover:text-coral transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Let&apos;s talk
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-site py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
