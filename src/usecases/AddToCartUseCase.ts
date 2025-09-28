import { CartItemEntity } from '../entities/CartItem';
import { Product } from '../entities/Product';
import { ICartRepository } from './ports/IRepository';

export class AddToCartUseCase {
  constructor(private cartRepository: ICartRepository) {}

  async execute(product: Product, quantity: number = 1): Promise<void> {
    if (quantity <= 0) {
      throw new Error('Quantity must be positive');
    }

    const cartItemId = `cart-${product.id}-${Date.now()}`;
    const cartItem = new CartItemEntity(
      cartItemId,
      product,
      quantity
    );

    await this.cartRepository.addItem(cartItem);
  }
}