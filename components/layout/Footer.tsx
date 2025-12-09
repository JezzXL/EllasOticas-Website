import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Ellas Óticas
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Óculos de sol, grau e lentes das melhores marcas. Proteção máxima
              e visão de alta definição para qualquer aventura.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/produtos"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/loja"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Nossa Loja
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Categorias
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/produtos?categoria=sol"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Óculos de Sol
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos?categoria=grau"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Óculos de Grau
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos?categoria=lentes"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Lentes
                </Link>
              </li>
              <li>
                <Link
                  href="/lancamentos"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Lançamentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>Rua Exemplo, 123 - São Luís, MA</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16} className="shrink-0" />
                <a
                  href="tel:+5598987654321"
                  className="hover:text-gray-900 transition-colors"
                >
                  (98) 98765-4321
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16} className="shrink-0" />
                <a
                  href="mailto:contato@ellasoticas.com"
                  className="hover:text-gray-900 transition-colors"
                >
                  contato@ellasoticas.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© {currentYear} Ellas Óticas. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link
                href="/politica-privacidade"
                className="hover:text-gray-900 transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="hover:text-gray-900 transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}