import { useState } from 'react';


const plans = [
    {
        name: 'Starter',
        subtitle: 'Perfect for getting started',
        price: 0,
        period: '/Month',
        features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
        cta: 'Get Started Free',
        highlight: false,
    },
    {
        name: 'Pro',
        subtitle: 'Best for professionals',
        price: 29,
        period: '/Month',
        features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
        cta: 'Start Pro Trial',
        highlight: true,
        badge: 'Most Popular',
    },
    {
        name: 'Enterprise',
        subtitle: 'For teams and businesses',
        price: 99,
        period: '/Month',
        features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
        cta: 'Contact Sales',
        highlight: false,
    },
];

const Pricing = () => {
    // Default active index is 1 (Pro Plan)
    const [activeIndex, setActiveIndex] = useState(1);

    const handlePlanSelect = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="pricing-section">
            <div className="max-w-7xl mx-auto" style={{ padding: '0 150px' }}>

                {/* Header */}
                <div className="pricing-header">
                    <h2 className="pricing-title">Simple, Transparent Pricing</h2>
                    <p className="pricing-subtitle">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* Plans Grid */}
                <div className="pricing-grid">
                    {plans.map((plan, index) => {
                        // If index matches activeIndex
                        const isSelected = index === activeIndex;

                        return (
                            <div
                                key={index}
                                className={`pricing-card ${isSelected ? 'pricing-card--highlight' : ''}`}
                                onClick={() => handlePlanSelect(index)}
                            >
                                {/* Most Popular Badge */}
                                {plan.badge && isSelected && (
                                    <div className="pricing-badge">{plan.badge}</div>
                                )}

                                {/* Plan Name */}
                                <h3 className={`pricing-name ${isSelected ? 'pricing-name--highlight' : ''}`}>
                                    {plan.name}
                                </h3>
                                <p className={`pricing-subtitle-text ${isSelected ? 'pricing-subtitle-text--highlight' : ''}`}>
                                    {plan.subtitle}
                                </p>

                                {/* Price */}
                                <div className="pricing-price">
                                    <span className={`pricing-amount ${isSelected ? 'pricing-amount--highlight' : ''}`}>
                                        ${plan.price}
                                    </span>
                                    <span className={`pricing-period ${isSelected ? 'pricing-period--highlight' : ''}`}>
                                        {plan.period}
                                    </span>
                                </div>

                                {/* Features */}
                                <ul className="pricing-features">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="pricing-feature-item">
                                            <span className={`pricing-check ${isSelected ? 'pricing-check--highlight' : ''}`}>✓</span>
                                            <span className={`pricing-feature-text ${isSelected ? 'pricing-feature-text--highlight' : ''}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className={`pricing-btn ${isSelected ? 'pricing-btn--highlight' : ''}`}>
                                    {plan.cta}
                                </button>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Pricing;