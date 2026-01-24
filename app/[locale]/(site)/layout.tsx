import type { ReactNode } from "react";
import NavShell from "../../components/layout/NavShell";
import PageShell from "../../components/layout/PageShell";
import { getMessages } from "../../lib/getMessages";
import { I18nProvider } from "../../components/shared/I18nProvider";

export default async function SiteLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // ✅ keep locale safe: only "en" or "id"
  const safeLocale: "en" | "id" = locale === "id" ? "id" : "en";

  // ✅ load correct translation messages
  const messages = await getMessages(safeLocale);

  return (
    <I18nProvider messages={messages}>
      {/* ✅ GLOBAL BACKGROUND WRAPPER (A + B) */}
      <div className="relative min-h-screen overflow-hidden bg-white">
        {/* ✅ A) classy gradient base */}
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(1200px_circle_at_top,rgba(15,23,42,0.06),transparent_55%),linear-gradient(180deg,#ffffff,rgba(248,250,252,1))]" />

        {/* ✅ B) floating glow orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[120px]" />
          <div className="absolute bottom-[-240px] left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-[140px]" />
        </div>

        {/* ✅ Optional: subtle grain texture */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] bg-[radial-gradient(circle,rgba(0,0,0,0.10)_1px,transparent_1px)] [background-size:14px_14px]" />

        {/* NAVBAR */}
        <NavShell />

        {/* PAGE CONTENT */}
        <PageShell>{children}</PageShell>
      </div>
    </I18nProvider>
  );
}
