import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import Image from "next/image";
import Link from "next/link";

const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function EventsPage() {
  const events = [
    {
      title: "NIGERIA POLICE SUMMIT",
      date: "NOV 24-25, 2025",
      location: "ABUJA CONTINENTAL HOTEL, FCT",
      tags: ["Conference"],
      href: "/events/police-summit",
    },
    {
      title: "FINANCING NIGERIA ELECTRICITY CONFERENCE",
      date: "DEC 1st, 2025",
      location: "ABUJA CONTINENTAL HOTEL, FCT",
      tags: ["Conference"],
      href: "/events",
    },
    {
      title: "ONEWAVE TAX MANAGEMENT SUMMIT",
      date: "JAN 28-29, 2026",
      location: "ABUJA, FCT",
      tags: ["Conference", "Exhibition", "Networking"],
      href: "/events",
    },
    {
      title: "NIGERIA HEALTH WEEK",
      date: "FEB 9-10, 2026",
      location: "ABUJA, FCT",
      tags: ["Conference", "Exhibition", "Award"],
      href: "/events",
    },
    {
      title: "ONEWAVE FOOD PRODUCTION & SUSTAINABILITY SUMMIT",
      date: "FEB 23-24, 2026",
      location: "LAGOS",
      tags: ["Conference", "Networking", "Dinner"],
      href: "/events",
    },
    {
      title: "NIGERIA CRUDE OIL LEADERS SUMMIT",
      date: "MARCH 29-31, 2026",
      location: "ABUJA, FCT",
      tags: ["Conference", "Networking", "Exhibition"],
      href: "/events",
    },
    {
      title: "NIGERIA MARITIME AND LOGISTICS CONGRESS",
      date: "MAY 12-14, 2026",
      location: "ABUJA, FCT",
      tags: ["Conference", "Networking", "Dinner"],
      href: "/events",
    },
    {
      title: "ONEWAVE INSURANCE LEADERS CONGRESS",
      date: "FEB 23-24, 2026",
      location: "LAGOS",
      tags: ["Conference"],
      href: "/events",
    },
    {
      title: "ONEWAVE WOMEN IN BANKING & FINANCE SUMMIT",
      date: "JUNE 1st, 2026",
      location: "ABUJA, FCT",
      tags: ["Conference", "Networking", "Exhibition"],
      href: "/events",
    },
    {
      title: "ONEWAVE PROCUREMENT & SOURCING SUMMIT",
      date: "JULY 7-8, 2026",
      location: "LAGOS",
      tags: ["Conference", "Networking", "Exhibition"],
      href: "/events",
    },
    {
      title: "WEST AFRICA’S MEDIA AND BROADCASTING CONGRESS",
      date: "JULY 27-29, 2026",
      location: "ABUJA, FCT.",
      tags: ["Conference", "Dinner", "Exhibition"],
      href: "/events",
    },
    {
      title: "AFRICA’S PETROCHEMICAL CONFERENCE",
      date: "SEP 7-9, 2026",
      location: "GHANA",
      tags: ["Conference", "Dinner", "Exhibition"],
      href: "/events",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <NewsHeader hideBanner hideTicker />

      {/* HERO */}
      <section className="relative h-[460px] w-full mt-8">
        <Image
          src="/event-bg.png"
          fill
          className="object-cover"
          alt="Event banner"
        />
        <div className="absolute inset-0 bg-black/5"></div>

        <div className="absolute inset-0 flex items-center justify-start p-4 md:p-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="bg-[#2E3D68]/80 p-8 md:w-[520px] text-white max-w-full">
              <h1 className="text-2xl sm:text-3xl font-bold mb-3">
                Onewave Events
              </h1>

              <p className="text-[13px] leading-6 mb-6">
                Delivering Business Intelligence for Global Market Place Through
                B2B Events With Onewave Live Business Events: A Dynamic Business
                Community for Industry Leaders
              </p>

              <button className="bg-white text-[#2E3D68] px-5 py-2 text-xs font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4 sm:px-6">

          {/* LEFT SIDEBAR */}
          <div className="space-y-6">

            <div className="bg-[#F6F6F6] p-6 rounded">
              <h3 className="font-bold text-sm text-[#111] mb-3">Sort By</h3>

              <label className="flex items-center gap-2 text-sm mb-2">
                <input type="radio" name="sort" defaultChecked className="accent-black" />
                Most Recent
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="sort" className="accent-black" />
                A–Z
              </label>
            </div>

            <div className="space-y-6 bg-[#F6F6F6] p-6 rounded">
              <h3 className="font-bold text-sm text-[#111] mb-3">Filters</h3>

              <div className="border-b border-[#9A9A9A47] pb-3 flex justify-between text-sm font-semibold">
                <span>Theme</span>
                <span>+</span>
              </div>

              <div className="border-b border-[#9A9A9A47] pb-3 flex justify-between text-sm font-semibold">
                <span>Location</span>
                <span>+</span>
              </div>

              <div className="pb-3 flex justify-between text-sm font-semibold">
                <span>Segment</span>
                <span>+</span>
              </div>
            </div>

            <div className="space-y-2 bg-[#F6F6F6] p-6 rounded">
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="event-type" defaultChecked className="accent-black" />
                Upcoming Events
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="event-type" className="accent-black" />
                Past Events
              </label>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-3">

            {/* Search */}
            <div className="mb-10 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 text-gray-500"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-md pl-10 pr-3 py-2 text-sm"
              />
            </div>

            {/* EVENTS LIST */}
            <div className="space-y-12">
              {events.map((event, idx) => (
                <Link
                  key={idx}
                  href={event.href}
                  className="block group cursor-pointer"
                >
                  <div className="border-b border-[#B5B5B5] transition-all group-hover:opacity-80">
                    <p className="text-[12px] font-bold text-[#C2007B] mb-2">
                      IN PERSON
                    </p>

                    <h2 className="text-[15px] font-bold mb-1 group-hover:underline">
                      {event.title}
                    </h2>

                    <p className="text-xs text-gray-600 mb-3">
                      {event.date} • {event.location}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2 mb-4">
                      {event.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[12px] bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center gap-3 mt-12">
              <button className="px-1 py-1 text-gray-500" disabled>
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button className="px-3 py-1 text-sm bg-[#2E3D68] text-white">1</button>
              <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200">2</button>
              <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200">3</button>
              <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200">4</button>
              <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200">5</button>

              <button className="px-1 py-1 text-gray-500 hover:text-[#2E3D68]">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <NewsFooter />
    </div>
  );
}
