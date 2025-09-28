import { Product, ProductEntity } from '../../entities/Product';
import { CartItem, CartItemEntity } from '../../entities/CartItem';

export interface ApiProductResponse {
  id: string;
  name: string;
  price: number;
  image_url: string;
  category?: string;
  description?: string;
}

export interface StoreProduct {
  id: string;
  title: string;
  price: number;
  image: string;
  category?: string;
}

export interface PlainProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
}

export class ProductMapper {
  static apiToDomain(apiProduct: ApiProductResponse): Product {
    return new ProductEntity(
      apiProduct.id,
      apiProduct.name,
      apiProduct.price,
      apiProduct.image_url,
      apiProduct.category,
      apiProduct.description
    );
  }

  static domainToStore(product: Product): StoreProduct {
    return {
      id: product.id,
      title: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    };
  }

  static storeToDomain(storeProduct: StoreProduct): Product {
    return new ProductEntity(
      storeProduct.id,
      storeProduct.title,
      storeProduct.price,
      storeProduct.image,
      storeProduct.category
    );
  }

  static domainToPlain(product: Product): PlainProduct {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description
    };
  }

  static plainToDomain(plainProduct: PlainProduct): Product {
    return new ProductEntity(
      plainProduct.id,
      plainProduct.name,
      plainProduct.price,
      plainProduct.image,
      plainProduct.category,
      plainProduct.description
    );
  }
}

export class CartItemMapper {
  static toStorage(cartItem: CartItem): Record<string, unknown> {
    return {
      id: cartItem.id,
      product: ProductMapper.domainToStore(cartItem.product),
      quantity: cartItem.quantity,
      addedAt: cartItem.addedAt.toISOString()
    };
  }

  static fromStorage(stored: Record<string, unknown>): CartItem {
    return new CartItemEntity(
      stored.id as string,
      ProductMapper.storeToDomain(stored.product as StoreProduct),
      stored.quantity as number,
      new Date(stored.addedAt as string)
    );
  }
}