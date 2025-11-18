// User-provided CategorySections.tsx
import Image from "next/image";
import { Article, ArticleCard } from "@/components/news/Article";

type SectionHeaderProps = {
  title: string;
  className?: string;
  titleClassName?: string;
  lineClassName?: string;
};

function SectionHeader({
  title,
  className = "mb-6 flex items-center gap-4",
  titleClassName = "text-lg font-bold uppercase text-[#221919]",
  lineClassName = "h-1 flex-1 bg-[#d8d8d8]",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <h3
        className={titleClassName}
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        {title}
      </h3>
      <div className={lineClassName} />
    </div>
  );
}



const mk = (
  title: string,
  id: string,
  imagePath: string = "/placeholder-hero.svg",
  category?: string
): Article => ({
  id,
  title,
  image: imagePath,
  meta: "October 3, 2025 · 3 min read",
  category,
});

export default function CategorySections() {
  const energyLeft = mk(
    "Oil slides to 17-week low on US and Asia economic worries, and expected OPEC+ production increase",
    "energy-0",
    "/Energy.png",
    "Breaking News"
  );
  const renewable = mk(
    "UK marine energy sector growth under discussion by industry stakeholders",
    "renew-0",
    "/Energy-2.png"
  );

  // Maritime grid – each item can have its own editable title and image
  const maritime: Article[] = [
    mk("IMO Chief Applauds Nigeria’s Maritime Security Gains and Blue Economy Policy", "mar-0", "/Maritime-1.png"),
    mk("Wave Energy System Validated at Hawaii Test Site", "mar-1", "/Maritime-2.png"),
    mk("Another Chinese Player Turns to Wärtsilä: 10-Year Deal to Power 14 LNG Carriers", "mar-2", "/Maritime-3.png"),
    mk("DEME Wins Cable Installation Contract for 900 MW Nordseecluster B Offshore Wind Farm", "mar-3", "/Maritime-4.png"),
    mk("BAR Technologies and Union Maritime Secure Landmark Approval for Dual-Fuel LNG Tankers with Wind-Assisted Propulsion", "mar-4", "/Maritime-5.png"),
    mk("NEXTCHEM and Siemens Energy Partner on Methanol Fuel Cell Solutions for Maritime Industry", "mar-5", "/Maritime-6.png"),
  ];

   const aviation: Article[] = [
    mk("Spirit Airlines to Cut Nearly Half Its Fleet in Bankruptcy Restructuring", "mar-0", "/Aviation-1.png"),
    mk("Air Peace Expands Fleet with New Embraer 190 Jet, Eyes Brazil Route", "mar-1", "/Aviation-2.png"),
    mk("NCAA Warns Qatar Airways of Sanctions Over Alleged Mistreatment of Nigerian Passenger", "mar-2", "/Aviation-3.png"),
    mk("How Tinubu’s Aviation Reforms Are Positioning Air Peace for Flag Carrier Status", "mar-3", "/Aviation-4.png"),
    mk("Turkish Airlines to purchase 225 Boeing planes, pending engine deal", "mar-4", "/Aviation-5.png"),
    mk("Air Peace Responds to NSIB Report on Runway Incursion at Port Harcourt Airport", "mar-5", "/Aviation-6.png"),
  ];

  const gas = mk(
    "Canada's Haisla First Nation launches world's first Indigenous-owned LNG project.",
    "lng-0",
    "/placeholder-lng.jpg"
  );

  const banking = mk(
    "Credit Agricole Eyes Full Integration with Banco BPM Amid Italian Banking Consolidation",
    "bank-0",
    "/placeholder-bank.jpg"
  );

  // Banking & Finance grid – fully editable per-card data
  const bankingGrid: Article[] = [
    mk("Credit Agricole Eyes Full Integration with Banco BPM Amid Italian Banking Consolidation", "bank-grid-0", "/banking.png"),
    mk("Deutsche Bank Appoints Lisa McGeough as Americas Head After HSBC Exit", "bank-grid-1", "/banking-1.png"),
    mk("Black Hills to Acquire NorthWestern Energy in $3.6B Deal Amid Soaring U.S. Power Demand", "bank-grid-2", "/banking-2.png"),
    mk("NCGC, Financial Institutions Sign Deal to Widen Credit Access for Youth, Women", "bank-grid-3", "/banking-3.png"),
    mk("Additional N900bn capital injection expected in banks before year-ending", "bank-grid-4", "/banking-4.png"),
    mk("United Capital Infrastructure Fund Delivers ₦1.61bn Payout, Records 24.99% Return", "bank-grid-5", "/banking-5.png"),
  ];

  // Oil & Gas grid – fully editable per-card data
  const oilGasGrid: Article[] = [
    mk("Tourism can rival oil in revenue, says ex-minister Ogbuewu", "og-0", "/oil-1.png"),
    mk("Trump’s Aggressive Tariffs Threaten to Erase India’s $17bn Advantage from Russian Oil", "og-1", "/oil-2.png"),
    mk("Oil Holds Steady Ahead of U.S. Inventory Data and Crucial U.S.-Russia Talks", "og-2", "/oil-3.png"),
    mk("PENGASSAN Condemns Political Influence in Petroleum Industry, Urges Structural Reforms", "og-3", "/oil-4.png"),
    mk("Maintaining Multiple Supply Channels to Meet West Africa’s Expanding Oil Refining Needs", "og-4", "/oil-5.png"),
    mk("Oando, NNPC Raise Alarm Over Rampant Condensate Hawking, Lack of Oil Theft Prosecution in Niger Delta", "og-5", "/oil-6.png"),
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-4">
      <div className="grid gap-10 md:grid-cols-2">
        <section>
          <SectionHeader title="Energy & Power" />
          <div className="overflow-hidden bg-background">
            <div className="relative">
              <Image
                src={energyLeft.image ?? "/placeholder-hero.svg"}
                alt=""
                width={1200}
                height={800}
                className="h-110 w-full object-cover"
              />
              {/* Overlay text content on top of the image */}
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="">
                  <div className="bg-[#273563] w-36 ml-4 px-4 py-2 text-xs font-semibold uppercase text-white">
                    Breaking News
                  </div>
                  <div className="px-4 pb-6 pt-4">
                    <div className="pb-2 pl-2 bg-white/80">
                      <p className="font-display text-xl font-semibold leading-tight text-[#2E3D68]">
                        Oil slides to 17-week low on US and Asia economic
                      </p>
                    </div>
                    <div className="pb-2 pt-2 pl-2 bg-white/80 mt-4">
                      <p className="font-display text-xl font-semibold leading-tight text-[#2E3D68]">
                        worries, and expected OPEC+ production increase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <SectionHeader title="Renewable Energy" />
          <div className="overflow-hidden bg-background mb-42">
            <div className="">
              <Image
                src={renewable.image ?? "/placeholder-hero.svg"}
                alt=""
                width={1200}
                height={800}
                className="h-70 w-110 object-cover"
              />
              {/* Overlay text content on top of the image */}
              <div className="absolute flex flex-col justify-end">
                <div className="">
                  <div className="bg-[#273563] mt-4 w-36 px-4 py-2 text-xs sm:text-sm font-semibold uppercase text-white">
                    Maritime
                  </div>
                  <div className="pb-6 pt-4">
                    <div className="pb-2 pl-2">
                      <p className="font-display text-2xl font-semibold leading-8 text-black">
                        UK marine energy sector growth under <br/> discussion by industry stakeholders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        {/* Aviation */}
        <SectionHeader title="Aviation Market" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aviation.map((a) => (
            <div key={a.id} className="text-[15px] p-3">
              <ArticleCard article={a} />
            </div>
          ))}
        </div>
      </section>

          {/* Gas & LNG MARKET */}
      <div className="grid gap-10 md:grid-cols-2">
        <section>
          <SectionHeader title="Gas & LNG MARKET" />
          <div className="overflow-hidden bg-background">
            <div className="relative">
              <Image
                src="/gas.png"
                alt=""
                width={1200}
                height={800}
                className="h-110 w-full object-cover"
              />
              {/* Overlay text content on top of the image */}
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="">
                  <div className="bg-[#273563] w-36 ml-4 px-4 py-2 text-xs font-semibold uppercase text-white">
                    Energy
                  </div>
                  <div className="px-4 pb-6 pt-4">
                    <div className="pb-2 pl-2 bg-white/80">
                      <p className="font-display text-xl font-semibold leading-tight text-[#2E3D68]">
                        Canada’s Haisla First Nation launches world’s first
                      </p>
                    </div>
                    <div className="pb-2 pt-2 pl-2 w-90 bg-white/80 mt-4">
                      <p className="font-display text-xl font-semibold leading-tight text-[#2E3D68]">
                        Indigenous-owned LNG project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <SectionHeader title="Banking & Finance" />
          <div className="overflow-hidden bg-background mb-50">
            <div className="">
              <Image
                src="/banking.png"
                alt=""
                width={1200}
                height={800}
                className="h-70 w-110 object-cover"
              />
              {/* Overlay text content on top of the image */}
              <div className="absolute flex flex-col justify-end">
                <div className="">
                  <div className="bg-[#273563] mt-4 w-46 px-4 py-2 text-xs font-semibold uppercase text-white">
                    Business and Finance
                  </div>
                  <div className="pb-6 pt-4">
                    <div className="pb-2 pl-2">
                      <p className="font-display text-2xl font-semibold leading-8 text-black">
                        Credit Agricole Eyes Full Integration <br/> with Banco BPM Amid Italian Banking <br/> Consolidation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Maritime */}
          <SectionHeader title="Maritime" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {maritime.map((a) => (
            <div key={a.id} className="p-3">
              <ArticleCard article={a} />
            </div>
          ))}
        </div>

        {/* Banking & Finance */}
      <section>
        <SectionHeader title="Banking and Finance" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bankingGrid.map((a) => (
            <div key={a.id} className="p-3">
              <ArticleCard article={a} />
            </div>
          ))}
        </div>
      </section>

          {/* Oil & Gas */}
      <section>
        <SectionHeader title="Oil & Gas" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {oilGasGrid.map((a) => (
            <div key={a.id} className="p-3">
              <ArticleCard article={a} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
