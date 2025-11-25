import Image from "next/image";
import Link from "next/link";

export default function NewsFooter() {
  const menuItems = [
    { title: "News", href: "#" },
    { title: "About us", href: "#" },
    { title: "Events", href: "#" },
    { title: "Awards", href: "#" },
  ];

  const legalItems = [
    { title: "Careers", href: "#" },
    { title: "Advertise With Us", href: "#" },
    { title: "Code of Ethics", href: "#" },
    { title: "Terms of Use", href: "#" },
    { title: "Privacy Policy", href: "#" },
  ];

  const baseColor = "#273563";
  const copyrightColor = "#B3B3B3";

  return (
    <footer className="mt-16">
      <div
        className="text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 px-4 sm:px-6"
        style={{ backgroundColor: baseColor }}
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">
          {/* Left Column: logo/description/social/newsletter */}
          <div className="col-span-12 lg:col-span-5 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Onewave News</h2>
            <p className="mt-1 text-sm sm:text-base font-semibold text-white/80">The Business News Channel</p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold leading-relaxed text-white/70">
              Onewave News Channel Delivers Breaking News, headlines and top stories
              from Upstream Oil, Downstream Oil, Maritime, Power, banking and finance
              and Global Economic and more in Nigeria and African regions
            </p>

            <div className="mt-4 sm:mt-5 flex gap-2">
              {['instagram', 'x', 'facebook', 'linkedin'].map((iconName) => (
                <a
                  key={iconName}
                  href="#"
                  className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center hover:bg-white/10 transition"
                >
                  {iconName === 'instagram' && (
                    <Image src="/ig-icon.png" alt="Instagram" width={26} height={26} className="sm:w-[30px] sm:h-[30px]" />
                  )}
                  {iconName === 'x' && (
                    <Image src="/x-icon.png" alt="X/Twitter" width={26} height={26} className="sm:w-[30px] sm:h-[30px]" />
                  )}
                  {iconName === 'facebook' && (
                    <Image src="/facebook.png" alt="Facebook" width={26} height={26} className="sm:w-[30px] sm:h-[30px]" />
                  )}
                  {iconName === 'linkedin' && (
                    <Image src="/linkedn.png" alt="LinkedIn" width={26} height={26} className="sm:w-[30px] sm:h-[30px]" />
                  )}
                </a>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <p className="font-bold text-base sm:text-lg md:text-xl">Subscribe to our newsletter</p>
              <div className="mt-3 flex rounded-full border border-white/30 overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email here..."
                  className="w-full bg-transparent p-2 sm:p-3 text-xs sm:text-sm placeholder-white/50 focus:outline-none flex-1 min-w-0"
                />
                <button type="submit" className="px-3 sm:px-4 hover:bg-white/20 transition flex-shrink-0">
                  <Image src="/arrow.png" alt="Submit" width={24} height={24} className="sm:w-[30px] sm:h-[30px]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: navigation links */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6">
            <div className="space-y-4 sm:space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block font-bold text-base sm:text-lg md:text-xl hover:text-[#B33B7C] transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6">
              {legalItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-base sm:text-lg md:text-xl font-bold hover:text-[#B33B7C] transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-3 sm:py-4 text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-4"
        style={{ backgroundColor: copyrightColor, color: "#ffffff" }}
      >
        Copyright @2025. All right reserved. OnewaveNews
      </div>
    </footer>
  );
}
