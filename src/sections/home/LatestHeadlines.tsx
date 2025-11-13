import Image from "next/image";
import Link from "next/link";
import { Article } from "@/components/news/Article";

const items: Article[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `latest-${i}`,
  title: `Sector story ${i + 1} – quick update headline`,
  image: "/placeholder-hero.svg",
  meta: "Oct 2, 2025",
}));

export default function LatestHeadlines() {
  return (
    <section className="border-b border-[--color-border] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <h3 className="section-title mb-2">Latest Headlines</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {items.map((a) => (
            <Link key={a.id} href="#" className="group flex items-center gap-2">
              <div className="h-8 w-8 overflow-hidden rounded-full border border-[--color-border]">
                <Image src={a.image ?? "/placeholder-hero.svg"} alt="" width={40} height={40} className="h-full w-full object-cover" />
              </div>
              <span className="line-clamp-2 text-xs text-zinc-700 group-hover:underline">{a.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
