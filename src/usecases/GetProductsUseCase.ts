import { Product } from '../entities/Product';
import { IProductRepository } from './ports/IRepository';

export class GetProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return await this.productRepository.getProducts();
  }

  async getByCategory(category: string): Promise<Product[]> {
    if (!category || category.trim() === '') {
      throw new Error('Category is required');
    }
    return await this.productRepository.getProductsByCategory(category);
  }

  async getById(id: string): Promise<Product | null> {
    if (!id || id.trim() === '') {
      throw new Error('Product ID is required');
    }
    return await this.productRepository.getProductById(id);
  }
}