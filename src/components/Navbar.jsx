import { useState } from 'react';
import shoppingCart from '../../public/assets/products/shopping-cart.png';

const Navbar = ({ cartCount }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} className="sticky top-0 z-50">
            <div className="max-w-7xl mx-auto" style={{ padding: '0 150px' }}>
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <span className="text-2xl font-extrabold flex-shrink-0">
                        <span style={{ color: '#7C3AED' }}>Digi</span>
                        <span style={{ color: '#111827' }}>Tools</span>
                    </span>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center" style={{ gap: '32px' }}>
                        {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(link => (
                            <a key={link} href="#" className="nav-link">{link}</a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden md:flex items-center" style={{ gap: '16px' }}>

                        {/* Cart Icon */}
                        <div className="relative cursor-pointer">
                            <img src={shoppingCart} alt="cart" style={{ width: '24px', height: '24px' }} />
                            {cartCount > 0 && (
                                <span className="cart-badge">{cartCount}</span>
                            )}
                        </div>

                        <a href="#" className="nav-login">Login</a>

                        <button className="btn-gradient">Get Started</button>
                    </div>

                    {/* Mobile: Cart + Hamburger */}
                    <div className="md:hidden flex items-center" style={{ gap: '12px' }}>
                        <div className="relative cursor-pointer">
                            <img src={shoppingCart} alt="cart" style={{ width: '24px', height: '24px' }} />
                            {cartCount > 0 && (
                                <span className="cart-badge">{cartCount}</span>
                            )}
                        </div>
                        <button onClick={() => setMenuOpen(!menuOpen)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4B5563' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>

                </div>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="md:hidden" style={{ paddingBottom: '16px', paddingTop: '8px', borderTop: '1px solid #F3F4F6' }}>
                        <div className="flex flex-col" style={{ gap: '4px' }}>
                            {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(link => (
                                <a key={link} href="#" className="nav-link" style={{ padding: '8px' }}>{link}</a>
                            ))}
                            <div className="flex items-center" style={{ gap: '12px', padding: '8px', paddingTop: '12px' }}>
                                <a href="#" className="nav-login">Login</a>
                                <button className="btn-gradient">Get Started</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;