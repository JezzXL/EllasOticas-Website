import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import Brands from "@/components/home/Brands";
import StoreLocation from "@/components/home/StoreLocation";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Brands />
      <StoreLocation />
    </main>
  );
}