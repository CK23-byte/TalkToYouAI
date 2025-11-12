import type { ReactNode } from "react";

export default function Button(
  { href = "#", children }: { href?: string; children: ReactNode }
) {
  return (
    <a href={href} className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-deep text-white hover:opacity-90">
      {children}
    </a>
  );
}
