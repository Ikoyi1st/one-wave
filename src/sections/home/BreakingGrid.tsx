import { Article, ArticleCard, ArticleList } from "@/components/news/Article";

const LOREM = "US and Asia economic worries, and expected OPEC+ production increase";

const sample = (n: number, prefix: string, category?: string): Article[] =>
  Array.from({ length: n }).map((_, i) => ({
    id: `${prefix}-${i}`,
    title: `${prefix} ${i + 1} – ${LOREM}`,
    category,
    image: "/placeholder-hero.svg",
    meta: "October 2, 2025 · 3 min read",
  }));

export default function BreakingGrid() {
  const left = sample(6, "Oil slides to 17-week low");
  const right = sample(6, "Top News", "Top News");
  const main: Article = {
    id: "feature",
    title:
      "Oil slides to 17-week low on US and Asia economic worries, and expected OPEC+ production increase",
    category: "Breaking News",
    image: "/placeholder-hero.svg",
    meta: "October 2, 2025 · 5 min read",
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:py-10">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr_1fr]">
        {/* Left list */}
        <div>
          <h3 className="section-title mb-4">Breaking News</h3>
          <ArticleList items={left} showImage={false} />
        </div>

        {/* Center feature */}
        <div>
          <h3 className="sr-only">Feature</h3>
          <div className="overflow-hidden rounded-2xl">
            <ArticleCard article={main} large />
          </div>
        </div>

        {/* Right list */}
        <div>
          <h3 className="section-title mb-4">Top News</h3>
          <ArticleList items={right} />
        </div>
      </div>
    </section>
  );
}
