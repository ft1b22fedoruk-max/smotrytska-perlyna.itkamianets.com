"use client";

import { useState } from "react";
import { Maximize, Eye, BedDouble, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const roomImages = [
  ["/gallery/7.webp", "/gallery/8.webp", "/gallery/9.webp"],
  ["/gallery/10.webp", "/gallery/11.webp", "/gallery/12.webp"],
  ["/gallery/13.webp", "/gallery/14.webp", "/gallery/15.webp"],
];

function RoomCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} - ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      <button
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center bg-primary/40 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary/60 cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={next}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center bg-primary/40 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary/60 cursor-pointer"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Photo ${i + 1}`}
            className={`h-1 transition-all duration-300 cursor-pointer ${
              i === current
                ? "w-5 bg-primary-foreground"
                : "w-1 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Rooms() {
  const { t } = useI18n();

  return (
    <section id="rooms" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {t.rooms.subtitle}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {t.rooms.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.rooms.items.map((room, idx) => (
            <div
              key={idx}
              className="group overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <RoomCarousel images={roomImages[idx]} title={room.title} />
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-card-foreground">
                  {room.title}
                </h3>

                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Maximize className="h-4 w-4 shrink-0 text-accent" />
                    <span>{room.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4 shrink-0 text-accent" />
                    <span>{room.view}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BedDouble className="h-4 w-4 shrink-0 text-accent" />
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 shrink-0 text-accent" />
                    <span>{room.extras}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="#footer"
                    className="flex-1 border border-foreground/20 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-all hover:bg-foreground hover:text-background"
                  >
                    {t.rooms.details}
                  </a>
                  <a
                    href="#footer"
                    className="flex-1 bg-primary py-2.5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    {t.rooms.book}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
