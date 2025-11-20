// page.tsx (REVISED FOR RESPONSIVENESS)

import Image from "next/image";
import Link from "next/link";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
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

// Agenda Session Component
function AgendaSession({ 
  time, 
  title, 
  subtitle, 
  bullets,
  isLast = false
}: { 
  time: string; 
  title: string; 
  subtitle?: string; 
  bullets?: string[];
  isLast?: boolean;
}) {
  return (
    <div className="mb-6 sm:mb-8" style={{ fontFamily: '"Helvetica Neue", sans-serif' }}>
      <div className="border-l-4 border-[#2E3D68] pl-3 sm:pl-4 pb-6">
        <div className="text-xs sm:text-sm font-semibold text-[#2E3D68] mb-1.5">{time}</div>
        <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#221919] mb-1.5 leading-snug">{title}</h4>
        {subtitle && (
          <p className="text-xs sm:text-sm font-semibold text-[#221919] mb-2 mt-2">{subtitle}</p>
        )}
        
      </div>
      {!isLast && (
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#8FACFF] to-transparent"></div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8FACFF]">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
          <div className="flex-1 h-px bg-gradient-to-r from-[#8FACFF] via-[#8FACFF] to-transparent"></div>
        </div>
      )}
    </div>
  );
}

function AgendaItem({ day, date }: { day: string; date: string }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between bg-[#2E3D68] px-4 sm:px-6 py-4 sm:py-5 text-white hover:bg-[#3a4d7a] transition-colors">
          <div>
            <div className="text-base sm:text-lg md:text-xl font-bold">{day}</div>
            <div className="text-sm sm:text-base mt-1 opacity-90">{date}</div>
          </div>
          <span className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center text-2xl sm:text-3xl leading-none transition-transform duration-200 group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="bg-white px-4 sm:px-6 py-6 sm:py-8">
          {day.includes('ONE') ? (
            <>
              <AgendaSession
                time="09:30 am"
                title="Organizer Opening Remarks"
              />
              
              <AgendaSession
                time="09:40 am"
                title="Keynote Speech"
              />
              
              <AgendaSession
                time="09:50 am"
                title="Keynote Speech"
              />
              
              <AgendaSession
                time="10:00 am"
                title="Morning Refreshments & Networking Session"
              />
              
              <AgendaSession
                time="10:05-10:20 am"
                title="Main Conference- Panel Discussion"
                subtitle="DRIVERS AND DEMAND FOR EFFECTIVE POLICING"
                bullets={[
                  "Evaluation of the drivers of Nigeria police demand",
                  "Relative weighting over the past decades in staff compensation and good salary",
                  "New sources of demand growth: Discussions, AI, and training",
                  "What to be done for effective policing in Nigeria and sustainability"
                ]}
              />
              
              <AgendaSession
                time="10:20 -10:40 am"
                title="AN OVERVIEW OF THE STRATEGY FOR BORDER POLICING"
                bullets={[
                  "Cost and training requirement for modern surveillance for smart border policing",
                  "Coastline monitoring -the use of radar -Equipped patrol boats and aerial to monitor the marine boarder",
                  "Ensuring integrated boarder post checkpoints with biometric scanner -Are there political influence that will kill the objectives of this process?",
                  "Leveraging CCTV for effective border security? -Who bears the cost and ensure sustainability?"
                ]}
              />
              
              <AgendaSession
                time="10:40-11am"
                title="C-LEVEL SPECIAL PANEL: FINANCING POLICE OPERATIONS"
                bullets={[
                  "What is to be done to finance police operation without affecting the economy?",
                  "Can Nigeria police be removing from national salary wage to help run independent for effective performance",
                  "Personnel Cost -Are salary of the Nigeria police, welfare, allowance and insurance adequacy enough?",
                  "Training and Capacity-does the training development up to date for effective policing",
                  "Sustainability of funding, -Short- and long-term planning",
                  "Does police management have access to alternative funding or donor",
                  "Accountability and Transparency -How transparent are police forces in managing funds in their position",
                  "Can the legal and policy framework of the police funding be review for more cash inflow?",
                  "Is there any room for international funding support -Donor and security grant",
                  "Is there any room for federal government to add 46% to the current funding to improve the Nigeria police operations"
                ]}
              />
              
              <AgendaSession
                time="11:00-11:10am"
                title="Ministerial Keynote address"
              />
              
              <AgendaSession
                time="11:10am - 11:15-11:20 am"
                title="Special Keynote: FROM POLICING TO A SAFER NIGERIA: THE ROLE OF THE POLICY MAKERS"
              />
              
              <AgendaSession
                time="11:30 -11:30 am"
                title="Ministerial Keynote Address"
              />
              
              <AgendaSession
                time="11:30 -12:00 pm"
                title="High level Panel Discussion: CRIME PREVENTION & CONTROL"
                bullets={[
                  "Stopping crime before it happens -measures to be consider for a safer Nigeria",
                  "Combine social -managing and reducing online after it happens",
                  "Can fair trails and timely prosecution without bribe at the court help to reduce crime?",
                  "Can police be removing from join taskforce team to effectively handle crime?",
                  "How can we reduce election malpractice as part of crime"
                ]}
              />
              
              <AgendaSession
                time="12:00-1:30pm"
                title="Networking Launch"
              />
              
              <AgendaSession
                time="1:30pm-1:55 pm"
                title="AIG's Special Panel session"
                subtitle="CYBERSECURITY AND CYBERFRAUD"
                bullets={[
                  "How can police help to refract cybercrime procedure?",
                  "Can cloud security protection help in crime and internet fraud resolution?",
                  "Can AI help in crime eradication in Nigeria?",
                  "Preventing cybercrime in financial institution -Are bankers involve in the banking fraud?"
                ]}
              />
              
              <AgendaSession
                time="1:50 2:10pm"
                title="Question & Answer session"
              />
              
              <AgendaSession
                time="2:10- 2:20pm"
                title="FCT Commissioner of Police Special Address"
                subtitle="UNITING NATIONAL FORCES FOR A SAFER NIGERIA THROUGH COLLABORATION"
              />
              
              <AgendaSession
                time="2:25-2:50pm"
                title="Interactive panel: EFFECTIVE COLLABORATION BETWEEN THE MULTIPLE AGENCIES INVOLVED IN COMBATING CRIME AND IN HOUSE SECURITY"
                bullets={[
                  "Trade and Deployment of Counterfeit as part of crime",
                  "Developing legal frameworks, policies, regulations and capacities to combat illicit crime",
                  "Enhancing collaboration through the sharing of data and intelligence",
                  "Securing the supply chain through deployment of latest procedures",
                  "Role of private security as part of"
                ]}
              />
              
              <AgendaSession
                time="2:50pm-3:00pm"
                title="Special Speech by Governor -Lagos State"
              />
              
              <AgendaSession
                time="3:00pm-3:20pm"
                title="Special Speech by Governor -Akwa Ibom state Lagos State"
              />
              
              <AgendaSession
                time="3:00pm-3:20pm"
                title="Special Address by CR Lagos state"
              />
              
              <AgendaSession
                time="3:30pm -3:40pm"
                title="Special Speech"
              />
              
              <AgendaSession
                time="3:40pm- 4:00pm"
                title="Interactive Panel Discussion: HOW TO SUSTAIN POLICE WELFARE AND A BETTER LIFE FOR EFFECTIVE PERFORMANCE AND POLICING -Q&A"
              />
              
              <AgendaSession
                time="4:00pm 4:20pm"
                title="Special Address"
              />
              
              <AgendaSession
                time="4:20pm-4:30pm"
                title="Chairperson Closing Remarks & End Of Day One"
                isLast={true}
              />
            </>
          ) : (
            <>
              <AgendaSession
                time="09:30 am"
                title="Organizer Opening Remarks"
              />
              
              <AgendaSession
                time="09:35 am"
                title="Chairperson Opening Remarks"
              />
              
              <AgendaSession
                time="09:40 am"
                title="Keynote Speech"
              />
              
              <AgendaSession
                time="09:50 am"
                title="Keynote Speech"
              />
              
              <AgendaSession
                time="10:00 am"
                title="Morning Refreshments & Networking Session"
              />
              
              <AgendaSession
                time="10: 00am -10:20am"
                title="Main Conference- Panel Discussion"
                subtitle="ORGANIZED CRIME IN THE MODERN ERA- A NATIONAL THREAT TO SOCIETY AND ECONOMY"
                bullets={[
                  "Drug trafficking and arm smuggling: A cartels and transnational networks dominate illicit trade routes",
                  "Controlling human trafficking and migrant smuggling-Role of border policing in Nigeria",
                  "Terror crime nexus-controlling-national organizes crim group",
                  "An organised compromised -A lead way to organised crime"
                ]}
              />
              
              <AgendaSession
                time="10:20 -10:40 am"
                title="Panel Discussion: MAKING AVIATION SECURITY MORE EFFECTIVE THROUGH A SUSTAINABLE POLICING."
                bullets={[
                  "How can we achieve zero tolerance for aviation related terrorism and hijacking?",
                  "Achieving a sustainable funding & equipment lifecycle",
                  "Can a formalize information sharing protocols between NCS & NPF help to control aviation insecurity?",
                  "How can we achieve effective policing to Controlling Drug dealers and promoters within the Airport premises"
                ]}
              />
              
              <AgendaSession
                time="10:40-11:00am"
                title="C-Level Special Panel: CYBERSECURITY STRATEGIES AND PARTNERSHIP FRAMEWORKS TO MITIGATE EVOLVING CRIME"
                bullets={[
                  "Can cybercrime laws including AI-driven fraud, crypto laundering, cross -border and cyberattack laws be updated to help police function more effectively in policing?",
                  "Can cyber innovation lab help in cybersecurity?",
                  "Can a review of legal and regulatory framework help to reduce cybercrime the system?"
                ]}
              />
              
              <AgendaSession
                time="11:00-11:10 am"
                title="Ministerial Keynote address"
              />
              
              <AgendaSession
                time="11:10am - 11:10-11:20 am"
                title="Special Speech"
              />
              
              <AgendaSession
                time="11:20 -11:30 am"
                title="Ministerial Keynote Address"
              />
              
              <AgendaSession
                time="11:30 -12:00 pm"
                title="High level Panel Discussion: FIELD CHALLENGES OF FORENSIC CHEMISTRY AND TOXICOLOGY"
              />
              
              <AgendaSession
                time="12:00-1:30pm"
                title="Networking Launch"
              />
              
              <AgendaSession
                time="1:20pm-1:50 pm"
                title="AIG's S Special Panel session"
                subtitle="ENHANCING CYBER COORDINATION IN THE FIGHT AGAINST DIGITAL CRIME"
                bullets={[
                  "How can police build cyber fusion framework for intelligence and incident sharing?",
                  "Can a unified reporting system help to reduce crime",
                  "How can Nigeria police and other security block the Digital crime promoter.",
                  "How can we use real time intelligence system to monitor digital crim?",
                  "Court in picture-Can a cybercrime offender",
                  "Can a Development of a specializes cybercrime investigation unit team help to reduce Digital crime?"
                ]}
              />
              
              <AgendaSession
                time="1:50-2:10pm"
                title="Question & Answer session"
              />
              
              <AgendaSession
                time="2:15- 20pm"
                title="Special Address: Rivers State Commissioner of Police"
              />
              
              <AgendaSession
                time="2:20-2:50pm"
                title="Interactive panel: INVESTIGATIVE INTERVIEWING OF CHILDREN"
              />
              
              <AgendaSession
                time="2:50pm-3:00pm"
                title="Special Speech"
              />
              
              <AgendaSession
                time="3:00pm-3:20pm"
                title="Special Speech by Governor -IMO state"
              />
              
              <AgendaSession
                time="3:20pm-3:30pm"
                title="Special Address by CR Kano state"
              />
              
              <AgendaSession
                time="3:30pm -3:40pm"
                title="Special Speech"
              />
              
              <AgendaSession
                time="3:40pm- 4:00pm"
                title="Interactive Panel Discussion: GEOPOLITICS AND NATIONAL SECURITY-A ROLE OF OUR LEADERS"
              />
              
              <AgendaSession
                time="4:00pm -4:20pm"
                title="Special Address: AN UPDATE ON MARITIME SECURITY AND FUTURE PLANS"
              />
              
              <AgendaSession
                time="4:20pm-4:30pm"
                title="Chairperson Closing Remarks & End Of Event"
                isLast={true}
              />
            </>
          )}
        </div>
      </details>
    </div>
  );
}

