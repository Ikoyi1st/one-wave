"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Assuming these paths are correct based on your previous structure
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";

// Removed metadata export from this file as per previous error fix.
// Ensure you have `app/careers/metadata.ts` or `app/careers/layout.tsx` for metadata.

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
        className="flex w-full items-center justify-between text-left hover:text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2"> {/* Added flex container for left arrow and text */}
            {/* Left Arrow Image */}
            <Image
                src="/angle-arrow.png" // Path to your red arrow image
                alt="Arrow"
                width={18} // Adjust size as needed
                height={18} // Adjust size as needed
                className={`flex-shrink-0 `}
            />
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
        {/* Right Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`${rightArrowClass} ${rightArrowColor} ${isOpen && !isJobListing ? 'rotate-180' : ''} ${isOpen && isJobListing ? 'rotate-90' : 'rotate-0'}`}
        >
          {isJobListing ? (
            <path strokeLinecap="round" strokeLinejoin="round" d={rightArrowDPath} />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M18 12H6' : 'M12 4.5v15m7.5-7.5h-15'} />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className={`pb-4 pt-2 text-sm text-gray-600 ${isJobListing ? 'pl-8' : 'pl-4'}`}> {/* Adjusted pl for left arrow */}
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
                Onewave is a team of smart and ambitious people, committed to providing the best information to the energy and financial markets. Onewave News is the only Nigeria leading independent reporting agency for oil and gas, maritime and power, and our fast growth and success means that we are always looking for talented individuals to join our team.
              </p>
              <p>
                We invest in our success as a company by investing in our people. At Onewave, we’re committed to creating a workplace that works for you. But don’t take our word for it. Hear from our team members talk about what makes the difference for them.
              </p>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="bg-white pt-6 pb-12">
          <div className=" max-w-lg px-4 sm:px-6"> {/* Max width adjusted from max-w-lg */}
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#221919]"> {/* Text color adjusted */}
              Locations
            </h2>

            {/* Highlighted Location Bar */}
            <div className="mt-4 flex items-center justify-between bg-[#3A3535] px-6 py-3 text-white">
                <p className="font-semibold uppercase tracking-wider">Port Harcourt and Abuja</p>
                {/* Replaced red marker div with Image component */}
                <Image
                    src="/down-arrow.png" // Ensure this path is correct
                    alt="Location arrow"
                    width={20} // Adjust size as needed
                    height={20} // Adjust size as needed
                    className="flex-shrink-0"
                />
            </div>

            {/* Job Accordion List */}
            <div className="mt-4 space-y-1">
                <AccordionItem 
                    title="Head of Conference" 
                    location="Port Harcourt, Abuja (Hybrid)"
                    defaultOpen={true} // Open the first one as an example
                >
                    <div className="space-y-3">
                        <h4 className="font-bold text-[#111827]">Job Description:</h4>
                        <p>The Head of Conference will be responsible for leading the planning and execution of all Onewave News conferences and events, ensuring they align with our mission to inform and connect industry leaders.</p>
                        <h4 className="font-bold text-[#111827]">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 pl-4">
                            <li>Manage the full lifecycle of conference production from concept to delivery.</li>
                            <li>Develop and manage budgets, timelines, and vendor relationships.</li>
                            <li>Collaborate with the editorial team to secure high-profile speakers and content.</li>
                            <li>Lead and mentor the conference production team.</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem title="Head Of Business Development" location="Port Harcourt, (Hybrid)" />
                <AccordionItem title="Graphic Operations" location="Port Harcourt, (Onsite)" />
            </div>
          </div>
        </section>

        {/* Home to Pioneers and Innovation Section (Accordion) */}
        <section className="bg-white pt-6 pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
              Home to Pioneers and Innovation
            </h2>

            <div className="mt-4 space-y-1">
                <AccordionItem title="Grow with Onewave" isJobListing={false}>
                    <p>Details about growth opportunities at Onewave...</p>
                </AccordionItem>
                <AccordionItem title="Put people first, and everything falls into place" isJobListing={false} defaultOpen={true}>
                    <p>
                        We invest in our success as a company by investing in our people. At Onewave, we’re committed to creating a workplace that works for you. But don’t take our word for it. Hear from our team members talk about what makes the difference for them.
                    </p>
                </AccordionItem>
                <AccordionItem title="We take care of you, so you can take care of our business" isJobListing={false}>
                    <p>Details about employee benefits and support...</p>
                </AccordionItem>
            </div>
          </div>
        </section>

        {/* CTA Section: Want to Work With Us? Let's Talk */}
        <section className="mt-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left: Image */}
                    <div className="relative h-64 md:h-96">
                        {/* Assuming you have a team image for this section */}
                        <Image
                            src="/team-talk.jpg" 
                            alt="Team collaboration session"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Right: Text and CTA - Custom background color to match the design */}
                    <div className="flex flex-col justify-center bg-[#873A8D] p-8 md:p-12 text-white">
                        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                            Want to Work With Us? Let's Talk
                        </h2>
                        <Link
                            href="/contact" // Assuming a contact page exists
                            className="mt-6 inline-block w-fit rounded bg-white px-8 py-3 text-sm font-semibold uppercase text-[#873A8D] transition-colors hover:bg-gray-100"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <NewsFooter />
    </div>
  );
}