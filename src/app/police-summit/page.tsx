// page.tsx (REVISED FOR RESPONSIVENESS)

import Image from "next/image";
import Link from "next/link";
import React from "react"; // Explicit import for React is good practice

// --- Helper Components (UPDATED: ThemePill uses the new star image) ---

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    // UPDATED: Applying the new typography styles directly to the list item
    <li 
      className="flex gap-2 text-[#221919] font-semibold text-[16px]"
      style={{ 
        fontFamily: '"Helvetica Neue", sans-serif', 
        lineHeight: '32px',
      }}
    >
      <span className="mt-3 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E3D68]" />
      <span>{children}</span>
    </li>
  );
}

// NOTE: ThemePill component updated to use the uploaded star image
function ThemePill({ label }: { label: string }) {
  return (
    // Styling to match the typography: 'Helvetica Neue', Bold, 25px
    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 text-base sm:text-lg md:text-xl font-bold text-zinc-700" style={{ fontFamily: '"Helvetica Neue", sans-serif', lineHeight: '1.6' }}>
      {/* Star Image Bullet */}
      <Image 
        src="/bullet.png" 
        alt="Star Bullet" 
        width={28}
        height={28} 
        className="shrink-0 sm:w-[32px] sm:h-[32px] md:w-[35px] md:h-[35px]"
      />
      <span>{label}</span>
    </div>
  );
}

