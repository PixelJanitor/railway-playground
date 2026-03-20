"use client";

import Link from "next/link";

export function NavigationClient() {
  return (
    <nav className="flex items-center">
      <NavigationLink href="/">Architecture</NavigationLink>
      <NavigationLink href="/">Observability</NavigationLink>
      <NavigationLink href="/">Logs</NavigationLink>
      <NavigationLink href="/">Settings</NavigationLink>
    </nav>
  );
}

function NavigationLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <Link href={href} className="text-white">
      {children}
    </Link>
  );
}
