import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="cta" className="mx-auto mt-24 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-[--color-border] bg-gradient-to-br from-[--color-brand]/10 via-transparent to-[--color-brand]/10 p-10 text-center">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to catch the next wave?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-zinc-600">
          Get started today and bring your team into a faster, more collaborative workflow.
        </p>
        <div className="mt-6 flex justify-center">
          <Button size="lg">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
