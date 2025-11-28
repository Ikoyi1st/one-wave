"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// --- START: FULL BANNER CAROUSEL COMPONENT ---

// 1. Define the complete banner content (Image + Text)
const bannerSlides = [
  { 
    id: 1,
    imageSrc: "/container.png", 
    imageAlt: "Nigeria Police Summit Banner",
    title: "The Forces Network",
    subtitle: "Leading a New Era of Inclusive Forces and Development Through Sustainable Innovation",
    link: "/forces-network"
  },
  { 
    id: 2,
    imageSrc: "/container-tax.png", 
    imageAlt: "Tax Conference Banner",
    title: "Tax Conference",
    subtitle: "Driving the Future of Power Through Strategic Investment, Innovation, and Collaboration",
    link: "/tax-conference"
  },
  { 
    id: 3,
    imageSrc: "/container-2.png", 
    imageAlt: "Electricity Conference Banner",
    title: "Electricity Conference",
    subtitle: "Uniting Leaders to Shape the Future of Tax Compliance, Digital Transformation, and Economic Governance",
    link: "/electricity-conference"
  },
  // Add more slides here...
];

const ROTATION_INTERVAL = 30000; // Rotate every 5 seconds (5000ms)

function FullBannerCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % bannerSlides.length);
    }, ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = bannerSlides[currentSlideIndex];

  const goNext = () => {
    setCurrentSlideIndex((prev) =>
      prev === bannerSlides.length - 1 ? 0 : prev + 1
    );
  };

  const goPrev = () => {
    setCurrentSlideIndex((prev) =>
      prev === 0 ? bannerSlides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative mt-2 grid items-center md:grid-cols-[1fr_1.8fr] transition-opacity duration-700">

      {/* LEFT TEXT */}
      <div className="hidden md:block">
        <h2 className="font-display text-3xl lg:text-[42px] font-bold leading-tight md:text-4xl">
          {currentSlide.title}
        </h2>
        <p className="mt-2 text-[17px] leading-snug text-zinc-600">
          {currentSlide.subtitle}
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <Link href={currentSlide.link} className="ml-8 h-full overflow-hidden relative rounded-lg hover:cursor-pointer">
       <Image
         src={currentSlide.imageSrc}
         alt={currentSlide.imageAlt}
         width={1200}
          height={200}
           className="h-full w-full object-cover rounded-lg"
           priority={currentSlideIndex === 0}
             />
          </Link>

      {/* --- OUTSIDE LEFT CHEVRON --- */}
      <button
        onClick={goPrev}
        className="absolute -left-12 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          // Default color: #9A9A9A66 (inactive), Hover color: #221919B2 (active)
          className="h-6 w-6 stroke-[rgba(154,154,154,0.4)] group-hover:stroke-[rgba(34,25,25,0.7)] transition-colors"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* --- OUTSIDE RIGHT CHEVRON --- */}
      <button
        onClick={goNext}
        className="absolute -right-12 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          // Default color: #9A9A9A66 (inactive), Hover color: #221919B2 (active)
          className="h-6 w-6 stroke-[rgba(154,154,154,0.4)] group-hover:stroke-[rgba(34,25,25,0.7)] transition-colors"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
}


// --- END: FULL BANNER CAROUSEL COMPONENT ---

