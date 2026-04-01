const Cart = ({ cartItems, onRemove, onCheckout }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <p className="cart-empty--icon">🛒</p>
                <h3 className="cart-empty--title">Your cart is empty</h3>
                <p className="cart-empty--subtitle">Add some products to get started!</p>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart</h2>

            {/* Cart Items */}
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.icon} alt={item.name} className="cart-item--icon" />
                        <div className="cart-item--info">
                            <p className="cart-item--name">{item.name}</p>
                            <p className="cart-item--price">${item.price}</p>
                        </div>
                        <button onClick={() => onRemove(item.id)} className="cart-item--remove">
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            {/* Total */}
            <div className="cart-total">
                <span className="cart-total--label">Total:</span>
                <span className="cart-total--amount">${total}</span>
            </div>

            {/* Checkout Button */}
            <button onClick={onCheckout} className="btn-gradient btn-full">
                Proceed To Checkout
            </button>
        </div>
    );
};

export default Cart;