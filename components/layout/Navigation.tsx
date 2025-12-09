"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const navLinks: NavLink[] = [
  { label: "Óculos de Sol", href: "/produtos?categoria=sol" },
  { label: "Óculos de Grau", href: "/produtos?categoria=grau" },
  { label: "Lentes", href: "/produtos?categoria=lentes" },
  { label: "Lançamentos", href: "/lancamentos" },
  { label: "Marcas", href: "/marcas" },
];

export default function Navigation({ mobile, onItemClick }: NavigationProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href);
  };

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-3">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onItemClick}
            className={cn(
              "text-base font-medium transition-colors py-2",
              isActive(link.href)
                ? "text-gray-900 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-all duration-300 relative group",
            isActive(link.href)
              ? "text-gray-900"
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          {link.label}
          <span
            className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300",
              isActive(link.href)
                ? "w-full"
                : "w-0 group-hover:w-full"
            )}
          />
        </Link>
      ))}
    </nav>
  );
}