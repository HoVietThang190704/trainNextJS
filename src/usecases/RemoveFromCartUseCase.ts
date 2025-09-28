import { ICartRepository } from './ports/IRepository';

export class RemoveFromCartUseCase {
  constructor(private cartRepository: ICartRepository) {}

  async execute(cartItemId: string): Promise<void> {
    if (!cartItemId || cartItemId.trim() === '') {
      throw new Error('Cart item ID is required');
    }

    await this.cartRepository.removeItem(cartItemId);
  }
}