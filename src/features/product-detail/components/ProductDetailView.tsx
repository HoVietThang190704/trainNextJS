'use client';
import Image from 'next/image';
import { useState } from 'react';
import { PlainProduct } from '@/adapters/mappers/ProductMapper';
import { useCartStore } from '@/stores/cartStore';
import { ProductEntity } from '@/entities/Product';

interface ProductDetailViewProps {
  product: PlainProduct;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    const productEntity = ProductEntity.fromPlain(product);
    addItem(productEntity, quantity);
  };

  return (
    <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex space-x-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-3xl font-semibold text-primary mt-3">${product.price}</p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-4">
              Quantity
            </label>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 text-xl"
              >
                -
              </button>
              <span className="text-xl font-medium min-w-[2rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 text-xl"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-primary-foreground py-4 px-8 rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors"
          >
            Add to Cart - ${product.price}
          </button>

          <div className="border-t pt-8">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Product Details</h3>
            <ul className="space-y-3 text-gray-600 text-lg">
              <li><strong>Category:</strong> {product.category}</li>
              <li><strong>SKU:</strong> {product.id}</li>
              <li><strong>Availability:</strong> In Stock</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}