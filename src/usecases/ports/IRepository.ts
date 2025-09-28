import { Product } from '../../entities/Product';
import { CartItem } from '../../entities/CartItem';

export interface IProductRepository {
  getProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | null>;
  getProductsByCategory(category: string): Promise<Product[]>;
}

export interface ICartRepository {
  getCartItems(): Promise<CartItem[]>;
  addItem(item: CartItem): Promise<void>;
  removeItem(id: string): Promise<void>;
  updateQuantity(id: string, quantity: number): Promise<void>;
  clearCart(): Promise<void>;
}