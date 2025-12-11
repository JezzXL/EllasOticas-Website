"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { staggerOnScroll } from "@/lib/gsap/scrollTrigger";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

// Dados mock dos produtos
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "ARMAÇÃO PARA ÓCULOS DE GRAU FEMININO IVETE SANGALO METAL REDONDO DOURADO",
    brand: "Ivete Sangalo",
    price: 499.98,
    oldPrice: undefined,
    image: "/images/products/oculos-1.png",
    category: "grau",
    inStock: true,
    isNew: true,
  },
  {
    id: "2",
    name: "ARMAÇÃO PARA ÓCULOS DE GRAU FEMININO CHILLI BEANS MULTI POLARIZADO AZUL",
    brand: "Chilli Beans",
    price: 499.98,
    oldPrice: undefined,
    image: "/images/products/oculos-2.png",
    category: "grau",
    inStock: true,
    isNew: true,
  },
  {
    id: "3",
    name: "ARMAÇÃO PARA ÓCULOS DE GRAU FEMININO CHILLI BEANS MULTI POLARIZADO BEGE",
    brand: "Chilli Beans",
    price: 499.98,
    oldPrice: undefined,
    image: "/images/products/oculos-3.png",
    category: "grau",
    inStock: true,
    isNew: true,
  },
  {
    id: "4",
    name: "ÓCULOS DE SOL MASCULINO CHILLI BEANS REDONDO MARROM CLARO",
    brand: "Chilli Beans",
    price: 299.98,
    oldPrice: undefined,
    image: "/images/products/oculos-4.png",
    category: "sol",
    inStock: true,
    isNew: true,
  },
];

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".product-card");
      staggerOnScroll(cards, {
        duration: 0.6,
        stagger: 0.15,
      });
    }
  }, []);

  const calculateInstallment = (price: number, installments: number = 6) => {
    const installmentValue = price / installments;
    return {
      installments,
      value: installmentValue,
    };
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm mb-3 uppercase tracking-wider">
            lançamentos da semana
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            NOVOS MODELOS
          </h2>
          <Link
            href="/lancamentos"
            className="text-yellow-500 hover:text-yellow-600 font-medium text-sm uppercase tracking-wide transition-colors inline-flex items-center gap-1"
          >
            todos os lançamentos
            <span className="text-xs">→</span>
          </Link>
        </div>

        {/* Products Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => {
            const installment = calculateInstallment(product.price);
            
            return (
              <Card
                key={product.id}
                className="product-card group relative bg-white"
                hover
                padding="none"
              >
                {/* Badge */}
                {product.isNew && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      DEAL
                    </div>
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  className="absolute top-4 left-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  aria-label="Adicionar aos favoritos"
                >
                  <Heart size={18} className="text-gray-600" />
                </button>

                {/* Product Image */}
                <Link href={`/produtos/${product.id}`}>
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    {/* Placeholder - substituir por Image real */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-400 text-sm">
                        Imagem do produto
                      </div>
                    </div>
                    {/*
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    />
                    */}
                  </div>
                </Link>

                {/* Product Info */}
                <div className="p-6 text-center">
                  {/* Brand Badge */}
                  {product.brand === "Ivete Sangalo" && (
                    <div className="inline-block mb-3">
                      <span className="text-xs font-bold text-orange-500 border border-orange-500 px-3 py-1 rounded-full uppercase">
                        IVETE SANGALO
                      </span>
                    </div>
                  )}

                  {/* Product Name */}
                  <Link href={`/produtos/${product.id}`}>
                    <h3 className="text-sm font-medium text-gray-900 mb-4 hover:text-gray-600 transition-colors line-clamp-2 min-h-[2.5rem]">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </p>
                    <p className="text-xs text-gray-500">
                      ou {installment.installments}x {formatPrice(installment.value)}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Página anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-black text-white text-sm font-medium">
              01
            </button>
            <span className="text-gray-400 text-sm">de</span>
            <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-300 transition-colors">
              08
            </button>
          </div>

          <button
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            aria-label="Próxima página"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
}