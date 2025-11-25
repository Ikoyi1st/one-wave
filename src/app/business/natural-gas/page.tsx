import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Placeholder data updated to match the image content
const featuredArticles = [
  {
    title: "Canada’s Haisla First Nation launches world’s first Indigenous-owned LNG project.",
    category: "Downstream Oil",
    imageSrc: "/gas/gas-1.png",
    href: "/article/swiss-minister-meets-us-treasury",
  },
  {
    title: "$17.5 Billion Louisiana LNG Project Hits Major Construction Milestone",
    category: "Crude oil & Market",
    imageSrc: "/gas/gas-2.png",
    href: "/article/rio-grande-expands",
  },
  {
    title: "Three partners to delve into the potential of ammonia in maritime decarbonization in the UK",
    category: "Crude oil & Market",
    imageSrc: "/gas/gas-3.png",
    href: "/article/macron-ally-lescure",
  },
  {
    title: "Methanol and LNG bunkering approved at Hamburg’s Waltershofer Hafen",
    category: "Breaking News",
    imageSrc: "/gas/gas-4.png",
    href: "/article/oil-edges-17-week-low",
  },
  {
    title: "Centrica invests in Grain LNG",
    category: "Crude oil & Market",
    imageSrc: "/gas/gas-5.png",
    href: "/article/saipem-guyana-footprint",
  },
];

const mainArticles = [
  {
    title: "Greece’s Alexandroupolis LNG Terminal Back in Action After Seven-Month Pause",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-6.png",
    href: "/article/opec-output-boost",
  },
  {
    title: "Puerto Rico regulator halts New Fortress’ $20bn natural gas supply deal",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-7.png",
    href: "/article/nupeng-dangote-refinery",
  },
  {
    title: "Equinor Energy and partners discover gas in Barents Sea",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-8.png", 
    href: "/article/fg-mourn-boat-mishap",
  },
  {
    title: "ADNOC Gas enters $400m LNG supply agreement with SEFE",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-9.png", 
    href: "/article/fg-mourn-boat-mishap",
  },
  {
    title: "Global Oil Demand to Stay Above 100 Million bpd Beyond 2040 — UAE’s Sultan Al Jaber",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-10.png",
    href: "/article/ncdc-credit-access-deal",
  },
  {
    title: "Venture Global secures 20-year LNG supply deal with Petronas",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-11.png",
    href: "/article/airbus-results-order",
  },
  {
    title: "Chevron’s Exit Finalized as PetroChina Launches Final Sour Gas Field at Chuandongbei",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-12.png",
    href: "/article/challenger-energy-offshore",
  },
  {
    title: "TotalEnergies Green-lights Restart of $20 Billion Mozambique LNG Project",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-13.png",
    href: "/article/methanol-lng-hamburg",
  },
  {
    title: "NUPRC, Eni Deepen Partnership to Boost Investment and Operational Efficiency in Nigeria’s Upstream Sector",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-14.png",
    href: "/article/n900bn-injection-banks",
  },
  {
    title: "LNG-Powered Vessel Will Boost Nigeria–Asia Trade,’ Says Onne Multipurpose Terminal",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-15.png",
    href: "/article/air-peace-lagos-sao-paulo",
  },
  {
    title: "Heirs Energies & Renaissance Africa Forge Strategic Alliance for Local Oil and Gas Development in Nigeria",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-16.png",
    href: "/article/emirates-battery-policy",
  },
  {
    title: "BREAKING: LNG Canada Produces First LNG for Export, Eyes Maiden Shipment in July",
    category: "Upstream Oil",
    imageSrc: "/gas/gas-17.png",
    href: "/article/sterling-holdco-shares",
  },
];

const sidebarArticles = [
  {
    title: "FG Mourns Victims of Niger Boat Mishap",
    category: "NEWS",
    href: "/article/fg-mourn",
    imageSrc: "/news/news8.png", // Added image source
    date: "October 1, 2025",
    readTime: "10 Mins"
  },
  {
    title: "FG Mourns Victims of Niger Boat Mishap",
    category: "NEWS",
    href: "/article/fg-mourn-2",
    imageSrc: "/news/news8.png", // Added image source
    date: "October 1, 2025",
    readTime: "10 Mins"
  },
  {
    title: "FG Mourns Victims of Niger Boat Mishap",
    category: "NEWS",
    href: "/article/fg-mourn-3",
    imageSrc: "/news/news8.png", // Added image source
    date: "October 1, 2025",
    readTime: "10 Mins"
  },
  {
    title: "FG Mourns Victims of Niger Boat Mishap",
    category: "NEWS",
    href: "/article/fg-mourn-4",
    imageSrc: "/news/news8.png", // Added image source
    date: "October 1, 2025",
    readTime: "10 Mins"
  },
];