function TopUtilities() {
  // Switched from controlled click to hover using onMouseEnter/onMouseLeave
  const [showEvents, setShowEvents] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);

  return (
    <div className="mt-3 mb-3 font-semibold text-[10px] sm:text-xs md:text-sm">
      <div
        className="mx-auto flex max-w-7xl items-center justify-end gap-3 px-4 py-1 sm:px-6 sm:py-2"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        <nav className="relative flex items-center gap-3 whitespace-nowrap text-[#2E3D68] overflow-visible">
          {/* Industries We Serve dropdown (Now opens on hover) */}
          <div
            className="relative"
            onMouseEnter={() => setShowIndustries(true)}
            onMouseLeave={() => setShowIndustries(false)}
          >
            <button
              type="button"
              className="inline-flex items-center text-inherit focus:outline-none"
            >
              <span>INDUSTRIES WE SERVE</span>
              <span className="text-[16px]">▾</span>
            </button>

            {showIndustries && (
              <div className="absolute left-1/2 top-full z-30 w-44 -translate-x-1/2 rounded-md bg-white text-center text-[12px] text-[#111827] shadow-lg">
                {/* ADDED Link COMPONENTS WITH PLACEHOLDER HREFs */}
                <Link href="/business/finance" className="block w-full px-3 py-3 hover:bg-zinc-100">Business &amp; Finance</Link>
                <Link href="/business/downstream-oil" className="block w-full px-3 py-3 hover:bg-zinc-100">Downstream Oil</Link>
                <Link href="/business/economy" className="block w-full px-3 py-3 hover:bg-zinc-100">Economy</Link>
                <Link href="/industries/electricity" className="block w-full px-3 py-3 hover:bg-zinc-100">Electricity</Link>
                <Link href="/industries/maritime-ports" className="block w-full px-3 py-3 hover:bg-zinc-100">Maritime &amp; Ports</Link>
                <Link href="/industries/offshore-vessels" className="block w-full px-3 py-3 hover:bg-zinc-100">Offshore Vessels</Link>
                <Link href="/business/upstream-oil" className="block w-full px-3 py-3 hover:bg-zinc-100">Upstream Oil</Link>
              </div>
            )}
          </div>

          <Link href="/who-we-are">WHO WE ARE</Link>

          {/* Events dropdown (Converted to open on hover, using placeholder content) */}
          <Link href="/events">EVENTS</Link>

          <Link href="/careers">CAREERS</Link>
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
          {/* NOTE: Image component requires 'src', which will be a placeholder since external paths are restricted */}
          <Image src="/logo.png" alt="Onewave News" width={180} height={32} className="mt-2" />
        </Link>

        {/* Banner - Now a complete carousel component */}
        <FullBannerCarousel /> 
        
      </div>
    </div>
  );
}

function CompactLogoBar() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-2 pb-2">
      <Link href="/" className="inline-flex items-center gap-3">
        {/* NOTE: Image component requires 'src', using a placeholder */}
        <Image src="/logo.png" alt="Onewave News" width={180} height={32} className="mt-2" />
      </Link>
    </div>
  );
}

