// HTTP Adapter - Cart Repository Implementation
import { CartItem } from '../../entities/CartItem';
import { ICartRepository } from '../../usecases/ports/IRepository';

// In-memory implementation for now - in real app, this would use localStorage or API
export class LocalStorageCartRepository implements ICartRepository {
  private readonly CART_KEY = 'cart_items';

  async getCartItems(): Promise<CartItem[]> {
    return new Promise((resolve) => {
      const items = localStorage.getItem(this.CART_KEY);
      const cartItems = items ? JSON.parse(items) : [];
      resolve(cartItems);
    });
  }

  async addItem(item: CartItem): Promise<void> {
    return new Promise((resolve) => {
      const existingItems = JSON.parse(localStorage.getItem(this.CART_KEY) || '[]');
      existingItems.push(item);
      localStorage.setItem(this.CART_KEY, JSON.stringify(existingItems));
      resolve();
    });
  }

  async removeItem(id: string): Promise<void> {
    return new Promise((resolve) => {
      const existingItems = JSON.parse(localStorage.getItem(this.CART_KEY) || '[]');
      const filteredItems = existingItems.filter((item: CartItem) => item.id !== id);
      localStorage.setItem(this.CART_KEY, JSON.stringify(filteredItems));
      resolve();
    });
  }

  async updateQuantity(id: string, quantity: number): Promise<void> {
    return new Promise((resolve) => {
      const existingItems = JSON.parse(localStorage.getItem(this.CART_KEY) || '[]');
      const updatedItems = existingItems.map((item: CartItem) =>
        item.id === id ? { ...item, quantity } : item
      );
      localStorage.setItem(this.CART_KEY, JSON.stringify(updatedItems));
      resolve();
    });
  }

  async clearCart(): Promise<void> {
    return new Promise((resolve) => {
      localStorage.removeItem(this.CART_KEY);
      resolve();
    });
  }
}