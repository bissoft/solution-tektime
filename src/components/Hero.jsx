import React from 'react';
import { motion, useSpring } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
// import heroDashboard from '../assets/hero-dashboard.svg';
import heroDashboard from '../assets/hero-bg-2.png';

import './Hero.css';


import { useTranslation } from 'react-i18next'; // Added import

export default function Hero() {
    const { t } = useTranslation(); // Added hook
    // Mouse Parallax Logic
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x * 15); // Reduced sensitivity for smoother feel
        mouseY.set(y * 15);
    }

    return (
        <section
            className="section hero-section"
            id="home"
            onMouseMove={handleMouseMove}
        >

            {/* Modern Mesh Gradient Background */}
            <div className="hero-mesh-bg"></div>

            <div className="container hero-container relative">

                {/* Centered Content */}
                <div className="hero-content text-center">
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="hero-badge"
                    >
                        <span className="badge-dot"></span>
                        New Implementation
                    </motion.div> */}

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="hero-title"
                    >
                        {t('hero.title_prefix')} <br />
                        <span className="text-primary-gradient">{t('hero.title_suffix')}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="hero-description"
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="hero-actions justify-center"
                    >
                        <button className="btn btn-primary" onClick={() => {
                            const element = document.getElementById('pricing');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                window.location.href = '#pricing';
                            }
                        }}>
                            {t('hero.get_started')} <ArrowRight size={18} style={{ marginLeft: 8 }} />
                        </button>
                        <button className="btn btn-secondary" onClick={() => window.open('https://youtu.be/ZkFFcwOQTLw', '_blank')}>
                            <Play size={16} fill="currentColor" style={{ marginRight: 8 }} />
                            {t('hero.view_demo')}
                        </button>
                    </motion.div>
                </div>

                {/* Highlighted Visuals with Parallax */}
                {/* Wrapped Entrance Animation Separate from Parallax */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.2 }}
                    className="hero-visuals"
                >
                    {/* Inner wrapper handles the continuous parallax to avoid conflict */}
                    <motion.div
                        className="dashboard-parallax-wrapper"
                        style={{ x: mouseX, y: mouseY }}
                    >
                        <div className="dashboard-wrapper">
                            <img src={heroDashboard} alt="TekTIME Dashboard" className="dashboard-img" />

                            {/* Floating Element - Independent Motion */}
                            {/* <motion.div
                                className="floating-card-wrapper"
                                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img src={heroCard} alt="Support Ticket" className="floating-card-img" />
                            </motion.div> */}
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
