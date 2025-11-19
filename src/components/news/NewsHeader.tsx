"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function TopUtilities() {
  return (
    <div className="mt-3 mb-3 font-semibold text-[10px] sm:text-xs md:text-sm">
      <div
        className="mx-auto flex max-w-7xl items-center justify-end gap-3 px-4 py-1 sm:px-6 sm:py-2"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        <nav className="flex items-center gap-3 whitespace-nowrap text-zinc-600 overflow-x-auto no-scrollbar">
          <Link href="#">INDUSTRIES WE SERVE ▾</Link>
          <Link href="#">WHO WE ARE ▾</Link>
          <Link href="#">EVENTS ▾</Link>
          <Link href="#">CAREERS</Link>
        </nav>
      </div>
    </div>
  );
}

function BrandAndBanner() {
  return (
    <div>
      {/* Logo positioned at the top-left */}
      <div className="mx-auto max-w-7xl px-6 pt-2">
        <Link href="/" className="inline-flex items-center gap-3">
          {/* Adjusted to match the size and spacing in the screenshot context */}
          <Image src="/logo.png" alt="Onewave News" width={180} height={32} className="mt-2" />
        </Link>
        {/* Row with left copy and right banner image, matching the screenshot layout */}
        <div className="mt-2 grid items-center  md:grid-cols-[1fr_1.8fr]">
          {/* Left: Forces Network copy */}
          <div className="hidden md:block">
            <h2 className="font-display text-3xl lg:text-[42px] font-bold leading-tight md:text-4xl">The Forces Network</h2>
            <p className="mt-2 text-[17px] leading-snug text-zinc-600">
              Leading a New Era of Inclusive Forces and Development
              <br />
              Through Sustainable Innovation
            </p>
          </div>
          {/* Right: Banner image */}
          <div className="h-full overflow-hidden bg-white md:h-full lg:h-full">
            <Image
              src="/container.png"
              alt="Nigeria Police Summit"
              width={1200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryNav() {
  const items = [
    { name: "Home", hasDropdown: false },
    { name: "News and Insights", hasDropdown: false },
    { name: "Business", hasDropdown: true },
    { name: "Future", hasDropdown: true },
    { name: "Maritime", hasDropdown: true },
    { name: "Economy & Market", hasDropdown: true },
  ];
  const firstRow = items.slice(0, 4);
  const secondRow = items.slice(4);

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="border-y border-[--color-border] bg-[#2E3D68] font-semibold text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Mobile / small-screen layout: two nav rows + search in same bar */}
        <div className="flex flex-col gap-2 py-2 text-[11px] sm:text-xs md:hidden">
          <div className="flex flex-wrap items-center gap-1">
            {firstRow.map((i) => (
              <Link
                key={i.name}
                href="#"
                className={`rounded px-2 py-1 text-[11px] sm:text-xs text-white ${
                  i.name === 'Home' ? 'font-bold bg-black/10' : 'hover:bg-black/5'
                }`}
              >
                {i.name} {i.hasDropdown && "▾"}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1">
              {secondRow.map((i) => (
                <Link
                  key={i.name}
                  href="#"
                  className="rounded px-2 py-1 text-[11px] sm:text-xs text-white hover:bg-black/5"
                >
                  {i.name} {i.hasDropdown && "▾"}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {showSearch && (
                <input
                  aria-label="Search"
                  placeholder="Search..."
                  autoFocus
                  className="h-8 w-32 rounded-full border border-white/50 bg-white px-2 text-[10px] text-black outline-none placeholder:text-[#2E3D68] sm:w-40"
                />
              )}
              <button
                aria-label="Toggle search"
                onClick={() => setShowSearch((s) => !s)}
                className="p-1 text-white hover:text-white/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop layout: single row nav + search on the right */}
        <nav className="hidden items-center justify-between py-2 text-[11px] sm:text-xs md:flex md:text-[13px]">
          <div className="-mx-2 flex items-center gap-1 sm:gap-2">
            {items.map((i) => (
              <Link
                key={i.name}
                href="#"
                className={`rounded px-2 py-1 text-[11px] sm:text-xs md:text-sm lg:text-[15px] text-white ${
                  i.name === 'Home' ? 'font-bold bg-black/10' : 'hover:bg-black/5'
                }`}
              >
                {i.name} {i.hasDropdown && "▾"}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {showSearch && (
              <input
                aria-label="Search"
                placeholder="Search..."
                autoFocus
                className="h-8 w-48 rounded-full border border-white/50 bg-white px-3 text-xs text-black outline-none placeholder:text-[#2E3D68]"
              />
            )}
            <button
              aria-label="Toggle search"
              onClick={() => setShowSearch((s) => !s)}
              className="p-1 text-white hover:text-white/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function NewsTicker() {
  const headline =
    "Oil slides to 17-week low on US and Asia economic worries, and expected OPEC+ production increase";

  return (
    <div className="mt-6 mb-6 w-full bg-[#221919]">
      <div className="mx-auto flex max-w-7xl items-stretch text-[10px] sm:text-xs md:text-sm px-4 sm:px-6">
        <div
          className="flex items-center justify-center bg-[#F2B743] px-3 py-2 text-[10px] font-semibold text-white sm:px-4 sm:text-xs"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          BREAKING NEWS
        </div>

        {/* Auto-sliding headline, especially useful on mobile */}
        <div className="relative flex-1 overflow-hidden bg-[#221919]">
          <div
            className="ticker-text whitespace-nowrap py-2 pl-4 pr-2 text-[10px] font-semibold text-white sm:py-3 sm:text-xs md:text-sm"
            style={{ fontFamily: '\"Inter\", sans-serif' }}
          >
            {/* duplicate headline so animation loops seamlessly on small screens */}
            <span>{headline}</span>
            <span className="ml-12 sm:hidden">{headline}</span>
          </div>

          {/* Scoped keyframes: animate only on small screens */}
          <style jsx>{`
            @keyframes ticker {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .ticker-text {
              animation: ticker 20s linear infinite;
            }
            @media (min-width: 640px) {
              .ticker-text {
                animation: none;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>

        {/* Arrow controls remain on the right on larger screens */}
        <div className="ml-2 hidden shrink-0 items-center text-white/50 sm:flex">
          <button className="h-full text-white">
            <Image
              src="/left-arrow.png"
              alt="Previous headline"
              width={20}
              height={20}
              className="mt-1 flex-shrink-0 hover:bg-white/10 sm:h-[24px] sm:w-[24px] md:h-[28px] md:w-[28px]"
            />
          </button>
          <button className="h-full px-2 text-white">
            <Image
              src="/right-arrow.png"
              alt="Next headline"
              width={20}
              height={20}
              className="mt-1 flex-shrink-0 hover:bg-white/10 sm:h-[24px] sm:w-[24px] md:h-[28px] md:w-[28px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NewsHeader() {
  return (
    <header className="w-full">
      <BrandAndBanner />
      <TopUtilities /> 
      <PrimaryNav />
      <NewsTicker />
    </header>
  );
}