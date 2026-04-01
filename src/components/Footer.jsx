import fbIcon from '../../public/assets/products/facebook.svg.png';
import instIcon from '../../public/assets/products/instagram.svg.png';
import xIcon from '../../public/assets/products/twitter.svg';

const Footer = () => {
    return (
        <footer>

            {/* CTA Banner */}
            <div className="footer-cta">
                <h2 className="footer-cta--title">Ready To Transform Your Workflow?</h2>
                <p className="footer-cta--subtitle">
                    Join thousands of professionals who are already using Digitools to work smarter.
                </p>
                <p className="footer-cta--subtitle">Start your free trial today.</p>
                <div className="footer-cta--buttons">
                    <button className="footer-cta--btn-outline">Explore Products</button>
                    <button className="footer-cta--btn-border">View Pricing</button>
                </div>
                <p className="footer-cta--note">
                    14-day free trial &nbsp;•&nbsp; No credit card required &nbsp;•&nbsp; Cancel anytime
                </p>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="max-w-7xl mx-auto" style={{ padding: '0 100px' }}>
                    <div className="footer-grid">

                        {/* Brand */}
                        <div className="footer-brand">
                            <div className="footer-logo">DigiTools</div>
                            <p className="footer-brand--text">
                                Premium digital tools for creators, professionals, and businesses.
                                Work smarter with our suite of powerful tools.
                            </p>
                        </div>

                        {/* Product Links */}
                        <div className="footer-col">
                            <h4 className="footer-col--title">Product</h4>
                            <ul className="footer-col--links">
                                {['Features', 'Pricing', 'Templates', 'Integrations'].map(item => (
                                    <li key={item}><a href="#" className="footer-link">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="footer-col">
                            <h4 className="footer-col--title">Company</h4>
                            <ul className="footer-col--links">
                                {['About', 'Blog', 'Careers', 'Press'].map(item => (
                                    <li key={item}><a href="#" className="footer-link">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div className="footer-col">
                            <h4 className="footer-col--title">Resources</h4>
                            <ul className="footer-col--links">
                                {['Documentation', 'Help Center', 'Community', 'Contact'].map(item => (
                                    <li key={item}><a href="#" className="footer-link">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="footer-col">
                            <h4 className="footer-col--title">Social Links</h4>
                            <div className="footer-socials">

                                {/* Instagram */}
                                <a href="#" className="footer-social-icon" aria-label="Instagram">
                                    <img src={instIcon} alt="Instagram" className="social-icon-img" />
                                </a>

                                {/* Facebook */}
                                <a href="#" className="footer-social-icon" aria-label="Facebook">
                                    <img src={fbIcon} alt="Facebook" className="social-icon-img" />
                                </a>

                                {/* X (Twitter) */}
                                <a href="#" className="footer-social-icon" aria-label="Twitter">
                                    <img src={xIcon} alt="Twitter" className="social-icon-img" />
                                </a>

                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="footer-bottom">
                        <p className="footer-bottom--copy">© 2026 Digitools. All rights reserved.</p>
                        <div className="footer-bottom--links">
                            <a href="#" className="footer-bottom--link">Privacy Policy</a>
                            <a href="#" className="footer-bottom--link">Terms of Service</a>
                            <a href="#" className="footer-bottom--link">Cookies</a>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;