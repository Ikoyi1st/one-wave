import { Article, ArticleCard } from "@/components/news/Article";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-sm font-semibold">{title}</h3>
      <a href="#" className="text-xs text-[--color-brand] hover:underline">
        More
      </a>
    </div>
  );
}

const mk = (title: string, id: string): Article => ({
  id,
  title,
  image: "/placeholder-hero.svg",
  meta: "October 2, 2025 · 3 min read",
});

export default function CategorySections() {
  const energyLeft = mk(
    "Oil slides to 17-week low on US and Asia economic worries, and expected OPEC+ production increase",
    "energy-0"
  );
  const renewable = mk(
    "UK marine energy sector growth under discussion by industry stakeholders",
    "renew-0"
  );

  const aviation = Array.from({ length: 6 }).map((_, i) =>
    mk(`Maritime update ${i + 1} – ports and shipping`, `mar-${i}`)
  );

  const gas = mk(
    "Canada's Haisla First Nation launches world's first Indigenous-owned LNG project.",
    "lng-0"
  );

  const banking = mk(
    "Credit Agricole Eyes Full Integration with Banco BPM Amid Italian Banking Consolidation",
    "bank-0"
  );

  const bankingGrid = Array.from({ length: 6 }).map((_, i) =>
    mk(`Banking & Finance update ${i + 1} – markets and deals`, `bank-grid-${i}`)
  );
  const oilGasGrid = Array.from({ length: 6 }).map((_, i) =>
    mk(`Oil & Gas bulletin ${i + 1} – upstream & downstream`, `og-${i}`)
  );

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-4">
      {/* Energy & Power and Renewable Energy split */}
      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <SectionHeader title="Energy & Power" />
          <div className="overflow-hidden rounded-2xl border border-[--color-border]">
            <ArticleCard article={energyLeft} large />
          </div>
        </section>
        <section>
          <SectionHeader title="Renewable Energy" />
          <div className="overflow-hidden rounded-2xl border border-[--color-border]">
            <ArticleCard article={renewable} large />
          </div>
        </section>
      </div>

      {/* Maritime grid */}
      <section>
        <SectionHeader title="Maritime" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aviation.map((a) => (
            <div key={a.id} className="rounded-2xl border border-[--color-border] p-3">
              <ArticleCard article={a} />
            </div>
          ))}
        </div>
      </section>

      {/* Gas & LNG and Banking & Finance split */}
      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <SectionHeader title="Gas & LNG Market" />
          <div className="overflow-hidden rounded-2xl border border-[--color-border]">
            <ArticleCard article={gas} large />
          </div>
        </section>
        <section>
          <SectionHeader title="Banking & Finance" />
          <div className="overflow-hidden rounded-2xl border border-[--color-border]">
            <ArticleCard article={banking} large />
          </div>
        </section>
      </div>

      {/* Banking & Finance grid */}
      <section>
        <SectionHeader title="Banking and Finance" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bankingGrid.map((a) => (
            <div key={a.id} className="rounded-2xl border border-[--color-border] p-3">
              <ArticleCard article={a} />
            </div>
          ))}
        </div>
      </section>

      {/* Oil & Gas grid */}
      <section>
        <SectionHeader title="Oil & Gas" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {oilGasGrid.map((a) => (
            <div key={a.id} className="rounded-2xl border border-[--color-border] p-3">
              <ArticleCard article={a} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
