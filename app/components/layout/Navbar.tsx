"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useMessages } from "../../components/shared/I18nProvider";

const NAV_LINKS = [
  { key: "home", href: "" },
  { key: "services", href: "services" },
  { key: "articles", href: "articles" },
  { key: "about", href: "about" },
  { key: "gallery", href: "gallery" },
] as const;

/* ================= LANGUAGE SWITCH (SIZE MATCHED) ================= */
function LanguageSwitch({
  locale,
  onSwitch,
}: {
  locale: "id" | "en";
  onSwitch: (next: "id" | "en") => void;
}) {
  const activeIsID = locale === "id";
  const m = useMessages();

  return (
    <div className="flex items-center gap-2">
      <span className="hidden lg:block text-[12px] font-semibold text-slate-700">
        {(m.nav?.languageLabel as string) ?? "Bahasa / Language"}
      </span>

      <div
        className="
          relative flex items-center rounded-full p-1 border
          bg-white border-slate-200 shadow-sm
        "
      >
        <span
          className={`
            absolute top-1 bottom-1 left-1
            w-[44px] rounded-full
            bg-slate-900 transition-transform duration-300
            ${activeIsID ? "translate-x-0" : "translate-x-[44px]"}
          `}
        />

        <button
          onClick={() => onSwitch("id")}
          className={`
            relative z-10 w-[44px] h-[30px]
            text-[12px] font-bold rounded-full cursor-pointer
            ${activeIsID ? "text-white" : "text-slate-700 hover:text-slate-900"}
          `}
          type="button"
        >
          ID
        </button>

        <button
          onClick={() => onSwitch("en")}
          className={`
            relative z-10 w-[44px] h-[30px]
            text-[12px] font-bold rounded-full cursor-pointer
            ${!activeIsID ? "text-white" : "text-slate-700 hover:text-slate-900"}
          `}
          type="button"
        >
          EN
        </button>
      </div>
    </div>
  );
}

/* ================= NAVBAR ================= */
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useParams() as { locale: string };
  const m = useMessages();
  const [open, setOpen] = useState(false);

  const currentLocale: "id" | "en" = locale === "id" ? "id" : "en";

  const pathWithoutLocale = useMemo(() => {
    if (!pathname) return "/";
    return pathname.replace(/^\/(en|id)(\/|$)/, "/");
  }, [pathname]);

  const switchLocale = (nextLocale: "id" | "en") => {
    if (nextLocale === currentLocale) return;
    setOpen(false);
    router.push(
      `/${nextLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`
    );
  };

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/90 backdrop-blur-md
        border-b border-slate-200 shadow-sm
      "
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 xl:px-10">
        {/* NAVBAR ROW */}
        <div className="flex h-[60px] lg:h-[64px] items-center gap-4">
          {/* LOGO */}
          <Link
            href={`/${currentLocale}`}
            className="flex items-center gap-2 lg:min-w-[280px]"
          >
            <Image
              src="/images/logo.png"
              alt="Notary Office"
              width={30}
              height={30}
              priority
            />

            <span
              className="
                text-[12px] sm:text-[13px]
                font-medium tracking-wide
                text-slate-900 whitespace-nowrap
              "
            >
              <span className="inline sm:hidden">NOTARIS IIP AFFADIN</span>
              <span className="hidden sm:inline">
                NOTARIS IIP AFFADIN, S.H., M.Kn
              </span>
            </span>
          </Link>

          <div className="flex-1 lg:hidden" />

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden lg:flex flex-1 items-center justify-center
              gap-9 text-[13px] text-slate-700
            "
          >
            {NAV_LINKS.map((link) => {
              const href =
                link.href === ""
                  ? `/${currentLocale}`
                  : `/${currentLocale}/${link.href}`;

              const active = pathname === href;
              const label = (m.nav?.[link.key] as string) ?? link.key;

              return (
                <Link
                  key={link.key}
                  href={href}
                  className={`relative hover:opacity-80 ${
                    active ? "font-semibold text-slate-900" : ""
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-slate-900" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3 lg:min-w-[320px] justify-end">
            <LanguageSwitch locale={currentLocale} onSwitch={switchLocale} />

            <Link
              href={`/${currentLocale}/appointment`}
              className="
                hidden lg:flex items-center justify-center
                rounded-full px-4 py-2 w-[160px]
                text-[13px] font-semibold
                bg-slate-900 text-white hover:bg-slate-800
                transition
              "
            >
              {(m.nav?.book as string) ?? "Book Appointment"}
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-lg text-slate-900 cursor-pointer"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden pb-5 mt-2">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <nav className="flex flex-col text-[14px] text-slate-800">
                {NAV_LINKS.map((link) => {
                  const href =
                    link.href === ""
                      ? `/${currentLocale}`
                      : `/${currentLocale}/${link.href}`;

                  const active = pathname === href;
                  const label = (m.nav?.[link.key] as string) ?? link.key;

                  return (
                    <Link
                      key={link.key}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`px-5 py-3.5 border-b border-slate-100 ${
                        active ? "font-semibold text-slate-900" : ""
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}

                <div className="p-4">
                  <Link
                    href={`/${currentLocale}/appointment`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl bg-slate-900 py-3 text-center text-white text-[14px] font-semibold"
                  >
                    {(m.nav?.book as string) ?? "Book Appointment"}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
