"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { MapPin } from "lucide-react";
import { fadeInUp } from "@/lib/gsap/animations";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const visitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      if (taglineRef.current) {
        tl.add(
          fadeInUp(taglineRef.current, {
            duration: 0.8,
            ease: "power3.out",
          })
        );
      }

      if (titleRef.current) {
        tl.add(
          fadeInUp(titleRef.current, {
            duration: 1,
            ease: "power3.out",
          }),
          "-=0.5"
        );
      }

      if (descriptionRef.current) {
        tl.add(
          fadeInUp(descriptionRef.current, {
            duration: 0.8,
            ease: "power3.out",
          }),
          "-=0.6"
        );
      }

      if (buttonsRef.current) {
        tl.add(
          fadeInUp(buttonsRef.current, {
            duration: 0.8,
            ease: "power3.out",
          }),
          "-=0.5"
        );
      }

      if (visitRef.current) {
        tl.add(
          fadeInUp(visitRef.current, {
            duration: 0.8,
            ease: "power3.out",
          }),
          "-=0.3"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-start justify-between overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20">
        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-white text-sm md:text-base font-light mb-8 tracking-wide"
        >
          Óculos de sol, grau e lentes das melhores marcas.
        </p>

        {/* Main Title */}
        <div ref={titleRef} className="mb-8">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            PROTEÇÃO MÁXIMA.
            <br />
            VISÃO DE ALTA
            <br />
            DEFINIÇÃO.
          </h1>
        </div>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-white text-base md:text-lg max-w-2xl mb-12 leading-relaxed font-light"
        >
          Seus olhos merecem o melhor. Nossos óculos de sol combinam lentes de
          alta performance com a mais recente tecnologia UV, garantindo
          conforto e segurança em qualquer aventura. Cuide da sua saúde visual
          com estilo.
        </p>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap gap-6">
          <Link
            href="/produtos?categoria=sol"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Ver Coleção de Sol
          </Link>
          <Link
            href="/lancamentos"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Ver Lançamentos
          </Link>
        </div>
      </div>

      {/* Visit Store Section */}
      <div
        ref={visitRef}
        className="relative z-10 w-full bg-gray-100/95 backdrop-blur-sm py-8"
      >
        <div className="px-6 md:px-12 lg:px-20 flex items-center justify-center gap-3">
          <span className="text-gray-800 text-lg md:text-xl font-semibold tracking-wide">
            VISITE NOSSA LOJA
          </span>
          <MapPin className="text-gray-800" size={24} />
        </div>
      </div>
    </section>
  );
}