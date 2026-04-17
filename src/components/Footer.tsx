import Link from "next/link";
import { Mail, Phone } from "lucide-react";

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.778 13.019H3.555V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-24">
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
              <a
                href="https://www.linkedin.com/in/brianthammond/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn — Brian T. Hammond"
                className="text-white/70 hover:text-gold transition"
              >
                <IconLinkedIn />
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
