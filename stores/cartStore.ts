import { create } from 'zustand'

interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image?: string
    category?: string
}

interface CartState {
    cartCount: number
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  cartCount: 0,
  items: [],
  addItem: (item) => set((state) => ({
    items: [...state.items, item],
    cartCount: state.cartCount + 1
  })),
  removeItem: (id) => set((state) => {
    const items = state.items.filter(item => item.id !== id);
    return {
      items,
      cartCount: items.length
    };
  }),
  clearCart: () => set({ items: [], cartCount: 0 })
}))