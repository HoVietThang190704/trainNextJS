'use client';
import Link from 'next/link';
import { useCartStore } from '../../../stores/cartStore';
import { PlainProduct, ProductMapper } from '../../../adapters/mappers/ProductMapper';
import ProductImage from '@/shared/ui/ProductImage';

interface ProductCardProps {
  product: PlainProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const domainProduct = ProductMapper.plainToDomain(product);
    addItem(domainProduct, 1);
  };

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <ProductImage src={product.image} alt={product.name} />
        <h3 className="text-xl font-medium group-hover:text-primary transition-colors mt-4">{product.name}</h3>
        <p className="text-muted text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart}
          className="mt-6 w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-lg"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}