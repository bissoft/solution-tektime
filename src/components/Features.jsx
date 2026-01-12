import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Layout, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import feature1 from '../assets/feature-1.1.png';
import feature2 from '../assets/feature-2.png';
import feature3 from '../assets/feature-3.3.png';
import feature4 from '../assets/feature-4.1.png';
import './Features.css';

// unused features array removed or kept comment out if needed
// const features = [...];

export default function Features() {
    const { t } = useTranslation();

    return (
        <section className="section features-section" id="features">
            <div className="container">
                <div className="text-center section-header">
                    <span className="badge-text">{t('features.badge')}</span>
                    <h2 className="section-title">{t('features.title')}</h2>
                </div>

                <div className="bento-grid">
                    {/* Card 1: Large Left */}
                    <motion.div
                        className="bento-card card-large"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-content">
                            <h3>{t('features.card1.title')}</h3>
                            <p>{t('features.card1.desc')}</p>
                        </div>
                        <div className="card-visual visual-blue">
                            <img src={feature1} alt="Smart Ticketing" className="feature-image" />
                        </div>
                    </motion.div>

                    {/* Card 2: Medium Right */}
                    <motion.div
                        className="bento-card card-medium"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="card-content">
                            <h3>{t('features.card2.title')}</h3>
                            <p>{t('features.card2.desc')}</p>
                        </div>
                        <div className="card-visual visual-gray">
                            <img src={feature2} alt="Real-time Analytics" className="feature-image" />
                        </div>
                    </motion.div>

                    {/* Card 3: Medium Left */}
                    <motion.div
                        className="bento-card card-medium"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="card-content">
                            <h3>{t('features.card3.title')}</h3>
                            <p>{t('features.card3.desc')}</p>
                        </div>
                        <div className="card-visual visual-white">
                            <img src={feature3} alt="Secure & Compliant" className="feature-image" />
                        </div>
                    </motion.div>

                    {/* Card 4: Large Right */}
                    <motion.div
                        className="bento-card card-large"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="card-content">
                            <h3>{t('features.card4.title')}</h3>
                            <p>{t('features.card4.desc')}</p>
                        </div>
                        <div className="card-visual visual-purple">
                            <img src={feature4} alt="Multi-channel Support" className="feature-image" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
