export default function NewsFooter() {
  return (
    <footer className="mt-16 border-t border-[--color-border] bg-white py-12 text-sm">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold">Onewave News</div>
          <p className="mt-2 text-zinc-600">
            Business News Channel delivering breaking news, headlines and stories.
          </p>
        </div>
        <div>
          <div className="font-medium">Company</div>
          <ul className="mt-3 space-y-2 text-zinc-600">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Awards</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Legal</div>
          <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
            <li><a href="#" className="hover:underline">Terms of use</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Code of conduct</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Newsletter</div>
          <div className="mt-3 flex gap-2">
            <input
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-full border border-[--color-border] bg-transparent px-3 text-sm outline-none"
            />
            <button className="h-10 rounded-full bg-[--color-brand] px-4 text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 text-xs text-zinc-500">
        Copyright ©2025. All rights reserved. OnewaveNews
      </div>
    </footer>
  );
}
