import type { Metadata } from "next";
import Image from "next/image";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
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
            src="/tax.png"
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
                <div className="absolute right-0 top-1/8 w-full px-4 sm:mr-4 sm:px-0 sm:static md:absolute md:right-0 md:top-1/6 md:w-auto">
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
                <Link href="/tax-conference">Home</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/tax-conference/sponsors">Sponsors</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/tax-conference/register">Register</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/tax-conference/mission">Speakers</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/tax-conference/pricing">Pricing</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/tax-conference/sponsors">Become a Sponsor</Link>
              </nav>
            </div>
          </div>
        </section>

        {/* Key Areas */}
        <section className="bg-white py-10 sm:py-12 text-[#221919]">
          <div className="max-w-7xl px-4 sm:px-6">
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#AB2971] sm:text-xl">
              Become a sponsor
            </h2>

            <ul className="mt-4 space-y-3 text-[13px] sm:text-sm">
              <li>
                Position your business in expert company, distinct from your competitors. 
                At the Onewave event, tax conference, each sponsor has the opportunity to 
                showcase<br/> their product or service to industry-wide professionals. We provide 
                an environment that encourages an honest 
                and open dialogue among attendees. Or contact:<br/> Events@Onewavetv.com
              </li>

              <li>
                Demonstrate your strengths, raise your company profile, and maximize your ROI
                 as we bring key industry players and decision-makers to you. At the Onewave 
                 tax<br/> conference, each sponsor has the opportunity to showcase their products 
                 and services and distinguish themselves from the competition. We offer a full 
                 range of<br/> opportunities 
                and packages, and can even tailor solutions to suit your needs.
              </li>
            </ul>
          </div>
        </section>

        {/* Key Topic Areas */}
        <section className="bg-white py-4 sm:py-1">
          <div className="max-w-5xl px-4 sm:px-6">
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#AB2971] sm:text-xl">
              Sponsorship opportunities to meet your objectives
            </h2>

            <div className="mt-4 gap-10 text-[15px] sm:grid-cols-2 sm:text-[14px]">
              <ul className="space-y-4">
                <li>
                  <strong>Keynote presentation </strong> <br/> Gain maximum visibility for your thought-leader 
                  and brand with premium positioning on the conference agenda
                </li>

                <li>
                  <strong>Panel session</strong> <br/>  Join a panel discussion alongside some of the best in the industry to
                   show your insights on the biggest questions facing the industry
                </li>

                <li>
                  <strong>Digital content</strong> <br/> Build a year-round campaign, have multiple touch points and stay 
                  front of mind of your prospects and 
                  current clients by adding a webinar, white paper, report or<br/> interview
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <NewsFooter />
    </div>
  );
}
