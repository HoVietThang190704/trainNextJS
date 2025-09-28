'use client';
import Image from 'next/image';
import { useCartStore } from '../../../stores/cartStore';
import { PlainProduct, ProductMapper } from '../../../adapters/mappers/ProductMapper';

interface ProductCardProps {
  product: PlainProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    const domainProduct = ProductMapper.plainToDomain(product);
    addItem(domainProduct, 1);
  };

  return (
    <div className="bg-card p-4 rounded-lg shadow-md">
      <Image 
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-muted">${product.price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart}
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition"
      >
        Add to Cart
      </button>
    </div>
  );
}