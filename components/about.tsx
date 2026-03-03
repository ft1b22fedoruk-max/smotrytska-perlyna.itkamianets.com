"use client";

import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="bg-primary py-20 pt-36 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {t.about.subtitle}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
              {t.about.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/60 md:text-lg">
              {t.about.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/gallery/3.webp"
                alt="Готель Тарас Бульба - інтер'єр"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-8">
              <img
                src="/gallery/5.webp"
                alt="Готель Тарас Бульба - вигляд"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
