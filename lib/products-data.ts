export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  inStock: boolean;
  sku: string;
  category: string;
  gender: string;
  images: string[];
  colors?: Array<{
    id: string;
    name: string;
    hex: string;
  }>;
  sizes?: string[];
  description: string;
  features?: string[];
  technicalSpecs?: Array<{
    label: string;
    value: string;
  }>;
}

export const productsDatabase: Record<string, Product> = {
  "1": {
    id: "1",
    name: "ARMAÇÃO PARA ÓCULOS DE GRAU FEMININO IVETE SANGALO METAL REDONDO DOURADO",
    brand: "Ivete Sangalo",
    price: 499.98,
    oldPrice: 699.98,
    rating: 4.8,
    reviews: 127,
    inStock: true,
    sku: "IVT-001-DOU",
    category: "grau",
    gender: "feminino",
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
  },

  "2": {
    id: "2",
    name: "ARMAÇÃO PARA ÓCULOS DE GRAU FEMININO CHILLI BEANS MULTI POLARIZADO AZUL",
    brand: "Chilli Beans",
    price: 499.98,
    rating: 4.5,
    reviews: 89,
    inStock: true,
    sku: "CHB-002-AZL",
    category: "grau",
    gender: "feminino",
    images: ["/images/products/oculos-2.png"],
    colors: [
      { id: "azul", name: "Azul", hex: "#0066CC" },
      { id: "preto", name: "Preto", hex: "#000000" },
    ],
    sizes: ["P", "M", "G"],
    description: "Armação moderna e versátil com design multi polarizado. Ideal para quem busca estilo contemporâneo.",
    features: [
      "Material: Acetato premium",
      "Lentes polarizadas",
      "Design moderno",
      "Hastes ajustáveis",
    ],
    technicalSpecs: [
      { label: "Formato", value: "Quadrado" },
      { label: "Material", value: "Acetato" },
      { label: "Gênero", value: "Feminino" },
    ]
  },

  "3": {
    id: "3",
    name: "ARMAÇÃO PARA ÓCULOS DE GRAU FEMININO CHILLI BEANS MULTI POLARIZADO BEGE",
    brand: "Chilli Beans",
    price: 499.98,
    rating: 4.7,
    reviews: 95,
    inStock: true,
    sku: "CHB-003-BGE",
    category: "grau",
    gender: "feminino",
    images: ["/images/products/oculos-3.png"],
    colors: [
      { id: "bege", name: "Bege", hex: "#D4C4A8" },
      { id: "marrom", name: "Marrom", hex: "#8B4513" },
    ],
    sizes: ["P", "M", "G"],
    description: "Armação elegante em tons neutros para look sofisticado. Versatilidade e conforto para o dia inteiro.",
    features: [
      "Material: Acetato de celulose",
      "Design atemporal",
      "Leve e confortável",
      "Acabamento premium",
    ],
    technicalSpecs: [
      { label: "Formato", value: "Retangular" },
      { label: "Material", value: "Acetato" },
      { label: "Gênero", value: "Feminino" },
    ]
  },

  "4": {
    id: "4",
    name: "ÓCULOS DE SOL MASCULINO CHILLI BEANS REDONDO MARROM CLARO",
    brand: "Chilli Beans",
    price: 299.98,
    oldPrice: 399.98,
    rating: 4.6,
    reviews: 142,
    inStock: true,
    sku: "CHB-004-MAR",
    category: "sol",
    gender: "masculino",
    images: ["/images/products/oculos-4.png"],
    colors: [
      { id: "marrom", name: "Marrom", hex: "#8B7355" },
      { id: "preto", name: "Preto", hex: "#000000" },
      { id: "verde", name: "Verde", hex: "#2F4F2F" },
    ],
    sizes: ["M", "G"],
    description: "Óculos de sol masculino com estilo clássico e proteção UV total. Design redondo moderno para diversos tipos de rosto.",
    features: [
      "Proteção UV 400",
      "Lentes polarizadas",
      "Armação resistente",
      "Design unissex",
      "Estojo incluso",
    ],
    technicalSpecs: [
      { label: "Formato", value: "Redondo" },
      { label: "Proteção UV", value: "400" },
      { label: "Polarizado", value: "Sim" },
      { label: "Gênero", value: "Masculino" },
    ]
  },

  "5": {
    id: "5",
    name: "ÓCULOS DE SOL FEMININO RAY-BAN AVIADOR DOURADO",
    brand: "Ray-Ban",
    price: 599.98,
    oldPrice: 799.98,
    rating: 4.9,
    reviews: 231,
    inStock: true,
    sku: "RB-005-AVI",
    category: "sol",
    gender: "feminino",
    images: ["/images/products/oculos-5.png"],
    colors: [
      { id: "dourado", name: "Dourado", hex: "#FFD700" },
      { id: "prateado", name: "Prateado", hex: "#C0C0C0" },
    ],
    sizes: ["M", "G"],
    description: "O icônico Ray-Ban Aviador com design atemporal. Clássico que nunca sai de moda, perfeito para qualquer ocasião.",
    features: [
      "Design aviador clássico",
      "Armação em metal premium",
      "Lentes de vidro G-15",
      "Proteção UV 100%",
      "Case de couro incluso",
      "Garantia Ray-Ban oficial",
    ],
    technicalSpecs: [
      { label: "Formato", value: "Aviador" },
      { label: "Material", value: "Metal" },
      { label: "Tipo de Lente", value: "Vidro G-15" },
      { label: "Proteção UV", value: "100%" },
      { label: "Gênero", value: "Feminino" },
    ]
  },

  "6": {
    id: "6",
    name: "ARMAÇÃO MASCULINA OAKLEY ESPORTIVO PRETO",
    brand: "Oakley",
    price: 799.98,
    rating: 4.8,
    reviews: 167,
    inStock: true,
    sku: "OAK-006-ESP",
    category: "grau",
    gender: "masculino",
    images: ["/images/products/oculos-6.png"],
    colors: [
      { id: "preto", name: "Preto", hex: "#000000" },
      { id: "azul", name: "Azul", hex: "#1E90FF" },
    ],
    sizes: ["M", "G"],
    description: "Armação esportiva Oakley com tecnologia de ponta. Design ergonômico para máximo conforto durante atividades físicas.",
    features: [
      "Material O Matter™ ultra resistente",
      "Design envolvente",
      "Antiderrapante Unobtainium™",
      "Alta durabilidade",
      "Ideal para esportes",
    ],
    technicalSpecs: [
      { label: "Formato", value: "Esportivo" },
      { label: "Material", value: "O Matter™" },
      { label: "Gênero", value: "Masculino" },
      { label: "Uso", value: "Esportivo" },
    ]
  },

  "7": {
    id: "7",
    name: "ÓCULOS INFANTIL COLORIDO RESISTENTE",
    brand: "Kids Eyewear",
    price: 199.98,
    rating: 4.4,
    reviews: 78,
    inStock: true,
    sku: "KID-007-COL",
    category: "grau",
    gender: "infantil",
    images: ["/images/products/oculos-7.png"],
    colors: [
      { id: "azul", name: "Azul", hex: "#4169E1" },
      { id: "rosa", name: "Rosa", hex: "#FF69B4" },
      { id: "verde", name: "Verde", hex: "#32CD32" },
    ],
    sizes: ["PP", "P"],
    description: "Óculos infantil super resistente e confortável. Design divertido que as crianças adoram usar!",
    features: [
      "Material flexível e resistente",
      "Design ergonômico infantil",
      "Cores vibrantes",
      "Hastes ajustáveis",
      "Aprovado por oftalmologistas",
    ],
    technicalSpecs: [
      { label: "Formato", value: "Redondo" },
      { label: "Material", value: "TR90 Flexível" },
      { label: "Idade", value: "3-10 anos" },
      { label: "Gênero", value: "Infantil" },
    ]
  },

  "8": {
    id: "8",
    name: "ÓCULOS DE SOL UNISSEX WAYFARER PRETO",
    brand: "Ray-Ban",
    price: 549.98,
    rating: 4.7,
    reviews: 198,
    inStock: true,
    sku: "RB-008-WAY",
    category: "sol",
    gender: "unissex",
    images: ["/images/products/oculos-8.png"],
    colors: [
      { id: "preto", name: "Preto", hex: "#000000" },
      { id: "tartaruga", name: "Tartaruga", hex: "#8B4513" },
    ],
    sizes: ["M", "G"],
    description: "O clássico Wayfarer que definiu gerações. Ícone de estilo usado por celebridades ao redor do mundo.",
    features: [
      "Design Wayfarer clássico",
      "Armação em acetato de alta qualidade",
      "Lentes de cristal",
      "Proteção UV 100%",
      "Dobradiças reforçadas",
    ],
    technicalSpecs: [
      { label: "Formato", value: "Wayfarer" },
      { label: "Material", value: "Acetato" },
      { label: "Tipo de Lente", value: "Cristal" },
      { label: "Gênero", value: "Unissex" },
    ]
  },

  // Adicione quantos produtos quiser aqui!
  // Basta copiar o formato acima e mudar os dados
};

// Função auxiliar para buscar produto por ID
export function getProductById(id: string): Product | undefined {
  return productsDatabase[id];
}

// Função para listar todos os produtos
export function getAllProducts(): Product[] {
  return Object.values(productsDatabase);
}

// Função para buscar produtos por categoria
export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter(product => product.category === category);
}

// Função para buscar produtos por gênero
export function getProductsByGender(gender: string): Product[] {
  return getAllProducts().filter(product => product.gender === gender);
}

// Função para buscar produtos por marca
export function getProductsByBrand(brand: string): Product[] {
  return getAllProducts().filter(product => product.brand === brand);
}