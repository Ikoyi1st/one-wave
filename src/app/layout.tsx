import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OneWave – Build together, in one flow",
    template: "%s – OneWave",
  },
  description:
    "OneWave brings news update to the nation fast and reliable.",
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
