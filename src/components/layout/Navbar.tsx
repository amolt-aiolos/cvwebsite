"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import Container from "./Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOverLight, setIsOverLight] = useState(false);

  const detectBackground = useCallback(() => {
    // Check which section the navbar is overlapping
    const navHeight = 72;
    const checkPoint = navHeight / 2;

    // Find all sections and check if the navbar midpoint overlaps a light section
    const sections = document.querySelectorAll("section, [data-theme]");
    let overLight = false;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= checkPoint && rect.bottom >= checkPoint) {
        const theme = section.getAttribute("data-theme");
        if (theme !== "dark") {
          // Check if section has a light/white background
          const bg = window.getComputedStyle(section).backgroundColor;
          const isLightBg =
            theme === "light" ||
            section.classList.contains("bg-bg-light") ||
            section.classList.contains("bg-white") ||
            (bg && !bg.includes("0, 0, 0") && !bg.includes("10, 10, 15") && !bg.includes("20, 20, 32") && bg !== "rgba(0, 0, 0, 0)");
          if (isLightBg) {
            overLight = true;
          }
        }
      }
    });

    setIsOverLight(overLight);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      detectBackground();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial check
    detectBackground();
    return () => window.removeEventListener("scroll", onScroll);
  }, [detectBackground]);

  // Determine color scheme based on background
  const navColors = isOverLight && scrolled
    ? {
        text: "text-text-dark/80",
        textHover: "hover:text-text-dark",
        textActive: "text-text-dark",
        glass: "glass-nav-light",
        border: "border-black/5",
        mobileText: "text-text-dark/80",
        mobileHover: "hover:text-text-dark hover:bg-black/5",
        mobileBg: "bg-white",
        mobileBorder: "border-black/5",
        dropdownBg: "glass-nav-light",
        dropdownHover: "hover:bg-black/5",
        dropdownText: "text-text-dark",
        dropdownSubtext: "text-text-dark-secondary",
        logoFilter: "brightness-0",
      }
    : {
        text: "text-text-light/80",
        textHover: "hover:text-white",
        textActive: "text-white",
        glass: "glass",
        border: "border-white/5",
        mobileText: "text-text-light/80",
        mobileHover: "hover:text-white hover:bg-white/5",
        mobileBg: "bg-bg-dark",
        mobileBorder: "border-white/5",
        dropdownBg: "glass",
        dropdownHover: "hover:bg-white/5",
        dropdownText: "text-text-light",
        dropdownSubtext: "text-text-light-secondary",
        logoFilter: "",
      };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? `${navColors.glass} border-b ${navColors.border} py-3`
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.logo}
              alt={siteConfig.name}
              className={cn(
                "h-8 transition-all duration-300",
                isOverLight && scrolled ? "invert" : ""
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setOpenDropdown(link.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    navColors.text,
                    navColors.textHover
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "absolute left-0 top-full mt-2 w-72 rounded-xl p-2",
                        navColors.dropdownBg
                      )}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-4 py-3 transition-colors",
                            navColors.dropdownHover
                          )}
                        >
                          <span className={cn("block text-sm font-medium", navColors.dropdownText)}>
                            {child.label}
                          </span>
                          <span className={cn("mt-0.5 block text-xs", navColors.dropdownSubtext)}>
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="secondary" size="sm" href="/pricing">
              Pricing
            </Button>
            <Button size="sm" href="/contact">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "rounded-lg p-2 lg:hidden transition-colors",
              isOverLight && scrolled ? "text-text-dark" : "text-text-light"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              "overflow-hidden border-t lg:hidden",
              navColors.mobileBorder,
              navColors.mobileBg
            )}
          >
            <Container className="py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm font-medium",
                        navColors.mobileText,
                        navColors.mobileHover
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-lg px-8 py-2 text-sm",
                          navColors.dropdownSubtext,
                          navColors.textHover
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Button href="/pricing" variant="secondary" size="sm">
                    Pricing
                  </Button>
                  <Button href="/contact" size="sm">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
