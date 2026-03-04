"use client";

import { useRef } from "react";
import { Maximize, MapPin, BedDouble, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n, BOOKING_URL } from "@/lib/i18n";

export default function Rooms() {
  const { t } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector("div")?.offsetWidth ?? 340;
    scrollRef.current.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section id="rooms" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {t.rooms.subtitle}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
              {t.rooms.title}
            </h2>
          </div>
          {/* Carousel arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous rooms"
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next rooms"
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable carousel */}
        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {t.rooms.items.map((room, idx) => (
            <div
              key={idx}
              className="w-[300px] shrink-0 snap-start overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg md:w-[340px]"
            >
              {/* Room image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {room.price && (
                  <div className="absolute bottom-0 left-0 bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-card">
                    {room.price}
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-card-foreground">
                  {room.title}
                </h3>

                <div className="mt-3 flex flex-col gap-1.5">
                  {room.area && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Maximize className="h-3.5 w-3.5 shrink-0 text-accent" />
                      <span>{room.area}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
                    <span>{room.feature}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BedDouble className="h-3.5 w-3.5 shrink-0 text-accent" />
                    <span>{room.bed}</span>
                  </div>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block w-full bg-primary py-2.5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-primary/90"
                >
                  {t.rooms.book}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
