import React from 'react';

// Define the Article type
type Article = {
  id: string;
  title: string;
  category?: string;
  image: string | null;
  meta?: string;
};

// Custom Link Component (replaces next/link)
const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...props} href={props.href || "#"} />
);


// Custom Article List to match the screenshot's metadata format (Date | Mins)
const ScreenshotArticleList = ({ items }: { items: Article[] }) => (
  <div className="space-y-4">
    {items.map((a) => (
      <div key={a.id} className="pb-4 border-b border-gray-200 last:border-b-0" style={{ fontFamily: '"Helvetica Neue", sans-serif'}}>
        <CustomLink href="#" className="group block">
          {/* Headline: Bold text */}
          <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:underline">
            {a.title}
          </h3>
          {/* Metadata: Small, gray text, formatted as "Date Mins" */}
          <p className="mt-3 text-xs text-gray-500">
            <span className="text-pink-700"></span>{a.meta}
          </p>
        </CustomLink>
      </div>
    ))}
  </div>
);


// **MODIFIED: ArticleList to place image on the right and adjust layout**
const ArticleList = ({ items, showImage = true }: { items: Article[]; showImage?: boolean }) => (
  <div className="space-y-4" style={{ fontFamily: '"Helvetica Neue", sans-serif'}}>
    {items.map((a) => (
      // Use flex to put text and image side-by-side, aligning items to the top (start)
      <div key={a.id} className={`pb-4 border-b border-gray-200 ${showImage ? 'flex space-x-3 items-start' : ''} last:border-b-0`}>
        
        {/* Text content on the left (flex-grow) */}
        <CustomLink href="#" className="group block flex-grow">
          <h3 className={`text-[16px] font-bold text-gray-900 leading-snug group-hover:underline ${showImage ? 'text-sm' : 'text-base'}`}>
            {a.title}
          </h3>
          {/* Metadata: Small, gray text */}
          <p className="mt-2 text-xs text-gray-500">
            {a.meta}
          </p>
        </CustomLink>

        {/* Image on the right (flex-shrink-0) */}
        {showImage && a.image && (
          <div className="w-1/4 flex-shrink-0">
            <div 
              className="aspect-square bg-gray-100 " // Changed to aspect-square for a better fit based on the screenshot
              style={{ 
                backgroundImage: `url(${a.image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                height: '86px', // Fixed height for consistent look as in the screenshot
                width: '86px' // Fixed width for consistent look as in the screenshot
              }}
            ></div>
          </div>
        )}
      </div>
    ))}
  </div>
);

const ArticleCard = ({ article, large = false }: { article: Article; large?: boolean }) => (
  <CustomLink href="#" className="group block relative w-full h-full mt-8"> 
    {/* Use the provided image for the background */}
    <div className={`w-140 ${large ? 'h-146' : 'h-80'} bg-cover bg-center`} style={{ backgroundImage: `url(${article.image || '/placeholder-hero.svg'})` }}>
    </div>
  
  </CustomLink>
);

// Mock Data Generation
const LOREM = "US and Asia economic worries, and expected OPEC+ production increase";

const sample = (n: number, prefix: string, category?: string, imageUrl: string = "/placeholder-hero.svg"): Article[] =>
  Array.from({ length: n }).map((_, i) => ({
    id: `${prefix}-${i}`,
    title: `${prefix} ${i + 1} – ${LOREM}`,
    category,
    image: imageUrl, // Use the provided imageUrl
    meta: "October 2, 2025 · 3 min read",
  }));
  
// --- DATA FOR RIGHT AND CENTER COLUMN ---
const main: Article = {
  id: "feature",
  title:"",
  image: "/article.png", // NEW IMAGE PATH
};

// **MODIFIED: Updated `right` column articles to match the screenshot content and use distinct images**
const right: Article[] = [
  {
    id: "top-1",
    title: "FG Mourns Victims of Niger Boat Mishap",
    image: "/news1.png", // Placeholder for boat image
    meta: "October 1, 2025  10 Mins",
  },
  {
    id: "top-2",
    title: "NCGC, Financial Institutions Sign Deal to Widen Credit Access for Youth, Women",
    image: "/news2.png", // Placeholder for handshake/deal image
    meta: "October 1, 2025  10 Mins",
  },
  {
    id: "top-3",
    title: "Latest Airbus results reveal order for 7 A350-1000 aircraft from mystery buyer",
    image: "/news3.png", // Placeholder for airplane image
    meta: "October 1, 2025  10 Mins",
  },
  {
    id: "top-4",
    title: "Methanol and LNG bunkering approved at Hamburg's Waltershofer Hafen",
    image: "/news4.png", // Placeholder for port image
    meta: "October 1, 2025  10 Mins",
  },
 {
    id: "top-5",
    title: "Methanol and LNG bunkering approved at Hamburg's Waltershofer Hafen",
    image: "/news4.png", // Placeholder for port image
    meta: "October 1, 2025  10 Mins",
  },
];


// --- DATA FOR LEFT COLUMN (MATCHES SCREENSHOT) ---
const left: Article[] = [
  {
    id: "breaking-1",
    title: "Oil slides to 17-week low on US and Asia economic worries, and expected OPEC+ production increase",
    image: null,
    meta: "October 1, 2025  10 Mins",
  },
  {
    id: "breaking-2",
    title: "China Replaces Germany in UN's Top 10 Most Innovative Nations",
    image: null,
    meta: "October 1, 2025  10 Mins",
  },
  {
    id: "breaking-3",
    title: "OPEC+ agrees further oil output boost from October to regain market share",
    image: null,
    meta: "October 1, 2025  10 Mins",
  },
  {
    id: "breaking-4",
    title: "FG Mourns Victims of Niger Boat Mishap",
    image: null,
    meta: "October 1, 2025  10 Mins",
  },
  {
    id: "breaking-5",
    title: "TotalEnergies Secures Nzombo Exploration Permit Offshore Congo",
    image: null,
    meta: "October 1, 2025  10 Mins",
  },
  {
    id: "breaking-6",
    title: "TotalEnergies Secures Nzombo Exploration Permit Offshore Congo",
    image: null,
    meta: "October 1, 2025  10 Mins",
  },
];

export default function BreakingGrid() {
  
  // Component for the new heading style (Text + Vertical Line)
  const HeaderWithVector = ({ title }: { title: string }) => (
    <div className="flex items-center space-x-2 mb-4">
      <h3 className="text-xl font-extrabold text-black tracking-wider flex-shrink-0">
        {title}
      </h3>
      {/* Vertical Line Vector: bg-pink-700 (matching the color in the line-vector image) */}
      <div className="ml-4 w-28 h-1 bg-[#AB2971]"></div>
    </div>
  );
  
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:py-10">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr_1fr]">
        
        {/* Left list: Breaking News */}
        <div>
          <HeaderWithVector title="BREAKING NEWS" />
          <ScreenshotArticleList items={left} />
        </div>

        {/* Center feature: The Main Article (IMAGE UPDATED) */}
        <div>
          <h3 className="sr-only">Feature</h3>
          <div className="overflow-hidden">
            <ArticleCard article={main} large />
          </div>
        </div>

        {/* Right list: Top News */}
        <div>
          <HeaderWithVector title="TOP NEWS" />
          <ArticleList items={right} />
        </div>
      </div>
    </section>
  );
}