// Reusable Article Card Component (Unchanged)
const ArticleCard = ({ article, isFeatured = false, size = 'medium' }) => {
  const { title, category, imageSrc, href } = article;

  // Determine font size based on article type
  let fontSize = '14px';
  let padding = 'p-3 md:p-4';

  if (isFeatured) {
    if (size === 'large') {
      fontSize = '28px';
      padding = 'p-5 md:p-6';
    } else if (size === 'small') {
      fontSize = '13px';
      padding = 'p-3';
    }
  }

  const dateText = 'Onewave.tv • September 7, 2025';

  return (
    <Link
      href={href}
      className="group relative overflow-hidden bg-gray-100 flex flex-col h-full hover:opacity-90 transition-opacity"
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Dark Gradient Overlay - Enhanced for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Text Content - Positioned at bottom */}
      <div className={`absolute bottom-0  left-0 right-0 flex flex-col justify-end h-full ${padding}`}>
        <div>
          {/* Category Tag */}
          <span className="inline-block bg-[#AB2971] text-white text-[12px] font-semibold px-3 py-1.5 mb-3">
            {category}
          </span>

          {/* Title */}
          <h3
            className="text-white font-bold leading-tight group-hover:text-pink-200 transition-colors mb-2"
            style={{ fontSize: fontSize }}
          >
            {title}
          </h3>

          {/* Date/Source - More visible */}
          <p className="text-white text-[10px] font-medium opacity-90">{dateText}</p>
        </div>
      </div>
    </Link>
  );
};

// --- NEW Sidebar Component for the Image Design ---
const SidebarImageArticle = ({ article }) => {
  const { title, href, imageSrc, date, readTime } = article;

  return (
    <Link
      href={href}
      className="group flex items-start space-x-4 py-4 border-t border-[#EDEDED] hover:opacity-80 transition-opacity first:border-t-0"
    >
      {/* Image Thumbnail - Fixed size */}
      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col text-black">
        <h3 className="text-sm font-normal leading-snug group-hover:underline">
          {title}
        </h3>
        <div className="flex items-center text-xs text-gray-400 mt-1">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
};
// --- END NEW Sidebar Component ---


// Sidebar Article Component (Original, but no longer used in the main render)
const SidebarArticle = ({ article, isFirst = false }) => {
  const { title, category, href } = article;

  return (
    <Link
      href={href}
      className={`block py-3 pr-2 group transition-colors ${!isFirst ? 'border-t border-gray-300' : ''}`}
    >
      <p className="text-[11px] font-bold text-pink-600 mb-1 uppercase">{category}</p>
      <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-900 transition-colors leading-snug">
        {title}
      </p>
    </Link>
  );
};

export default function NewsPage() {
  return (
    <div className="bg-white min-h-screen">
      <NewsHeader hideBanner hideTicker />

      {/* Header */}
      <header className="border-b border-gray-200 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <h1 className="text-3xl font-bold text-gray-900">GAS & LNG</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* FEATURED ARTICLES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {/* 1. Large Featured Article (spans 2 columns, increased height) */}
          <div className="md:col-span-2 h-[480px]">
            <ArticleCard article={featuredArticles[0]} isFeatured size="large" />
          </div>

          {/* 2. Smaller Featured Articles (4 items in 2x2 grid) */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {/* Top Row: Articles 2 and 3 */}
            <div className="h-[232px]">
              <ArticleCard article={featuredArticles[1]} isFeatured size="small" />
            </div>
            <div className="h-[232px]">
              <ArticleCard article={featuredArticles[2]} isFeatured size="small" />
            </div>

            {/* Bottom Row: Articles 4 and 5 */}
            <div className="h-[232px]">
              <ArticleCard article={featuredArticles[3]} isFeatured size="small" />
            </div>
            <div className="h-[232px]">
              <ArticleCard article={featuredArticles[4]} isFeatured size="small" />
            </div>
          </div>
        </div>

        {/* END FEATURED ARTICLES SECTION */}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* MAIN CONTENT - 2 Column Grid (spans 9 columns) */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainArticles.map((article, i) => (
                <div key={i} className="h-64">
                  <ArticleCard article={article} size="medium" />
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-start gap-2 mt-8 pt-6 border-t border-gray-300">
              <button className="w-8 h-8 flex items-center justify-center  text-gray-600 hover:bg-gray-200">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#2E3D68] text-white font-semibold">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 font-semibold hover:bg-gray-100">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 font-semibold hover:bg-gray-100">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 font-semibold hover:bg-gray-100">
                4
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 font-semibold hover:bg-gray-100">
                5
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR (spans 3 columns) - ADJUSTED FOR IMAGE DESIGN */}
          <div className="md:col-span-3 "> {/* Added bg-black for the dark background */}
            <div className=""> {/* Removed p-4 to adjust padding with header/items */}
              
              {/* Sidebar Header */}
              <div className="ml-4 border border-[] border-b text-white"> {/* Darker background for the header */}
                <h2 className="w-32 bg-[#242424] text-base font-medium uppercase px-4 py-3"> {/* Adjusted font/padding */}
                  Most Read
                </h2>
              </div>
              
              {/* Sidebar Articles List */}
              <div className="px-4 pb-4"> {/* Padding for the list content */}
                {sidebarArticles.map((article, i) => (
                  <SidebarImageArticle key={i} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <NewsFooter />
    </div>
  );
}