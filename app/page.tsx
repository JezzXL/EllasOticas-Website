import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import Brands from "@/components/home/Brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Brands />
      {/* Outros componentes serão adicionados aqui */}
    </main>
  );
}