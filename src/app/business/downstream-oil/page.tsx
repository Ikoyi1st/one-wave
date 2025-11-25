import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Types
interface Article {
  title: string;
  category: string;
  imageSrc: string;
  href: string;
}

interface SidebarArticleData extends Article {
  date: string;
  readTime: string;
}

type ArticleCardSize = 'small' | 'medium' | 'large';

interface ArticleCardProps {
  article: Article;
  isFeatured?: boolean;
  size?: ArticleCardSize;
}

interface SidebarImageArticleProps {
  article: SidebarArticleData;
}

interface SidebarArticleProps {
  article: SidebarArticleData;
  isFirst?: boolean;
}

// Placeholder data updated to match the image content
const featuredArticles: Article[] = [
  {
    title: "President Bola Tinubu Pledges Full Support for Dangote Refinery’s 1.4 Mbpd Expansion",
    category: "Downstream Oil",
    imageSrc: "/downstream-oil/downstream-1.jpg",
    href: "/article/swiss-minister-meets-us-treasury",
  },
  {
    title: "Dangote Sparks Debate: Nigeria’s Real Petrol Use Is 33m Litres, Not 50m – Fuel Data Was Inflated",
    category: "Crude oil & Market",
    imageSrc: "/downstream-oil/downstream-2.png",
    href: "/article/rio-grande-expands",
  },
  {
    title: "Petrol Marketers reduce fuel price nationwide",
    category: "Breaking News",
    imageSrc: "/downstream-oil/downstream-3.png",
    href: "/article/macron-ally-lescure",
  },
  {
    title: "PETROAN Denies Lifting Petrol from Port Harcourt Refinery, Contradicting Earlier Claims",
    category: "Crude oil & Market",
    imageSrc: "/downstream-oil/downstream-4.png",
    href: "/article/oil-edges-17-week-low",
  },
  {
    title: "Dangote refinery to launch fuel distribution scheme, promises massive job creation",
    category: "Crude oil & Market",
    imageSrc: "/downstream-oil/downstream-5.png",
    href: "/article/saipem-guyana-footprint",
  },
];

const mainArticles: Article[] = [
  {
    title: "IPMAN urges Lagos to slash e-call-up fee from ₦12,500 to ₦2,500",
    category: "Crude oil & Market",
    imageSrc: "/downstream-oil/downstream-6.png",
    href: "/article/opec-output-boost",
  },
  {
    title: "Probe Shutdown of Refineries, PENGASSAN Tells Govt",
    category: "Upstream Oil",
    imageSrc: "/downstream-oil/downstream-7.png",
    href: "/article/nupeng-dangote-refinery",
  },
  {
    title: "Fuel Scarcity, Price Hike Loom as Middle East Crisis, Tanker Strike Hit Nigeria’s Oil Supply Chain",
    category: "Upstream Oil",
    imageSrc: "/downstream-oil/downstream-8.png", 
    href: "/article/fg-mourn-boat-mishap",
  },
  {
    title: "Dangote Launches Nationwide Fuel Distribution Amid Tanker Blockade Crisis",
    category: "Upstream Oil",
    imageSrc: "/downstream-oil/downstream-9.png",
    href: "/article/ncdc-credit-access-deal",
  },
  {
    title: "Nigeria’s  Oil Production Shrinks Again, Jeopardizes Nigeria’s 2mbpd Target",
    category: "Breaking News",
    imageSrc: "/downstream-oil/downstream-10.png",
    href: "/article/airbus-results-order",
  },
  {
    title: "Dangote Promises Major Overhaul to ‘Shake’ Nigeria’s Oil Sector",
    category: "Breaking News",
    imageSrc: "/downstream-oil/downstream-11.png",
    href: "/article/challenger-energy-offshore",
  },
  {
    title: "Nigeria’s Oil Sector Struggles Amidst Reforms and Refinery Setbacks",
    category: "Upstream Oil",
    imageSrc: "/downstream-oil/downstream-12.png",
    href: "/article/methanol-lng-hamburg",
  },
  {
    title: "Marketers Import N436bn Worth of Petrol Amid Row with Dangote Refinery",
    category: "Upstream Oil",
    imageSrc: "/downstream-oil/downstream-13.png",
    href: "/article/n900bn-injection-banks",
  },
  {
    title: "NNPCL Refineries Not Producing Enough Petrol – DAPPMAN",
    category: "Upstream Oil",
    imageSrc: "/downstream-oil/downstream-14.png",
    href: "/article/air-peace-lagos-sao-paulo",
  },
  {
    title: "Petrobras Eyes Return to Nigeria’s Oil Sector Amid Strengthened Nigeria-Brazil Ties",
    category: "Upstream Oil",
    imageSrc: "/downstream-oil/downstream-15.png",
    href: "/article/emirates-battery-policy",
  },
  {
    title: "NNPC Reduces Petrol Pump Price",
    category: "Upstream Oil",
    imageSrc: "/downstream-oil/downstream-16.png",
    href: "/article/sterling-holdco-shares",
  },
  {
    title: "Fuel Import Ban Fears Re-ignite Dangote, Marketers’ Row",
    category: "Upstream Oil",
    imageSrc: "/downstream-oil/downstream-17.png",
    href: "/article/american-pacific-mining",
  },
];

const sidebarArticles: SidebarArticleData[] = [
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
const ArticleCard = ({ article, isFeatured = false, size = 'medium' }: ArticleCardProps) => {
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
const SidebarImageArticle = ({ article }: SidebarImageArticleProps) => {
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
const SidebarArticle = ({ article, isFirst = false }: SidebarArticleProps) => {
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
          <h1 className="text-3xl font-bold text-gray-900">DOWNSTREAM OIL</h1>
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