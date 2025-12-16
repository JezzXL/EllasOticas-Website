"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Heart, SlidersHorizontal, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { staggerOnScroll } from "@/lib/gsap/scrollTrigger";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  gender: string;
  isNew?: boolean;
}

// Mock de produtos
const allProducts: Product[] = [
  {
    id: "1",
    name: "ARMAÇÃO PARA ÓCULOS DE GRAU FEMININO IVETE SANGALO METAL REDONDO DOURADO",
    brand: "Ivete Sangalo",
    price: 499.98,
    image: "/images/products/oculos-1.png",
    category: "grau",
    gender: "feminino",
    isNew: true,
  },
  {
    id: "2",
    name: "ARMAÇÃO PARA ÓCULOS DE GRAU FEMININO CHILLI BEANS MULTI POLARIZADO AZUL",
    brand: "Chilli Beans",
    price: 499.98,
    image: "/images/products/oculos-2.png",
    category: "grau",
    gender: "feminino",
    isNew: true,
  },
  {
    id: "3",
    name: "ARMAÇÃO PARA ÓCULOS DE GRAU FEMININO CHILLI BEANS MULTI POLARIZADO BEGE",
    brand: "Chilli Beans",
    price: 499.98,
    image: "/images/products/oculos-3.png",
    category: "grau",
    gender: "feminino",
    isNew: true,
  },
  {
    id: "4",
    name: "ÓCULOS DE SOL MASCULINO CHILLI BEANS REDONDO MARROM CLARO",
    brand: "Chilli Beans",
    price: 299.98,
    image: "/images/products/oculos-4.png",
    category: "sol",
    gender: "masculino",
    isNew: true,
  },
  {
    id: "5",
    name: "ÓCULOS DE SOL FEMININO RAY-BAN AVIADOR DOURADO",
    brand: "Ray-Ban",
    price: 599.98,
    oldPrice: 799.98,
    image: "/images/products/oculos-5.png",
    category: "sol",
    gender: "feminino",
  },
  {
    id: "6",
    name: "ARMAÇÃO MASCULINA OAKLEY ESPORTIVO PRETO",
    brand: "Oakley",
    price: 799.98,
    image: "/images/products/oculos-6.png",
    category: "grau",
    gender: "masculino",
  },
  {
    id: "7",
    name: "ÓCULOS INFANTIL COLORIDO RESISTENTE",
    brand: "Kids Eyewear",
    price: 199.98,
    image: "/images/products/oculos-7.png",
    category: "grau",
    gender: "infantil",
    isNew: true,
  },
  {
    id: "8",
    name: "ÓCULOS DE SOL UNISSEX WAYFARER PRETO",
    brand: "Ray-Ban",
    price: 549.98,
    image: "/images/products/oculos-8.png",
    category: "sol",
    gender: "unissex",
  },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "sol", label: "Óculos de Sol" },
  { id: "grau", label: "Óculos de Grau" },
  { id: "lentes", label: "Lentes de Contato" },
];

const genders = [
  { id: "all", label: "Todos" },
  { id: "masculino", label: "Masculino" },
  { id: "feminino", label: "Feminino" },
  { id: "infantil", label: "Infantil" },
  { id: "unissex", label: "Unissex" },
];

const brands = [
  "Todas",
  "Ray-Ban",
  "Oakley",
  "Chilli Beans",
  "Ivete Sangalo",
  "Ana Hickmann",
  "Armani Exchange",
  "Kids Eyewear",
];

const priceRanges = [
  { id: "all", label: "Todos os preços" },
  { id: "0-200", label: "Até R$ 200" },
  { id: "200-400", label: "R$ 200 - R$ 400" },
  { id: "400-600", label: "R$ 400 - R$ 600" },
  { id: "600+", label: "Acima de R$ 600" },
];

