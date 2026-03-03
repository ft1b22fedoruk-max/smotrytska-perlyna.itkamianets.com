"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const BOOKING_URL = "#rooms";

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.rooms, href: "#rooms" },
    { label: t.nav.restaurant, href: "#restaurant" },
    { label: t.nav.spa, href: "#amenities" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.contacts, href: "#footer" },
  ];

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8 lg:py-5">
        {/* Logo */}
        <a href="#hero" className="text-primary-foreground">
          <span className="font-serif text-xl font-bold tracking-[0.15em] md:text-2xl text-primary-foreground">
            TARAS BULBA
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={BOOKING_URL}
            className="hidden rounded-none border border-primary-foreground/60 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary lg:inline-flex"
          >
            {t.nav.book}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center text-primary-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-primary lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-serif text-xl font-bold tracking-[0.15em] text-primary-foreground">
              TARAS BULBA
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-primary-foreground"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium uppercase tracking-[0.3em] text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              onClick={() => setMobileOpen(false)}
              className="mt-4 border border-primary-foreground/60 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
            >
              {t.nav.book}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
