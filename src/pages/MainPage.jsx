import { useState, useEffect, useRef, useCallback } from 'react';
import {
  NavigationBar, TabBar, Footer, Button, Badge, Logo,
  ProductCard, UpcomingCard,
  IconChevronRight, IconChevronDown,
} from '../components';

import iconThankskim from '../assets/images/icon-thankskim.png';
import iconNotice from '../assets/images/icon-notice.png';
import iconReviews from '../assets/images/icon-reviews.png';
import iconEvent from '../assets/images/icon-event.png';
import iconInstagram from '../assets/images/icon-instagram.png';
import heroMain from '../assets/images/hero-main.png';
import upcomingCardImg from '../assets/images/upcoming-card.png';
import brandBannerImg from '../assets/images/brand-banner.png';
import chatLogoSvg from '../assets/images/chat-logo.svg';
import calendarSvg from '../assets/images/icon-calendar.svg';
import product1 from '../assets/images/product-1.png';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import product4 from '../assets/images/product-4.png';
import product5 from '../assets/images/product-5.png';
import product6 from '../assets/images/product-6.png';

const QUICK_LINKS = [
  { label: '땡스킴', icon: iconThankskim },
  { label: '공지사항', icon: iconNotice },
  { label: '베스트후기', icon: iconReviews },
  { label: '이벤트', icon: iconEvent },
  { label: '인스타', icon: iconInstagram },
];

const GIVING_DAY_SLIDES = [
  { image: heroMain, brand: '싸이토핏', name: '리세린지 수국잎 다이어트', discount: '30%', salePrice: '57,000원', originalPrice: '69,000' },
  { image: upcomingCardImg, brand: '비포락토', name: '키즈&베이비 50억 유산균', discount: '30%', salePrice: '15,800원', originalPrice: '35,000' },
  { image: product1, brand: '비포락토', name: '프리미엄 유산균 골드', discount: '20%', salePrice: '24,000원', originalPrice: '30,000' },
];

const UPCOMING_ITEMS = [
  { image: upcomingCardImg, date: '2025.03.17', brand: '비포락토', name: '키즈&베이비 50억 유산균', discount: '30%', salePrice: '15,800원', originalPrice: '35,000원' },
  { image: upcomingCardImg, date: '2025.03.17', brand: '비포락토', name: '키즈&베이비 50억 유산균', discount: '30%', salePrice: '15,800원', originalPrice: '35,000원' },
];

const THANKS_PICKS = [
  { name: '키즈&베이비 50억 유산균', badge: '비포락토', originalPrice: '35,000원', salePrice: '15,800원', discount: '30%', image: product1, soldOut: true },
  { name: 'Product name', badge: '비포락토', originalPrice: '35,000원', salePrice: '15,800원', discount: '30%', image: product2, soldOut: true },
  { name: '키즈&베이비 50억 유산균', badge: '비포락토', originalPrice: '35,000원', salePrice: '15,800원', discount: '30%', image: product3 },
  { name: '키즈&베이비 50억 유산균', badge: '비포락토', originalPrice: '35,000원', salePrice: '15,800원', discount: '30%', image: product4 },
  { name: '키즈&베이비 50억 유산균', badge: '비포락토', originalPrice: '35,000원', salePrice: '15,800원', discount: '30%', image: product5 },
  { name: '키즈&베이비 50억 유산균', badge: '비포락토', originalPrice: '35,000원', salePrice: '15,800원', discount: '30%', image: product6 },
];

/* ── Quick Links ── */

function QuickLinkItem({ icon, label }) {
  return (
    <button type="button" className="flex flex-1 flex-col items-center gap-2 min-w-0">
      <div className="w-full aspect-square bg-[var(--color-bg-subtlest)] rounded-md flex items-center justify-center overflow-hidden p-[7px]">
        <img src={icon} alt={label} className="w-12 h-12 rounded-lg object-cover" />
      </div>
      <span className="font-kr text-caption-12 font-regular text-[var(--color-text-subtle)] text-center w-full">
        {label}
      </span>
    </button>
  );
}

/* ── Carousel (Thanks Giving Day) ── */

function useCarousel(slideCount, intervalMs = 4000) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, intervalMs);
  }, [slideCount, intervalMs]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
    resetTimer();
  }, [resetTimer]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slideCount);
    resetTimer();
  }, [slideCount, resetTimer]);

  return { current, goTo, next };
}

