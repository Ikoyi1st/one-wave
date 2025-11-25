import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_200px_at_50%_-20%,#0ea5e933,transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 text-center md:pt-24 md:pb-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Ride the wave to simple, modern collaboration
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            OneWave helps teams design, iterate, and ship faster with a unified, delightful workflow.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Link href="#features" className="text-[--color-foreground] font-medium hover:underline">
              Explore features →
            </Link>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-5xl rounded-2xl border border-[--color-border] bg-white p-2 shadow-sm">
            <Image
              src="/placeholder-hero.svg"
              alt="Product preview"
              width={1600}
              height={900}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
