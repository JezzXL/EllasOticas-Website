"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { fadeInUp } from "@/lib/gsap/animations";
import type { Brand } from "@/types";

const brands: Brand[] = [
  {
    id: "crizal",
    name: "Crizal",
    logo: "/images/brands/crizal.webp",
  },
  {
    id: "hoya",
    name: "Hoya",
    logo: "/images/brands/hoya.webp",
  },
  {
    id: "rodenstock",
    name: "Rodenstock",
    logo: "/images/brands/rodenstock.webp",
  },
  {
    id: "transitions",
    name: "Transitions",
    logo: "/images/brands/transitions.webp",
  },
  {
    id: "varilux",
    name: "Varilux",
    logo: "/images/brands/varilux.webp",
  },
];

export default function Brands() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      fadeInUp(titleRef.current, { duration: 0.8 });
    }
    if (subtitleRef.current) {
      fadeInUp(subtitleRef.current, { duration: 0.8, delay: 0.2 });
    }
    if (carouselRef.current) {
      fadeInUp(carouselRef.current, { duration: 0.8, delay: 0.4 });
    }
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? brands.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === brands.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Melhores marcas de lentes
          </h2>
          <p ref={subtitleRef} className="text-gray-600 text-lg">
            Seleção exclusiva das melhores marcas para você.
          </p>
        </div>

        {/* Brands Carousel */}
        <div ref={carouselRef} className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Marca anterior"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Próxima marca"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Brands Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / brands.length)}%)`,
              }}
            >
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/5 px-4"
                >
                  <div className="bg-gray-50 rounded-xl p-8 h-40 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                    {/* Placeholder - substituir por Image real */}
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={150}
                      height={60}
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gray-900 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para marca ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/marcas"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Ver Mais Marcas
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}