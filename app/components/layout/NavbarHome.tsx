"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useMessages } from "../../components/shared/I18nProvider";

const NAV_LINKS = [
  { key: "home", href: "" },
  { key: "services", href: "services" },
  { key: "articles", href: "articles" },
  { key: "about", href: "about" },
  { key: "gallery", href: "gallery" },
] as const;

function LanguageSwitch({
  scrolled,
  locale,
  onSwitch,
}: {
  scrolled: boolean;
  locale: "id" | "en";
  onSwitch: (next: "id" | "en") => void;
}) {
  const activeIsID = locale === "id";
  const m = useMessages();

  return (
    <div className="flex items-center gap-2">
      {/* Label */}
      <span
        className={`
          hidden lg:block text-[12px] font-semibold
          ${scrolled ? "text-slate-700" : "text-slate-700"}
        `}
      >
        {(m.nav?.languageLabel as string) ?? "Bahasa / Language"}
      </span>

      {/* Switch container */}
      <div
        className={`
          relative flex items-center rounded-full p-1 border
          select-none transition-all duration-300
          ${scrolled ? "bg-white border-slate-200 shadow-sm" : "bg-white border-slate-200 shadow-sm"}
        `}
        aria-label="Language switch"
      >
        {/* Sliding indicator */}
        <span
          className={`
            absolute top-1 bottom-1 left-1
            w-[44px] rounded-full
            transition-transform duration-300 ease-out
            ${scrolled ? "bg-slate-900" : "bg-slate-900"}
            ${activeIsID ? "translate-x-0" : "translate-x-[44px]"}
          `}
        />

        <button
          onClick={() => onSwitch("id")}
          className={`
            relative z-10 w-[44px] h-[30px]
            rounded-full text-[12px] font-bold cursor-pointer
            transition-colors duration-300
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
            rounded-full text-[12px] font-bold cursor-pointer
            transition-colors duration-300
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

export default function NavbarHome() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useParams() as { locale: string };
  const m = useMessages();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const currentLocale: "id" | "en" = locale === "id" ? "id" : "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pathWithoutLocale = useMemo(() => {
    if (!pathname) return "/";
    return pathname.replace(/^\/(en|id)(\/|$)/, "/");
  }, [pathname]);

  const switchLocale = (nextLocale: "en" | "id") => {
    if (nextLocale === currentLocale) return;
    setOpen(false);

    const nextPath = `/${nextLocale}${
      pathWithoutLocale === "/" ? "" : pathWithoutLocale
    }`;
    router.push(nextPath);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
         transition-all duration-300
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200"
            : "bg-transparent"
        }
      `}
    >
      {/* ✅ Smaller horizontal padding */}
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
              className="shrink-0"
              priority
            />

            <span
              className={`
                block text-[12px] sm:text-[13px]
                font-medium tracking-wide font-sans
                transition-colors
                ${scrolled ? "text-slate-900" : "text-slate-900"}
                whitespace-nowrap
              `}
            >
              {/* Mobile */}
              <span className="inline sm:hidden">NOTARIS IIP AFFADIN</span>

              {/* Tablet/Desktop */}
              <span className="hidden sm:inline">
                NOTARIS IIP AFFADIN, S.H., M.Kn
              </span>
            </span>
          </Link>

          {/* ✅ push right section to far right on mobile */}
          <div className="flex-1 lg:hidden" />

          {/* DESKTOP NAV */}
          <nav
            className={`
              hidden lg:flex flex-1 items-center justify-center
              gap-9 text-[13px]
              transition-colors
              ${scrolled ? "text-slate-700" : "text-slate-700"}
            `}
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
                  className={`
                    relative transition-all
                    hover:opacity-80
                    ${active ? "font-semibold text-slate-900" : ""}
                  `}
                >
                  {label}

                  {active && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-slate-900" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3 lg:min-w-[320px] justify-end">
            <LanguageSwitch
              scrolled={scrolled}
              locale={currentLocale}
              onSwitch={switchLocale}
            />

            <Link
              href={`/${currentLocale}/appointment`}
              className={`
                hidden lg:flex items-center justify-center
                rounded-full px-4 py-2
                text-[13px] font-semibold
                transition-all duration-200
                hover:-translate-y-[1px]
                active:translate-y-0
                w-[160px]
                ${
                  scrolled
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }
              `}
            >
              {(m.nav?.book as string) ?? "Book Appointment"}
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className={`
                lg:hidden p-2 text-lg
                transition cursor-pointer
                ${scrolled ? "text-slate-900" : "text-slate-900"}
              `}
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className={`lg:hidden pb-5 ${scrolled ? "" : "mt-2"}`}>
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
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
                      className={`
                        px-5 py-3.5 border-b border-slate-100
                        transition hover:bg-slate-50
                        ${active ? "font-semibold text-slate-900" : ""}
                      `}
                    >
                      {label}
                    </Link>
                  );
                })}

                <div className="p-4">
                  <Link
                    href={`/${currentLocale}/appointment`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl bg-slate-900 py-3 text-center text-white text-[14px] font-semibold hover:bg-slate-800 transition"
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
