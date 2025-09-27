'use client'
import { useProductStore } from "../../../stores/productStore";
import IMG from 'next/image';

interface ProductCardProps {
    id: string;
    title: string;
    price: number;
    image: string;
}

export default function ProductCard({ id, image, title, price}: ProductCardProps) {
    const addToCart = useProductStore((state) => state.addToCart);

    const handleAddToCart = () => {
        addToCart({ id, title, price, image});
    };

    return (
        <div className="bg-card p-4 rounded-lg shadow-md">
            <IMG 
                src={image}
                alt={title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-muted">${price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}