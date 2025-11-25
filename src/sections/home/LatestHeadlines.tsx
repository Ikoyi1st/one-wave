import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the Article type if it's not in a shared file accessible here
// If you have a types/news.ts or similar, ensure this matches:
type Article = {
  id: string;
  title: string;
  image: string | null; // Use actual image paths in your data
  meta?: string; // Optional if not used here
};

// Mock data to closely resemble the image content
const items: Article[] = [
  {
    id: "latest-1",
    // Manually breaking the title with a newline character (\n) for visual styling
    title: "Macron Ally Roland Lescure \nAppointed as France's New \nFinance Minister",
    image: "/man.png", // Replace with actual image path
    meta: "Oct 2, 2025",
  },
  {
    id: "latest-2",
    title: "Sepiat Energy Links Africa's Growth to Domestic Gas Development",
    image: "/man-1.png", // Replace with actual image path
    meta: "Oct 2, 2025",
  },
  {
    id: "latest-3",
    title: "Renaissance Unveils Pan-African Strategy at Africa Energy Week",
    image: "/man-2.png", // Replace with actual image path
    meta: "Oct 2, 2025",
  },
  {
    id: "latest-4",
    title: "Finance Ministry Opens Public Submissions for 2026 National Budget",
    image: "/man-3.png", // Replace with actual image path
    meta: "Oct 2, 2025",
  },
];

export default function LatestHeadlines() {
  return (
    <section className="border-b border-gray-200 bg-white gap-6">
      <div className="mx-auto max-w-7xl px-10 py-3">
        <div className="flex items-center overflow-x-auto whitespace-nowrap">
          {/* "Latest Headlines" label */}
          <h3 className="text-[18px] font-bold text-[#000000] flex-shrink-0 pr-3" style={{ fontFamily: '"Inter", sans-serif'}}>
            Latest Headlines
          </h3>

          {/* Render individual articles */}
          {items.map((a, index) => (
            <React.Fragment key={a.id}>
              <Link 
                href="#" 
                // Adjusted width and vertical padding to accommodate taller image/text
                className="group flex items-start gap-3 flex-shrink-0 py-1 w-65" 
              >
                {/* Image container: Removed rounded-full to match square/rectangular image in source */}
                <div className="h-20 w-20 overflow-hidden border border-gray-100 flex-shrink-0">
                  <Image 
                    src={a.image ?? "/placeholder-hero.svg"} 
                    alt={a.title} 
                    width={56} // Increased width for larger square image
                    height={56} // Increased height for larger square image
                    className="h-full w-full object-cover" 
                  />
                </div>
                {/* Text container: Applied stronger styling for large image look */}
                <span 
                  className="line-clamp-3 text-[12px] pt-4 text-zinc-800 font-semibold group-hover:underline flex-grow whitespace-normal" 
                  style={{ fontFamily: '"Helvetica Neue", sans-serif', color: '#000000' }}
                >
                  {a.title.split('\n').map((line, i) => (
                    // This handles the line breaks created by the \n character
                    <React.Fragment key={i}>
                      {line}
                      {i < a.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}