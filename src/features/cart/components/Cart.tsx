'use client';

import Image from 'next/image';
import { useCartStore } from '../../../stores/cartStore';
import ProductImage from '@/shared/ui/ProductImage';

export default function Cart() {
  const { cart, clearCart, removeItem, getTotalPrice } = useCartStore();

  return (
    <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <h2 className="text-3xl font-semibold mb-8">Your Cart ({cart.length} items)</h2>
      {cart.length === 0 ? (
        <p className="text-muted text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cart.map((cartItem) => (
              <div key={cartItem.id} className="bg-card p-6 rounded-lg shadow-md">
                <ProductImage src={cartItem.image} alt={cartItem.name} />
                <h3 className="text-xl font-medium mt-4">{cartItem.name}</h3>
                <p className="text-muted text-lg mt-2">
                  ${cartItem.price.toFixed(2)} × {cartItem.quantity}
                </p>
                <p className="text-lg font-semibold mt-2">
                  Total: ${(cartItem.price * cartItem.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(cartItem.id)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition text-base w-full"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-card rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">
              Total: ${getTotalPrice().toFixed(2)}
            </h3>
            <div className="mt-6 flex gap-6">
              <button
                onClick={clearCart}
                className="px-6 py-3 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive-foreground hover:text-destructive transition text-lg"
              >
                Clear Cart
              </button>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-foreground hover:text-primary transition text-lg">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}