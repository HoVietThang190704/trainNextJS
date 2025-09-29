import { ProductDetailView } from './components/ProductDetailView';
import { PlainProduct } from '@/adapters/mappers/ProductMapper';

interface ProductDetailFeatureProps {
  product: PlainProduct;
}

export function ProductDetailFeature({ product }: ProductDetailFeatureProps) {
  return <ProductDetailView product={product} />;
}