import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: "300",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Skandifix",
  description: "Professional renovation and technical services focused on quality, transparency, and certified workmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
