import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Pricing.css';
import { API_BASE_URL, BASE_URL } from '../apiConfig';

export default function Pricing() {
    const { t } = useTranslation();
    const [plans, setPlans] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/contracts-type/Discussion`);
                const result = await response.json();

                if (result.success && Array.isArray(result.data)) {
                    // Map API data to our component structure
                    // Map API data to our component structure
                    const mappedPlans = result.data.map(item => {
                        let currencySymbol = item.currency;
                        if (item.currency === 'Dollar' || item.currency === 'USD' || item.currency === 'usd') currencySymbol = '$';
                        else if (item.currency === 'Euro' || item.currency === 'EUR' || item.currency === 'eur') currencySymbol = '€';

                        return {
                            name: item.name,
                            price: `${currencySymbol}${parseFloat(item.price).toFixed(0)}`,
                            // If payment_type is "Mensuelle (1 mois)", display "per month", otherwise use raw string
                            period: item.payment_type.includes('Mensuelle') ? t('pricing.per_month') : item.payment_type,
                            description: item.description, // Map description from API
                            // Construct features based on available data
                            features: [
                                `${item.no_of_licenses} ${item.no_of_licenses > 1 ? 'Licenses' : 'License'}`,
                                `Module: ${Array.isArray(item.type) ? item.type.join(', ') : item.type.replace(/[\[\]"]/g, '')}`,
                                // Only add payment frequency if not already covered by "per month" label
                                item.payment_type.includes('Mensuelle') ? t('pricing.monthly_billing') : item.payment_type,
                            ].filter(Boolean),
                            isPopular: item.name === 'Pro' || item.name === 'Basic Messages', // Highlight Basic or Pro as popular
                            // Store original ID for keys or logic
                            id: item.id
                        };
                    });

                    // Add Enterprise Plan
                    mappedPlans.push({
                        name: t('pricing.enterprise.title'),
                        price: t('pricing.enterprise.price_text'),
                        period: t('pricing.enterprise.bespoke_pricing'),
                        features: t('pricing.enterprise.features', { returnObjects: true }), // Ensure this returns array
                        isPopular: false,
                        isEnterprise: true,
                        id: 'enterprise'
                    });

                    setPlans(mappedPlans);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                console.error("Failed to fetch pricing:", err);
                setError(err.message);
                // Fallback to static data or empty? 
                // For now, let's leave plans empty to show error/nothing, 
                // or we could keep the static ones as fallback if requested.
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();
    }, [t]);

    if (loading) {
        return (
            <section className="section pricing-section" id="pricing">
                <div className="container text-center">
                    <p>{t('pricing.loading')}</p>
                </div>
            </section>
        );
    }

    // Only show if we have plans, otherwise maybe null or error message?
    if (error || plans.length === 0) {
        // Optionally render static fallback here if API fails, 
        // but user asked for dynamic. Showing nothing or error for now.
        return (
            <section className="section pricing-section" id="pricing">
                <div className="container text-center">
                    <p>{t('pricing.unavailable')}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="section pricing-section" id="pricing">
            <div className="container">
                <div className="text-center section-header">
                    <h2 className="section-title">{t('pricing.title')}</h2>
                    <p className="subtitle">{t('pricing.subtitle')}</p>
                </div>

                <div className="pricing-grid mt-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
                            style={plan.isEnterprise ? {
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '2rem'
                            } : {}}
                        >
                            {plan.isPopular && <div className="popular-badge">{t('pricing.most_popular')}</div>}
                            <div className="plan-header" style={plan.isEnterprise ? { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' } : {}}>
                                <h3>{plan.name}</h3>
                                <div className="plan-price" style={plan.isEnterprise ? { justifyContent: 'center', width: '100%' } : {}}>
                                    {plan.isEnterprise ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                            <span style={{ fontSize: '2rem', lineHeight: '1.2' }}>{plan.price}</span>
                                        </div>
                                    ) : (
                                        <>
                                            {plan.price}
                                            <span className="plan-period">{plan.period}</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {!plan.isEnterprise && (
                                <div className="plan-features">
                                    {plan.description ? (
                                        <div
                                            className="plan-description-content"
                                            dangerouslySetInnerHTML={{ __html: plan.description }}
                                        />
                                    ) : (
                                        plan.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="feature-item">
                                                <Check size={16} className="feature-check" />
                                                <span>{feature}</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}

                            <button
                                className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'} w-full`}
                                onClick={() => {
                                    if (plan.isEnterprise) {
                                        window.open('https://calendly.com/tektime/tektime-qu-est-ce-que-c-est', '_blank');
                                        return;
                                    }
                                    if (plan.price === "Custom") return;
                                    console.log("Pricing Component Redirecting to:", `${BASE_URL}/register?contract_id=${plan.id}`);
                                    window.location.href = `${BASE_URL}/register?contract_id=${plan.id}`;
                                }}
                            >
                                {plan.isEnterprise ? t('pricing.enterprise.speak_to_sales') : (plan.price === "Custom" ? t('pricing.contact_sales') : t('pricing.subscribe'))}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
