import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../entities/Product';

interface CartState {
  cartCount: number;
  cart: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartCount: 0,
      cart: [],

      addItem: (product, quantity = 1) => set((state) => {
        const existingItem = state.cart.find(item => item.id === product.id);

    if (existingItem) {
      const updatedItems = state.cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      return {
        cart: updatedItems,
        cartCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0)
      };
    }
    
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || '/images/stylish.jpg',
      quantity
    };

    const newItems = [...state.cart, newItem];
    return {
      cart: newItems,
      cartCount: newItems.reduce((sum, item) => sum + item.quantity, 0)
    };
  }),
  
  removeItem: (id) => set((state) => {
    const cart = state.cart.filter(item => item.id !== id);
    return {
      cart,
      cartCount: cart.reduce((sum, item) => sum + item.quantity, 0)
    };
  }),
  
  updateQuantity: (id, quantity) => set((state) => {
    if (quantity <= 0) {
      const cart = state.cart.filter(item => item.id !== id);
      return {
        cart,
        cartCount: cart.reduce((sum, item) => sum + item.quantity, 0)
      };
    }

    const updatedCart = state.cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    return {
      cart: updatedCart,
      cartCount: updatedCart.reduce((sum, item) => sum + item.quantity, 0)
    };
  }),

  clearCart: () => set({ cart: [], cartCount: 0 }),

  getTotalPrice: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}),
{
  name: 'cart-storage', 
  partialize: (state) => ({ 
    cart: state.cart, 
    cartCount: state.cartCount 
  }),
}
)
);