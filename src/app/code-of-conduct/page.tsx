import type { Metadata } from "next";
import Image from "next/image";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import Link from "next/link";

// Updated metadata for the Code of Conduct page
export const metadata: Metadata = {
  title: "Code of Conduct – Onewave News",
  description:
    "Review Onewave News' Code of Conduct, guidelines for user contributions, and the policy regarding breaches.",
};

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-white">
      <NewsHeader hideBanner hideTicker />

      <main>
        {/* Hero Section - Updated Title and Background */}
        <section className="hero-background text-white mt-8">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-26 lg:py-40">
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Code of Conduct
            </h1>
          </div>

          {/* Sub navigation bar */}
          <div className="bg-[#F5F5F5] text-[14px]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <nav className="flex flex-wrap items-center gap-4 py-4 font-semibold text-[#221919]">
                {/* Active Link: Code of Conduct */}
                <Link
                  href="#code-of-conduct"
                  className="px-3 py-1 hover:text-white rounded-sm"
                >
                  Code of Conduct
                </Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link
                  href="#your-contributions"
                  className="px-3 py-1 hover:text-[#111827]"
                >
                  Your contributions
                </Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link
                  href="#breach-of-conduct"
                  className="px-3 py-1 hover:text-[#111827]"
                >
                  Breach of the Code of Conduct
                </Link>
              </nav>
            </div>
          </div>
        </section>

        {/* 1. Code of Conduct */}
        <section
          id="code-of-conduct"
          className="bg-white py-12 text-[13px] leading-relaxed text-[#4B5563] sm:text-base md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-xl font-semibold tracking-tight text-[#2E3D68] sm:text-2xl">
              Code of Conduct
            </h2>
            <div className="mt-4 space-y-2 font-semibold max-w-6xl text-[15px] leading-8 sm:text-base">
              <p>
                Onewave visitors have a safe, interesting and friendly business environment for both our staff
                 and visitors. All users of our products and service sites<br/> and any contributions they make to the 
                 sites must comply with this Code of Conduct. Your use of our websites or equipment means that you 
                 accept<br/> and agree to abide by this Code of Conduct, which supplements and forms part of the working 
                 documents.
              </p>
              <p>
                We may need to revise the Code of Conduct from time to time by amending this page. 
                Please review this page regularly to ensure you are aware of any<br/>
                 changes we make as they are legally binding on you.
              </p>
              <p>
                If you reasonably believe that any contribution to our website or any documents
                 made by another user contravenes this Code of Conduct and/or any of<br/> the Website Terms, 
                 please notify us using the "Report Abuse"/"Flag as Inappropriate" or equivalent button.
              </p>
              <p>
                Within this Code of Conduct, "contribution" means any material posted or uploaded to our websites
                 by a member of the public, including without<br/> limitation any text, photographs, graphics, video or 
                 audio material.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Your Contributions - Changed to a white background section to match the image */}
        <section
          id="your-contributions"
          className="bg-[#F5F5F5] py-12 sm:py-16 border-t border-gray-200"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-xl font-semibold tracking-tight text-[#2E3D68] sm:text-2xl">
              Your Contributions
            </h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {/* Left Column */}
              <ul className="space-y-8 text-[15px] font-semibold leading-7 text-[#221919] list-disc list-inside">
                <li>
                  Must be your own original work. You may be entitled to incorporate into<br/> your contribution
                   certain material made available on our websites but only <br/>where that is expressly made clear. 
                   Otherwise, all material in 
                  your<br/> contributions must be your own original piece of work and should not<br/> plagiarize others' work.
                </li>
                <li>
                 Must not infringe anyone else's rights, including copyright. Your<br/> contributions must not plagiarize
                  or infringe the rights of any other person<br/> including any copyright, database, trade mark, trade
                   secret, and privacy,<br/> and publicity, personal or proprietary rights of any kind. Therefore with<br/> 
                   regard to existing articles, news reports, music, video clips or other<br/> copyright material you will
                  generally need the explicit permission of the<br/> relevant copyright from the Onewave management.</li>
                <li>
                  Must not contain unlawful or objectionable content nor involve disruptive,<br/> offensive or
                   abusive behavior. Please be respectful and civil to other<br/> members, even if you disagree
                    with them. Material that is unlawful,<br/> harassing, threatening, defamatory, obscene, offensive,
                     abusive, hateful,<br/> inflammatory, profane, racially, sexually or religiously
                   offensive or otherwise<br/> objectionable or unlawful is not acceptable.
                   </li>
                
                <li>
                Must not contain unsuitable or irrelevant website addresses or URLs. Links<br/> to pornography, 
                commercial or other inappropriate content may be deleted.</li>
              </ul>

              {/* Right Column */}
              <ul className="space-y-8 font-semibold text-[15px] leading-7 text-[#221919] list-disc list-inside">
                <li>
                 Must not promote illegal or anti-social behavior. Contributions
                  must not<br/> contain violent or sexually explicit material or advocate,
                   promote or assist<br/> any unlawful act such as (by way of example only)
                  terrorist acts, copyright<br/> infringement or computer misuse</li>
                <li>
                  Must not misrepresent Onewave or their products. Contributions and/or<br/> user 
                  names may not be used to impersonate any other person, to<br/> misrepresent your identity 
                  or affiliation with any person or to
                   give the<br/> impression that they emanate from us, if that is not the case.</li>
                <li>
                 Must not be in any language other than English (or the predominant<br/> language of the
                  website if not English).
                  Contributions in other languages<br/> may be removed</li>
                <li>
                  Must not involve any flooding, spamming or advertising. Flooding is when<br/>
                   the same comment is posted over and over in the same forum; spamming is<br/>
                    the posting of the same comment (or very similar) to more than one forum.<br/>
                     All advertisements, chain letters, pyramid schemes, 
                  junk mail and any other<br/> forms of commercial solicitation are prohibited</li>
                <li>
                 Must not disclose any personal information. Contributions to this website<br/> are
                  publicly available and can be viewed by others with whom you may not<br/> wish to
                   share such information. Do not include any personal or personally<br/> identifiable
                    information about you or others 
                 (including your own or anyone else's email address).</li>
                <li>
                 Must not include spoilers. Please do not post any messages in forums (or in<br/> 
                 any other form of contribution) containing plot developments 
                 that have yet<br/> to be broadcast on local television, radio or in cinemas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Breach of the Code of Conduct - Changed to a white background section to match the image */}
        <section
          id="breach-of-conduct"
          className="bg-white py-12 sm:py-16 border-t border-gray-200"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-xl font-semibold tracking-tight text-[#221919] sm:text-2xl">
              Breach of the Code of Conduct
            </h2>
            <div className="mt-4 space-y-4 font-semibold max-w-full text-[15px] leading-8 sm:text-base">
              <p>
               It will be our sole decision as to whether there has been a breach of
                this Code of in our Business Conduct. We have the right (but not the obligation)
                 to edit,<br/> refuse to post, or to remove any contribution in whole or in part that 
                 we deem to be in breach of the Code of Conduct. Where we believe there is a breach
                  of<br/> the Code of Conduct in our broadcasting products, 
               we may take whatever action we feel is appropriate in the circumstances.</p>
              <p className="text-[18px] ">
                Failure to comply with this Code of Conduct constitutes a material breach
                 which could result in us taking any of the<br/> following actions:</p>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <ul className="space-y-2 text-[15px] leading-7 text-[#221919] list-disc list-inside pl-4">
                  <li>
                    Issuing a warning to you;
                  </li>
                  <li>
                    Immediate, temporary or permanent withdrawal 
                    of any contribution or of<br/> your right to use our product or services.
                  </li>
                  <li>
                    Disclosure of such information to law enforcement authorities or other<br/>
                    relevant third parties as we reasonably feel is necessary.
                  </li>
                </ul>
                <ul className="space-y-2 text-[15px] leading-7 text-[#221919] list-disc list-inside pl-4">
                  <li>
                    Legal proceedings against you for reimbursement of all losses and costs on<br/>
                     an indemnity basis (including, but not limited to, reasonable administrative<br/> and legal costs) 
                    resulting from the breach and/or further legal action against<br/> you.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <NewsFooter />
    </div>
  );
}