function CarouselIndicator({ current, total }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-[1px] rounded-full transition-all ${
            i === current
              ? 'w-10 bg-[var(--color-border-brand)]'
              : 'w-5 bg-[var(--color-border-brand)] opacity-40'
          }`}
        />
      ))}
    </div>
  );
}

function ThanksGivingDay() {
  const { current, next } = useCarousel(GIVING_DAY_SLIDES.length, 5000);
  const slide = GIVING_DAY_SLIDES[current];

  return (
    <section className="px-6 pt-10 pb-0">
      <h2 className="font-eng text-header-28 font-semibold text-[var(--color-text-brand)] mb-[52px]">
        Thanks Giving Day
      </h2>

      <div className="flex items-center justify-between mb-3">
        <CarouselIndicator current={current} total={GIVING_DAY_SLIDES.length} />
        <div className="flex items-center gap-1">
          <span className="font-kr text-body-16 font-semibold text-[var(--color-text-brand)]">
            {current + 1}
          </span>
          <span className="text-[var(--color-text-subtlest)]">|</span>
          <span className="font-kr text-body-16 font-regular text-[var(--color-text-brand-subtle)] opacity-50">
            {GIVING_DAY_SLIDES.length}
          </span>
          <button type="button" onClick={next} className="ml-1">
            <IconChevronRight className="w-5 h-5 text-[var(--color-text-subtle)]" />
          </button>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden mb-6 aspect-square">
        <img
          src={slide.image}
          alt={slide.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      <div className="flex flex-col gap-5 mb-6">
        <p className="font-kr text-title-24 font-semibold text-[var(--color-text-brand)]">
          5일 23 : 24 : 53
        </p>
        <p className="font-kr text-title-20 font-semibold text-[var(--color-text-default)]">
          내면까지 채우는 아름다움
        </p>
      </div>

      <div className="border-t border-b border-[var(--color-border-default)] py-4 flex flex-col gap-4">
        <p className="font-kr text-body-14 font-semibold text-[var(--color-text-default)]">
          {slide.brand}
        </p>
        <p className="font-kr text-body-16 font-regular text-[var(--color-text-default)]">
          {slide.name}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-kr text-body-18 font-semibold text-[var(--color-text-brand)]">
            {slide.discount}
          </span>
          <span className="font-kr text-body-18 font-semibold text-[var(--color-text-default)]">
            {slide.salePrice}
          </span>
          <span className="font-kr text-body-14 font-regular text-[var(--color-text-subtlest)] line-through">
            {slide.originalPrice}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── Curated for You ── */

function CuratedForYou() {
  return (
    <section className="bg-[var(--color-bg-brand-subtle)] px-6 py-7 flex items-center gap-4">
      <div className="flex-1 flex flex-col gap-4">
        <p className="font-eng text-title-20 font-medium text-[var(--color-text-brand-bold)]">
          Curated for You
        </p>
        <p className="font-kr text-body-14 font-regular text-[var(--color-text-subtle)]">
          신중하게 선별된 이번 달 아이템을 미리 체크하세요.
        </p>
      </div>
      <div className="w-12 h-12 rounded-lg bg-transparent flex items-center justify-center shrink-0">
        <img src={calendarSvg} alt="calendar" className="w-8 h-8" />
      </div>
    </section>
  );
}

/* ── Upcoming Items ── */

function UpcomingItemsSection() {
  return (
    <section className="bg-white px-6 py-10 flex flex-col items-center gap-8">
      <h2 className="font-eng text-header-28 font-semibold text-[var(--color-text-brand)] w-full">
        Upcoming Items
      </h2>
      <div className="flex gap-3 w-full overflow-x-auto pb-2 -mx-6 px-6" style={{ scrollbarWidth: 'none' }}>
        {UPCOMING_ITEMS.map((item, idx) => (
          <UpcomingCard
            key={idx}
            image={item.image}
            date={item.date}
            brand={item.brand}
            productName={item.name}
            discount={item.discount}
            salePrice={item.salePrice}
            originalPrice={item.originalPrice}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Thanks Picks ── */

function ThanksPicksSection() {
  return (
    <section className="px-6 py-10 flex flex-col items-center gap-8">
      <h2 className="font-eng text-header-28 font-semibold text-[var(--color-text-brand)] w-full">
        Thanks Picks
      </h2>
      <div className="w-full">
        <div className="relative">
          <div className="grid grid-cols-2 gap-x-3 gap-y-6">
            {THANKS_PICKS.map((product, idx) => (
              <ProductCard
                key={idx}
                variant="home"
                product={{
                  name: product.name,
                  image: product.image,
                  badge: product.soldOut ? '품절' : undefined,
                  originalPrice: product.originalPrice,
                  salePrice: product.salePrice,
                  discount: product.discount,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[217px] bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </div>
        <div className="flex justify-center mt-16">
          <Button
            label="더보기"
            variant="outline"
            size="small"
            suffixIcon={<IconChevronDown className="w-5 h-5" />}
          />
        </div>
      </div>
    </section>
  );
}

/* ── Brand Banner ── */

function BrandBanner() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[var(--color-bg-brand)]" />
        <img src={brandBannerImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-bg-dim)]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 w-[227px]">
        <Logo color={false} />
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="font-kr text-body-14 font-regular text-[var(--color-text-inverse)] text-center">
            당신의 취향을 이해하고, 영감을 더합니다.
          </p>
          <p className="font-kr text-caption-12 font-regular text-[var(--color-text-brand-subtlest)] text-center">
            Tastefully yours, endlessly inspired.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Hero Banner ── */

function HeroBanner() {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img src={heroMain} alt="" className="absolute h-full left-0 top-0 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-[rgba(0,0,0,0.08)]" />
      </div>
      <div className="absolute bottom-12 left-7 flex flex-col gap-5 w-[216px]">
        <p className="font-kr text-header-28 font-semibold text-[var(--color-text-brand-bold)] leading-tight">
          더 간편하고 맛있게
        </p>
        <p className="font-kr text-body-16 font-regular text-[var(--color-text-brand-bold)]">
          피타니 제니스칼 애사비 샷
        </p>
      </div>
      <div className="absolute right-6 bottom-16 bg-[var(--color-bg-dim)] rounded-md flex items-center gap-0.5 pl-2 pr-0.5 py-1">
        <span className="font-kr text-body-14 font-semibold text-[var(--color-text-inverse)]">2</span>
        <span className="mx-2 w-0 h-2.5 border-l border-[var(--color-text-inverse)] opacity-50" />
        <span className="font-kr text-body-14 font-regular text-[var(--color-text-inverse)] opacity-50">5</span>
        <IconChevronRight className="w-4 h-4 text-[var(--color-text-inverse)]" />
      </div>
    </section>
  );
}

/* ── Chat FAB ── */

function ChatFAB() {
  return (
    <button
      type="button"
      className="fixed bottom-20 right-4 w-14 h-14 rounded-full bg-[var(--color-bg-brand)] flex flex-col items-center justify-center gap-1 shadow-lg z-50 px-4"
    >
      <img src={chatLogoSvg} alt="Chat" className="w-6 h-6" />
      <span className="font-kr text-caption-10 font-medium text-[var(--color-text-brand-subtlest)] text-center">
        Chat
      </span>
    </button>
  );
}

/* ── Main Page ── */

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="relative w-[390px] mx-auto bg-[var(--color-bg-default)] min-h-screen flex flex-col overflow-hidden shadow-2xl">
      <div className="sticky top-0 z-30">
        <NavigationBar state="home" />
      </div>

      <main className="flex-1 pb-14">
        <HeroBanner />

        <div className="flex items-center gap-2 px-6 py-6">
          {QUICK_LINKS.map((link) => (
            <QuickLinkItem key={link.label} icon={link.icon} label={link.label} />
          ))}
        </div>

        <ThanksGivingDay />
        <CuratedForYou />
        <UpcomingItemsSection />
        <ThanksPicksSection />
        <BrandBanner />

        <Footer
          links={[
            { label: '회사소개' },
            { label: '이용약관' },
            { label: '개인정보처리방침' },
            { label: '이용안내' },
          ]}
          companyInfo="COPYRIGHT © 땡스킴 thanks_kim. ALL RIGHTS RESERVED."
        />
      </main>

      <div className="sticky bottom-0 z-30">
        <TabBar activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <ChatFAB />
    </div>
  );
}
