"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Anydesk", href: "/anydesk" },
  { name: "Chamados", href: "/chamados" },
  { name: "Clientes", href: "/clientes" },
  { name: "Perfil", href: "/perfil",},
];

export function Header() {
  const pathname = usePathname();

  const baseLinkClasses =
    "text-[#52E8FB] transition font-medium duration-300 ease-in-out p-2 rounded-md ";

  const activeLinkClasses = "text-[#52E8FB] bg-[#113D4B] font-medium";

  const inactive = "text-[#F6F6F6] transition font-medium duration-300 ease-in-out hover:text-[#FDFDFD] p-1 hover:bg-[#252F3D]"

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;

    return `${baseLinkClasses} ${isActive ? activeLinkClasses : inactive }`;
  };

  return (
    <header className="flex bg-[#151D27] p-5 justify-between items-center">
      <h1 className="text-[#F6F6F6] text-2xl font-bold">CSTec</h1>

      <div className="flex space-x-10 mr-10">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={getLinkClasses(item.href)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
