import { ProductDetailFeature } from '@/features/product-detail';
import { ProductMapper } from '@/adapters/mappers/ProductMapper';
import { productRepository } from '@/adapters/http/ProductRepository';

async function getProduct(id: string) {
    const product = await productRepository.getProductById(id);
    return product ? ProductMapper.domainToPlain(product) : null;
}

interface ProductPageProps {
    params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getProduct(params.id);

    if(!product) {
        return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
    );
    }
    return <ProductDetailFeature product={product} />;
}