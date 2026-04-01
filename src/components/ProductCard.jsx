const periodLabel = {
    monthly: '/Mo',
    yearly: '/Yr',
    'one-time': '/One-Time',
};

const ProductCard = ({ product, onAddToCart, isInCart }) => {
    return (
        <div className="product-card">

            {/* Tag */}
            <div className={`product-tag product-tag--${product.tagType}`}>
                {product.tag}
            </div>

            {/* Icon */}
            <img src={product.icon} alt={product.name} className="product-icon" />

            {/* Name */}
            <h3 className="product-name">{product.name}</h3>

            {/* Description */}
            <p className="product-description">{product.description}</p>

            {/* Price */}
            <div className="product-price">
                <span className="product-price--amount">${product.price}</span>
                <span className="product-price--period">{periodLabel[product.period]}</span>
            </div>

            {/* Features */}
            <ul className="product-features">
                {product.features.map((feature, index) => (
                    <li key={index} className="product-feature-item">
                        <span className="product-feature-check">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Buy Now Button */}
            <button
                onClick={() => !isInCart && onAddToCart(product)}
                className={isInCart ? 'btn-added' : 'btn-gradient btn-full'}
            >
                {isInCart ? '✓ Added to Cart' : 'Buy Now'}
            </button>

        </div>
    );
};

export default ProductCard;