import HeroSection from "@/components/ui/HeroSection";
import ProductCard from "@/components/ui/ProductCard";
import Cart from "@/components/cart/Cart";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <HeroSection />
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            id="1"
            image="/images/stylish.jpg"
            title="Stylish Backpack"
            price={120}
          />
          <ProductCard
            id="2"
            image="/images/backpack2.png"
            title="Red Backpack"
            price={220}
          />
          <ProductCard
            id="3"
            image="/images/backpack3.png"
            title="Black Backpack"
            price={320}
          />
        </div>
      </section>
      <section className="mt-10">
        <Cart />
      </section>
    </div>
  );
}
