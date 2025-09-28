import { Product } from './Product';

export interface CartItem {
  readonly id: string;
  readonly product: Product;
  readonly quantity: number;
  readonly addedAt: Date;
}

export class CartItemEntity implements CartItem {
  constructor(
    public readonly id: string,
    public readonly product: Product,
    public readonly quantity: number,
    public readonly addedAt: Date = new Date()
  ) {
    if (!id || id.trim() === '') {
      throw new Error('Cart item ID is required');
    }
    if (quantity <= 0) {
      throw new Error('Cart item quantity must be positive');
    }
  }
  getTotalPrice(): number {
    return this.product.price * this.quantity;
  }
  getFormattedTotalPrice(): string {
    return `$${this.getTotalPrice().toFixed(2)}`;
  }
  increaseQuantity(amount: number = 1): CartItemEntity {
    if (amount <= 0) {
      throw new Error('Increase amount must be positive');
    }
    return new CartItemEntity(
      this.id,
      this.product,
      this.quantity + amount,
      this.addedAt
    );
  }
  decreaseQuantity(amount: number = 1): CartItemEntity {
    if (amount <= 0) {
      throw new Error('Decrease amount must be positive');
    }
    const newQuantity = this.quantity - amount;
    if (newQuantity <= 0) {
      throw new Error('Cannot decrease quantity below 1');
    }
    return new CartItemEntity(
      this.id,
      this.product,
      newQuantity,
      this.addedAt
    );
  }
}