export interface Product {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly image: string;
  readonly category?: string;
  readonly description?: string;
}

export class ProductEntity implements Product {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly image: string,
    public readonly category?: string,
    public readonly description?: string
  ) {
    if (!id || id.trim() === '') {
      throw new Error('Product ID is required');
    }
    if (!name || name.trim() === '') {
      throw new Error('Product name is required');
    }
    if (price < 0) {
      throw new Error('Product price cannot be negative');
    }
  }

  isExpensive(): boolean {
    return this.price > 200;
  }

  getFormattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }

  belongsToCategory(category: string): boolean {
    return this.category?.toLowerCase() === category.toLowerCase();
  }
}