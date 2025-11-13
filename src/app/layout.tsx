import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OneWave – Build together, in one flow",
    template: "%s – OneWave",
  },
  description:
    "OneWave brings designers and developers into a single, fast, collaborative flow.",
  metadataBase: new URL("https://onewave.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