const sortOptions = [
  { id: "relevance", label: "Mais Relevantes" },
  { id: "price-asc", label: "Menor Preço" },
  { id: "price-desc", label: "Maior Preço" },
  { id: "newest", label: "Lançamentos" },
  { id: "name", label: "A-Z" },
];

export default function ProdutosPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("Todas");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [showSortMenu, setShowSortMenu] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  // Filtragem de produtos
  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory)
      return false;
    if (selectedGender !== "all" && product.gender !== selectedGender)
      return false;
    if (selectedBrand !== "Todas" && product.brand !== selectedBrand)
      return false;

    // Filtro de preço
    if (selectedPrice !== "all") {
      if (selectedPrice === "0-200" && product.price > 200) return false;
      if (
        selectedPrice === "200-400" &&
        (product.price < 200 || product.price > 400)
      )
        return false;
      if (
        selectedPrice === "400-600" &&
        (product.price < 400 || product.price > 600)
      )
        return false;
      if (selectedPrice === "600+" && product.price < 600) return false;
    }

    return true;
  });

  // Ordenação
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Animação dos produtos
  useEffect(() => {
    if (productsRef.current) {
      const cards = productsRef.current.querySelectorAll(".product-card");
      staggerOnScroll(cards, {
        duration: 0.6,
        stagger: 0.1,
      });
    }
  }, [sortedProducts]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedGender("all");
    setSelectedBrand("Todas");
    setSelectedPrice("all");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedGender !== "all" ||
    selectedBrand !== "Todas" ||
    selectedPrice !== "all";

  return (
    <main className="pt-24 pb-20">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h1>
          <p className="text-lg text-gray-600">
            Encontre o óculos perfeito para você
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="md"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal size={18} />
              Filtros
              {hasActiveFilters && (
                <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">
                  •
                </span>
              )}
            </Button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                Limpar filtros
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {sortedProducts.length} produtos
            </span>

            <div className="relative">
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {sortOptions.find((opt) => opt.id === sortBy)?.label}
                <ChevronDown size={16} />
              </button>

              {showSortMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        setShowSortMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        sortBy === option.id
                          ? "bg-gray-100 text-gray-900 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block w-64 shrink-0 space-y-8`}
          >
            {/* Categorias */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Categoria
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === cat.id
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gênero */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Gênero</h3>
              <div className="space-y-2">
                {genders.map((gender) => (
                  <button
                    key={gender.id}
                    onClick={() => setSelectedGender(gender.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedGender === gender.id
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {gender.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Marcas */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Marca</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedBrand === brand
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Preço */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Preço</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPrice(range.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedPrice === range.id
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600 mb-4">
                  Nenhum produto encontrado
                </p>
                <Button onClick={clearFilters}>Limpar Filtros</Button>
              </div>
            ) : (
              <div
                ref={productsRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {sortedProducts.map((product) => {
                  const installment = {
                    installments: 6,
                    value: product.price / 6,
                  };

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
                            NOVO
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
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-gray-400 text-sm">
                              {product.name.substring(0, 20)}...
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Product Info */}
                      <div className="p-6 text-center">
                        {/* Brand Badge */}
                        <div className="mb-3">
                          <span className="text-xs font-bold text-gray-500 uppercase">
                            {product.brand}
                          </span>
                        </div>

                        {/* Product Name */}
                        <Link href={`/produtos/${product.id}`}>
                          <h3 className="text-sm font-medium text-gray-900 mb-4 hover:text-gray-600 transition-colors line-clamp-2 min-h-10">
                            {product.name}
                          </h3>
                        </Link>

                        {/* Price */}
                        <div className="space-y-1">
                          {product.oldPrice && (
                            <p className="text-sm text-gray-400 line-through">
                              {formatPrice(product.oldPrice)}
                            </p>
                          )}
                          <p className="text-2xl font-bold text-gray-900">
                            {formatPrice(product.price)}
                          </p>
                          <p className="text-xs text-gray-500">
                            ou {installment.installments}x{" "}
                            {formatPrice(installment.value)}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}