function PrimaryNav() {
  const items = [
    { name: "Home", href: "/", hasDropdown: false }, // Added href
    { name: "News and Insights", href: "/news-and-insights", hasDropdown: false }, // Added href
    { name: "Business", href: "#", hasDropdown: true }, // Added href
    { name: "Future", href: "#", hasDropdown: true }, // Added href
    { name: "Maritime", href: "#", hasDropdown: true }, // Added href
    { name: "Economy & Market", href: "#", hasDropdown: true }, // Added href
  ];
  const firstRow = items.slice(0, 4);
  const secondRow = items.slice(4);

  const [showSearch, setShowSearch] = useState(false);
  const [showFuture, setShowFuture] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [showMaritime, setShowMaritime] = useState(false);
  const [showEconomy, setShowEconomy] = useState(false);
  
  // --- START: ADDED ACTIVE PATH LOGIC ---
  const pathname = usePathname();

  const isActive = (href: string) => {
    // If the link is home "/", check for exact match
    if (href === '/') {
      return pathname === href;
    }
    // For other links, check if the current path starts with the link's href
    return pathname.startsWith(href);
  };
  // --- END: ADDED ACTIVE PATH LOGIC ---

  // This function is less relevant now as hover manages state, but kept for clarity
  const closeAllDropdowns = () => {
    setShowBusiness(false);
    setShowFuture(false);
    setShowMaritime(false);
    setShowEconomy(false);
  };

  // --- Mobile / small-screen layout ---
  return (
    <div className="border-y border-[--color-border] bg-[#2E3D68] font-semibold text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="flex flex-col gap-2 py-2 text-[10px] sm:text-xs md:hidden">
          <div className="flex flex-wrap items-center">
            {firstRow.map((i) => (
              i.hasDropdown ? (
                // Use a wrapper div for hover state
                <div 
                  key={i.name} 
                  className="relative"
                  onMouseEnter={() => {
                    if (i.name === "Business") setShowBusiness(true);
                    if (i.name === "Future") setShowFuture(true);
                  }}
                  onMouseLeave={() => {
                    if (i.name === "Business") setShowBusiness(false);
                    if (i.name === "Future") setShowFuture(false);
                  }}
                >
                  <Link
                    href={i.href} // Primary link navigates here on click
                    className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[11px] sm:text-xs text-white hover:bg-black/5 ${
                        isActive(i.href) ? 'font-bold bg-black/10 underline' : '' // <-- APPLIED ACTIVE STYLES
                    }`}
                    // Add onClick to handle cases where button may be desired, though Link is primary here
                    onClick={(e) => {
                      // Optionally prevent default if you want the dropdown to *also* open on click on mobile
                      // e.preventDefault(); 
                    }}
                  >
                    <span>{i.name}</span>
                    <span className="text-[16px]">▾</span>
                  </Link>

                  {/* Dropdown Content */}
                  {(i.name === "Business" && showBusiness) && (
                    <div className="absolute left-1/2 top-full z-30 w-44 -translate-x-1/2 rounded-md bg-white text-center text-[12px] text-[#111827] shadow-lg">
                      {/* CONVERTED TO LINK WITH HREFs BASED ON PARENT: /business/... */}
                      <Link href="/business/upstream-oil" className="block w-full px-3 py-3 hover:bg-zinc-100">Upstream oil &amp; gas</Link>
                      <Link href="/business/downstream-oil" className="block w-full px-3 py-3 hover:bg-zinc-100">Downstream oil &amp; gas</Link>
                      <Link href="/business/power" className="block w-full px-3 py-3 hover:bg-zinc-100">Power</Link>
                      <Link href="/business/energy" className="block w-full px-3 py-3 hover:bg-zinc-100">Energy</Link>
                      <Link href="/business/natural-gas" className="block w-full px-3 py-3 hover:bg-zinc-100">Natural Gas</Link>
                      <Link href="/business/money" className="block w-full px-3 py-3 hover:bg-zinc-100">Money</Link>
                      <Link href="/business/finance" className="block w-full px-3 py-3 hover:bg-zinc-100">Finance</Link>
                    </div>
                  )}
                  {(i.name === "Future" && showFuture) && (
                    <div className="absolute left-1/2 top-full z-30 w-40 -translate-x-1/2 rounded-md bg-white py-2 text-center text-[12px] text-[#111827] shadow-lg">
                      {/* CONVERTED TO LINK WITH HREFs BASED ON PARENT: /future/... */}
                      <Link href="/future/science" className="block w-full px-3 py-3 hover:bg-zinc-100">Science</Link>
                      <Link href="/future/technology" className="block w-full px-3 py-3 hover:bg-zinc-100">Technology</Link>
                      <Link href="/future/education" className="block w-full px-3 py-3 hover:bg-zinc-100">Education</Link>
                      <Link href="/future/health" className="block w-full px-3 py-3 hover:bg-zinc-100">Health</Link>
                      <Link href="/future/culture" className="block w-full px-3 py-3 hover:bg-zinc-100">Culture</Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i.name}
                  href={i.href}
                  className={`rounded px-2 py-1 text-[11px] sm:text-xs text-white ${
                    isActive(i.href) ? 'font-bold bg-black/10 underline' : 'hover:bg-black/5' // <-- APPLIED ACTIVE STYLES
                  }`}
                >
                  {i.name} {i.hasDropdown && "▾"}
                </Link>
              )
            ))}
          </div>
          <div className="flex items-center justify-between gap-1">
            <div className="flex flex-wrap items-center gap-1">
              {secondRow.map((i) => (
                i.hasDropdown ? (
                  <div 
                    key={i.name} 
                    className="relative"
                    onMouseEnter={() => {
                      if (i.name === "Maritime") setShowMaritime(true);
                      if (i.name === "Economy & Market") setShowEconomy(true);
                    }}
                    onMouseLeave={() => {
                      if (i.name === "Maritime") setShowMaritime(false);
                      if (i.name === "Economy & Market") setShowEconomy(false);
                    }}
                  >
                    <Link
                      href={i.href} // Primary link navigates here on click
                      className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[11px] sm:text-xs text-white hover:bg-black/5 ${
                          isActive(i.href) ? 'font-bold bg-black/10 underline' : '' // <-- APPLIED ACTIVE STYLES
                      }`}
                    >
                      <span>{i.name}</span>
                      <span className="text-[16px]">▾</span>
                    </Link>

                    {/* Dropdown Content */}
                    {(i.name === "Maritime" && showMaritime) && (
                      <div className="absolute left-1/2 top-full z-30 w-40 -translate-x-1/2 rounded-md bg-white py-2 text-center text-[12px] text-[#111827] shadow-lg">
                        {/* CONVERTED TO LINK WITH HREFs BASED ON PARENT: /maritime/... */}
                        <Link href="/maritime/transport" className="block w-full px-3 py-3 hover:bg-zinc-100">Transport</Link>
                        <Link href="/maritime/port" className="block w-full px-3 py-3 hover:bg-zinc-100">Port</Link>
                        <Link href="/maritime/safety" className="block w-full px-3 py-3 hover:bg-zinc-100">Safety</Link>
                        <Link href="/maritime/ship-operations" className="block w-full px-3 py-3 hover:bg-zinc-100">Ship Operations</Link>
                        <Link href="/maritime/sustainability" className="block w-full px-3 py-3 hover:bg-zinc-100">Sustainability</Link>
                        <Link href="/maritime/offshores" className="block w-full px-3 py-3 hover:bg-zinc-100">Offshores</Link>
                        <Link href="/maritime/repairs" className="block w-full px-3 py-3 hover:bg-zinc-100">Repairs</Link>
                      </div>
                    )}
                    {(i.name === "Economy & Market" && showEconomy) && (
                      <div className="absolute left-1/2 top-full z-30 w-36 -translate-x-1/2 rounded-md bg-white py-2 text-center text-[12px] text-[#111827] shadow-lg">
                        {/* CONVERTED TO LINK WITH HREFs BASED ON PARENT: /economy-market/... */}
                        <Link href="/economy-market/money" className="block w-full px-3 py-3 hover:bg-zinc-100">Money</Link>
                        <Link href="/economy-market/aviation" className="block w-full px-3 py-3 hover:bg-zinc-100">Aviation</Link>
                        <Link href="/economy-market/economy" className="block w-full px-3 py-3 hover:bg-zinc-100">Economy</Link>
                        <Link href="/economy-market/finance" className="block w-full px-3 py-3 hover:bg-zinc-100">Finance</Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={i.name}
                    href={i.href}
                    className={`rounded px-2 py-1 text-[11px] sm:text-xs text-white ${
                      isActive(i.href) ? 'font-bold bg-black/10 underline' : 'hover:bg-black/5' // <-- APPLIED ACTIVE STYLES
                    }`}
                  >
                    {i.name} {i.hasDropdown && "▾"}
                  </Link>
                )
              ))}
            </div>
            <div className="flex items-center gap-1">
              {showSearch && (
                <input
                  aria-label="Search"
                  placeholder="Search..."
                  autoFocus
                  className="h-8 w-26 rounded-full border border-white/50 bg-white px-2 text-[10px] text-black outline-none placeholder:text-[#2E3D68] sm:w-30"
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

        {/* --- Desktop layout --- */}
        <nav className="hidden items-center justify-between py-2 text-[11px] sm:text-xs md:flex md:text-[13px]">
          <div className="-mx-2 flex items-center sm:gap-2">
            {items.map((i) => (
              i.hasDropdown ? (
                // Use a wrapper div for hover state
                <div 
                  key={i.name} 
                  className="relative"
                  onMouseEnter={() => {
                    if (i.name === "Business") setShowBusiness(true);
                    if (i.name === "Future") setShowFuture(true);
                    if (i.name === "Maritime") setShowMaritime(true);
                    if (i.name === "Economy & Market") setShowEconomy(true);
                  }}
                  onMouseLeave={() => {
                    if (i.name === "Business") setShowBusiness(false);
                    if (i.name === "Future") setShowFuture(false);
                    if (i.name === "Maritime") setShowMaritime(false);
                    if (i.name === "Economy & Market") setShowEconomy(false);
                  }}
                >
                  <Link
                    href={i.href} // Primary link navigates here on click
                    className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[11px] sm:text-xs md:text-sm lg:text-[15px] text-white hover:bg-black/5 ${
                        isActive(i.href) ? 'font-bold bg-black/10 underline' : '' // <-- APPLIED ACTIVE STYLES
                    }`}
                  >
                    <span>{i.name}</span>
                    <span className="text-[16px]">▾</span>
                  </Link>

                  {/* Dropdown Content */}
                  {(i.name === "Business" && showBusiness) && (
                   <div className="absolute left-1/2 top-full z-30 w-44 -translate-x-1/2 rounded-md bg-white py-1 text-center text-[12px] text-[#111827] shadow-lg">
                      {/* CONVERTED TO LINK WITH HREFs BASED ON PARENT: /business/... */}
                      <Link href="/business/upstream-oil" className="block w-full px-3 py-3 hover:bg-zinc-100">Upstream oil &amp; gas</Link>
                      <Link href="/business/downstream-oil" className="block w-full px-3 py-3 hover:bg-zinc-100">Downstream oil &amp; gas</Link>
                      <Link href="/business/power" className="block w-full px-3 py-3 hover:bg-zinc-100">Power</Link>
                      <Link href="/business/energy" className="block w-full px-3 py-3 hover:bg-zinc-100">Energy</Link>
                      <Link href="/business/natural-gas" className="block w-full px-3 py-3 hover:bg-zinc-100">Natural Gas</Link>
                      <Link href="/business/money" className="block w-full px-3 py-3 hover:bg-zinc-100">Money</Link>
                      <Link href="/business/finance" className="block w-full px-3 py-3 hover:bg-zinc-100">Finance</Link>
                    </div>
                  )}
                  {(i.name === "Future" && showFuture) && (
                    <div className="absolute left-1/2 top-full z-30 w-40 -translate-x-1/2 rounded-md bg-white py-2 text-center text-[12px] text-[#111827] shadow-lg">
                      {/* CONVERTED TO LINK WITH HREFs BASED ON PARENT: /future/... */}
                      <Link href="/future/science" className="block w-full px-3 py-3 hover:bg-zinc-100">Science</Link>
                      <Link href="/future/technology" className="block w-full px-3 py-3 hover:bg-zinc-100">Technology</Link>
                      <Link href="/future/education" className="block w-full px-3 py-3 hover:bg-zinc-100">Education</Link>
                      <Link href="/future/health" className="block w-full px-3 py-3 hover:bg-zinc-100">Health</Link>
                      <Link href="/future/culture" className="block w-full px-3 py-3 hover:bg-zinc-100">Culture</Link>
                    </div>
                  )}
                  {(i.name === "Maritime" && showMaritime) && (
                    <div className="absolute left-1/2 top-full z-30 w-40 -translate-x-1/2 rounded-md bg-white py-2 text-center text-[12px] text-[#111827] shadow-lg">
                      {/* CONVERTED TO LINK WITH HREFs BASED ON PARENT: /maritime/... */}
                      <Link href="/maritime/transport" className="block w-full px-3 py-3 hover:bg-zinc-100">Transport</Link>
                      <Link href="/maritime/port" className="block w-full px-3 py-3 hover:bg-zinc-100">Port</Link>
                      <Link href="/maritime/safety" className="block w-full px-3 py-3 hover:bg-zinc-100">Safety</Link>
                      <Link href="/maritime/ship-operations" className="block w-full px-3 py-3 hover:bg-zinc-100">Ship Operations</Link>
                      <Link href="/maritime/sustainability" className="block w-full px-3 py-3 hover:bg-zinc-100">Sustainability</Link>
                      <Link href="/maritime/offshores" className="block w-full px-3 py-3 hover:bg-zinc-100">Offshores</Link>
                      <Link href="/maritime/repairs" className="block w-full px-3 py-3 hover:bg-zinc-100">Repairs</Link>
                    </div>
                  )}
                  {(i.name === "Economy & Market" && showEconomy) && (
                    <div className="absolute left-1/2 top-full z-30 w-36 -translate-x-1/2 rounded-md bg-white py-2 text-center text-[12px] text-[#111827] shadow-lg">
                      {/* CONVERTED TO LINK WITH HREFs BASED ON PARENT: /economy-market/... */}
                      <Link href="/economy-market/money" className="block w-full px-3 py-3 hover:bg-zinc-100">Money</Link>
                      <Link href="/economy-market/aviation" className="block w-full px-3 py-3 hover:bg-zinc-100">Aviation</Link>
                      <Link href="/economy-market/economy" className="block w-full px-3 py-3 hover:bg-zinc-100">Economy</Link>
                      <Link href="/economy-market/finance" className="block w-full px-3 py-3 hover:bg-zinc-100">Finance</Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i.name}
                  href={i.href}
                  className={`rounded px-2 py-1 text-[11px] sm:text-xs md:text-sm lg:text-[15px] text-white ${
                    isActive(i.href) ? 'font-bold bg-black/10 underline' : 'hover:bg-black/5' // <-- APPLIED ACTIVE STYLES
                  }`}
                >
                  {i.name} {i.hasDropdown && "▾"}
                </Link>
              )
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
            {/* NOTE: Image component requires 'src', using a placeholder */}
            <Image
              src="/left-arrow.png"
              alt="Previous headline"
              width={24}
              height={24}
              className="mt-1 flex-shrink-0 hover:bg-white/10 sm:h-[24px] sm:w-[24px] md:h-[28px] md:w-[28px]"
            />
          </button>
          <button className="h-full px-2 text-white">
            {/* NOTE: Image component requires 'src', using a placeholder */}
            <Image
              src="/right-arrow.png"
              alt="Next headline"
              width={24}
              height={24}
              className="mt-1 flex-shrink-0 hover:bg-white/10 sm:h-[24px] sm:w-[24px] md:h-[28px] md:w-[28px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

type NewsHeaderProps = {
  hideBanner?: boolean;
  hideTicker?: boolean;
};

export default function NewsHeader({ hideBanner, hideTicker }: NewsHeaderProps) {
  return (
    <header className="w-full">
      {hideBanner ? <CompactLogoBar /> : <BrandAndBanner />}
      <TopUtilities /> 
      <PrimaryNav />
      {!hideTicker && <NewsTicker />}
    </header>
  );
}