function AgendaItem({ day, date }: { day: string; date: string }) {
  return (
    <div className="border-b border-white/10">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between bg-[#2E3D68] px-3 sm:px-4 py-3 text-white" style={{ fontFamily: '"Helvetica Neue", sans-serif', lineHeight: '1.6' }}>
          <div>
            <div className="text-sm sm:text-base font-semibold opacity-90">{day}</div>
            <div className="text-sm sm:text-base font-medium">{date}</div>
          </div>
          <span className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center text-lg sm:text-xl leading-none transition group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="bg-[#31467a] px-3 sm:px-4 py-4 text-sm text-white/90">
          Detailed session schedule will appear here. Panels, keynotes, and
          networking breaks across the day.
        </div>
      </details>
    </div>
  );
}

// --- Navigation Tabs Component ---

const TabNavigation = () => {
  const tabs = [
    { name: "Home", href: "#home" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Register", href: "#register" },
    { name: "Speakers", href: "#speakers" },
    { name: "Agenda", href: "#agenda" },
    { name: "Award", href: "#award" },
  ];

  

  return (
    <nav className="sticky top-0 z-10 bg-[#F5F5F5] shadow-md border-b border-zinc-200 py-3 sm:py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Added flex-nowrap to the container, and px-1 to Link for better spacing */}
        <div className="flex items-center justify-start gap-3 sm:gap-4 overflow-x-auto scrollbar-hide flex-nowrap"> 
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.name}>
              <Link
                href={tab.href}
                className="px-2 sm:px-3 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium text-zinc-800 hover:text-[#B33B7C] transition-colors whitespace-nowrap"
              >
                {tab.name}
              </Link>
              {/* Vertical separator (using a div for the pipe |) */}
              {index < tabs.length - 1 && (
                <div className="h-4 sm:h-5 w-px bg-[#8FACFF] flex-shrink-0"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
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
  
  // Base color: #3A4768 (deep blue/gray from the image)
  const baseColor = "#3A4768";
  // Copyright color: #9A9A9A (gray from the image)
  const copyrightColor = "#9A9A9A";
  
  return (
    <>
      <div className="text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 px-4 sm:px-6" style={{ backgroundColor: baseColor }}>
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Left Column: Logo/Description/Social/Newsletter (col-span-4 to col-span-5) */}
          <div className="col-span-12 lg:col-span-5 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Onewave News</h2>
            <p className="mt-1 text-sm sm:text-base font-semibold text-white/80">The Business News Channel</p>
            
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold leading-relaxed text-white/70">
              Onewave News Channel Delivers Breaking News, headlines and top stories
              from Upstream Oil, Downstream Oil, Maritime, Power, banking and finance
              and Global Economic and more in Nigeria and African regions
            </p>
            
            {/* Social Icons (Assuming standard icons for Instagram, X, Facebook, LinkedIn) */}
            <div className="mt-4 sm:mt-5 flex gap-2">
              {['instagram', 'x', 'facebook', 'linkedin'].map((iconName) => (
                <a key={iconName} href="#" className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center hover:bg-white/10 transition">
                  {/* Placeholder for social icons - using simple text/emoji for representation */}
                  {iconName === 'instagram' && <span className="text-base sm:text-lg"><Image src="/ig-icon.png" alt="Instagram" width={26} height={26} className="sm:w-[30px] sm:h-[30px]" /></span>}
                  {iconName === 'x' && <span className="text-base sm:text-lg"><Image src="/x-icon.png" alt="X/Twitter" width={26} height={26} className="sm:w-[30px] sm:h-[30px]" /></span>}
                  {iconName === 'facebook' && <span className="text-base sm:text-lg"><Image src="/facebook.png" alt="Facebook" width={26} height={26} className="sm:w-[30px] sm:h-[30px]" /></span>}
                  {iconName === 'linkedin' && <span className="text-base sm:text-lg"><Image src="/linkedn.png" alt="LinkedIn" width={26} height={26} className="sm:w-[30px] sm:h-[30px]" /></span>}
                </a>
              ))}
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-6 sm:mt-8">
              <p className="font-bold text-base sm:text-lg md:text-xl">Subscribe to our newsletter</p>
              {/* CRITICAL CHANGE: Added 'flex-1' to input and 'flex' to the parent div 
                  to ensure the input shrinks as needed. Also removed max-w-full/sm:max-w-sm 
                  to let the parent grid column handle the width. */}
              <div className="mt-3 flex rounded-full border border-white/30 overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Enter your email here..." 
                  className="w-full bg-transparent p-2 sm:p-3 text-xs sm:text-sm placeholder-white/50 focus:outline-none flex-1 min-w-0" // min-w-0 is key to allow shrinking
                />
                <button type="submit" className="px-3 sm:px-4 hover:bg-white/20 transition flex-shrink-0">
                  <span className="text-base sm:text-lg leading-none"><Image src="/arrow.png" alt="Submit" width={24} height={24} className="sm:w-[30px] sm:h-[30px]" /></span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column: Navigation Links (col-span-7) */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6">
            
            {/* Menu Links */}
            <div className="space-y-4 sm:space-y-6">
              {menuItems.map((item) => (
                <Link key={item.title} href={item.href} className="block font-bold text-base sm:text-lg md:text-xl hover:text-[#B33B7C] transition">
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Legal/Career Links */}
            <div className="space-y-4 sm:space-y-6">
              {legalItems.map((item) => (
                <Link key={item.title} href={item.href} className="block text-base sm:text-lg md:text-xl font-bold hover:text-[#B33B7C] transition">
                  {item.title}
                </Link>
              ))}
            </div>
              
          </div>
        </div>
        
      </div>
      
      {/* Copyright Bar */}
      <div className="py-3 sm:py-4 text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-4" style={{ backgroundColor: copyrightColor, color: "#fff" }}>
        Copyright @2025. All right reserved. OnewaveNews
      </div>
    </>
  );
};

// --- Main Page Component (REVISED) ---

export default function PoliceSummitPage() {
  return (
    <div className="">
      
      {/* REVISED HERO SECTION */}
      <section className="relative h-[500px] sm:h-[450px] md:h-[500px] lg:h-[518px] w-full overflow-hidden">
        
        {/*
          CRITICAL CHANGE: Replaced 'backgroundSize: contain' with 'backgroundSize: cover' 
          and adjusted background position to ensure the image covers the area 
          and doesn't cause overflow while maintaining responsiveness.
        */}
        <div 
          className="absolute inset-0 bg-cover bg-left md:bg-center" // Mobile: bg-left, Desktop: bg-center or adjust as needed
          // Set the background using a style block to reference the uploaded image path
          style={{ 
            backgroundImage: "url('/police.png')", 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            // Adjusted backgroundPosition to 'left top' for better mobile visibility/crop
            backgroundPosition: 'left top', 
          }}
        >
          {/* Optional: Add a subtle overlay ONLY to the left side to help the image blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-transparent"></div>
        </div>

        {/* Content Container (Matches the text block position in the screenshot) */}
        <div className="absolute inset-0 mx-auto max-w-7xl h-full flex items-center justify-center md:justify-end px-4 sm:px-6">
          
          {/* Right-aligned Text Block */}
          {/* Added 'z-10' to ensure text is above the background image layer */}
          <div className="mt-28 w-full md:w-[70%] lg:w-[55%] xl:w-[45%] p-3 sm:p-4 text-zinc-800 bg-white/90 md:bg-transparent rounded-lg md:rounded-none z-10">
            
            <div className="font-sans text-base sm:text-lg md:text-xl lg:text-[22px] font-semibold uppercase text-[#333] tracking-tighter leading-tight mb-2">
              NIGERIA POLICE SUMMIT
            </div>
            {/* Font size and weight matching the bold text in the screenshot */}
            <h1 className="mt-1 font-bayon font-bold text-xl sm:text-2xl md:text-3xl lg:text-[26px] leading-tight text-[#333] tracking-normal">
              UNITING NATIONAL FORCES FOR A SAFER NIGERIA THROUGH COLLABORATION.
            </h1>
            
            {/* Sub-text matches the screenshot's smaller, darker text */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-[#404040]">
              JOIN TOP FORCES OFFICERS AND SECURITY LEADERS TO SHARE INSIGHTS 
              ON SUSTAINING NIGERIA'S FORCES THROUGH COLLABORATION.
            </p>
            
            {/* Date, Time, Location Details */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 lg:gap-x-10 gap-y-3 sm:gap-y-4 text-xs sm:text-sm text-[#404040]">
              
              {/* Date and Time */}
              <div className="flex items-start gap-1.5 sm:gap-2">
                {/* Calendar Icon from uploaded file: calendar.png */}
                <Image src="/calendar.png" alt="Calendar Icon" width={24} height={24} className="mt-0.5 sm:w-[30px] sm:h-[30px]" />
                <div className='flex flex-col'>
                    <span className="font-semibold text-[#333]">November 24 – 25, 2025</span> 
                    <span className="mt-0.5">10:00 AM (WAT)</span>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start gap-1.5 sm:gap-2">
                {/* Location Icon from uploaded file: icon.png */}
                <Image src="/icon.png" alt="Location Pin Icon" width={24} height={24} className="mt-0.5 sm:w-[30px] sm:h-[30px]" />
                <div className='flex flex-col'>
                    <span>Abuja Continental Hotel, Zone 4,</span>
                    <span className="mt-0.5">Ladi Kwali Street, FCT Abuja.</span>
                </div>
              </div>
            </div>
            
            {/* Register Button: Uses the exact pink/purple color from the screenshot */}
            <div className="mt-5 sm:mt-8">
              <Link 
                  href="#register" 
                  // Exact color: #B33B7C
                  className="inline-flex bg-[#B33B7C] px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white shadow-lg hover:bg-[#9E306E] transition uppercase tracking-wider"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
        
      </section>

      {/* NEW: Navigation Tabs Component based on Group 11.png */}
      <TabNavigation />

      {/*Intro Section with Gradient Background */}
     <section 
        className="mt-6 py-6 sm:py-8 md:py-10 text-center text-white"
        style={{
          // Use the uploaded image backdrop.jpg from the public folder
          backgroundImage: 'url("/backdrop.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="mx-auto text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold px-4 sm:px-6 max-w-5xl leading-relaxed">
          In a world where technological advancements and evolving threats continuously emerge, the Nigeria Police<br/>
           Summit 2025 serves as a pivotal platform for global law enforcement collaboration and to discuss the way<br/>
           forward for better Nigeria.
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-7xl py-8 sm:py-10 md:py-12 px-4 sm:px-6" id="home">
        <h2 className="font-display text-2xl sm:text-3xl md:text-[30px] font-bold text-[#221919]" style={{ fontFamily: '"Helvetica Neue", sans-serif', lineHeight: '1.4' }}>
          Welcome to Nigeria Police Summit 2025
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#221919] font-semibold" style={{ fontFamily: '"Helvetica Neue", sans-serif', lineHeight: '1.8' }}>
          <b>Nigeria Police Summit with theme: Uniting National Forces For A Safer
          Nigeria Through Collaboration</b> serves as a critical <br/> platform 
          to provide a unique opportunity for participants to engage in 
          fruitful discussions, foster collaboration, and exchange <br/> valuable insights
           on the latest developments and challenges shaping the landscape of law enforcement and 
           security In Nigeria.<br/> The event will attract 
          over+ 53,000 individuals from across the globe with key focus on
        </p>
        <ul className="mt-3 leading-relaxed text-[#221919] font-semibold" >
          {/* Removed <br/> tags from list items to ensure proper wrapping on all screen sizes */}
          <Bullet>Artificial intelligence and the digital landscape in modern policing.</Bullet>
          <Bullet>Technological advancements continue to accelerate criminal activity and prevention.</Bullet>
          <Bullet>Police welfare and sustainability.</Bullet>
          <Bullet>International collaboration and identifying innovative ways to harness these tools to
             empower the future of global security, regulators, law enforcement agencies, government 
             policy-makers. This event provides a unique opportunity to delve into winning strategies,
              successful case studies, and cutting-edge technologies, with a particular emphasis on security
              management for a better Nigeria and sustainability in the country. The agenda will include
             interactive panel discussions, case studies, presentations, vibrant networking sessions.</Bullet>
        </ul>
      </section>

      {/* Key highlights (UPDATED: Aligned with max-width/padding of Welcome section) */}
      <section className="mx-auto max-w-7xl py-6 sm:py-8 md:py-10 px-4 sm:px-6" id="home">
        <h2 className="font-display text-2xl sm:text-3xl md:text-[30px] font-bold text-[#221919]" style={{ fontFamily: '"Helvetica Neue", sans-serif', lineHeight: '1.4' }}>
          Key Highlights
        </h2>
        <ul className="mt-3 leading-relaxed text-[#221919] font-bold" >
          <Bullet>Exclusive launch and networking opportunity with governments.</Bullet>
          <Bullet>Regional security leaders exploring real issues driving business.</Bullet>
          <Bullet>Hear more about the sectors that are key to driving personnel growths.</Bullet>
          <Bullet>A look to the future and how police should treat for effective performance.</Bullet>
          <Bullet>Plenary session for all delegates.</Bullet>
          <Bullet>We bring together experts from across Nigeria to discuss current police
            challenges and the best solutions.</Bullet>
        </ul>
      </section>

      {/* Themes (UPDATED: ThemePill uses the new star image and typography) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
        {/* UPDATED: Applied new typography to heading */}
        <h3 className="text-center font-bold text-[#221919] text-2xl sm:text-3xl md:text-[35px]" style={{ fontFamily: '"Helvetica Neue", sans-serif', lineHeight: '1.4' }}>
          The Key Themes Will Include
        </h3>
        {/* ThemePill component is updated to handle the new styling and image */}
        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Strategy for Border Policing",
            "Aviation Security",
            "Anti-Money Laundering",
            "Financing Police Operations",
            "Maritime Security",
            "Police Welfare Planning",
            "Crime Prevention & Control",
            "Traffic Security",
            "Geopolitics and Security",
            "Cybersecurity and Cyberfraud",
            "Artificial Intelligence in Policing",
          ].map((t) => (
            <ThemePill key={t} label={t} />
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10" id="agenda">
        <h3 className="text-center font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#221919]">
          Agenda
        </h3>
        <div className="mt-6 overflow-hidden space-y-3">
          <AgendaItem day="Day (1) ONE" date="24th November 2025" />
          <AgendaItem day="Day (2) TWO" date="25th November 2025" />
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-10 sm:py-12 md:py-14" 
        id="register"
        style={{
            backgroundImage: "url('/cta.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            {/* Added a text-shadow effect for readability over the light background */}
            <h3 
                className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E3D68]"
                style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.7)' }}
            >
                Register For This Event
            </h3>
            <p 
                className="mx-auto mt-2 max-w-3xl text-base sm:text-lg md:text-xl font-semibold leading-relaxed text-[#2E3D68]"
                style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.7)' }}
            >
                Join the Nation's most senior Forces officers and security executives
                and share your insights on how to sustain Nigeria forces through
                partnerships and collaboration.
            </p>
            <div className="mt-6">
                <a
                    href="#"
                    // Used the same primary brand color for the button
                    className="inline-flex rounded bg-[#2E3D68] px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white shadow-lg transition uppercase tracking-wider"
                >
                    Register Now
                </a>
            </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}