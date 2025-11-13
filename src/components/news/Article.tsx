import Image from "next/image";
import Link from "next/link";

export type Article = {
  id: string;
  title: string;
  category?: string;
  date?: string;
  image?: string;
  meta?: string;
};

export function ArticleCard({ article, large = false, showImage = true }: { article: Article; large?: boolean; showImage?: boolean }) {
  return (
    <article className={large ? "group" : showImage ? "group flex gap-3" : "group"}>
      {showImage && large ? (
        <Link href="#" className="relative block overflow-hidden rounded-2xl border border-[--color-border]">
          <Image
            src={article.image ?? "/placeholder-hero.svg"}
            alt=""
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 sm:p-6">
            {article.category && (
              <span className="inline-block rounded bg-white/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-black">
                {article.category}
              </span>
            )}
            <div className="mt-2 font-display text-white">
              <span className="block text-[15px] font-semibold leading-snug sm:text-lg">{article.title}</span>
              {article.meta && (
                <span className="mt-1 block text-[11px] text-zinc-200">{article.meta}</span>
              )}
            </div>
          </div>
        </Link>
      ) : showImage ? (
        <Link
          href="#"
          className="shrink-0 overflow-hidden rounded-lg border border-[--color-border]"
        >
          <Image
            src={article.image ?? "/placeholder-hero.svg"}
            alt=""
            width={200}
            height={120}
            className="h-20 w-28 object-cover"
          />
        </Link>
      ) : null}
      <div className={large ? (showImage ? "px-0" : "") : showImage ? "min-w-0" : ""}>
        {!large && article.category && (
          <div className="mb-1 text-[10px] uppercase tracking-wide text-[--color-brand]">{article.category}</div>
        )}
        {!large && (
          <Link href="#" className="block font-medium leading-snug hover:underline">
            {article.title}
          </Link>
        )}
        {!large && article.meta && (
          <div className="mt-1 text-xs text-zinc-500">{article.meta}</div>
        )}
      </div>
    </article>
  );
}

export function ArticleList({ items, showImage = true }: { items: Article[]; showImage?: boolean }) {
  return (
    <div className="space-y-4">
      {items.map((a) => (
        <ArticleCard key={a.id} article={a} showImage={showImage} />
      ))}
    </div>
  );
}
