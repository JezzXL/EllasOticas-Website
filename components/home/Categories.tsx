"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { staggerOnScroll } from "@/lib/gsap/scrollTrigger";

interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  image: string;
  color: string;
}

const categories: CategoryCard[] = [
  {
    id: "masculino",
    title: "MASCULINO",
    subtitle: "Estilo e proteção para ele",
    href: "/produtos?genero=masculino",
    image: "/images/categories/masculino.png",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "feminino",
    title: "FEMININO",
    subtitle: "Elegância e sofisticação",
    href: "/produtos?genero=feminino",
    image: "/images/categories/feminino.png",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "infantil",
    title: "INFANTIL",
    subtitle: "Proteção para os pequenos",
    href: "/produtos?genero=infantil",
    image: "/images/categories/infantil.png",
    color: "from-yellow-500 to-orange-600",
  },
];

export default function Categories() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".category-card");
      staggerOnScroll(cards, {
        duration: 0.8,
        stagger: 0.2,
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Escolha seu Estilo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre o óculos perfeito para você. Temos opções para todos os
            estilos e idades.
          </p>
        </div>

        {/* Categories Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="category-card group"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0 bg-gray-200">
                  {/* Placeholder - substituir por Image real */}
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                    <div className="text-gray-400 text-sm">
                      Imagem {category.title}
                    </div>
                  </div>
                  {/*
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  */}
                </div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="group-hover:-translate-y-2.5 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                      {category.subtitle}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                      <span>Ver coleção</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Não encontrou o que procura?
          </p>
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Ver todos os produtos
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}