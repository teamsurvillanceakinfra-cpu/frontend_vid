import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "VidSnatcher AI | Universal Video Downloader",
  description: "Download videos from Instagram, YouTube, Facebook, Twitter, and TikTok cleanly and easily in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.variable}>
        <div className="app-wrapper flex flex-col min-h-screen">
          <Navbar />
          <main className="main-content flex-col" style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
