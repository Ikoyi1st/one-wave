import type { Metadata } from "next";
import Image from "next/image";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import AgendaSection from "@/components/Agenda";
import Link from "next/link";

// Metadata for the Tax Conference landing page
export const metadata: Metadata = {
  title: "Nigeria's Tax Conference – Onewave News",
  description:
    "Learn about Nigeria's Tax Conference – agenda, key themes, audience, benefits, and how to register.",
};

export default function TaxConferencePage() {

  return (
    <div className="min-h-screen bg-white">
      <NewsHeader hideBanner hideTicker />

      <main>

        {/* Hero Banner */}
        <section className="relative h-[450px] w-full mt-8 text-white">
          <Image
            src="/elect.png"
            fill
            className="object-cover"
            alt="Tax Conference Image"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-start">
            <div className="mx-auto flex w-full px-4 sm:px-6">
              <div className="grid w-full gap-8 md:grid-cols-[1.6fr_1fr]">

                {/* Event Card */}
                             <div className="absolute right-0 top-1/8 w-full px-4 sm:px-0 sm:mr-4 sm:static md:absolute md:right-0 md:top-1/6 md:w-auto">
  <div className="w-full bg-[#2E3D68] text-xs text-white shadow-lg backdrop-blur-sm 
                  pl-6 pt-6          <!-- Added for small screens -->
                  sm:ml-4 
                  md:ml-4 md:h-76 md:pl-8 md:pr-40 md:pb-8">

    <p className="text-[14px] font-bold uppercase md:pt-2">
      NIGERIAN TAX CONFERENCE
    </p>

    <h2 className="mt-2 text-[16px] font-bold sm:text-[20px] leading-snug">
      YOUR GATEWAY TO THE ENTIRE TAX<br />
      COMPLIANCE AND AUDIT COMMUNITY<br />
      GATHERING IN NIGERIA
    </h2>

    <p className="mt-2 text-[11px] sm:text-[13px]">
      YOUR GATEWAY TO THE ENTIRE TAX COMPLIANCE AND AUDIT
      COMMUNITY<br />
      GATHERING IN NIGERIA
    </p>

    <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-between text-[11px]">
      {/* Date */}
      <div className="flex items-center gap-3">
        <Image src="/cal.png" alt="Calendar" width={46} height={46} />
        <div>
          <span className="text-[12px] font-semibold">
            January 2nd, 2026
          </span>
          <br />
          <span className="text-[16px] font-bold">
            09:00 AM (WAT)
          </span>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <Image src="/local.png" alt="Location" width={46} height={46} />
        <span className="text-[12px] font-semibold">FCT Abuja.</span>
      </div>
    </div>

    <Link
      href="#register"
      className="mt-4 inline-flex items-center justify-center bg-[#AB2971] px-4 py-2 text-[11px] font-semibold hover:bg-[#901f5e]"
    >
      Register Now
    </Link>
  </div>
</div>

              </div>
            </div>
          </div>
        </section>

        {/* Sub Navigation */}
        <section className="text-white">
          <div className="bg-[#F5F5F5] text-[11px] sm:text-xs gap-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <nav className="flex flex-wrap text-[16px] items-center gap-8 border-white/10 py-8 font-bold text-[#4B5563]">
                <Link href="#about-us">Home</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/electricity-conference/sponsor">Sponsors</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/electricity-conference/register">Register</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="#mission">Speakers</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/electricity-conference/pricing">Pricing</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="#conduct">Become a Sponsor</Link>
              </nav>
            </div>
          </div>

        </section>

        {/* Key Areas */}
        <section className="bg-white py-10 sm:py-12 text-[#221919]">
          <div className="max-w-7xl px-4 sm:px-6">
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#AB2971] sm:text-xl">
              Nigerian Tax Conference
            </h2>

            <ul className="mt-4 space-y-3 text-[14px] sm:text-[15px]">
              <li>
                The 2026 Electricity conference will brings together industry leaders, policymakers, 
                and innovators to discuss the evolving energy landscape and the<br/> opportunities within 
                the sector. Attendees will gain deep insights into the latest energy sector shifts, 
                discover investment and partnership opportunities,<br/> and engage in high-level discussions 
                shaping the future of power.”
              </li>

              <li>
               The Nigeria power market is at a serious moment with electricity demand hitting historic highs.
                Investment in generation, transmission, and grid<br/> resilience is crucial as the energy mix has 
                required more finance to sustain the industry, this forum will an opportunity for all the
                 industry players and<br/> financial houses,
                investors, utilities, developers, and policymakers to tackle critical challenges:
              </li>
            </ul>
            <div className="mt-4 gap-10 text-[16px] sm:grid-cols-2 sm:text-[15px]">
              <ul className="space-y-4 list-disc pl-4">
                <li>
                  Poor power generation and sustainability
                </li>

                <li>
                  Grid reliability and technologies
                </li>

                <li>
                  hydrogen, carbon capture, and hybrid renewables markets financing
                </li>

                <li>
                  Financing the next generation of clean energy resources in
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Topic Areas */}
        <section className="bg-white py-4 sm:py-1">
          <div className="max-w-7xl px-4 sm:px-6">
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#AB2971] sm:text-xl">
              Power Provides Unique Window into the Future of Power Generation
            </h2>

            <div className="mt-4 gap-10 text-[16px] sm:grid-cols-2 sm:text-[15px]">
                <p className="mb-2">Attendees will participate in the:</p>
              <ul className="space-y-4 list-disc pl-4">
                <li>
                 Emerging generation technologies, and the rejuvenation and the reapplication
                  of existing technologies, to both renewable, conventional generation<br/> and hybrid sites
                </li>

                <li>
                  Exploration of technologies applicable to the reliable, efficient and economically-viable generation of electricity
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="bg-white py-4 sm:py-2 mt-8">
          <div className="max-w-7xl px-4 sm:px-6">
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#AB2971] sm:text-xl">
              Who Should Attend?
            </h2>

            <div className="mt-4 mb-8 grid gap-8 text-[14px] sm:grid-cols-2 sm:text-[15px]">
              <ul className="space-y-4 list-disc pl-4 font-normal">
                <li>Researchers Involved with Generation Technologies and Applications</li>
                <li>Banking industry</li>
                <li>Senior government official</li>
                <li>Renewable energy leaders</li>
                <li>OEM And Industry Engineers Involved with Project and Product Development</li>
                <li>Venture Capitalists</li>
                <li>All Types of Generation Equipment and Applications Design Engineers</li>
                <li>Energy Policy Makers, Grant Administrators and Technology Collaborators</li>
                <li>Senior Engineers and Industry Mentors</li>
                <li>Early Career Engineers</li>
                <li>Engineering Professors and Students</li>
                <li>Industry-Specific Software Developers and Trainers</li>
              </ul>
            </div>
          </div>
        </section>

        <AgendaSection />

        {/* Register Section */}
        <section
          id="register"
          className="bg-white py-10 sm:py-14 mt-8"
          style={{ backgroundImage: 'url("/bg-8.png")', backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <h2 className="text-base font-bold uppercase tracking-wide text-[#2E3D68] sm:text-2xl">
              Register For This Event
            </h2>

            <p className="mx-auto mt-3 max-w-7xl text-[14px] text-[#2E3D68] sm:text-xl">
              Join Nigeria's top policy-makers, executives and security leaders to share insights on sustaining Nigeria’s forces through collaboration.
            </p>

            <Link
              href="#"
              className="mt-6 inline-flex items-center justify-center bg-[#2E3D68] px-4 py-2 text-[13px] font-semibold text-white"
            >
              Register Now
            </Link>
          </div>
        </section>

      </main>

      <NewsFooter />
    </div>
  );
}
