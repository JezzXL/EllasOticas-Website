"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Heart, 
  Share2, 
  ShoppingBag, 
  Truck, 
  Shield, 
  RefreshCcw,
  Star,
  Check
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/gsap/animations";

// Mock de produto
const product = {
  id: "1",
  name: "ARMAÇÃO PARA ÓCULOS DE GRAU FEMININO IVETE SANGALO METAL REDONDO DOURADO",
  brand: "Ivete Sangalo",
  price: 499.98,
  oldPrice: 699.98,
  rating: 4.8,
  reviews: 127,
  inStock: true,
  sku: "IVT-001-DOU",
  images: [
    "/images/products/oculos-1-1.png",
    "/images/products/oculos-1-2.png",
    "/images/products/oculos-1-3.png",
    "/images/products/oculos-1-4.png",
  ],
  colors: [
    { id: "dourado", name: "Dourado", hex: "#D4AF37" },
    { id: "prateado", name: "Prateado", hex: "#C0C0C0" },
    { id: "rose", name: "Rose Gold", hex: "#B76E79" },
  ],
  sizes: ["P", "M", "G"],
  description: "Armação sofisticada em metal com design redondo atemporal. Perfeita para quem busca elegância e conforto no dia a dia. Design assinado por Ivete Sangalo, combinando estilo e funcionalidade.",
  features: [
    "Material: Metal de alta qualidade",
    "Acabamento premium com banho dourado",
    "Design redondo clássico",
    "Hastes flexíveis para maior conforto",
    "Ponte ajustável",
    "Proteção UV 400",
    "Peso: 18g (ultra leve)",
    "Largura da lente: 52mm",
  ],
  technicalSpecs: [
    { label: "Formato", value: "Redondo" },
    { label: "Material da Armação", value: "Metal" },
    { label: "Material das Lentes", value: "Acetato" },
    { label: "Gênero", value: "Feminino" },
    { label: "Tipo", value: "Óculos de Grau" },
    { label: "Garantia", value: "1 ano" },
  ]
};

// Produtos relacionados
const relatedProducts = [
  {
    id: "2",
    name: "ARMAÇÃO CHILLI BEANS AZUL",
    brand: "Chilli Beans",
    price: 499.98,
    image: "/images/products/oculos-2.png",
  },
  {
    id: "3",
    name: "ARMAÇÃO CHILLI BEANS BEGE",
    brand: "Chilli Beans",
    price: 499.98,
    image: "/images/products/oculos-3.png",
  },
  {
    id: "4",
    name: "ÓCULOS DE SOL MASCULINO",
    brand: "Chilli Beans",
    price: 299.98,
    image: "/images/products/oculos-4.png",
  },
  {
    id: "5",
    name: "RAY-BAN AVIADOR",
    brand: "Ray-Ban",
    price: 599.98,
    image: "/images/products/oculos-5.png",
  },
];

export default function ProdutoDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      fadeInLeft(imageRef.current, { duration: 0.8 });
    }
    if (infoRef.current) {
      fadeInRight(infoRef.current, { duration: 0.8, delay: 0.2 });
    }
    if (tabsRef.current) {
      fadeInUp(tabsRef.current, { duration: 0.8, delay: 0.4 });
    }
  }, []);

  const installment = {
    installments: 6,
    value: product.price / 6,
  };

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <main className="pt-24 pb-20">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/produtos" className="hover:text-gray-900">Produtos</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{product.brand}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images Gallery */}
          <div ref={imageRef} className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              {discount > 0 && (
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                  -{discount}%
                </div>
              )}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-400">Imagem Principal {selectedImage + 1}</div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden transition-all ${
                    selectedImage === index
                      ? "ring-2 ring-black"
                      : "hover:ring-2 hover:ring-gray-300"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                    {index + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div ref={infoRef} className="space-y-6">
            {/* Brand & Name */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-baseline gap-3 mb-2">
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
                <span className="text-4xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                ou {installment.installments}x de{" "}
                <span className="font-semibold">{formatPrice(installment.value)}</span>{" "}
                sem juros
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Cor: {product.colors.find(c => c.id === selectedColor)?.name}
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color.id
                        ? "border-black scale-110"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Tamanho: {selectedSize}
              </label>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-16 h-12 rounded-lg border-2 font-semibold transition-all ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Quantidade
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                
                {product.inStock && (
                  <span className="flex items-center gap-2 text-sm text-green-600 font-medium">
                    <Check size={16} />
                    Em estoque
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                Adicionar ao Carrinho
              </Button>
              
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-4 rounded-full border-2 transition-all ${
                  isFavorite
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <Heart
                  size={24}
                  className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}
                />
              </button>
              
              <button className="p-4 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors">
                <Share2 size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="flex items-start gap-3">
                <Truck className="text-gray-600 shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-sm">Frete Grátis</p>
                  <p className="text-xs text-gray-600">Acima de R$ 299</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="text-gray-600 shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-sm">Garantia</p>
                  <p className="text-xs text-gray-600">1 ano de garantia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <RefreshCcw className="text-gray-600 shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-sm">Troca Grátis</p>
                  <p className="text-xs text-gray-600">7 dias para trocar</p>
                </div>
              </div>
            </div>

            {/* SKU */}
            <p className="text-sm text-gray-500">SKU: {product.sku}</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div ref={tabsRef} className="mb-20">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex gap-8">
              {["description", "specs", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-semibold transition-colors relative ${
                    activeTab === tab
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab === "description" && "Descrição"}
                  {tab === "specs" && "Especificações"}
                  {tab === "reviews" && "Avaliações"}
                  
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="prose max-w-none">
            {activeTab === "description" && (
              <div>
                <p className="text-gray-600 text-lg mb-6">{product.description}</p>
                
                <h3 className="text-xl font-bold mb-4">Características</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={20} className="text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "specs" && (
              <div>
                <h3 className="text-xl font-bold mb-6">Especificações Técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.technicalSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-900">{spec.label}</span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center gap-8 mb-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">{product.rating}</div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{product.reviews} avaliações</p>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  Ainda não há avaliações para este produto. Seja o primeiro a avaliar!
                </p>
                
                <Button variant="outline" size="md" className="mt-4">
                  Escrever Avaliação
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Produtos Relacionados</h2>
            <Link href="/produtos" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Ver todos
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} hover padding="none">
                <Link href={`/produtos/${relatedProduct.id}`}>
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <div className="text-gray-400 text-xs text-center p-4">
                      {relatedProduct.name}
                    </div>
                  </div>
                  
                  <div className="p-4 text-center">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                      {relatedProduct.brand}
                    </p>
                    <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}