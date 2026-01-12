import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siIonos } from 'simple-icons';
import { useTranslation } from 'react-i18next';
import './Integrations.css';

const surroundingApps = [
    { name: 'Gmail', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg', color: '#E4405F', isComponent: false },
    { name: 'Outlook', imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732223.png', color: '#0078D4', isComponent: false },
    { name: 'Ionos', icon: siIonos, color: '#003D8F', isComponent: false },
];

export default function Integrations() {
    const { t } = useTranslation();

    return (
        <section className="section integrations-section">
            {/* ... header content same as before ... */}
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('integrations.title')}
                    </motion.h2>
                    <motion.p
                        className="subtitle max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {t('integrations.subtitle')}
                    </motion.p>
                    <motion.div
                        className="flex justify-center gap-4 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <button className="btn btn-primary" onClick={() => window.open('https://calendly.com/tektime/tektime-qu-est-ce-que-c-est', '_blank')}>{t('hero.get_started')} <ArrowRight size={16} className="ml-2" /></button>
                        <button className="btn btn-secondary" onClick={() => window.open('https://tektime.io', '_blank')}>{t('hero.view_demo')}</button>
                    </motion.div>
                </div>

                {/* Hub and Spoke Animation Wrapper */}
                <div className="hub-spoke-container">

                    {/* SVG Layer for Lines */}
                    <svg className="connections-svg">
                        <motion.path
                            d="M 200 100 C 300 100, 350 170, 400 170"
                            className="connection-line"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M 600 100 C 500 100, 450 170, 400 170"
                            className="connection-line"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
                        />
                        <motion.path
                            d="M 400 280 L 400 170"
                            className="connection-line"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                        />
                    </svg>

                    {/* Central Hub */}
                    <div className="hub-center">
                        <motion.div
                            className="hub-logo-circle"
                            style={{ width: '100px', height: '100px' }}
                            animate={{ boxShadow: ["0 0 0 0px rgba(51, 92, 255, 0.4)", "0 0 0 20px rgba(51, 92, 255, 0)"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span style={{ fontWeight: 'bold', color: 'white' }}>TekTIME</span>
                        </motion.div>
                    </div>

                    {/* Surrounding Apps */}
                    <motion.div className="app-node" style={{ top: '25%', left: '20%' }} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }}>
                        <div className="app-icon-wrapper">
                            {surroundingApps[0].imageUrl ? (
                                <img src={surroundingApps[0].imageUrl} alt={surroundingApps[0].name} className="integration-icon" style={{ width: '24px', height: '24px' }} />
                            ) : (
                                <svg role="img" viewBox="0 0 24 24" className="integration-icon" fill={surroundingApps[0].color}>
                                    <path d={surroundingApps[0].icon.path} />
                                </svg>
                            )}
                            <span className="app-label">{surroundingApps[0].name}</span>
                        </div>
                    </motion.div>
                    <motion.div className="app-node" style={{ top: '25%', right: '20%' }} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6 }}>
                        <div className="app-icon-wrapper">
                            {surroundingApps[1].imageUrl ? (
                                <img src={surroundingApps[1].imageUrl} alt={surroundingApps[1].name} className="integration-icon" style={{ width: '24px', height: '24px' }} />
                            ) : (
                                <></>
                            )}
                            <span className="app-label">{surroundingApps[1].name}</span>
                        </div>
                    </motion.div>
                    <motion.div className="app-node" style={{ top: '75%', left: '50%' }} initial={{ scale: 0, x: '-50%' }} whileInView={{ scale: 1, x: '-50%' }} transition={{ delay: 0.7 }}>
                        <div className="app-icon-wrapper">
                            <svg role="img" viewBox="0 0 24 24" className="integration-icon" fill={surroundingApps[2].color}>
                                <path d={surroundingApps[2].icon.path} />
                            </svg>
                            {/* Ionos label removed as per design feedback */}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
