"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubMenuItem {
  label: string;
  href: string;
  badge?: string;
}

interface DropdownImage {
  src: string;
  alt: string;
  label?: string;
}

interface NavItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
  images?: DropdownImage[];
}

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const navItems: NavItem[] = [
  {
    label: "Óculos de Grau",
    submenu: [
      { label: "Masculino", href: "/produtos?categoria=grau&genero=masculino" },
      { label: "Feminino", href: "/produtos?categoria=grau&genero=feminino" },
      { label: "Infantil", href: "/produtos?categoria=grau&genero=infantil" },
      { label: "Ver mais", href: "/produtos?categoria=grau" },
    ],
    images: [
      { src: "/images/nav/grau-1.jpg", alt: "Stay", label: "STAY" },
      { src: "/images/nav/grau-2.jpg", alt: "Classic", label: "CLASSIC" },
      { src: "/images/nav/grau-3.jpg", alt: "Conexão", label: "CONEXÃO" },
    ],
  },
  {
    label: "Óculos de Sol",
    submenu: [
      { label: "Masculino", href: "/produtos?categoria=sol&genero=masculino" },
      { label: "Feminino", href: "/produtos?categoria=sol&genero=feminino" },
      { label: "Unissex", href: "/produtos?categoria=sol&genero=unissex" },
      { label: "Ver mais", href: "/produtos?categoria=sol" },
    ],
    images: [
      { src: "/images/nav/sol-1.jpg", alt: "Style", label: "STYLE" },
      { src: "/images/nav/sol-2.jpg", alt: "Renaissance", label: "RENAISSANCE" },
      { src: "/images/nav/sol-3.jpg", alt: "Renascer", label: "RENASCER" },
    ],
  },
  {
    label: "Lentes",
    submenu: [
      { label: "Johnson & Johnson", href: "/lentes/johnson-johnson" },
      { label: "Coopervision", href: "/lentes/coopervision" },
      { label: "Ver mais", href: "/lentes" },
    ],
    images: [
      { src: "/images/nav/lentes-1.jpg", alt: "Lentes 1" },
      { src: "/images/nav/lentes-2.jpg", alt: "Lentes 2" },
      { src: "/images/nav/lentes-3.jpg", alt: "Johnson & Johnson" },
    ],
  },
  {
    label: "Lançamentos",
    submenu: [
      { label: "Gassi Eyewear", href: "/lancamentos/gassi" },
      { label: "Oakley", href: "/lancamentos/oakley" },
      { label: "Ray-Ban", href: "/lancamentos/ray-ban" },
      { label: "Carmin", href: "/lancamentos/carmin" },
      { label: "HB", href: "/lancamentos/hb" },
      { label: "Armani Exchange", href: "/lancamentos/armani" },
      { label: "Vogue", href: "/lancamentos/vogue" },
      { label: "Ana hickmann", href: "/lancamentos/ana-hickmann" },
      { label: "Ralph", href: "/lancamentos/ralph" },
      { label: "Ver mais", href: "/lancamentos" },
    ],
    images: [
      { src: "/images/nav/lancamentos-1.jpg", alt: "Nova Cole" },
      { src: "/images/nav/lancamentos-2.jpg", alt: "Fashion" },
      { src: "/images/nav/lancamentos-3.jpg", alt: "Ação" },
    ],
  },
  {
    label: "Marcas",
    submenu: [
      { label: "Ana Hickmann", href: "/marcas/ana-hickmann" },
      { label: "Oakley", href: "/marcas/oakley" },
      { label: "Armani Exchange", href: "/marcas/armani-exchange" },
      { label: "Ralph", href: "/marcas/ralph" },
      { label: "Carmim", href: "/marcas/carmim" },
      { label: "Ray-Ban", href: "/marcas/ray-ban" },
      { label: "Gassi Eyewear", href: "/marcas/gassi" },
      { label: "Vogue", href: "/marcas/vogue" },
      { label: "HB", href: "/marcas/hb" },
      { label: "Ver mais", href: "/marcas" },
    ],
    images: [
      { src: "/images/nav/marcas-brands.jpg", alt: "Grifes - As Melhores Marcas" },
    ],
  },
];

export default function Navigation({ mobile, onItemClick }: NavigationProps) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (href?: string, submenu?: SubMenuItem[]) => {
    if (href) return pathname === href;
    if (submenu) {
      return submenu.some((item) => pathname === item.href);
    }
    return false;
  };

  const handleMouseEnter = (label: string) => {
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-3">
        {navItems.map((item) => (
          <div key={item.label}>
            <div className="text-base font-semibold text-gray-900 mb-2">
              {item.label}
            </div>
            {item.submenu && (
              <div className="ml-4 space-y-2">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    onClick={onItemClick}
                    className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1"
                  >
                    {subItem.label}
                    {subItem.badge && (
                      <span className="ml-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                        {subItem.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Menu Item */}
          <button
            className={cn(
              "text-sm font-medium transition-all duration-300 relative flex items-center gap-1 py-2",
              isActive(item.href, item.submenu)
                ? "text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            {item.label}
            {item.submenu && (
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-300",
                  openMenu === item.label && "rotate-180"
                )}
              />
            )}
          </button>

          {/* Dropdown Menu */}
          {item.submenu && openMenu === item.label && (
            <div className="fixed left-0 right-0 top-20 z-50">
              <div className="bg-white shadow-2xl border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-8 py-12">
                  <div className="grid grid-cols-[300px_1fr] gap-12">
                    {/* Left Side - Menu Items */}
                    <div>
                      <h3 className="text-emerald-300 text-lg font-bold mb-6">
                        {item.label}
                      </h3>
                      <div className="space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              "block py-2 text-sm transition-colors border-b border-gray-200 last:border-0",
                              pathname === subItem.href
                                ? "text-gray-900 font-medium"
                                : "text-gray-600 hover:text-gray-900",
                              subItem.label === "Ver mais" && "text-emerald-300 font-medium border-0 mt-2"
                            )}
                          >
                            {subItem.label}
                            {subItem.badge && (
                              <span className="ml-2 text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">
                                {subItem.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Side - Images */}
                    {item.images && (
                      <div className="grid grid-cols-3 gap-6">
                        {item.images.map((image, index) => (
                          <div
                            key={index}
                            className="relative aspect-square rounded-2xl overflow-hidden group/img cursor-pointer"
                          >
                            {/* Placeholder */}
                            <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-gray-400 text-sm mb-2">
                                  {image.alt}
                                </div>
                                {image.label && (
                                  <div className="text-2xl font-bold text-gray-600">
                                    {image.label}
                                  </div>
                                )}
                              </div>
                            </div>
                            {/* 
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                            />
                            {image.label && (
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <span className="text-white text-2xl font-bold tracking-wider">
                                  {image.label}
                                </span>
                              </div>
                            )}
                            */}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}