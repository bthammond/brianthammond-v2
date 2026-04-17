import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.778 13.019H3.555V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-24">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-site py-14 grid md:grid-cols-[1fr_auto] items-center gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold mb-2">Start here</p>
            <h3 className="font-serif text-3xl text-white">
              Take ten minutes. Find out where you stand.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/diagnostic" className="btn-primary !bg-gold !text-foreground hover:!bg-gold-deep">
              Start the diagnostic <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-foreground">
              Schedule a consult
            </Link>
          </div>
        </div>
      </div>

      <div className="container-site py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-white mb-3">Brian T. Hammond</h3>
            <p className="text-white/80 max-w-md">
              Family business advisor and entrepreneur mentor. Helping owners connect
              the dots, build the right systems, and grow — from someone who runs a
              family business too.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white/70 hover:text-gold transition">
                <IconLinkedIn />
              </a>
              <a href="https://twitter.com" aria-label="X" className="text-white/70 hover:text-gold transition">
                <IconX />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-white/70 hover:text-gold transition">
                <IconFacebook />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/family-framework" className="hover:text-gold transition">FAMILY Framework</Link></li>
              <li><Link href="/diagnostic" className="hover:text-gold transition">Diagnostic</Link></li>
              <li><Link href="/how-i-help" className="hover:text-gold transition">How I help</Link></li>
              <li><Link href="/who-i-help" className="hover:text-gold transition">Who I help</Link></li>
              <li><Link href="/about" className="hover:text-gold transition">About</Link></li>
              <li><Link href="/insights" className="hover:text-gold transition">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Get in touch</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <a href="tel:18004282424" className="hover:text-gold transition">1.800.428.2424</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <a href="mailto:brian@brianthammond.com" className="hover:text-gold transition">brian@brianthammond.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Brian T. Hammond. All rights reserved.</p>
          <p>MBA, LSU &middot; 30+ years advising family businesses and entrepreneurs.</p>
        </div>
      </div>
    </footer>
  );
}
