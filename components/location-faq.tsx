"use client";

import { useI18n } from "@/lib/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";

export default function LocationFaq() {
  const { t } = useI18n();

  return (
    <section id="location" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {t.location.subtitle}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
            {t.location.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Left column - FAQ Accordion */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Важлива інформація
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {t.location.faq.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right column - Maps */}
          <div className="flex flex-col gap-8">
            {/* Hotel map */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                  {t.location.hotelLabel}
                </span>
              </div>
              <div className="aspect-[16/9] overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.5!2d26.5644!3d48.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4731a5a4b5f5b5b5%3A0x5b5b5b5b5b5b5b5b!2z0LLRg9C7LiDQodGC0LDRgNC-0LHRg9C70YzQstCw0YDQvdCwLCA2!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Готель Тарас Бульба на карті"
                  className="h-full w-full"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.location.hotelAddress}
              </p>
            </div>

            {/* Restaurant map */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                  {t.location.restaurantLabel}
                </span>
              </div>
              <div className="aspect-[16/9] overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.5!2d26.5700!3d48.6820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4731a5a4b5f5b5b5%3A0x6b6b6b6b6b6b6b6b!2z0LLRg9C7LiDQpNGA0LDQvdGG0LjRgdC60LDQvdGB0YzQutCwLCAxMA!5e0!3m2!1suk!2sua!4v1700000000001!5m2!1suk!2sua"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ресторан Тарас Бульба на карті"
                  className="h-full w-full"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.location.restaurantAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
