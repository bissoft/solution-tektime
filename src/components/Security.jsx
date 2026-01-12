import React from 'react';
import { Shield, Lock, Server, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Security.css';

export default function Security() {
    const { t } = useTranslation();
    const securityFeatures = t('security.list', { returnObjects: true });
    // We need to map icons back since translations don't hold React components
    const icons = [<Shield size={24} />, <Lock size={24} />, <Server size={24} />, <EyeOff size={24} />];

    return (
        <section className="section security-section">
            <div className="container">
                <div className="text-center section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('security.title')}
                    </motion.h2>
                    <motion.p
                        className="subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {t('security.subtitle')}
                    </motion.p>
                </div>

                <div className="security-grid">
                    {securityFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="security-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.2 }}
                        >
                            <div className="security-icon-wrapper">
                                {icons[idx]}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
