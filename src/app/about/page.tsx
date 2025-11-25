import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – OneWave",
  description: "Learn about OneWave’s mission, values, and team.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">About OneWave</h1>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              We’re building a simpler, more harmonious way for teams to design and ship products together.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <Image
              src="/placeholder-about.svg"
              alt="About OneWave"
              width={1200}
              height={640}
              className="h-auto w-full max-w-5xl rounded-2xl border border-[--color-border]"
            />
          </div>
        </section>

        {/* Mission */}
        <section className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Our mission</h2>
            <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Empower teams to ride the same wave—from idea to delivery—with tools that are fast, collaborative, and delightful.
              We believe the best work happens when designers and developers flow together.
            </p>
            <div className="mt-6">
              <Button size="lg">Join the journey</Button>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-[--color-border] bg-white p-6">
              <ul className="grid gap-4 text-sm leading-6 text-zinc-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[--color-brand]" />
                  Design and engineering in sync
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[--color-brand]" />
                  Speed without sacrificing craft
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[--color-brand]" />
                  Open, thoughtful collaboration
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-24">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">Values we surf by</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Clarity", desc: "Communicate simply. Reduce noise. Focus on outcomes." },
              { title: "Momentum", desc: "Ship quickly, iterate often, and learn in public." },
              { title: "Craft", desc: "Sweat the details where they matter most." },
              { title: "Kindness", desc: "Collaborate with respect and empathy." },
              { title: "Ownership", desc: "Take initiative and raise the bar together." },
              { title: "Trust", desc: "Default to openness and accountability." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-[--color-border] bg-white p-6 shadow-sm dark:bg-black">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mt-24">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">Meet the team</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Alex Rivera", role: "Product Designer", avatar: "/avatar-1.svg" },
              { name: "Taylor Chen", role: "Frontend Engineer", avatar: "/avatar-2.svg" },
              { name: "Jordan Singh", role: "PM", avatar: "/avatar-3.svg" },
            ].map((m) => (
              <div key={m.name} className="rounded-2xl border border-[--color-border] bg-white p-6 text-center shadow-sm">
                <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border border-[--color-border]">
                  <Image src={m.avatar} alt={m.name} width={80} height={80} className="h-20 w-20" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{m.name}</h3>
                <p className="text-sm text-zinc-600">{m.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-24 max-w-4xl">
          <div className="rounded-3xl border border-[--color-border] bg-gradient-to-br from-[--color-brand]/10 via-transparent to-[--color-brand]/10 p-10 text-center">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Want to ride with us?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-zinc-600">
              We’re always looking for curious builders and thoughtful designers.
            </p>
            <div className="mt-6 flex justify-center">
              <Button size="lg">Contact us</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
