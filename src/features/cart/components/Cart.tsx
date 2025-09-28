'use client';

import Image from 'next/image';
import { useCartStore } from '../../../stores/cartStore';

export default function Cart() {
  const { items, clearCart, removeItem, getTotalPrice } = useCartStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-semibold mb-6">Your Cart ({items.length} items)</h2>
      {items.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((cartItem) => (
              <div key={cartItem.id} className="bg-card p-4 rounded-lg shadow-md">
                <Image
                  src={cartItem.product.image}
                  alt={cartItem.product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-medium">{cartItem.product.name}</h3>
                <p className="text-muted">
                  ${cartItem.product.price.toFixed(2)} × {cartItem.quantity}
                </p>
                <p className="text-sm font-semibold">
                  Total: ${(cartItem.product.price * cartItem.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(cartItem.id)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-card rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              Total: ${getTotalPrice().toFixed(2)}
            </h3>
            <div className="mt-4 flex gap-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive-foreground hover:text-destructive transition"
              >
                Clear Cart
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}