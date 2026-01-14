import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Mail, Calendar, MessageSquare, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Integrations.css';
import { siIonos } from 'simple-icons';

const surroundingApps = [
    { name: 'Gmail', icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg", color: '#E4405F', bg: '#fce8ec', position: { top: '15%', left: '15%' }, path: "M 180 100 C 250 100, 350 200, 400 200" },
    { name: 'Outlook', icon: "https://cdn-icons-png.flaticon.com/512/732/732223.png", color: '#0078D4', bg: '#e5f4ff', position: { top: '15%', right: '15%' }, path: "M 620 100 C 550 100, 450 200, 400 200" },
    { name: 'Ionos', simpe_icon: siIonos, color: '#003D8F', bg: '#e5edff', position: { top: '67%', left: '14%' }, path: "M 180 300 C 250 300, 350 200, 400 200" },
    // { name: 'Data', icon: Database, color: '#000000', bg: '#f0f0f0', position: { top: '75%', right: '15%' }, path: "M 620 300 C 550 300, 450 200, 400 200" },
];

export default function Integrations() {
    const { t } = useTranslation();

    return (
        <section className="section integrations-section">
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
                        <button className="btn btn-primary" onClick={() => {
                            const element = document.getElementById('pricing');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                window.location.href = '#pricing';
                            }
                        }}>
                            {t('hero.get_started')} <ArrowRight size={16} className="ml-2" />
                        </button>
                        <button className="btn btn-secondary" onClick={() => window.open('https://youtu.be/ZkFFcwOQTLw', '_blank', 'noreferrer')}>
                            {t('hero.view_demo')}
                        </button>
                    </motion.div>
                </div>

                {/* Hub and Spoke Animation Wrapper */}
                <div className="hub-spoke-container">

                    {/* SVG Layer for Lines */}
                    <svg className="connections-svg" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
                        {surroundingApps.map((app, index) => (
                            <motion.path
                                key={index}
                                d={app.path}
                                className="connection-line"
                                stroke="#E5E5E5"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 + index * 0.1 }}
                            />
                        ))}
                    </svg>

                    {/* Central Hub */}
                    <div className="hub-center">
                        <motion.div
                            className="hub-robot-circle"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", duration: 0.8 }}
                        >
                            <motion.div
                                className="hub-pulse"
                                animate={{ boxShadow: ["0 0 0 0px rgba(51, 92, 255, 0.4)", "0 0 0 20px rgba(51, 92, 255, 0)"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <Bot size={48} color="white" />
                        </motion.div>
                    </div>

                    {/* Surrounding Apps */}
                    {surroundingApps.map((app, index) => (
                        <motion.div
                            key={index}
                            className="app-node"
                            style={app.position}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                        >
                            <div className="app-icon-wrapper">
                                  {app.icon ? (
                                <img src={app.icon} alt={app.name} className="integration-icon" style={{ width: '24px', height: '24px' }} />
                            ) : (
                                <svg role="img" viewBox="0 0 24 24" className="integration-icon" style={{ width: '38px', height: '38px' }}  fill={app.color}>
                                    <path d={app.simpe_icon.path} />
                                </svg>
                            )}
                            {/* <span className="app-label">{app.name}</span>      */}
                                                   </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
