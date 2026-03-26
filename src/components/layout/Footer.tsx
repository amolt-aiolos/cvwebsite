import Link from "next/link";
import { siteConfig, footerLinks } from "@/lib/constants";
import Container from "./Container";

export default function Footer() {
  const sections = [
    { title: "Platform", links: footerLinks.platform },
    { title: "Solutions", links: footerLinks.solutions },
    { title: "Resources", links: footerLinks.resources },
    { title: "Company", links: footerLinks.company },
  ];

  return (
    <footer data-theme="dark" className="border-t border-white/5 pt-16 pb-8">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={siteConfig.logo} alt={siteConfig.name} className="mb-4 h-8" />
            <p className="text-sm text-text-light-secondary">
              {siteConfig.description}
            </p>
          </div>

          {/* Link columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-light/60">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-light-secondary transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-text-light-secondary">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-light-secondary">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
