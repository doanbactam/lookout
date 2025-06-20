"use client";

import { cn } from "@/lib/utils";

export function PageContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-3xl px-4 py-6 md:px-6 md:py-8",
        className
      )}
      {...props}
    />
  );
}