// --- Navigation Tabs Component ---



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
      <NewsHeader hideBanner hideTicker />
      
      {/* REVISED HERO SECTION */}
      <section className="relative min-h-[600px] mt-6 sm:min-h-[500px] md:h-[550px] lg:h-[600px] xl:h-[650px] w-full overflow-hidden">
        
        {/* Background Image with blur on mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm md:blur-none"
          style={{ 
            backgroundImage: "url('/police.png')", 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center', 
          }}
        >
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent md:from-transparent md:via-transparent md:to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl h-full min-h-[600px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] xl:min-h-[650px] flex items-center justify-center md:justify-end px-4 sm:px-6 py-8 sm:py-12">
          
          {/* Text Content Block */}
          <div className="w-full md:w-[75%] lg:w-[60%] xl:w-[50%] p-4 sm:p-6 md:p-8 text-zinc-800 bg-white/95 md:bg-white/80 lg:bg-transparent rounded-xl md:rounded-lg lg:rounded-none shadow-lg md:shadow-none backdrop-blur-sm md:backdrop-blur-none">
            
            <div className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-semibold uppercase text-[#333] tracking-tight leading-tight mb-2">
              NIGERIA POLICE SUMMIT
            </div>
            
            <h1 className="mt-2 font-bayon font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] leading-tight text-[#333] tracking-normal">
              UNITING NATIONAL FORCES FOR A SAFER NIGERIA THROUGH COLLABORATION.
            </h1>
            
            <p className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base leading-relaxed text-[#404040]">
              JOIN TOP FORCES OFFICERS AND SECURITY LEADERS TO SHARE INSIGHTS 
              ON SUSTAINING NIGERIA'S FORCES THROUGH COLLABORATION.
            </p>
            
            {/* Date, Time, Location Details */}
            <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col gap-y-3 sm:gap-y-4 text-xs sm:text-sm md:text-base text-[#404040]">
              
              {/* Date and Time */}
              <div className="flex items-start gap-2 sm:gap-2.5">
                <Image src="/calendar.png" alt="Calendar Icon" width={20} height={20} className="mt-1 sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] flex-shrink-0" />
                <div className='flex flex-col'>
                    <span className="font-semibold text-[#333]">November 24 – 25, 2025</span> 
                    <span className="mt-0.5 text-[#555]">10:00 AM (WAT)</span>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start gap-2 sm:gap-2.5">
                <Image src="/icon.png" alt="Location Pin Icon" width={20} height={20} className="mt-1 sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] flex-shrink-0" />
                <div className='flex flex-col'>
                    <span className="text-[#555]">Abuja Continental Hotel, Zone 4,</span>
                    <span className="mt-0.5 text-[#555]">Ladi Kwali Street, FCT Abuja.</span>
                </div>
              </div>
            </div>
            
            {/* Register Button */}
            <div className="mt-5 sm:mt-6 md:mt-8">
              <Link 
                  href="#register" 
                  className="inline-flex bg-[#B33B7C] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-base font-medium text-white shadow-lg hover:bg-[#9E306E] transition-all duration-200 uppercase tracking-wider rounded-md"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
        
      </section>


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