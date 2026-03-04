"use client";

import { useI18n } from "@/lib/i18n";

const galleryImages = [
  { src: "/gallery/hero.jpg", alt: "Екстер'єр готелю", span: "col-span-2 row-span-2" },
  { src: "/gallery/room-studio.jpg", alt: "Номер Studio", span: "col-span-1 row-span-1" },
  { src: "/gallery/spa.jpg", alt: "СПА-центр", span: "col-span-1 row-span-1" },
  { src: "/gallery/food.jpg", alt: "Подільська кухня", span: "col-span-1 row-span-1" },
  { src: "/gallery/room-apartment.jpg", alt: "Studio Apartment", span: "col-span-1 row-span-1" },
  { src: "/gallery/courtyard.jpg", alt: "Внутрішній двір", span: "col-span-1 row-span-1" },
  { src: "/gallery/restaurant.jpg", alt: "Ресторан", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const { t } = useI18n();

  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {t.gallery.subtitle}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
            {t.gallery.title}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`group overflow-hidden ${idx === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
            >
              <div className="relative aspect-square h-full w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
