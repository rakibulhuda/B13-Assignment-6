import bannerImg from '../assets/banner.png';
import playIcon from '../assets/Play.png';

const Banner = () => {
    return (
        <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
            <div className="max-w-7xl mx-auto" style={{ padding: '0 150px' }}>
                <div className="flex items-center justify-between" style={{ gap: '60px' }}>

                    {/* Left Content */}
                    <div style={{ flex: 1, maxWidth: '520px' }}>

                        {/* Badge */}
                        <div className="banner-badge">
                            <span className="banner-badge-dot"></span>
                            New: AI-Powered Tools Available
                        </div>

                        {/* Heading */}
                        <h1 className="banner-heading">
                            Supercharge Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Digital Workflow </span>
                        </h1>

                        {/* Description */}
                        <p className="banner-description">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center" style={{ gap: '16px', marginTop: '32px' }}>
                            <button className="btn-gradient">Explore Products</button>
                            <button className="btn-outline-watch">
                                <img src={playIcon} alt="play" style={{ width: '16px', height: '16px' }} />
                                Watch Demo
                            </button>
                        </div>

                    </div>

                    {/* Right Image */}
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <img
                            src={bannerImg}
                            alt="Digital Workflow"
                            style={{ width: '100%', maxWidth: '500px', borderRadius: '16px' }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;