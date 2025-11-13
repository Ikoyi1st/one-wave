This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

There are two ways to run this project.

### 1) Static export (no Node server)
- Build & export:
  - Windows CMD: `cd C:\Users\Nathaniel Akowe\dev\one-wave && npm run build`
- Serve the `out/` folder:
  - Windows CMD: `cd C:\Users\Nathaniel Akowe\dev\one-wave && npm run preview:static`
  - Then open http://localhost:5173

### 2) Dev server (SSR)
- Ensure no other `next dev` is running (delete `.next\\dev\\lock` if necessary).
- Start with CMD to bypass PowerShell policy:
  - `cmd /c "cd /d C:\\Users\\Nathaniel Akowe\\dev\\one-wave && set PORT=3002 && npm run dev"`

You can start editing the homepage at `src/app/page.tsx`. The page auto-updates in dev.

Tailwind v4 is enabled via `@tailwindcss/postcss` and `src/app/globals.css`.

Static export is enabled in `next.config.ts` (`output: 'export'`, `images.unoptimized`). API routes are removed for export.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
