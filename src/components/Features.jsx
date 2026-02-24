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

export default function Features({ data }) {
    const { t } = useTranslation();

    const displayFeatures = data?.features || [
        { title: t('features.card1.title'), desc: t('features.card1.desc'), media_path: feature1, className: 'card-large visual-blue' },
        { title: t('features.card2.title'), desc: t('features.card2.desc'), media_path: feature2, className: 'card-medium visual-gray' },
        { title: t('features.card3.title'), desc: t('features.card3.desc'), media_path: feature3, className: 'card-medium visual-white' },
        { title: t('features.card4.title'), desc: t('features.card4.desc'), media_path: feature4, className: 'card-large visual-purple' }
    ];

    return (
        <section className="section features-section" id="features">
            <div className="container">
                <div className="text-center section-header">
                    <span className="badge-text">{t('features.badge')}</span>
                    <h2 className="section-title">{data?.solution_title || t('features.title')}</h2>
                </div>

                <div className="bento-grid">
                    {displayFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`bento-card ${feature.className || (index % 4 === 0 || index % 4 === 3 ? 'card-large' : 'card-medium')}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="card-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                            <div className="card-visual">
                                <img src={feature.media_path} alt={feature.title} className="feature-image" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

