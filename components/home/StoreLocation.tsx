"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeInLeft, fadeInRight } from "@/lib/gsap/animations";

export default function StoreLocation() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      fadeInLeft(contentRef.current, { duration: 1, delay: 0.3 });
    }
    if (mapRef.current) {
      fadeInRight(mapRef.current, { duration: 1, delay: 0.3 });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visite Nossa Loja
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Venha nos conhecer pessoalmente e experimente nossos óculos com a
            ajuda de nossos especialistas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Informações da Loja */}
          <div ref={contentRef} className="space-y-8">
            {/* Endereço */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Endereço
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Rua do Norte, 190 - Centro
                  <br />
                  São Luís - MA, 65015-330
                </p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Horário de Funcionamento
                </h3>
                <div className="text-gray-600 space-y-1">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Telefone
                </h3>
                <a
                  href="tel:+5598987654321"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  (98) 98765-4321
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  E-mail
                </h3>
                <a
                  href="mailto:contato@ellasoticas.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  contato@ellasoticas.com
                </a>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Navigation size={20} />
                  Como Chegar
                </Button>
              </a>
              <Link href="/contato" className="flex-1">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </div>

          {/* Mapa */}
          <div ref={mapRef} className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455.3055187373931!2d-44.29733231605096!3d-2.5336882283348685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68f5c30b1cc3f%3A0xd2c4b923d5c80c40!2sELASOTICA!5e1!3m2!1spt-BR!2sbr!4v1765918874415!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Casa Econômica"
                />

              {/* Overlay com marca */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Ellas Óticas
                </p>
                <p className="text-xs text-gray-600">
                  São Luís - MA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Agende sua Visita
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e agende um horário para conhecer nossa
            loja e receber atendimento personalizado.
          </p>
          <Link href="/contato">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Agendar Agora
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}