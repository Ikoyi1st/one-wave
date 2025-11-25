"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SummitNavbar() {
  const [showSearch, setShowSearch] = useState(false);

  const primary = [
    "Home",
    "News and Insights",
    "Business",
    "Future",
    "Maritime",
    "Economy and Market",
  ];

  return (
    <header className="w-full">
      {/* Top utilities row */}
      <div className="border-b border-[--color-border] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Onewave News" width={28} height={28} />
            <span className="text-sm font-semibold tracking-tight text-[#1d2437]">
              Onewave News
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-wide text-zinc-700 md:flex">
            <Link href="#" className="hover:text-black">
              Industries we serve ▾
            </Link>
            <Link href="#" className="hover:text-black">
              Who we are ▾
            </Link>
            <Link href="#" className="hover:text-black">
              Events ▾
            </Link>
            <Link href="#" className="hover:text-black">
              Careers
            </Link>
          </nav>
        </div>
      </div>

      {/* Primary dark bar */}
      <div className="bg-[#2E3D68] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between gap-3 py-2">
            <nav className="-mx-2 flex flex-wrap items-center gap-1 text-[11px] uppercase tracking-wide">
              {primary.map((item, idx) => (
                <Link
                  key={item}
                  href="#"
                  className={
                    "rounded px-2 py-1 hover:bg-white/10" +
                    (idx === 0 ? " border-b-2 border-[#8FD16A]" : "")
                  }
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {showSearch && (
                <input
                  aria-label="Search"
                  placeholder="Search..."
                  autoFocus
                  className="h-8 w-40 rounded-full border border-white/30 bg-transparent px-3 text-xs outline-none placeholder:text-white/70"
                />
              )}
              <button
                aria-label="Toggle search"
                onClick={() => setShowSearch((s) => !s)}
                className="rounded p-1 hover:bg-white/10"
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
      </div>
    </header>
  );
}