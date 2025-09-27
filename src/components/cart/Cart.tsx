'use client';

import { useProductStore } from "../../../stores/productStore";
import IMG from 'next/image';

export default function Cart() {
  const cart = useProductStore((state) => state.cart);
  const clearCart = useProductStore((state) => state.clearCart);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product, index) => (
            <div key={`${product.id}-${index}`} className="bg-card p-4 rounded-lg shadow-md">
              <IMG
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="text-muted">${product.price}</p>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="mt-6 px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive-foreground hover:text-destructive transition"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}
