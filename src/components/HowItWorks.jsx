import React from 'react';
import { motion } from 'framer-motion';
import { User, ToggleRight, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import signupOutlook from '../assets/sigup-outlook.png';
import './HowItWorks.css';

export default function HowItWorks() {
    const { t } = useTranslation();

    return (
        <section className="section how-it-works-section">
            <div className="container">
                <div className="text-center section-header">
                    <h2>{t('how_it_works.title_part1')} <span className="text-primary">{t('how_it_works.title_part2')}</span></h2>
                    <p className="subtitle">{t('how_it_works.subtitle')}</p>
                </div>

                <div className="steps-container">
                    {/* Connecting Line - Progress Bar */}
                    <div className="steps-connector">
                        <motion.div
                            className="connector-progress"
                            initial={{ width: '0%' }}
                            animate={{ width: ['0%', '100%', '100%', '0%'] }}
                            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                        ></motion.div>
                    </div>

                    <div className="steps-wrapper">
                        {/* Step 1: Signup */}
                        <motion.div
                            className="step-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="step-card">
                                <motion.div
                                    className="floating-icon icon-user"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <User color="white" size={24} />
                                </motion.div>

                                <div className="card-mock-ui">
                                    <div className="mock-title">{t('how_it_works.step1.title')}</div>
                                    <div className="mock-sub">{t('how_it_works.step1.subtitle')}</div>
                                    <div className="mock-inputs">
                                        <div className="input-line"></div>
                                        <div className="input-field"></div>
                                        <div className="input-line"></div>
                                        <div className="input-field"></div>
                                    </div>
                                    <div className="mock-btn">{t('how_it_works.step1.title')}</div>
                                </div>
                            </div>
                            <div className="step-desc">
                                <p>{t('how_it_works.step1.desc')}</p>
                            </div>
                        </motion.div>

                        {/* Step 2: Integration */}
                        <motion.div
                            className="step-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="step-card">
                                <motion.div
                                    className="floating-icon icon-integrations"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                >
                                    <div className="icon-grid">
                                        <div className="mini-icon"></div>
                                        <div className="mini-icon"></div>
                                    </div>
                                </motion.div>

                                <div className="card-mock-ui">
                                    <div className="mock-title">{t('how_it_works.step2.title')}</div>
                                    <div className="mock-sub">{t('how_it_works.step2.subtitle')}</div>

                                    {/* --- ICONS SECTION --- */}
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", margin: "15px 0" }}>
                                        {/* Gmail Logo */}
                                        <motion.img
                                            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                                            alt="Gmail"
                                            style={{ width: "35px", height: "35px", objectFit: "contain" }}
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        />

                                        {/* Outlook Logo - Updated Link */}
                                        <motion.img
                                            src="https://cdn-icons-png.flaticon.com/512/732/732223.png"
                                            alt="Outlook"
                                            style={{ width: "35px", height: "35px", objectFit: "contain" }}
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                        />
                                    </div>
                                    {/* --------------------- */}

                                    {/* <div className="mock-row-bottom">
                <div className="mock-btn-small">Details</div>
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ToggleRight color="#4CAF50" size={32} />
                </motion.div>
            </div> */}
                                </div>
                            </div>
                            <div className="step-desc">
                                <p>{t('how_it_works.step2.desc')}</p>
                            </div>
                        </motion.div>

                        {/* Step 3: Stats/Graph */}
                        <motion.div
                            className="step-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="step-card">
                                <motion.div
                                    className="floating-icon icon-bot"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <MessageSquare color="white" size={24} />
                                </motion.div>

                                <div className="card-mock-ui ui-stats" style={{ padding: 0, overflow: 'hidden', background: 'transparent' }}>
                                    <img src={signupOutlook} alt="Outlook Integration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div className="step-desc">
                                <p>{t('how_it_works.step3.desc')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
