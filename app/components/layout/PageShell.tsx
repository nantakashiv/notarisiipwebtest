"use client";

import { useParams, usePathname } from "next/navigation";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { locale } = useParams() as { locale: string };

  const isHome = pathname === `/${locale}`;

  return (
    <div className={`min-h-screen bg-white ${isHome ? "" : "pt-[72px]"}`}>
      {children}
    </div>
  );
}
