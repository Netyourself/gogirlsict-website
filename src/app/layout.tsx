import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// TODO FIX google form fetching or download locally to project

export const metadata: Metadata = {
  title: "GoGirls ICT",
  description: "GoGirls ICT Initiativ webiste- Developd by Netyourself Inc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
