"use client";

import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Amenities from "@/components/amenities";
import Rooms from "@/components/rooms";
import Restaurant from "@/components/restaurant";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <I18nProvider>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Amenities />
        <Rooms />
        <Restaurant />
        <Testimonials />
        <Footer />
        <ScrollToTop />
      </main>
    </I18nProvider>
  );
}
