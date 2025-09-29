'use client';
import { useCartStore } from "@/stores/cartStore";
import { CartItem } from "@/entities/Product";
import ProductImage from "@/shared/ui/ProductImage";

export default function CartPage() {
    const { cart, clearCart } = useCartStore();
    console.log(cart);
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
            <h1 className='text-2xl font-semibold mb-6'>Your Cart</h1>
            {cart.length === 0 ?(
                <p className='text-muted'>Your cart is empty</p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {cart.map((item: CartItem) => (
                        <div key={item.id} className="bg-card p-11 rounded-lg shadow-md">
                            <ProductImage src={item.image} alt={item.name} />
                            <h3 className="text-lg font-medium">{item.name}</h3>
                            <p className="text-muted">${item.price} x {item.quantity}</p>
                            <p className="font-semibold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <button
                    onClick={clearCart}
                    className="mt-6 px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive-foreground hover:text-destructive transition"
            >
                Clear Cart
                </button>
            )}
        </div>
    );
}