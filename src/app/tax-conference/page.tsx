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
        {/* Hero banner - match Events page pattern */}
        <section className="relative h-[500px] w-full mt-8 text-white">
          {/* Background image */}
          <Image
            src="/tax.png"
            fill
            className="object-cover"
            alt="Solar panels and wind turbines at sunrise"
            priority
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="mx-auto flex w-full  px-4 sm:px-6">
              <div className="grid w-full gap-8 md:grid-cols-[1.6fr_1fr]">
               

                {/* Event card */}
                <div className="absolute right-0 top-1/5">
                  <div className="h-76 w-full  pl-8 pr-40 bg-[#2E3D68] pb-8 text-xs text-white shadow-lg backdrop-blur-sm">
                    <p className="text-[14px]  pt-6 font-bold uppercase  text-white">
                      NIGERIAN TAX CONFERENCE
                    </p>
                    <h2 className="mt-2 text-[20px] font-bold leading-snug">
                      YOUR GATEWAY TO THE ENTIRE TAX<br/>COMPLIANCE AND AUDIT COMMUNITY<br/>GATHERING IN NIGERIA
                    </h2>
                    <p className="mt-2 text-[13px]">
                     YOUR GATEWAY TO THE ENTIRE TAX COMPLIANCE AND AUDIT COMMUNITY<br/>GATHERING IN NIGERIA
                    </p>

                    {/* location */}
                  <div className=" flex justify-between mt-4 space-y-2 text-[11px]">
                        {/* Left side: Date and Time */}
                        <div className="flex items-center justify-between gap-3">
                          <Image
                                src="/cal.png" // Placeholder for your image path
                                alt="Location Pin"
                                width={46} // Adjust size as needed
                                height={46} // Adjust size as needed
                                className="flex-shrink-0" // Ensure the image doesn't shrink
                            />
                            <div>
                              <span className="font-semibold text-[14px]">January 2nd, 2026</span><br/>
                            <span className="text-[18px] font-bold">09:00 AM (WAT)</span>
                            </div>
                          
                        </div>

                        {/* Right side: FCT Abuja with Image */}
                        <div className="flex items-center gap-1"> {/* Added flex and items-center here */}
                            <Image
                                src="/local.png" // Placeholder for your image path
                                alt="Location Pin"
                                width={46} // Adjust size as needed
                                height={46} // Adjust size as needed
                                className="flex-shrink-0" // Ensure the image doesn't shrink
                            />
                            <span className="text-[14px] font-semibold">FCT Abuja.</span>
                        </div>
                    </div>
                    <Link
                      href="#register"
                      className="mt-2 inline-flex  items-center justify-center bg-[#AB2971] px-4 py-2 text-[11px] font-semibold text-white hover:bg-[#901f5e]"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary navigation under the hero */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-200 bg-[#F5F5F5] text-[14px] sm:text-xs">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <nav className="flex flex-wrap items-center justify-start gap-6 py-8 text-[#221919]">
                {[
                  "Home",
                  "Sponsors",
                  "Register",
                  "Speakers",
                  "Pricing",
                  "Become a Sponsor",
                ].map((item) => (
                  <button
                    key={item}
                    className="flex items-center gap-6 text-[15px] font-semibold text-[#2E3D68] hover:text-[#AB2971]"
                  >
                    <span>{item}</span>
                    {item !== "Become a Sponsor" && (
                      <span className="h-3 w-px bg-[#D4D4D4]" aria-hidden="true" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Key areas section */}
        <section className="bg-white py-10 text-[13px] leading-relaxed text-[#221919] sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#E11D48] sm:text-xl">
              The Conference will delve into these key areas:
            </h2>
            <ul className="mt-4 space-y-3 text-[13px] sm:text-sm">
              <li>
                <span className="font-semibold">Real‑Time Tax Compliance:</span> the use of digital tools — such as
                e‑invoicing systems, electronic cash registers and online reporting platforms — to enable the recording
                and transmission of tax‑related data automatically to authorities at the moment a transaction occurs,
                ensuring transparency and enabling immediate tax assessment.
              </li>
              <li>
                <span className="font-semibold">Advanced Data Analytics:</span> utilizing real‑time data analytics to
                enable tax authorities to monitor economic activities continuously, identify risks promptly and respond
                swiftly to emerging issues.
              </li>
              <li>
                <span className="font-semibold">Real‑time economy and timely revenue collection:</span> supporting tax
                administrations in ensuring timely tax collection while helping governments invest in public services and
                infrastructure.
              </li>
              <li>
                <span className="font-semibold">Integration of tax into natural business processes:</span> enabling
                technologies and infrastructure for seamless, real‑time tax compliance.
              </li>
            </ul>
          </div>
        </section>

        {/* Who should attend */}
        <section className="bg-white py-4 sm:py-2">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#E11D48] sm:text-xl">
              Who Should Attend?
            </h2>

            <div className="mt-4 grid gap-8 text-[13px] sm:grid-cols-2 sm:text-sm">
              <ul className="space-y-2 list-disc pl-4">
                <li>Accountants and Auditors</li>
                <li>Partners and Managers</li>
                <li>All levels of staff in tax management</li>
                <li>Firm Administrators</li>
                <li>Firm IT Consultants</li>
                <li>Tax Professors and Students</li>
                <li>Industry‑specific software developers and trainers</li>
              </ul>
              <ul className="space-y-2 list-disc pl-4">
                <li>Banking industry professionals</li>
                <li>Business owners and executives</li>
                <li>Financial managers</li>
                <li>Senior government officials</li>
                <li>Academics and researchers</li>
                <li>Venture capitalists and investors</li>
                <li>Technology providers and consultants</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="bg-[#F5F5F5] py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-center text-lg font-bold text-[#E11D48] sm:text-xl">
              Benefits of Attending Tax Conference
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-[11px] text-zinc-600 sm:text-xs">
              Our iterative approach ensures your data strategy delivers measurable business outcomes through intelligent
              implementation and continuous optimisation.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Get to Know the Latest Industry Trends",
                  body:
                    "Stay ahead of evolving tax policies, digital tools and enforcement practices impacting Nigerian and African markets.",
                },
                {
                  title: "Learn About the Latest Technologies",
                  body:
                    "Discover how data analytics, automation and real‑time reporting platforms can transform compliance.",
                },
                {
                  title: "Develop Professional Skills",
                  body:
                    "Deepen your technical and strategic skills through expert‑led sessions, case studies and panel discussions.",
                },
                {
                  title: "Networking Opportunities",
                  body:
                    "Connect with fellow professionals, policymakers, technology partners and industry leaders.",
                },
                {
                  title: "Develop Knowledge",
                  body:
                    "Hear from renowned speakers sharing best practices, lived experiences and practical lessons.",
                },
                {
                  title: "Actionable Insights",
                  body:
                    "Leave with tools and frameworks you can immediately apply to strengthen tax governance and revenue outcomes.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex h-full flex-col justify-between rounded-md bg-white px-4 py-5 text-[11px] shadow-sm sm:text-xs"
                >
                  <h3 className="text-sm font-semibold text-[#2E3D68] sm:text-sm">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[11px] text-zinc-600 sm:text-xs">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Register call‑to‑action */}
        <section id="register" className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <h2 className="text-base font-bold uppercase tracking-wide text-[#E11D48] sm:text-lg">
              Register For This Event
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-[11px] text-zinc-700 sm:text-xs">
              Join Nigeria's most senior forces officers, policy‑makers, senior executives and security leaders and share
              your insights on how to sustain Nigeria's forces through partnerships and collaboration.
            </p>

            <Link
              href="#"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#2E3D68] px-6 py-2 text-[11px] font-semibold text-white hover:bg-[#1f2a4a]"
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
