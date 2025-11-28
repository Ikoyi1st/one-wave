import type { Metadata } from "next";
import Image from "next/image";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import Register from "@/components/Register";
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
                <Link href="/electricity-conference">Home</Link>
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

      {/* Register */}
        <Register />
      </main>

      <NewsFooter />
    </div>
  );
}
