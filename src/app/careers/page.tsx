"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Assuming these paths are correct based on your previous structure
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";

// --- Helper Components ---

// A helper component to manage the accordion items (Job Listings and Sections)
const AccordionItem = ({ title, location, children, defaultOpen = false, isJobListing = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  // Arrow for the main accordion expansion/collapse on the right
  const rightArrowClass = isJobListing ? 'h-5 w-5 transform transition-transform' : 'h-6 w-6 transform transition-transform';
  const rightArrowDPath = isJobListing ? 'M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' : 'M12 4.5v15m7.5-7.5h-15';
  const rightArrowColor = isJobListing ? 'text-black' : 'text-[#2E3D68]';

  return (
    <div className={`border-b border-gray-200 ${isJobListing ? 'py-2' : 'py-4'}`}>
      <button
        // Prevent the button from being focusable/clickable if it's wrapped in a Next.js Link
        // For job listings, we rely on the Link wrapper for navigation.
        // For non-job listings (isJobListing=false), we use the button for the accordion toggle.
        className="flex w-full items-center justify-between text-left hover:text-gray-700"
        onClick={() => !isJobListing && setIsOpen(!isOpen)} // Only allow click for accordion toggle if it's not a job listing link
      >
        <div className="flex items-center gap-2"> {/* Added flex container for left arrow and text */}
            {/* Left Angle Arrow Image (Only for Job Listings) */}
            {isJobListing && (
              <Image
                  src="/angle-arrow.png" // Path to your red arrow image
                  alt="Arrow"
                  width={24} // Adjust size as needed
                  height={24} // Adjust size as needed
                  className={`flex-shrink-0 `}
              />
            )}
            <div>
                <h3 className={`font-semibold ${isJobListing ? 'text-base' : 'text-lg'}`}>
                {title}
                </h3>
                {location && (
                <p className="mt-1 text-sm font-normal text-gray-500">
                    {location}
                </p>
                )}
            </div>
        </div>
        {/* Right Arrow SVG (Toggle/Navigation indicator) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`${rightArrowClass} ${rightArrowColor} ${isOpen && !isJobListing ? 'rotate-180' : ''}`}
        >
          {isJobListing ? (
            // For Job Listings: Right arrow indicating navigation
            <path strokeLinecap="round" strokeLinejoin="round" d={rightArrowDPath} />
          ) : (
            // For general accordions: Plus/Minus for toggle
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M18 12H6' : 'M12 4.5v15m7.5-7.5h-15'} />
          )}
        </svg>
      </button>
      {/* Accordion Content (Only for non-Job Listings) */}
      {isOpen && !isJobListing && (
        <div className={` text-sm text-gray-600 pl-4`}> 
          {children}
        </div>
      )}
      {/* Accordion Content for Job Listings (If you choose to keep it) */}
      {isOpen && isJobListing && (
        <div className={` text-sm text-gray-600 pl-8`}>
            {children}
        </div>
      )}
    </div>
  );
};

// --- Main Page Component ---

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hide Banner and Ticker as per the Careers.jpg design */}
      <NewsHeader hideBanner hideTicker /> 

      <main>
        {/* Hero Section: Vacancies */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:grid md:grid-cols-3 md:gap-12">
            
            {/* Left Column: Title */}
            <div className="md:col-span-1">
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
                Vacancies
              </h1>
            </div>

            {/* Right Column: Intro Text */}
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#4B5563] sm:text-base md:col-span-2 md:mt-0">
              <p>
                Onewave is a team of smart and ambitious people, committed to providing the best 
                information to the energy and financial markets. Onewave News is the only Nigeria 
                leading independent reporting agency for oil and gas, maritime and power, and our 
                fast growth and success means that we are always looking for talented individuals to 
                join our team.
              </p>
              <p>
                We invest in our success as a company by investing in our people. At Onewave, 
                we’re committed to creating a workplace that works for you. But don’t take our
                 word for it. Hear from our team members talk about what makes the difference for them.
              </p>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="bg-white pt-6 pb-12">
          <div className=" max-w-full px-4 sm:px-6"> 
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#221919]"> 
              Locations
            </h2>

           <div className="max-w-lg mt-4 flex items-center justify-between bg-[#3A3535] px-6 py-3 text-white">
                <p className="font-semibold uppercase tracking-wider">Port Harcourt and Abuja</p>
                <Image
                    src="/down-arrow.png" // Ensure this path is correct
                    alt="Location arrow"
                    width={24} // Adjust size as needed
                    height={24} // Adjust size as needed
                    className="flex-shrink-0"
                />
            </div>
            
            {/* Job Accordion List - Uses Link for Navigation */}
         <div className="mt-4 space-y-1 max-w-lg">
            {/* Head of Conference Job Listing */}
            <Link href="/jobs/head-of-conference-ph-abj" className="block">
                    <AccordionItem 
                        title="Head of Conference" 
                        location="Port Harcourt, Abuja (Hybrid)"
                    >
                        {/* Job description content can go here if you want it to appear when clicked */}
                    </AccordionItem>
            </Link>
            
            {/* Head Of Business Development Job Listing */}
            <Link href="/jobs/head-of-business-development-ph" className="block">
                    <AccordionItem title="Head Of Business Development" location="Port Harcourt, (Hybrid)" />
            </Link>

            {/* Graphic Operations Job Listing */}
            <Link href="/jobs/graphic-operations-ph" className="block">
                    <AccordionItem title="Graphic Operations" location="Port Harcourt, (Onsite)" />
            </Link>
          </div>
        </div>
        </section>

        {/* Home to Pioneers and Innovation Section (Accordion) */}
        <section className="bg-white pt-6 pb-12">
          <div className="mx-auto max-w-full px-4 sm:px-6 gap-36 flex">
            <h2 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
              Home to Pioneers and Innovation
            </h2>

            <div className="max-w-3xl mt-4 space-y-4">
                {/* These items are NOT job listings, so isJobListing={false} and they use standard accordion behavior */}
                <AccordionItem title="Grow with Onewave" isJobListing={false}>
                    <p className="pb-4 pt-2">Details about growth opportunities at Onewave...</p>
                </AccordionItem>
                <AccordionItem title="Put people first, and everything falls into place" isJobListing={false} defaultOpen={true}>
                    <p className="pb-4 pt-2">
                        We invest in our success as a company by investing in our people. At Onewave, we’re committed to creating a workplace that works for you. But don’t take our word for it. Hear from our team members talk about what makes the difference for them.
                    </p>
                </AccordionItem>
                <AccordionItem title="We take care of you, so you can take care of our business" isJobListing={false}>
                    <p className="pb-4 pt-2">Details about employee benefits and support...</p>
                </AccordionItem>
            </div>
          </div>
        </section>

        {/* CTA Section: Want to Work With Us? Let's Talk */}
     <section className="mt-8">
  <div className="mx-auto max-w-8xl mb-34 px-4 sm:px-6 relative"> {/* Add 'relative' here for absolute positioning context */}
    {/* This div will hold the gradient background */}
    <div 
      className="relative py-20 top-10 grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden"
      style={{ backgroundImage: 'url("/talk-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="hidden md:block md:col-span-1"></div> 

      {/* Right Column: Text and CTA - now directly on the gradient */}
      <div className="flex flex-col md:p-12 text-white md:col-span-1">
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Want to Work With<br/> Us? Let's Talk
        </h2>
        <Link
          href="/contact" // Assuming a contact page exists
          className="mt-6 inline-block w-fit bg-white px-8 py-3 text-sm font-semibold uppercase text-[#873A8D] transition-colors hover:bg-gray-100"
        >
          Get in Touch
        </Link>
      </div>
    </div>

    {/* The Image is now positioned absolutely, overlapping the gradient */}
    {/* Adjust 'top', 'left', 'transform' for precise positioning */}
    <div className="absolute top-0 ml-20 pt-110 md:top-1/2 left-4 md:left-0 md:-translate-y-1/2 max-w-xl md:w-1/2 h-64 md:h-[400px] lg:h-[400px] z-10 rounded-lg overflow-hidden shadow-lg"> 
        <Image
            src="/call.png"
            alt="Team collaboration session"
            fill
            className="object-cover"
        />
    </div>
  </div>
</section>
      </main>

      <NewsFooter />
    </div>
  );
}