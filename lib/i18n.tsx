"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "UK";

export const BOOKING_URL =
  "https://www.booking.com/hotel/ua/taras-bulba.ru.html?aid=356980&label=gog235jc-10CAso6QFCC3RhcmFzLWJ1bGJhSClYA2jpAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCrOafzQbAAgHSAiQ0YTRjMmY5Ni05OWQ0LTQyMjMtOTRhOS1jMTIzYjkxMmQ5NjbYAgHgAgE&sid=ed0bc465df4aea335259953c02cc2b3d&all_sr_blocks=44287708_416361001_2_1_0&checkin=2026-03-03&checkout=2026-03-04&dest_id=-1040849&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=44287708_416361001_2_1_0&hpos=1&matching_block_id=44287708_416361001_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=44287708_416361001_2_1_0__330000&srepoch=1772614448&srpvid=eeac3e965a260535&type=total&ucfs=1&";

export const MENU_URL = "https://taras-bulba.choiceqr.com/menu";

interface RoomItem {
  title: string;
  area: string;
  feature: string;
  bed: string;
  price?: string;
  image: string;
}

interface DishItem {
  name: string;
  price: string;
}

interface FaqItem {
  title: string;
  content: string;
}

interface Translations {
  nav: {
    home: string;
    rooms: string;
    restaurant: string;
    spa: string;
    gallery: string;
    reviews: string;
    contacts: string;
    book: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    checkin: string;
    checkout: string;
    guests: string;
    selectDate: string;
    adults: string;
    search: string;
  };
  about: {
    subtitle: string;
    title: string;
    description: string;
  };
  amenities: {
    subtitle: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  rooms: {
    subtitle: string;
    title: string;
    items: RoomItem[];
    book: string;
  };
  restaurant: {
    subtitle: string;
    title: string;
    description: string;
    breakfast: string;
    dishes: DishItem[];
    menuBtn: string;
  };
  gallery: {
    subtitle: string;
    title: string;
  };
  reviews: {
    subtitle: string;
    title: string;
    ratingLabel: string;
    ratingValue: string;
    testimonials: { name: string; text: string; rating: number }[];
  };
  location: {
    subtitle: string;
    title: string;
    hotelLabel: string;
    hotelAddress: string;
    restaurantLabel: string;
    restaurantAddress: string;
    faq: FaqItem[];
  };
  footer: {
    brandName: string;
    brandDesc: string;
    navHeading: string;
    addressHeading: string;
    hotelAddress: string;
    restaurantAddress: string;
    hotelPhone: string;
    restaurantPhone: string;
    instagramHotel: string;
    instagramRestaurant: string;
    copyright: string;
  };
}

const translations: Record<Locale, Translations> = {
  UK: {
    nav: {
      home: "Головна",
      rooms: "Номери",
      restaurant: "Ресторан",
      spa: "СПА",
      gallery: "Галерея",
      reviews: "Відгуки",
      contacts: "Контакти",
      book: "ЗАБРОНЮВАТИ",
    },
    hero: {
      headline: "ДУХ КОЗАЦТВА У СЕРЦІ СТАРОГО МІСТА.",
      subheadline:
        "Історична спадщина та сучасний комфорт у Кам\u2019янці-Подільському.",
      checkin: "Приїзд",
      checkout: "Виїзд",
      guests: "Гості",
      selectDate: "Оберіть дату",
      adults: "осіб",
      search: "ПЕРЕВІРИТИ ДОСТУПНІСТЬ",
    },
    about: {
      subtitle: "ПРО ГОТЕЛЬ",
      title: "ПРО ГОТЕЛЬ",
      description:
        "Готельний комплекс \u00ABТарас Бульба\u00BB розташований у серці Старого міста. Ми поєднуємо глибоку повагу до української історії з високими стандартами сучасного сервісу. Комплекс налічує два корпуси (2007 та 2020 років) на 48 номерів, а також сучасний оздоровчий СПА-центр.",
    },
    amenities: {
      subtitle: "ЗРУЧНОСТІ",
      title: "ВАШ ЗАТИШОК \u2013 НАШ ПРІОРИТЕТ",
      items: [
        {
          title: "СПА-центр",
          desc: "Сауна, хамам, традиційна лазня",
        },
        {
          title: "Безкоштовний Wi-Fi",
          desc: "Швидкісний інтернет на всій території",
        },
        {
          title: "Концептуальний ресторан та бар",
          desc: "Автентична подільська кухня",
        },
        { title: "Pet-friendly", desc: "Дозволено з тваринами" },
        {
          title: "Цілодобова стійка реєстрації",
          desc: "Комфортний заїзд у будь-який час",
        },
        {
          title: "Безкоштовна приватна парковка",
          desc: "Закритий паркінг на території",
        },
      ],
    },
    rooms: {
      subtitle: "РОЗМІЩЕННЯ",
      title: "РОЗКІШ У КОЖНІЙ ДЕТАЛІ",
      items: [
        {
          title: "Studio",
          area: "35 кв.м",
          feature: "Внутрішній двір",
          bed: "1 велике ліжко + диван",
          price: "Від 800 грн/ніч",
          image: "/gallery/room-studio.jpg",
        },
        {
          title: "Junior Suite",
          area: "35 кв.м",
          feature: "Вид на місто",
          bed: "Зона відпочинку",
          price: "Від 900 грн/ніч",
          image: "/gallery/room-junior.jpg",
        },
        {
          title: "Studio Apartment",
          area: "50 кв.м",
          feature: "Вид на пам\u2019ятки",
          bed: "Ванна",
          price: "Від 1200 грн/ніч",
          image: "/gallery/room-apartment.jpg",
        },
        {
          title: "Family Suite",
          area: "35 кв.м",
          feature: "Вид на пам\u2019ятки",
          bed: "1 двоспальне ліжко + 1 диван-ліжко",
          image: "/gallery/room-family.jpg",
        },
        {
          title: "Superior Twin Room",
          area: "20 кв.м",
          feature: "Вид на місто",
          bed: "2 окремі ліжка",
          image: "/gallery/room-twin.jpg",
        },
        {
          title: "Triple Room with Balcony",
          area: "25 кв.м",
          feature: "Балкон з видом на місто",
          bed: "3 місця",
          image: "/gallery/room-triple.jpg",
        },
        {
          title: "Мансардні номери",
          area: "",
          feature: "Оздоблення натуральним деревом",
          bed: "Затишна атмосфера",
          image: "/gallery/room-mansard.jpg",
        },
      ],
      book: "ЗАБРОНЮВАТИ",
    },
    restaurant: {
      subtitle: "ГАСТРОНОМІЯ",
      title: "МЕНЮ НЕСКОРЕНИХ",
      description:
        "Відчуйте автентичну подільську кухню у нашому ресторані на вул. Францисканській, 10. Страви, що надихають історією.",
      breakfast:
        "Сніданки для гостей: Ситний \u00ABСніданок для справжніх козаків\u00BB та інші ранкові страви.",
      dishes: [
        { name: "Дерун з шовдарем", price: "260 грн" },
        { name: "Бограч у житній хлібині", price: "230 грн" },
        { name: "Вареники з раками", price: "260 грн" },
        { name: "Подільський сирник з грушею", price: "170 грн" },
      ],
      menuBtn: "ПЕРЕГЛЯНУТИ ПОВНЕ МЕНЮ",
    },
    gallery: {
      subtitle: "ГАЛЕРЕЯ",
      title: "АТМОСФЕРА КОМПЛЕКСУ",
    },
    reviews: {
      subtitle: "ВІДГУКИ",
      title: "ЩО КАЖУТЬ НАШІ ГОСТІ",
      ratingLabel: "Exceptional",
      ratingValue: "9.5",
      testimonials: [
        {
          name: "Олена К.",
          text: "Неймовірна атмосфера! Готель поєднує історію з сучасним комфортом. Обов\u2019язково повернемося!",
          rating: 10,
        },
        {
          name: "Максим Д.",
          text: "Ресторан \u2014 справжня перлина. Бограч у хлібині та вареники з раками залишили незабутнє враження.",
          rating: 10,
        },
        {
          name: "Ірина та Андрій",
          text: "СПА-центр \u2014 це щось неймовірне. Хамам, сауна, повний релакс. Персонал дуже уважний.",
          rating: 10,
        },
        {
          name: "Тарас П.",
          text: "Чудове розташування, чисті номери, привітний персонал. Раджу усім, хто планує візит до Кам\u2019янця!",
          rating: 9,
        },
        {
          name: "Наталія В.",
          text: "Ідеальне місце для романтичної подорожі. Вид на місто з номера просто захоплює!",
          rating: 10,
        },
        {
          name: "Олександр М.",
          text: "Це найкращий готель у Кам\u2019янці. Якість сервісу на висоті, кухня вище всяких похвал.",
          rating: 10,
        },
      ],
    },
    location: {
      subtitle: "ЛОКАЦІЯ ТА ВАЖЛИВА ІНФОРМАЦІЯ",
      title: "Локація та Важлива інформація",
      hotelLabel: "Готель",
      hotelAddress: "вул. Старобульварна, 6, Кам\u2019янець-Подільський",
      restaurantLabel: "Ресторан",
      restaurantAddress:
        "вул. Францисканська, 10, Кам\u2019янець-Подільський",
      faq: [
        {
          title: "Паркування",
          content:
            "На території або поруч із готелем є безкоштовна приватна парковка для гостей. Кількість місць може бути обмеженою під час високого сезону.",
        },
        {
          title: "Час заїзду та виїзду",
          content:
            "Реєстрація заїзду здійснюється з 14:00, а реєстрація виїзду \u2014 до 12:00.",
        },
        {
          title: "Правила розміщення",
          content:
            "Оплата за проживання та послуги здійснюється виключно готівкою (терміналу немає). Просимо врахувати це при плануванні подорожі. Сімейні номери доступні, розміщення з дітьми вітається. При заїзді може стягуватися готівкова застава у розмірі 400 грн, яка повертається під час виїзду.",
        },
        {
          title: "Питна вода в номерах",
          content:
            "У кожному номері для вашої зручності надається електричний чайник та базовий набір посуду.",
        },
        {
          title: "Послуга раннього заїзду",
          content:
            "Ранній заїзд або пізній виїзд можливі за попереднім запитом, залежно від наявності вільних номерів, і можуть потребувати додаткової оплати.",
        },
      ],
    },
    footer: {
      brandName: "TARAS BULBA",
      brandDesc:
        "Ідеальний баланс між історією та комфортом.",
      navHeading: "Навігація",
      addressHeading: "Адреса",
      hotelAddress: "Готель: вул. Старобульварна, 6",
      restaurantAddress: "Ресторан: вул. Францисканська, 10",
      hotelPhone: "+380673811554",
      restaurantPhone: "+380677677340",
      instagramHotel: "@tarasbulba.hotel",
      instagramRestaurant: "@tarasbulbakp",
      copyright: "\u00A9 2026 Тарас Бульба. Усі права захищені.",
    },
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  locale: "UK",
  setLocale: () => {},
  t: translations.UK,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("UK");

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
