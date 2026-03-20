"use client"

import { clsx } from "clsx"
import Link from "next/link"
import { useState } from "react"

export function NavigationClient() {
  const [activePath, setActivePath] = useState("Architecture")

  return (
    <nav className='flex h-full'>
      <NavigationLink
        href='/'
        label='Architecture'
        active={activePath === "Architecture"}
        onClick={() => setActivePath("Architecture")}
      />
      <NavigationLink
        href='/'
        label='Observability'
        active={activePath === "Observability"}
        onClick={() => setActivePath("Observability")}
      />
      <NavigationLink
        href='/'
        label='Logs'
        active={activePath === "Logs"}
        onClick={() => setActivePath("Logs")}
      />
      <NavigationLink
        href='/'
        label='Settings'
        active={activePath === "Settings"}
        onClick={() => setActivePath("Settings")}
      />
    </nav>
  )
}

function NavigationLink({
  href,
  label,
  active,
  onClick,
}: Readonly<{
  href: string
  label: string
  active: boolean
  onClick: () => void
}>) {
  return (
    <Link
      href={href}
      onClick={onClick}
      data-label={label}
      className={clsx(
        "px-4 inline-flex flex-col items-center justify-center after:invisible after:h-0 after:select-none after:overflow-hidden after:pointer-events-none after:font-semibold after:content-[attr(data-label)]",
        active ? "font-semibold text-white" : "font-normal text-white/50",
      )}
    >
      {label}
    </Link>
  )
}
