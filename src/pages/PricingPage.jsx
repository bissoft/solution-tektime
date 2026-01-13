import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import './PricingPage.css';
import { API_BASE_URL, BASE_URL } from '../apiConfig';

export default function PricingPage() {
    const [pricingPlans, setPricingPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/contracts-type/Discussion`);
                const result = await response.json();

                if (result.success && Array.isArray(result.data)) {
                    const mappedPlans = result.data.map(item => {
                        let currencySymbol = item.currency;
                        if (item.currency === 'Dollar' || item.currency === 'USD' || item.currency === 'usd') currencySymbol = '$';
                        else if (item.currency === 'Euro' || item.currency === 'EUR' || item.currency === 'eur') currencySymbol = '€';

                        return {
                            name: item.name,
                            price: `${currencySymbol}${parseFloat(item.price).toFixed(0)}`,
                            period: item.payment_type.includes('Mensuelle') ? '/mo' : item.payment_type, // simplified for this page
                            description: item.description, // Map description from API
                            features: [
                                // `${item.no_of_licenses} Agents included`, // Adapted phrasing
                                `${item.no_of_licenses} ${item.no_of_licenses > 1 ? 'Licenses' : 'License'}`,
                                `Module: ${Array.isArray(item.type) ? item.type.join(', ') : item.type.replace(/[\[\]"]/g, '')}`,
                                item.payment_type.includes('Mensuelle') ? t('pricing.monthly_billing') : item.payment_type
                            ],
                            button: item.price === "Custom" ? "Book a demo" : "Subscribe",
                            isPrimary: item.name === 'Pro' || item.name === 'Basic Messages', // Highlight Pro
                            id: item.id,
                            originalPrice: item.price
                        };
                    });

                    // Add Enterprise Plan
                    mappedPlans.push({
                        name: t('pricing.enterprise.title'),
                        price: t('pricing.enterprise.price_text'),
                        period: t('pricing.enterprise.bespoke_pricing'),
                        features: t('pricing.enterprise.features', { returnObjects: true }), // Ensure this returns array
                        button: t('pricing.enterprise.speak_to_sales'),
                        isPrimary: false,
                        isEnterprise: true,
                        id: 'enterprise',
                        originalPrice: 'Custom'
                    });

                    setPricingPlans(mappedPlans);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                console.error("Failed to fetch pricing:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPlans();
    }, [t]);

    const handleSubscribe = (plan) => {
        if (plan.isEnterprise) {
            window.open('https://calendly.com/tektime/tektime-qu-est-ce-que-c-est', '_blank');
            return;
        }
        if (plan.originalPrice === "Custom") return; // Or handle contact sales
        console.log("Redirecting to:", `${BASE_URL}/register?contract_id=${plan.id}`); // Debug log
        window.location.href = `${BASE_URL}/register?contract_id=${plan.id}`;
    };

    return (
        <div className="pricing-page-v2">
            {/* Header Section with Gradient */}
            <section className="pricing-header-v2">
                <div className="container text-center relative z-10">
                    <Reveal>
                        <h1 className="pricing-title-v2">{t('pricing.title')}</h1>
                        <p className="pricing-subtitle-v2">{t('pricing.subtitle')}</p>
                    </Reveal>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="container pricing-cards-section">
                {loading ? (
                    <div className="text-center py-20"><p>Loading pricing plans...</p></div>
                ) : error || pricingPlans.length === 0 ? (
                    <div className="text-center py-20"><p>Currently unavailable</p></div>
                ) : (
                    <div className="pricing-grid-v2">
                        {pricingPlans.map((plan, idx) => (
                            <Reveal key={idx} delay={idx * 0.1}>
                                <div
                                    className={`p-card-v2 ${plan.isPrimary ? 'primary-card' : ''}`}
                                >
                                    <div className="p-card-header">
                                        <h3>{plan.name}</h3>
                                        {plan.isEnterprise ? (
                                            <div className="price-row">
                                                <span className="p-amount" style={{ fontSize: '28px', lineHeight: '1.2' }}>{plan.price}</span>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="price-row">
                                                    <span className="p-amount">{plan.price}</span>
                                                    {plan.period.startsWith('/') ? <span className="p-period">{plan.period}</span> : null}
                                                </div>
                                                {!plan.period.startsWith('/') && <p className="p-sub">{plan.period}</p>}
                                            </>
                                        )}
                                    </div>

                                    <div className="p-card-features">
                                        {plan.description ? (
                                            <div 
                                                className="plan-description-content" 
                                                dangerouslySetInnerHTML={{ __html: plan.description }} 
                                            />
                                        ) : (
                                            plan.features.map((f, i) => (
                                                <div key={i} className="pf-item">
                                                    <div className="pf-icon"><Check size={12} strokeWidth={4} color="white" /></div>
                                                    <span>{f}</span>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    <button
                                        className={`btn-v2 ${plan.isPrimary ? 'btn-blue' : 'btn-white'}`}
                                        onClick={() => handleSubscribe(plan)}
                                    >
                                        {plan.button}
                                    </button>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                )}
            </section>

            {/* Shared Features Section */}
            <Reveal>
                <Features />
            </Reveal>

            {/* Custom CTA Box */}
            <section className="container mb-24">
                <Reveal>
                    <div className="cta-box-v2">
                        <div className="cta-content-v2">
                            <h2>Ready to upgrade <br /> your customer service?</h2>
                            <p>Experience the power of TekTIME AI today.</p>
                            <div className="flex gap-4 mt-6 justify-center">
                                <button className="btn btn-secondary" onClick={() => window.open('https://tektime.io', '_blank')}>View Demo</button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Shared FAQ Section */}
            <Reveal>
                <FAQ />
            </Reveal>

        </div>
    );
}
