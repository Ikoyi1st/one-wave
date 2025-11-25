import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";

export default function Features() {
  return (
    <section id="features" className="mx-auto mt-24 max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Features that make waves</h2>
        <p className="mt-3 text-base leading-7 text-zinc-600">
          Powerful tools to help your team design, collaborate, and launch with confidence.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Real-time collaboration"
          description="Work together seamlessly, comment in context, and keep everyone on the same page."
          icon={<Image src="/placeholder-icon.svg" alt="" width={20} height={20} />}
        />
        <FeatureCard
          title="Design systems"
          description="Create tokens and components that scale across products and platforms."
          icon={<Image src="/placeholder-icon.svg" alt="" width={20} height={20} />}
        />
        <FeatureCard
          title="Developer handoff"
          description="Clean specs and assets to go from design to production without friction."
          icon={<Image src="/placeholder-icon.svg" alt="" width={20} height={20} />}
        />
      </div>
    </section>
  );
}
