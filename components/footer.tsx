"use client";

import { MapPin, Phone, Instagram } from "lucide-react";
import { useI18n, BOOKING_URL } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer id="footer" className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 border-b border-primary-foreground/10 pb-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-lg font-bold tracking-[0.15em] text-primary-foreground">
              {t.footer.brandName}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/50">
              {t.footer.brandDesc}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block border border-primary-foreground/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
            >
              {t.nav.book}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">
              {t.footer.navHeading}
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href="#hero"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#rooms"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  {t.nav.rooms}
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  {t.nav.spa}
                </a>
              </li>
              <li>
                <a
                  href="#restaurant"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  {t.nav.restaurant}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  {t.nav.reviews}
                </a>
              </li>
            </ul>
          </div>

          {/* Addresses & Phones */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">
              {t.footer.addressHeading}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/60">
                  {t.footer.hotelAddress}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/60">
                  {t.footer.restaurantAddress}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${t.footer.hotelPhone}`}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {"Готель: "}
                    {t.footer.hotelPhone}
                  </a>
                  <a
                    href={`tel:${t.footer.restaurantPhone}`}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {"Ресторан: "}
                    {t.footer.restaurantPhone}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">
              Instagram
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-accent" />
                <a
                  href="https://instagram.com/tarasbulba.hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  {t.footer.instagramHotel}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-accent" />
                <a
                  href="https://instagram.com/tarasbulbakp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  {t.footer.instagramRestaurant}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-primary-foreground/30">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
