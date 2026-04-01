import userIcon from '../../public/assets/user.png';
import packageIcon from '../../public/assets/package.png';
import rocketIcon from '../../public/assets/rocket.png';

const steps = [
    {
        number: '01',
        title: 'Create Account',
        description: 'Sign up for free in seconds. No credit card required to get started.',
        icon: userIcon,
    },
    {
        number: '02',
        title: 'Choose Products',
        description: 'Browse our catalog and select the tools that fit your needs.',
        icon: packageIcon,
    },
    {
        number: '03',
        title: 'Start Creating',
        description: 'Download and start using your premium tools immediately.',
        icon: rocketIcon,
    },
];

const Steps = () => {
    return (
        <section className="steps-section">
            <div className="max-w-7xl mx-auto" style={{ padding: '0 150px' }}>

                {/* Header */}
                <div className="steps-header">
                    <h2 className="steps-title">Get Started In 3 Steps</h2>
                    <p className="steps-subtitle">Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* Steps Grid */}
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">

                            {/* Number Badge */}
                            <div className="step-number">{step.number}</div>

                            {/* Icon */}
                            <div className="step-icon-wrapper">
                                <img src={step.icon} alt={step.title} className="step-icon" />
                            </div>

                            {/* Title */}
                            <h3 className="step-title">{step.title}</h3>

                            {/* Description */}
                            <p className="step-description">{step.description}</p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Steps;