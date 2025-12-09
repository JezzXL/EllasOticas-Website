"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import Container from "@/components/ui/Container";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";
import gsap from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Detecta scroll para adicionar backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animação de entrada do header
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Ellas Óticas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Minha conta"
            >
              <User size={20} />
            </button>
            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative"
              aria-label="Carrinho"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <Container>
            <div className="py-4 space-y-4">
              <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />

              {/* Mobile Actions */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <button
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="Buscar"
                >
                  <Search size={20} />
                  <span>Buscar</span>
                </button>
                <button
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="Minha conta"
                >
                  <User size={20} />
                  <span>Conta</span>
                </button>
                <button
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors relative"
                  aria-label="Carrinho"
                >
                  <ShoppingBag size={20} />
                  <span>Carrinho</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">
                    0
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}