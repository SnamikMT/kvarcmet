import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kvarcmet",
  description: "Clean Next.js starter for future development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
