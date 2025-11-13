import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct – OneWave",
  description: "Community guidelines and reporting procedures for OneWave.",
};

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Code of Conduct</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            We are committed to a respectful, inclusive, and safe community. The following guidelines help
            us maintain a positive environment for everyone.
          </p>
        </header>

        <article className="prose prose-zinc max-w-none">
          <section id="purpose" className="mb-8">
            <h2>Purpose</h2>
            <p>
              This Code of Conduct outlines our expectations for participant behavior and consequences
              for unacceptable behavior across our products, communities, and events.
            </p>
          </section>

          <section id="expected-behavior" className="mb-8">
            <h2>Expected behavior</h2>
            <ul>
              <li>Be respectful and considerate in speech and actions.</li>
              <li>Assume positive intent and seek to understand.</li>
              <li>Give and gracefully accept constructive feedback.</li>
              <li>Collaborate openly and acknowledge contributions.</li>
            </ul>
          </section>

          <section id="unacceptable-behavior" className="mb-8">
            <h2>Unacceptable behavior</h2>
            <ul>
              <li>Harassment, discrimination, or exclusionary behavior of any kind.</li>
              <li>Violent, threatening, or disruptive conduct.</li>
              <li>Sexual language or imagery in any community context.</li>
              <li>Doxing or sharing others’ private information without consent.</li>
            </ul>
          </section>

          <section id="reporting" className="mb-8">
            <h2>Reporting</h2>
            <p>
              If you experience or witness unacceptable behavior, or have any other concerns, please
              report it to our team at <a href="mailto:conduct@onewave.example">conduct@onewave.example</a>.
              All reports will be reviewed and investigated promptly and fairly.
            </p>
          </section>

          <section id="enforcement" className="mb-8">
            <h2>Enforcement</h2>
            <p>
              Participants asked to stop any harassing behavior are expected to comply immediately. We may
              take any action we deem appropriate, including warnings, temporary bans, or permanent
              expulsion from the community.
            </p>
          </section>

          <section id="scope" className="mb-8">
            <h2>Scope</h2>
            <p>
              This policy applies to all community spaces, both online and in-person, as well as private
              communication when it has the potential to affect the safety and well-being of community
              members.
            </p>
          </section>

          <section id="attribution" className="mb-8">
            <h2>Attribution</h2>
            <p>
              Portions adapted from common open-source Codes of Conduct. We appreciate the broader
              community’s work in establishing inclusive standards.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
