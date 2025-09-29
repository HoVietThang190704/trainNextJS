import HeroSection from "@/shared/ui/HeroSection";
import ProductCard from "@/features/product/components/ProductCard";
import { Cart } from "@/features/cart";
import { ProductMapper } from "@/adapters/mappers/ProductMapper";
import { productRepository } from "@/adapters/http/ProductRepository";

export default async function HomePage() {
  const productEntities = await productRepository.getProducts();
  const mockProducts = productEntities.map(ProductMapper.domainToPlain);
  return (
    <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <HeroSection />
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="mt-12">
        <Cart />
      </section>
    </div>
  );
}
