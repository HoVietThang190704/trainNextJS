import { create } from 'zustand';
import { CartItem } from '../entities/CartItem';
import { Product } from '../entities/Product';

interface CartState {
  cartCount: number;
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartCount: 0,
  items: [],
  
  addItem: (product, quantity = 1) => set((state) => {
    const existingItem = state.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      const updatedItems = state.items.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      return {
        items: updatedItems,
        cartCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0)
      };
    }
    
    const newItem: CartItem = {
      id: `cart-${product.id}-${Date.now()}`,
      product,
      quantity,
      addedAt: new Date()
    };
    
    const newItems = [...state.items, newItem];
    return {
      items: newItems,
      cartCount: newItems.reduce((sum, item) => sum + item.quantity, 0)
    };
  }),
  
  removeItem: (id) => set((state) => {
    const items = state.items.filter(item => item.id !== id);
    return {
      items,
      cartCount: items.reduce((sum, item) => sum + item.quantity, 0)
    };
  }),
  
  updateQuantity: (id, quantity) => set((state) => {
    if (quantity <= 0) {
      const items = state.items.filter(item => item.id !== id);
      return {
        items,
        cartCount: items.reduce((sum, item) => sum + item.quantity, 0)
      };
    }
    
    const items = state.items.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    return {
      items,
      cartCount: items.reduce((sum, item) => sum + item.quantity, 0)
    };
  }),
  
  clearCart: () => set({ items: [], cartCount: 0 }),
  
  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
}));