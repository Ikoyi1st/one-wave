import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import BreakingGrid from "@/sections/home/BreakingGrid";
import CategorySections from "@/sections/home/CategorySections";
import LatestHeadlines from "@/sections/home/LatestHeadlines";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NewsHeader />
      <main>
        <LatestHeadlines />
        <BreakingGrid />
        <CategorySections />
      </main>
      <NewsFooter />
    </div>
  );
}
