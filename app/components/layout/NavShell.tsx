"use client";

import { usePathname, useParams } from "next/navigation";
import Navbar from "./Navbar";
import NavbarHome from "./NavbarHome";

export default function NavShell() {
  const pathname = usePathname();
  const { locale } = useParams() as { locale: string };

  const isHome = pathname === `/${locale}`;

  return isHome ? <NavbarHome /> : <Navbar />;
}
