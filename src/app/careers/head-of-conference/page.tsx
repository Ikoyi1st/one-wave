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
                  Head Of Conference
                </h1>
                <div className="flex mt-4 gap-2 text-[#221919]">
                  {/* Red Arrow SVG (Retained since the arrow image is a shape, not a standard icon) */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2.5" className="w-5 h-5 rotate-[-315deg] transition-all duration-200 group-hover:stroke-[#2E3D68]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                <p className=" mt-1">Port Harcourt, Abuja <span className="font-bold">(Hybrid)</span></p>
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
              <h1 className="text-2xl mt-8 text-[#221919] font-normal">Head of Conference & Events leads the brand which businesses
                 and Organizational product<br/> line is manage by unit with internal audiences
                 </h1>
                 <ul className="list-disc ml-6 space-y-2 text-[18px] text-[#221919] mt-10">
                <li>Customers and potential customers</li>
                <li>Different sector</li>
                <li>Key stakeholders (such as the C-Suite and investors)</li>
                <li>The energy and maritime sector media and general public</li>
                <li>Leverage knowledge gained from market engagements to help secure sponsors for each of our event.</li>
                <li>Manage the design product on digital platform the Onewave Platform</li>
              </ul>
            </section>
            
            <hr className="my-8 border-gray-200" />

            {/* Description */}
               <section>
              <h2 className="text-2xl font-bold text-[#221919] mb-2">Description</h2>
              <p className="text-[18px] text-[#221919]">
                The Head of conference, you will research and connects with senior executives
                 from the largest companies in<br/> the market in order to identify new trends, challenges 
                 and technologies. uses that research to produce<br/> intellectual content and structure 
                 agendas for business to business (B2B) conferences across the country.<br/> Through the 
                 research and connections made, the Head of cooperate development recruits the speaking<br/> 
                 faculty for the event. This role oversees the event from 
                initial research all of the way through to the delivery of<br/> the content at the event.
              </p>
            </section>
            
            {/* Key Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-[#221919] mt-14 mb-2">Key Responsibilities</h2>
              <ul className="list-disc ml-6 space-y-2 text-[18px] text-[#221919]">
                <li>Producing a targeted number of content rich conferences / events per month/per year</li>
                <li>Conduct in-depth, phone-based interviews with senior executives to identify current market trends and<br/>
                 challenges for content development</li>
                <li>Write compelling programmme agendas based on an analysis of phone-based research</li>
                <li>Developing in-depth sales, marketing and project briefs summarizing the main findings of your research<br/>
                 for the wider project team</li>
                <li>Manage conferences on-site to meet delegates’ and presenters’ expectations</li>
                <li>Head of Conference will be required to travel to all of the events that they produce.</li>
                <li>In partnership with colleagues, managing the profit & loss and making sure the event is run within budget</li>
                <li>Developing a clear understanding of the vendor market</li>
                <li>Supervise the sales and marketing team to meet up sales budget in each event</li>
                <li>Responsible for sourcing senior level industry professionals as speakers at our events in consultation to<br/>
                 the management</li>
                <li>Manage all the event programme and ensure the topics and agenda are well develop to meet up the<br/>
                  demand of the industry</li>
                <li>Run events onsite, networking with senior executives and developing future business</li>
                <li>
                  Manage marketing and sales teams to develop and aid in the execution of comprehensive cross-<br/>
                  functional strategies
                </li>
                <li>
                  Budgetary control of individual event direct costs and revenue goals to achieve an annual portfolio target
                </li>
                <li>
                  Creation of original, engaging sales copy for the event brochure, website and associated promotional<br/> pieces
                </li>
                <li>
                  A high energy and fast paced environment where success is rewarded with career advancement and<br/>
                   increased earning potential
                </li>
                <li>
                  Prepare invitation letters to all the propose<br/> 
                  partners and knowledge associate to attend the proposed event or conference
                </li>
                <li>
                  Manage the conference website from production to commissioning along with other team members and<br/>
                   ensure propose contents is place at the event website.
                </li>
                <li>
                  Produce conference programme and ensure that all speakers are inform timely in each event.
                </li>
                <li>
                  Prepare each conference budget with your team members and present for approval in each project.
                </li>
                <li>
                  Book event venue timely and ensure all the stakeholders are inform of the progress.
                </li>
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