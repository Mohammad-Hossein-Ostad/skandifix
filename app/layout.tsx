import type { Metadata } from "next";
import "./globals.css";

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
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
