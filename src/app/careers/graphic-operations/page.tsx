// This code assumes the social icons (e.g., instagram.svg, x.svg, facebook.svg, linkedin.svg) 
// are located in your public/icons/ directory.

"use client";
import Link from "next/link";
import Image from "next/image"; // Import Image component for public assets
// Assuming these paths are correct based on your previous structure
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";


interface SocialIconProps {
  src: string;
  alt: string;
  href: string;
}
// Custom Icon component setup for consistent styling
const SocialIcon = ({ src, alt, href }: SocialIconProps) => (
    <Link href={href} className="flex items-center justify-center p-1 h-10 hover:bg-gray-100 transition-colors ">
        <Image src={src} alt={alt} width={20} height={20} className="w-8 h-8 text-[#2E3D68]"/>
    </Link>
);

export default function JobDetailPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NewsHeader hideBanner hideTicker /> 

      <main className="flex-grow pt-8 pb-16">
        <div className=" max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Section (Removed center effect - content is left, actions are right) */}
          <header className="flex justify-between items-start mb-10 border-b border-gray-200 pb-4">
            {/* Left Side: Title and Location (Aligned Left) */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#221919] sm:">
                  Graphic Operations
                </h1>
                <div className="flex mt-4 gap-2 text-[#221919]">
                  {/* Red Arrow SVG (Retained since the arrow image is a shape, not a standard icon) */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2.5" className="w-5 h-5 rotate-[-315deg] transition-all duration-200 group-hover:stroke-[#2E3D68]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                <p className=" mt-1">Port Harcourt <span className="font-bold">(Onsite)</span></p>
                </div>
            </div>
            
            {/* Right Side: Apply Button and Social Icons */}
            <div className="flex flex-col items-end space-y-4 pt-1">
                
                {/* 1. Apply Button (Styled to match the dark blue, non-rounded border, red arrow) */}
                <Link
                    href="/jobs/head-of-business-development-ph/apply"
                    // Custom styles matching the image
                    className="flex items-center justify-center space-x-2 border-2 border-[#2E3D68] bg-white px-8 py-3 mr-8 text-base font-semibold uppercase text-[#2E3D68] hover:bg-white hover:text-[#2E3D68] transition-colors duration-200"
                >
                    <span className="tracking-wider">Apply</span>
                    {/* Red Arrow SVG (Retained since the arrow image is a shape, not a standard icon) */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2.5" className="w-5 h-5 rotate-[-45deg] transition-all duration-200 group-hover:stroke-[#2E3D68]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </Link>

                {/* 2. Social Media Icons (Using the custom component and public/icons path) */}
                <div className="flex space-x-2 sm:space-x-1">
                    <SocialIcon src="/ig-icon2.png" alt="Instagram" href="#" />
                    <SocialIcon src="/x-icon2.png" alt="X (Twitter)" href="#" />
                    <SocialIcon src="/fb-icon.png" alt="Facebook" href="#" />
                    <SocialIcon src="/linkdn-icon.png" alt="LinkedIn" href="#" />
                </div>
            </div>
          </header>

          {/* Job Details Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
            
            {/* Our Company */}
            <section>
              <h2 className="text-2xl font-bold text-[#221919] mb-2">Our Company</h2>
              <p className="text-[18px] text-[#221919] space-py-6 leading-[35px]">
                Onewave is the number one breaking news channel in Nigeria for energy, power, agriculture, financial,<br/>
                management and Maritime markets with headquarters in Port Harcourt Nigeria which offers to audiences 
                in-<br/>depth news reporting, market opinion and debate for all the Global sector of interest. We help 
                industry<br/> leaders see why things happen in the sector and what should be done to help in decision making.
              </p>
              <p className="text-[18px] text-[#221919] leading-[35px] mt-10">
                We report on a broad range of stories in Nigeria and African region, putting people at 
                the Centre of our<br/> storytelling in the sector of interest.<br/>
                We take Energy, Maritime and financial news seriously and our correspondent
                 are stationed in major<br/> economic free trade zones in Nigeria and major oil business 
                activities in the country to provide local<br/> knowledge and understanding of the global stories.
              </p>
            </section>
            
            {/* Core Values */}
            <section>
              <h2 className="text-2xl font-bold text-[#221919] mb-2">Core values</h2>
              <ul className="list-disc ml-6 space-y-1 text-[#221919] text-[18px]">
                <li>We have competitive spirit that allows us to be bold and excel in the service we deliver.</li>
                <li>We believe in the principles of **Integrity and transparency**.</li>
                <li>We are pioneers and innovators.</li>
                <li>We put people at the Centre of everything we do.</li>
                <li>Our ambition exceeds expectations at all times.</li>
                <li>We put people at the Centre of everything.</li>
              </ul>
            </section>
            
            {/* Our Mission */}
            <section>
              <h2 className="text-2xl font-bold text-[#221919] mb-2">Our Mission</h2>
              <p className="text-[18px] text-[#221919]">
                Onewave Mission is to be the best and most trusted place for Energy & Maritime information within African<br/>
                region. We promise to share heart-to-heart stories that will help business leaders in making decisions.
              </p>
            </section>

            
            {/* Our Vision */}
            <section>
              <h2 className="text-2xl font-bold text-[#221919] mb-2">Our Vision</h2>
              <p className="text-[18px] text-[#221919]">
                Our vision represents who we want to be in the Media industry by creating sustainable values, Needs and<br/>
                wants of our customers and organizations at all times.
              </p>
            </section>


            {/* Our Purpose */}
            <section>
              <h2 className="text-2xl font-bold text-[#221919] mb-2">Our Purpose</h2>
              <ul className="list-disc ml-6 space-y-1 text-[18px] text-[#221919]">
                <li>Our purpose represents the reason for our existence.</li>
                <li>Provide business energy information that ensures prosperity in an ethical, safe and competitive ways.</li>
              </ul>
            </section>

            {/* Our Ethics Policy */}
            <section>
              <h2 className="text-2xl font-bold text-[#221919] mb-2">Our Ethics Policy</h2>
              <p className="text-[18px] text-[#221919]">
                We believe that our reputation as a news firm is our most valuable asset, 
                so it is vital that our Reporting team<br/> is always of the highest quality.
              </p>
            </section>

            {/* Industry Value */}
            <section>
              <h2 className="text-2xl font-bold text-[#221919] mb-2">Industry Value</h2>
              <p className="text-[18px] text-[#221919]">
                values are to provides foundational structure and management strategy for all our goals,
                 policies and actions<br/> in our interactions with client, colleagues, suppliers, government 
                 agencies and Research institution Globally.<br/> The Lead, Marketing, Innovation & Growth will
                  engage with all the companies in maritime, power, 
                Agric Oil<br/> & Gas globally and close a more successful business in commodity markets
              </p>
            </section>
            
            <hr className="my-8 border-gray-200" />

            {/* Description */}
               <section>
              <h2 className="text-2xl font-bold text-[#221919] mb-2">Description</h2>
              <p className="text-[18px] text-[#221919]">
                The role will provide onscreen graphics in all our events , as well as
                 post-production work for a number of<br/> clients including in energy, maritime 
                 and offshore units have an enviable blue-chip client list and a solid<br/>
                 reputation around the world.<br/> We are driven by client service excellence. 
                 We’re always looking and listening, keeping up with the latest<br/> broadcast 
                 innovations – or pioneering them. Above all, we channel our energy into maintaining our reputation<br/> 
                for flawless execution, deep technical expertise and efficient delivery.
              </p>
            </section>
            

            {/* Our Brand Promise */}
             <section>
              <h2 className="text-2xl font-bold text-[#221919] mb-2">Our Brand Promise</h2>
              <p className="text-[18px] text-[#221919]">
                We use the collective power of our people and resources to capture, craft and 
                create – putting our clients at<br/> the centre of our universe. We are expert, innovative
                 and reliable; a guiding force in a complex world. It’s<br/> what we bring together that 
                 sets us apart.<br/> Onewave News design department has an enviable blue-chip client list
                  and a solid reputation around in the<br/> energy Market.<br/> The role will provide onscreen 
                  graphics for live productions and post-production edits. This includes live<br/> graphics Playout
                 for big screen events including offshore projects, sea port and drilling.
              </p>
            </section>
            
            {/* Key Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-[#221919] mt-14 mb-2">Key Responsibilities</h2>
              <ul className="list-disc ml-6 space-y-2 text-[18px] text-[#221919]">
                <li>Proven ability to communicate effectively with client at all times</li>
                <li>Demonstrate willingness to learn from other staff</li>
                <li>Write compelling programmme agendas based on an analysis of phone-based research</li>
                <li>Strong all round interpretation skills both with peers and other others</li>
                <li>Excellent written and verbal communication skills</li>
                <li>Confident self –motivated and positive learning staff</li>
                </ul>
            </section>

            {/* Required Personal Attribute */}
            <section>
              <h2 className="text-2xl font-bold text-[#221919] mt-14 mb-2">Required Personal Attribute</h2>
              <ul className="list-disc ml-6 space-y-2 text-[18px] text-[#221919]">
                <li>Proven ability to communicate effectively with client at all times.</li>
                <li>Excellent presentation skills, both oral and written.</li>
                <li>Strong all round interpersonal skills both with peers and other others.</li>
                <li>A good sense of work ethic, self-motivation skills.</li>
                <li>Confident, self-motivated and creative thinking skill.</li>
              </ul>
            </section>

            {/* Final Apply Button */}
            <div className="flex justify-start pt-8 pb-4">
                  <Link
                    href="/jobs/head-of-business-development-ph/apply"
                    // Custom styles matching the image
                    className="flex items-center justify-center space-x-2 border-2 border-[#2E3D68] bg-white px-8 py-3 mr-8 text-base font-semibold uppercase text-[#2E3D68] hover:bg-white hover:text-[#2E3D68] transition-colors duration-200"
                >
                    <span className="tracking-wider">Apply</span>
                    {/* Red Arrow SVG (Retained since the arrow image is a shape, not a standard icon) */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2.5" className="w-5 h-5 rotate-[-45deg] transition-all duration-200 group-hover:stroke-[#2E3D68]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </Link>
            </div>
            
          </div>
        </div>
      </main>

      <NewsFooter />
    </div>
  );
}