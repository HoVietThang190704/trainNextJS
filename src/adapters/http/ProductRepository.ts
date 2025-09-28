import { Product, ProductEntity } from '../../entities/Product';
import { IProductRepository } from '../../usecases/ports/IRepository';

const mockProducts: Product[] = [
  new ProductEntity('1', 'Stylish Backpack', 120, '/images/stylish.jpg', 'bags'),
  new ProductEntity('2', 'Red Backpack', 220, '/images/stylish.jpg', 'bags'),
  new ProductEntity('3', 'Black Backpack', 320, '/images/stylish.jpg', 'bags'),
];

export class HttpProductRepository implements IProductRepository {
  async getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockProducts), 100);
    });
  }

  async getProductById(id: string): Promise<Product | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = mockProducts.find(p => p.id === id) || null;
        resolve(product);
      }, 100);
    });
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = mockProducts.filter(p => p.category === category);
        resolve(products);
      }, 100);
    });
  }
}