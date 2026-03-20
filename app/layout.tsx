import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation/navigation.server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Railway",
  description: "railway-suggestions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-dvh flex flex-col overscroll-contain bg-surface text-white font-sans">
        <header className="flex items-center px-4">
          <div className="flex-1">Icon</div>
          <div className="flex-1 flex justify-center">
            <Navigation />
          </div>
          <div className="flex-1 flex justify-end">avatar</div>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
