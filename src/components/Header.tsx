"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/about", label: "About" },
  { href: "/architecture", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Connect" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/50">
      <div className="container-site flex items-center justify-between h-[88px]">
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-2xl font-semibold tracking-tight">
            Brian T. Hammond
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted mt-1">
            Family Business Advisor · Chief Learning Officer
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-coral transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-coral transition-all duration-300 group-hover:w-full" />
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
