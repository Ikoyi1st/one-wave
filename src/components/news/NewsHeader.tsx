"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function TopUtilities() {
  return (
    <div className="border-b border-[--color-border] text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2">
        <nav className="flex items-center gap-6 text-zinc-600">
          <Link href="#">Industries we serve ▾</Link>
          <Link href="#">Who we are</Link>
          <Link href="#">Events</Link>
          <Link href="#">Careers</Link>
        </nav>
      </div>
    </div>
  );
}

function BrandAndBanner() {
  return (
    <div>
      <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Onewave News" width={180} height={32} className=" mt-4 ml-4" />
        </Link>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-2">
        {/* Ad banner with container.png and Forces Network text */}
        <div className="hidden items-center overflow-hidden  bg-white md:flex">
           <div className="px-4 text-zinc-800">
            <p className="text-[46px] font-bold leading-tight">The Forces Network</p>
            <p className="text-[16px] leading-snug text-zinc-600">
              Leading a New Era of Inclusive Forces and Development <br></br>
              Through Sustainable Innovation
            </p>
          </div>
          <Image
            src="/container.png"
            alt="Nigeria Police Summit"
            width={150}
            height={96}
            className="h-full w-auto object-cover"
          />
         
        </div>
      </div>
      <TopUtilities />
    </div>
  );
}

function PrimaryNav() {
  const items = [
    "Home",
    "News and Insights",
    "Business",
    "Future",
    "Maritime",
    "Economy & Market",
  ];
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="border-y border-[--color-border] bg-[#2E3D68] ">
      <div className="mx-auto max-w-7xl px-6 ">
        <nav className="-mx-2 flex flex-wrap items-center gap-2 py-2 text-xs md:text-[13px] text-white ">
         

          {/* Nav items */}
          {items.map((i) => (
            <Link key={i} href="#" className="rounded px-2 py-1 text-white hover:bg-black/5 ">
              {i}
            </Link>
          ))}

            {/* Search on the left with icon toggle */}
          <div className="flex items-center gap-2 pr-2">
            <button
              aria-label="Toggle search"
              onClick={() => setShowSearch((s) => !s)}
              className="rounded p-1 text-white hover:bg-black/5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            {showSearch && (
              <input
                aria-label="Search"
                placeholder="Search..."
                autoFocus
                className="h-8 w-48 rounded-full border border-[--color-border] bg-transparent px-3 text-xs outline-none"
              />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export function NewsTicker() {
  return (
    <div className="border-b border-[--color-border] bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-2 text-xs">
        <span className="rounded bg-[--color-brand] px-2 py-0.5 text-white">Breaking News</span>
        <div className="truncate text-zinc-700">
          Oil slides to 17-week low on US and Asia economic worries, and expected OPEC+ production increase
        </div>
      </div>
    </div>
  );
}

export default function NewsHeader() {
  return (
    <header className="w-full">
      {/* <TopUtilities /> */}
      <BrandAndBanner />
      <PrimaryNav />
      <NewsTicker />
    </header>
  );
}
