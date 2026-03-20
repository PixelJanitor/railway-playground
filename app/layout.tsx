import { clsx } from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderActions } from "@/components/header-actions/header-actions.server";
import { Logo } from "@/components/icons/logo";
import { Navigation } from "@/components/navigation/navigation.server";
import { ProjectSwitcher } from "@/components/project-switcher/project-switcher.server";

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="en" className={clsx(inter.variable, "antialiased")}>
      <body className="h-dvh flex flex-col overscroll-contain bg-surface text-white font-sans text-base">
        <header className="flex pl-4 pr-2">
          <div className="flex flex-1 items-center py-4 gap-4">
            <Logo />
            <ProjectSwitcher />
          </div>

          <div className="flex flex-1 justify-center">
            <Navigation />
          </div>

          <div className="flex flex-1 justify-end">
            <HeaderActions />
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
