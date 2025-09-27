import { create } from 'zustand'

interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
}

interface ProductStore {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product],})),
    removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter(item => item.id !== productId),})),
    clearCart: () => set({ cart: [] }),
}));