import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[--color-border] bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="OneWave" width={28} height={28} />
          <span className="text-lg font-semibold tracking-tight">OneWave</span>
        </Link>
        <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
          <Link href="/about" className="hover:text-[--color-foreground]">About</Link>
          <Link href="#features" className="hover:text-[--color-foreground]">Features</Link>
          <Link href="#pricing" className="hover:text-[--color-foreground]">Pricing</Link>
          <Link href="#contact" className="hover:text-[--color-foreground]">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
