import type { Metadata } from "next";
import Image from "next/image";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who we are – Onewave News",
  description:
    "Learn about Onewave News' mission, vision, values and career opportunities in the energy, maritime and financial markets.",
};

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white">
      <NewsHeader hideBanner hideTicker />

      <main>
        {/* Hero */}
        <section className=" mt-8 hero-background text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-26 lg:py-40">
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Who we are
            </h1>
            <p className="mt-4 max-w-xl font-bold text-sm leading-6 text-white/80 sm:text-base">
              Authentic Local Voice that informs and Educate the Energy, Maritime, and <br/>
               Financial Market Passionately.
            </p>
          </div>

          {/* Sub navigation bar */}
          <div className="bg-[#F5F5F5] text-[11px] sm:text-xs">
  <div className="mx-auto max-w-7xl px-4 sm:px-6">
  <nav className="flex flex-wrap text-[16px] items-center gap-4 border-white/10 py-6 font-semibold text-[#4B5563]">
    <Link href="#about-us" className="hover:text-[#111827]">
      About Us
    </Link>
    <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
    <Link href="#careers" className="hover:text-[#111827]">
      Careers
    </Link>
    <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
    <Link href="#vision" className="hover:text-[#111827]">
      Our Vision
    </Link>
    <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
    <Link href="#mission" className="hover:text-[#111827]">
      Our Mission
    </Link>
    <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
    <Link href="#conduct" className="hover:text-[#111827]">
      Code of Conduct
    </Link>
  </nav>
</div>
</div>
        </section>

        {/* About Us */}
        <section
          id="about-us"
          className="bg-white py-12 text-[13px] leading-relaxed text-[#111827] sm:text-sm md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-xl font-semibold tracking-tight text-[#111827] sm:text-2xl">
              About Us
            </h2>
            <div className="mt-4 space-y-4 max-w-4xl font-semibold text-[13px] leading-8 text-zinc-700 sm:text-sm">
              <p>
                Onewave News Channel delivers breaking news, headlines and top stories from Upstream Oil,
                Downstream Oil, Maritime, Power,<br/> banking and finance and Global Economic and more in Nigeria
                and African regions with headquarters in Port Harcourt Nigeria,<br/> which offers its audiences an
                in-depth news reporting, market options and debate for all the global sector of interest.
                 We help industry <br/> leaders see why things happen in the sector and what should be done to help in
                decisions making.
              </p>
              <p>
                We report on a broad range of stories in Nigeria and African region, putting people at the centre
                of our storytelling in the sector of interest.
              </p>
              <p>
                We take oil &amp; gas, maritime and financial news seriously and our correspondents are stationed in
                major economic zones in Nigeria and major <br/> oil business activities in the country to provide local
                knowledge and understanding of the global stories.
              </p>
            </div>
          </div>
        </section>

        {/* Careers section with image */}
        <section
          id="careers"
          className="bg-[#2E3D68] py-12 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-8 items-stretch md:grid-cols-2">
              <div className="relative h-64 w-full overflow-hidden bg-white sm:h-72 md:h-80">
                <Image
                  src="/career.png"
                  alt="Onewave team at work"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center px-6 py-8 text-white sm:px-8">
                <h3 className="text-xl font-semibold sm:text-2xl">Elevate Your Career</h3>
                <p className="mt-3 font-semibold text-xs leading-7 text-white/80 sm:text-sm">
                  Onewave is a team of smart and ambitious people, committed to providing the best information to
                  the energy and financial markets.
                </p>
                <p className="mt-4 font-semibold text-xs leading-7 text-white/80 sm:text-sm">
                  Onewave News is the only Nigeria leading independent reporting agency for oil and gas, maritime
                  and power, and our fast growth and success means that we are always looking for talented
                  individuals to join our team.
                </p>
                <div className="mt-6">
                  <Link
                    href="#careers"
                    className="inline-flex bg-white text-[#2E3D68] items-center px-4 py-2 text-xs font-semibold uppercase"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section
          id="vision"
          className="bg-[#F5F5F5] py-12 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 items-center md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[#111827] sm:text-2xl">
                  Our Vision
                </h2>
                <p className="mt-4 font-semibold text-[13px] leading-8 text-zinc-700 sm:text-sm">
                  To be the leading sources of truths, inspiring information, innovative and<br/> impactful media
                  contents that connects people, shape culture and transforms<br/> perspective worldwide.
                </p>
              </div>

              <div className="relative h-64 w-full overflow-hidden bg-white sm:h-72 md:h-80">
                <Image
                  src="/vision.png"
                  alt="Team collaboration session"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section
          id="mission"
          className="bg-[#2E3D68] py-12 text-white sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 items-center md:grid-cols-2">
              <div className="relative h-64 w-full overflow-hidden  sm:h-72 md:h-80">
                <Image
                  src="/mission.png"
                  alt="Editorial meeting"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Our Mission</h2>
                <p className="mt-4 text-[13px] leading-8 font-semibold text-white/80 sm:text-sm">
                  Our mission is to create and deliver high-quality, engaging and credible <br/> media content that
                  informs, educates, entertains and empowers <br/> audiences while upholding the highest standards of
                  creativity, ethics <br/> and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code of Conduct preview */}
        <section 
        id="conduct"
        className="bg-[#F5F5F5] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 items-center md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[#111827] sm:text-2xl">
                  Code of Conduct
                </h2>
                <p className="mt-4 text-[13px] leading-8 font-semibold text-zinc-700 sm:text-sm">
                  Onewave visitors have a safe, interesting and friendly business environment for<br/> both our staff
                  and visitors. All users of our products and service sites and any<br/> contributions they make to the
                  sites must comply with this Code of Conduct.
                </p>
                <div className="mt-6">
                  <Link
                    href="/code-of-conduct"
                    className="inline-flex items-center bg-[#2E3D68] text-white px-4 py-2 text-xs font-semibold uppercase"
                  >
                    Find out more
                  </Link>
                </div>
              </div>

              <div className="relative h-64 w-full overflow-hidden bg-white sm:h-72 md:h-80">
                <Image
                  src="/conduct.png"
                  alt="Professional team"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <NewsFooter />
    </div>
  );
}
