"use client";

import Image from "next/image";
import { BellIcon } from "@/components/icons/bell-icon";
import { PulseIcon } from "@/components/icons/pulse-icon";

function ActionButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button
      type="button"
      className="flex items-center cursor-pointer px-2 shrink-0 text-white/60 hover:text-white transition-colors"
    >
      {children}
    </button>
  );
}

export function HeaderActionsClient() {
  return (
    <div className="flex">
      <ActionButton>
        <PulseIcon />
      </ActionButton>

      <ActionButton>
        <BellIcon />
      </ActionButton>

      <ActionButton>
        <Image
          src="/pixeljanitor.jpg"
          alt="User Avatar"
          width={24}
          height={24}
          className="rounded-full"
        />
      </ActionButton>
    </div>
  );
}
