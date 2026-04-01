import { useState } from 'react';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';
import Cart from './Cart';
import productsData from '../data/products.json';

const ProductsSection = ({ cartItems, setCartItems, setCartCount }) => {
    const [activeTab, setActiveTab] = useState('products');

    const handleAddToCart = (product) => {
        const alreadyInCart = cartItems.find(item => item.id === product.id);
        if (alreadyInCart) {
            toast.info(`"${product.name}" is already in your cart!`);
            return;
        }
        const updated = [...cartItems, product];
        setCartItems(updated);
        setCartCount(updated.length);
        toast.success(`"${product.name}" added to cart! 🛒`);
    };

    const handleRemove = (id) => {
        const product = cartItems.find(item => item.id === id);
        const updated = cartItems.filter(item => item.id !== id);
        setCartItems(updated);
        setCartCount(updated.length);
        toast.error(`"${product?.name}" removed from cart.`);
    };

    const handleCheckout = () => {
        setCartItems([]);
        setCartCount(0);
        setActiveTab('products');
        toast.success('🎉 Order placed successfully!');
    };

    return (
        <section className="products-section">
            <div className="max-w-7xl mx-auto" style={{ padding: '0 150px' }}>

                {/* Header */}
                <div className="products-header">
                    <h2 className="products-title">Premium Digital Tools</h2>
                    <p className="products-subtitle">
                        Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.
                    </p>
                </div>

                {/* Toggle Buttons */}
                <div className="products-toggle">
                    <button
                        onClick={() => setActiveTab('products')}
                        className={activeTab === 'products' ? 'toggle-btn toggle-btn--active' : 'toggle-btn'}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setActiveTab('cart')}
                        className={activeTab === 'cart' ? 'toggle-btn toggle-btn--active' : 'toggle-btn'}
                    >
                        Cart ({cartItems.length})
                    </button>
                </div>

                {/* Products Grid */}
                {activeTab === 'products' && (
                    <div className="products-grid">
                        {productsData.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={handleAddToCart}
                                isInCart={!!cartItems.find(item => item.id === product.id)}
                            />
                        ))}
                    </div>
                )}

                {/* Cart */}
                {activeTab === 'cart' && (
                    <Cart
                        cartItems={cartItems}
                        onRemove={handleRemove}
                        onCheckout={handleCheckout}
                    />
                )}

            </div>
        </section>
    );
};

export default ProductsSection;