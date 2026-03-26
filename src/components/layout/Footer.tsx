import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import Container from "./Container";

const navLinks = [
  { label: "Watch Our Demo", href: "#demo" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "How We Do It", href: "#how-we-do-it" },
];

export default function Footer() {
  return (
    <footer data-theme="dark" className="border-t border-white/5 py-12">
      <Container>
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={siteConfig.logo} alt={siteConfig.name} className="h-8" />

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-light-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Waitlist CTA */}
          <Link
            href="#contact"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Join the Waitlist
          </Link>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/crowdvox/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-light-secondary transition-all hover:border-primary/30 hover:text-primary"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/crowdvox/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-light-secondary transition-all hover:border-primary/30 hover:text-primary"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 pt-6 w-full text-center">
            <p className="text-xs text-text-light-secondary">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
