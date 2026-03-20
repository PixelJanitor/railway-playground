"use client";

import Link from "next/link";
import { useState } from "react";

export function NavigationClient() {
  const [activePath, setActivePath] = useState("Architecture");

  return (
    <nav className="flex h-full">
      <NavigationLink
        href="/"
        active={activePath === "Architecture"}
        onClick={() => setActivePath("Architecture")}
      >
        Architecture
      </NavigationLink>
      <NavigationLink
        href="/"
        active={activePath === "Observability"}
        onClick={() => setActivePath("Observability")}
      >
        Observability
      </NavigationLink>
      <NavigationLink
        href="/"
        active={activePath === "Logs"}
        onClick={() => setActivePath("Logs")}
      >
        Logs
      </NavigationLink>
      <NavigationLink
        href="/"
        active={activePath === "Settings"}
        onClick={() => setActivePath("Settings")}
      >
        Settings
      </NavigationLink>
    </nav>
  );
}

function NavigationLink({
  href,
  active,

  onClick,
  children,
}: Readonly<{
  href: string;
  active: boolean;

  onClick?: () => void;
  children: React.ReactNode;
}>) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 flex items-center ${
        active ? "font-semibold text-white" : "font-normal text-white/50"
      }`}
    >
      {children}
    </Link>
  );
}
