"use client";

import { DotGrid } from "@/components/DotGrid";

export function ResourceCanvasClient() {
  return (
    <section className="relative flex items-center justify-center size-full isolate">
      <div className="absolute -z-1 inset-0">
        <DotGrid />
      </div>
    </section>
  );
}
