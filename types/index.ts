// Tipos de Produtos
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  category: ProductCategory;
  description?: string;
  features?: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export type ProductCategory = "sol" | "grau" | "lentes" | "acessorios";

// Tipos de Navegação
export interface NavLink {
  label: string;
  href: string;
}

// Tipos de Benefícios/Features
export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

// Tipos de Marcas
export interface Brand {
  id: string;
  name: string;
  logo: string;
}

// Tipos de Categorias
export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
}

// Tipos de Filtros
export interface ProductFilter {
  category?: ProductCategory[];
  brand?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  inStock?: boolean;
}

// Tipos de Animação
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}