export default function Footer() {
  return (
    <footer className="border-t border-[--color-border] mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-zinc-600">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} OneWave. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/about" className="hover:text-[--color-foreground]">About</a>
            <a href="/code-of-conduct" className="hover:text-[--color-foreground]">Code of Conduct</a>
            <a href="#contact" className="hover:text-[--color-foreground]">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
