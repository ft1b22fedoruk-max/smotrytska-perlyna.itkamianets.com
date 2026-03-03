"use client";

import { useI18n } from "@/lib/i18n";

export default function Restaurant() {
  const { t } = useI18n();

  return (
    <section id="restaurant" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {t.restaurant.subtitle}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
              {t.restaurant.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/60 md:text-lg">
              {t.restaurant.description}
            </p>

            {/* Dish list */}
            <div className="mt-10">
              {t.restaurant.dishes.map((dish, idx) => (
                <div key={idx} className="flex items-center gap-4 border-b border-primary-foreground/10 py-4 last:border-b-0">
                  <span className="font-serif text-2xl font-bold text-primary-foreground/20 md:text-3xl">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium text-primary-foreground md:text-lg">
                    {dish.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/gallery/17.webp"
                alt="Ресторан Тарас Бульба"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 hidden h-48 w-48 overflow-hidden border-4 border-primary lg:block">
              <img
                src="/gallery/19.webp"
                alt="Подільська кухня"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
