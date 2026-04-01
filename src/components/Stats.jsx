import { useEffect, useRef, useState } from 'react';

const CountUp = ({ target, suffix, isDecimal }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 1000;
                    const steps = 100;
                    const increment = target / steps;
                    let current = 0;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, isDecimal]);

    const display = () => {
        if (isDecimal) return count.toFixed(1) + suffix;
        if (target >= 1000) return Math.floor(count / 1000) + suffix;
        return count + suffix;
    };

    return (
        <span className="stat-number" ref={ref}>
            {display()}
        </span>
    );
};

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="max-w-7xl mx-auto" style={{ padding: '0 100px' }}>
                <div className="stats-grid">

                    <div className="stat-item">
                        <CountUp target={50000} suffix="K+" />
                        <span className="stat-label">Active Users</span>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="stat-item">
                        <CountUp target={200} suffix="+" />
                        <span className="stat-label">Premium Tools</span>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="stat-item">
                        <CountUp target={4.9} suffix="" isDecimal={true} />
                        <span className="stat-label">Rating</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;