import HeroSection from "@/shared/ui/HeroSection";
import { ProductCard } from "@/features/product";
import { Cart } from "@/features/cart";
import { ProductEntity } from "@/entities/Product";
import { ProductMapper } from "@/adapters/mappers/ProductMapper";

export default function HomePage() {
  const mockProductEntities = [
    new ProductEntity('1', 'Stylish Backpack', 120, '/images/stylish.jpg', 'bags'),
    new ProductEntity('2', 'Red Backpack', 220, '/images/stylish.jpg', 'bags'),
    new ProductEntity('3', 'Black Backpack', 320, '/images/stylish.jpg', 'bags'),
  ];
  const mockProducts = mockProductEntities.map(ProductMapper.domainToPlain);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <HeroSection />
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="mt-10">
        <Cart />
      </section>
    </div>
  );
}
