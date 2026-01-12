import React from 'react';
import { useTranslation } from 'react-i18next';
import './CTA.css';

export default function CTA() {
    const { t } = useTranslation();

    return (
        <section className="section cta-section">
            <div className="container">
                <div className="cta-card">
                    <div className="cta-content">
                        <h2>{t('cta.title')}</h2>
                        <p>{t('cta.text')}</p>
                        <div className="cta-form">
                            <button className="btn btn-primary" onClick={() => {
                                window.open('https://calendly.com/tektime/tektime-qu-est-ce-que-c-est', '_blank');
                            }}>{t('cta.button')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

