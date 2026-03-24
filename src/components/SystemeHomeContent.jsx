import React, { useState, useEffect } from "react";
import {
  Layout,
  Zap,
  Filter,
  Mail,
  Users,
  GraduationCap,
  Package,
  Video,
  Calendar,
  UserPlus,
  BarChart2,
  MessageCircle,
  ArrowRight,
  Check,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../apiConfig";

const NAV_LINKS = [
  { label: "Pourquoi choisir systeme.io ?", href: "#why" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Témoignages", href: "#testimonials" },
];

const FEATURES = [
  {
    title: "Création de site web",
    desc: "Déployez votre site en moins de 10 minutes",
    icon: Layout,
  },
  {
    title: "Automatisation des business",
    desc: "Gagnez du temps en automatisant votre entreprise",
    icon: Zap,
  },
  {
    title: "Tunnels de vente",
    desc: "Créez des tunnels de vente avec nos nombreux templates",
    icon: Filter,
  },
  {
    title: "Email marketing",
    desc: "Envoyez un nombre illimité d'emails",
    icon: Mail,
  },
  {
    title: "Gestion d'affiliation",
    desc: "Créez un programme d'affiliation et automatisez vos paiements aux affiliés",
    icon: Users,
  },
  {
    title: "Formation en ligne",
    desc: "Créez votre formation en ligne et gérez vos élèves",
    icon: GraduationCap,
  },
  {
    title: "Produits physiques",
    desc: "Vendez vos propres produits facilement",
    icon: Package,
  },
  {
    title: "Webinaires automatiques",
    desc: "Animez des webinaires pour élargir votre audience et vendre plus",
    icon: Video,
  },
  {
    title: "Calendrier de réservation",
    desc: "Planifiez vos réunions facilement grâce au calendrier intégré",
    icon: Calendar,
  },
  {
    title: "Sous-comptes",
    desc: "Gérez facilement plusieurs marques ou clients",
    icon: UserPlus,
  },
  {
    title: "Pipelines",
    desc: "Suivez les prospects et faites des ventes grâce au pipeline CRM",
    icon: BarChart2,
  },
  {
    title: "Communautés",
    desc: "Créez et développez votre propre communauté en ligne",
    icon: MessageCircle,
  },
];

const SECTIONS = [
  {
    title: "Créez des tunnels de vente",
    desc: "Il n'a jamais été aussi simple de créer des tunnels de vente",
    link: "#funnels",
    replaces: ["Leadpages", "ClickFunnels", "Kartra", "Kajabi"],
    imgBg: "linear-gradient(135deg, #e8f4fd 0%, #d0e9f8 100%)",
    imgLabel: "Tunnels de vente",
    reverse: false,
  },
  {
    title: "Envoyez des emails",
    desc: "Votre liste de contacts est liée à vos tunnels, ce qui vous fait gagner du temps et vous permet d'envoyer vos emails facilement",
    link: "#emails",
    replaces: ["Mailchimp", "ActiveCampaign", "ConvertKit"],
    imgBg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    imgLabel: "Email marketing",
    reverse: true,
  },
  {
    title: "Créez votre site",
    desc: "Créez votre site web en moins de 10 minutes grâce aux nombreux templates",
    link: "#website",
    replaces: ["WordPress", "Kartra", "Kajabi"],
    imgBg: "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)",
    imgLabel: "Création de site web",
    reverse: false,
  },
  {
    title: "Gérez vos affiliés",
    desc: "Recrutez des affiliés qui vendront vos produits. Gérez vos liens d'affiliation et vos paiements au même endroit",
    link: "#affiliates",
    replaces: ["ClickFunnels"],
    imgBg: "linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)",
    imgLabel: "Gestion d'affiliation",
    reverse: true,
  },
  {
    title: "Créez vos formations en ligne",
    desc: "Créez et hébergez vos formations en ligne sans connaissances techniques",
    link: "#courses",
    replaces: ["Thinkific", "Teachable"],
    imgBg: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
    imgLabel: "Formations en ligne",
    reverse: false,
  },
  {
    title: "Automatisez votre marketing",
    desc: "Quand tout est regroupé au même endroit, votre entreprise avance plus vite et avec moins d'efforts. Automatisez votre marketing pour économiser du temps et de l'énergie",
    link: "#automation",
    replaces: ["ClickFunnels"],
    imgBg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    imgLabel: "Automatisation",
    reverse: true,
  },
];

const FOOTER_COLS = [
  {
    title: "Produit",
    links: [
      "Tunnels de vente",
      "Email marketing",
      "Sites Internet",
      "Programme d'affiliation",
      "Automatisation du marketing",
      "Formations en ligne",
      "Bibliothèque de templates",
      "Voir la roadmap",
    ],
  },
  {
    title: "Ressources",
    links: [
      "Blog",
      "Logos systeme.io",
      "Alternatives à systeme.io",
      "API publique",
    ],
  },
  {
    title: "Info",
    links: [
      "Tarifs",
      "Témoignages",
      "Migration gratuite",
      "Devenez affilié",
      "Recevez votre trophée",
      "Devenez certifié",
      "Aide",
    ],
  },
  {
    title: "Legal",
    links: [
      "Politique de confidentialité",
      "Conditions d'utilisation",
      "Conditions du programme d'affiliation",
    ],
  },
];

const ACCENT = "#1a56db";
const ACCENT_HOVER = "#1e429f";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #111827;
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  .sio-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: transparent;
    padding: 20px 24px;
    transition: background 0.3s;
  }
  .sio-nav.scrolled {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    padding: 12px 24px;
  }
  .sio-nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }
  .sio-logo {
    font-size: 24px;
    font-weight: 800;
    color: #ffffff;
    text-decoration: none;
    letter-spacing: -0.5px;
    white-space: nowrap;
  }
  .sio-logo span { color: #ffffff; }
  .sio-nav-links {
    display: flex;
    align-items: center;
    gap: 12px;
    list-style: none;
    flex: 1;
    justify-content: center;
  }
  .sio-nav-links a {
    text-decoration: none;
    color: #ffffff;
    background: #1a56db;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 18px;
    border-radius: 6px;
    white-space: nowrap;
    transition: all 0.2s;
  }
  .sio-nav-links a:hover { background: #1e429f; transform: translateY(-1px); }
  .sio-nav-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .sio-nav-login {
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
    background: #1a56db;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 6px;
    transition: all 0.2s;
  }
  .sio-nav-login:hover { background: #1e429f; transform: translateY(-1px); }
  .sio-btn {
    background: ${ACCENT};
    color: #fff;
    border: none;
    padding: 9px 18px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.15s, transform 0.1s;
    font-family: inherit;
  }
  .sio-btn:hover { background: ${ACCENT_HOVER}; }
  .sio-btn:active { transform: scale(0.98); }
  .sio-btn.lg {
    padding: 13px 28px;
    font-size: 16px;
    border-radius: 8px;
  }

  /* HERO */
  .sio-hero-section {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/drrk2kqvy/image/upload/v1759830958/voice_notes/WhatsApp_Image_2025-10-06_at_20.59.36_dpxvu5.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 80px;
  }
  .sio-hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    padding: 80px 24px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
    position: relative;
    z-index: 1;
    width: 100%;
  }
  .sio-hero-content {
    max-width: 600px;
    flex: 1;
  }
  .sio-hero h1 {
    font-size: clamp(36px, 5vw, 68px);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1px;
    color: #ffffff;
    margin-bottom: 24px;
  }
  .sio-hero p {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 32px;
    line-height: 1.5;
    max-width: 540px;
  }
  .sio-hero-img {
    flex: 1;
    width: 100%;
    max-width: 600px;
    margin: 0;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.12);
  }
  .sio-hero-img-inner {
    width: 100%;
    height: 480px;
    background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 40%, #f0fdf4 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }
  .sio-hero-img-inner::before {
    content: '';
    position: absolute;
    top: -40px; left: -40px;
    width: 220px; height: 220px;
    background: rgba(26, 86, 219, 0.08);
    border-radius: 50%;
  }
  .sio-hero-img-inner::after {
    content: '';
    position: absolute;
    bottom: -60px; right: -30px;
    width: 300px; height: 300px;
    background: rgba(16, 185, 129, 0.07);
    border-radius: 50%;
  }
  .sio-hero-mock {
    width: 90%;
    height: 380px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    display: flex;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .sio-mock-sidebar {
    width: 180px;
    background: #1e293b;
    padding: 20px 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .sio-mock-sidebar-logo {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px;
    padding: 0 4px;
  }
  .sio-mock-nav-item {
    height: 30px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 8px;
    font-size: 12px;
    font-weight: 500;
    color: rgba(255,255,255,0.6);
    transition: background 0.15s;
  }
  .sio-mock-nav-item.active {
    background: rgba(255,255,255,0.1);
    color: #fff;
  }
  .sio-mock-nav-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${ACCENT};
    flex-shrink: 0;
  }
  .sio-mock-main {
    flex: 1;
    padding: 20px;
    background: #f9fafb;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .sio-mock-header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sio-mock-title {
    height: 18px;
    width: 140px;
    background: #1e293b;
    border-radius: 4px;
  }
  .sio-mock-badge {
    height: 22px;
    width: 80px;
    background: ${ACCENT};
    border-radius: 20px;
  }
  .sio-mock-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .sio-mock-card {
    background: #fff;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.07);
  }
  .sio-mock-card-num {
    font-size: 20px;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 4px;
  }
  .sio-mock-card-label {
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    width: 70%;
  }
  .sio-mock-bar-row {
    background: #fff;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.07);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .sio-mock-bar {
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(90deg, ${ACCENT}, #60a5fa);
  }
  .sio-mock-bar-sm {
    height: 8px;
    border-radius: 4px;
    background: #e5e7eb;
  }

  /* FEATURES GRID */
  .sio-section {
    padding: 80px 24px;
  }
  .sio-section-inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  .sio-section-title {
    font-size: clamp(24px, 3vw, 36px);
    font-weight: 800;
    text-align: center;
    margin-bottom: 52px;
    letter-spacing: -0.5px;
    color: #0f172a;
  }
  .sio-features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  .sio-feature-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 8px 4px;
  }
  .sio-feature-icon-wrap {
    width: 52px;
    height: 52px;
    background: #eff6ff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ACCENT};
    flex-shrink: 0;
  }
  .sio-feature-card h3 {
    font-size: 15px;
    font-weight: 700;
    color: #111827;
    line-height: 1.3;
  }
  .sio-feature-card p {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.55;
  }

  /* ALTERNATING SECTIONS */
  .sio-detail-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    padding: 72px 24px;
    max-width: 1100px;
    margin: 0 auto;
  }
  .sio-detail-section.reverse .sio-detail-content { order: 2; }
  .sio-detail-section.reverse .sio-detail-visual { order: 1; }

  /* NO MEDIA STATE */
  .sio-detail-section.no-media {
    grid-template-columns: 1fr;
    max-width: 800px;
    text-align: center;
  }
  .sio-detail-section.no-media .sio-detail-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;
  }
  .sio-detail-section.no-media .sio-replaces {
    align-items: center;
  }
  .sio-detail-section.no-media .sio-replaces-tags {
    justify-content: center;
  }

  .sio-detail-content h2 {
    font-size: clamp(22px, 2.5vw, 34px);
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #0f172a;
    margin-bottom: 16px;
    line-height: 1.2;
  }
  .sio-detail-content > p {
    font-size: 16px;
    color: #4b5563;
    line-height: 1.7;
    margin-bottom: 24px;
  }
  .sio-detail-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: ${ACCENT};
    color: #fff;
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 32px;
    transition: all 0.2s;
  }
  .sio-detail-link:hover { 
    background: ${ACCENT_HOVER};
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(26, 86, 219, 0.2);
  }

  .sio-replaces {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .sio-replaces-label {
    font-size: 13px;
    font-weight: 600;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .sio-replaces-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .sio-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    padding: 5px 12px;
    font-size: 13px;
    font-weight: 500;
    color: #374151;
  }
  .sio-tag-check {
    color: #10b981;
    flex-shrink: 0;
  }

  .sio-detail-visual {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 16px 48px rgba(0,0,0,0.1);
  }
  .sio-visual-placeholder {
    width: 100%;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }
@media (max-width: 900px) {
    .sio-visual-placeholder {
      height: 320px;
    }
}
  .sio-visual-label {
    font-size: 15px;
    font-weight: 600;
    color: rgba(0,0,0,0.3);
    z-index: 1;
    position: relative;
  }
  .sio-visual-placeholder::before {
    content: '';
    position: absolute;
    width: 200px; height: 200px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    top: -40px; right: -40px;
  }
  .sio-visual-placeholder::after {
    content: '';
    position: absolute;
    width: 150px; height: 150px;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    bottom: -30px; left: -20px;
  }
  /* Visual mock widgets per section */
  .sio-visual-content {
    position: absolute;
    inset: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2;
  }
  .sio-visual-card {
    background: #fff;
    border-radius: 10px;
    padding: 14px 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .sio-vc-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sio-vc-dot {
    width: 32px; height: 32px;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .sio-vc-lines {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .sio-vc-line {
    height: 8px;
    border-radius: 4px;
    background: #e5e7eb;
  }
  .sio-vc-line.dark { background: #1e293b; }
  .sio-vc-line.accent { background: ${ACCENT}; width: 50%; }
  .sio-vc-line.sm { width: 60%; }
  .sio-progress-bar {
    height: 8px;
    border-radius: 4px;
    background: #e5e7eb;
    overflow: hidden;
  }
  .sio-progress-fill {
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(90deg, ${ACCENT}, #60a5fa);
  }
  .sio-stat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .sio-stat-box {
    background: #fff;
    border-radius: 8px;
    padding: 10px 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .sio-stat-num {
    font-size: 18px;
    font-weight: 800;
    color: #0f172a;
  }
  .sio-stat-label {
    height: 7px;
    background: #e5e7eb;
    border-radius: 3px;
    width: 70%;
  }
  .sio-steps {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .sio-step {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fff;
    border-radius: 8px;
    padding: 9px 12px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.06);
    font-size: 13px;
    font-weight: 500;
    color: #374151;
  }
  .sio-step-num {
    width: 22px; height: 22px;
    border-radius: 50%;
    background: ${ACCENT};
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* DIVIDER */
  .sio-section-divider {
    height: 1px;
    background: #f3f4f6;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* FINAL CTA */
  .sio-final-cta {
    background: linear-gradient(135deg, #1e3a8a 0%, #1a56db 60%, #2563eb 100%);
    padding: 96px 24px;
    text-align: center;
    margin-top: 40px;
  }
  .sio-final-cta h2 {
    font-size: clamp(26px, 3.5vw, 42px);
    font-weight: 800;
    color: #fff;
    max-width: 680px;
    margin: 0 auto 16px;
    line-height: 1.2;
    letter-spacing: -0.5px;
  }
  .sio-final-cta p {
    font-size: 17px;
    color: rgba(255,255,255,0.8);
    max-width: 500px;
    margin: 0 auto 32px;
    line-height: 1.6;
  }
  .sio-btn.white {
    background: #fff;
    color: ${ACCENT};
  }
  .sio-btn.white:hover { background: #f0f4ff; }
  .sio-no-card {
    font-size: 14px;
    color: rgba(255,255,255,0.7);
    margin-top: 14px;
  }

  /* FOOTER */
  .sio-footer {
    background: #0f172a;
    padding: 60px 24px 32px;
    color: #9ca3af;
  }
  .sio-footer-inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  .sio-footer-top {
    display: grid;
    grid-template-columns: 200px repeat(4, 1fr);
    gap: 40px;
    padding-bottom: 48px;
    border-bottom: 1px solid #1e293b;
    margin-bottom: 32px;
  }
  .sio-footer-brand {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .sio-footer-logo {
    font-size: 18px;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.5px;
  }
  .sio-footer-logo span { color: ${ACCENT}; }
  .sio-footer-socials {
    display: flex;
    gap: 10px;
  }
  .sio-footer-social {
    width: 32px; height: 32px;
    background: #1e293b;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s;
    font-size: 13px;
    font-weight: 700;
    color: #9ca3af;
  }
  .sio-footer-social:hover { background: #334155; color: #fff; }
  .sio-footer-col h4 {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 16px;
  }
  .sio-footer-col ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .sio-footer-col a {
    font-size: 13px;
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.15s;
    line-height: 1.4;
  }
  .sio-footer-col a:hover { color: #e5e7eb; }
  .sio-footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  .sio-footer-copy {
    font-size: 13px;
    color: #6b7280;
  }

  /* MOBILE */
  @media (max-width: 900px) {
    .sio-hero {
        flex-direction: column;
        text-align: center;
        padding-top: 40px;
    }
    .sio-hero-content {
        align-items: center;
        margin: 0 auto;
    }
    .sio-hero h1 {
        font-size: 36px;
    }
    .sio-nav-links { display: none; }
    .sio-features-grid { grid-template-columns: repeat(2, 1fr); }
    .sio-detail-section {
      grid-template-columns: 1fr;
      gap: 36px;
      padding: 52px 24px;
    }
    .sio-detail-section.reverse .sio-detail-content { order: 0; }
    .sio-detail-section.reverse .sio-detail-visual { order: 0; }
    .sio-footer-top { grid-template-columns: 1fr 1fr; }
    .sio-hero-mock { display: none; }
    .sio-hero-img { display: none; }
  }
  @media (max-width: 580px) {
    .sio-features-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
    .sio-footer-top { grid-template-columns: 1fr; }
  }

  /* TABS */
  .sio-tabs-wrapper {
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    position: sticky;
    top: 0;
    z-index: 50;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .sio-tabs {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    padding: 0 24px;
  }
  .sio-tab-btn {
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    padding: 18px 36px;
    font-size: 15px;
    font-weight: 600;
    color: #6b7280;
    letter-spacing: 0.01em;
    transition: color 0.2s;
    outline: none;
    white-space: nowrap;
  }
  .sio-tab-btn:hover {
    color: #1a56db;
  }
  .sio-tab-btn.active {
    color: #1a56db;
  }
  .sio-tab-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #1a56db, #3b82f6);
    border-radius: 3px 3px 0 0;
    animation: tabSlideIn 0.2s ease;
  }
  @keyframes tabSlideIn {
    from { opacity: 0; transform: scaleX(0.6); }
    to   { opacity: 1; transform: scaleX(1); }
  }
  /* Desktop: show tab buttons, hide dropdown */
  .sio-tabs-desktop { display: flex; width: 100%; justify-content: center; }
  .sio-tabs-mobile  { display: none; }
  /* Mobile: hide tab buttons, show dropdown */
  @media (max-width: 600px) {
    .sio-tabs-desktop { display: none; }
    .sio-tabs-mobile {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 12px 16px;
    }
    .sio-tab-select {
      width: 100%;
      padding: 11px 40px 11px 16px;
      font-size: 15px;
      font-weight: 600;
      color: #1a56db;
      background: #eff6ff;
      border: 1.5px solid #bfdbfe;
      border-radius: 10px;
      appearance: none;
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231a56db' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 14px center;
      cursor: pointer;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .sio-tab-select:focus {
      border-color: #1a56db;
      box-shadow: 0 0 0 3px rgba(26,86,219,0.12);
    }
  }
`;

// Visual mock components for each section
function VisualFunnels() {
  return (
    <div className="sio-visual-content">
      <div className="sio-visual-card">
        <div className="sio-vc-row">
          <div className="sio-vc-dot" style={{ background: "#dbeafe" }} />
          <div className="sio-vc-lines">
            <div className="sio-vc-line dark" style={{ width: "80%" }} />
            <div className="sio-vc-line sm" />
          </div>
        </div>
        <div className="sio-progress-bar">
          <div className="sio-progress-fill" style={{ width: "78%" }} />
        </div>
      </div>
      <div className="sio-stat-row">
        {[
          { n: "4,320", l: "Visites" },
          { n: "1,248", l: "Conversions" },
        ].map((s, i) => (
          <div className="sio-stat-box" key={i}>
            <div className="sio-stat-num">{s.n}</div>
            <div className="sio-stat-label" />
          </div>
        ))}
      </div>
      <div className="sio-steps">
        {["Page d'accueil", "Page de vente", "Confirmation"].map((t, i) => (
          <div className="sio-step" key={i}>
            <div className="sio-step-num">{i + 1}</div>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
function VisualEmail() {
  return (
    <div className="sio-visual-content">
      <div className="sio-visual-card">
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: 4,
          }}
        >
          Nouvelle campagne email
        </div>
        <div
          className="sio-vc-line"
          style={{ width: "100%", background: "#e5e7eb" }}
        />
        <div
          className="sio-vc-line"
          style={{ width: "85%", background: "#e5e7eb", marginTop: 2 }}
        />
      </div>
      <div className="sio-steps">
        {[
          "Sujet: Offre spéciale 🎉",
          "Destinataires: 12,450",
          "Taux d'ouverture: 38%",
        ].map((t, i) => (
          <div className="sio-step" key={i}>
            <div
              className="sio-step-num"
              style={{ background: i === 2 ? "#10b981" : undefined }}
            >
              {i === 2 ? "✓" : i + 1}
            </div>
            {t}
          </div>
        ))}
      </div>
      <div className="sio-stat-row">
        {[
          { n: "38%", l: "Ouverture" },
          { n: "12%", l: "Clics" },
        ].map((s, i) => (
          <div className="sio-stat-box" key={i}>
            <div className="sio-stat-num">{s.n}</div>
            <div className="sio-stat-label" />
          </div>
        ))}
      </div>
    </div>
  );
}
function VisualWebsite() {
  return (
    <div className="sio-visual-content">
      <div className="sio-visual-card" style={{ flex: 1 }}>
        <div
          style={{
            height: 16,
            background: "#0f172a",
            borderRadius: 4,
            width: "60%",
            marginBottom: 8,
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 8,
            marginBottom: 8,
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                height: 36,
                background: i === 0 ? "#dbeafe" : "#f3f4f6",
                borderRadius: 6,
              }}
            />
          ))}
        </div>
        <div
          style={{
            height: 8,
            background: "#e5e7eb",
            borderRadius: 4,
            width: "90%",
          }}
        />
        <div
          style={{
            height: 8,
            background: "#e5e7eb",
            borderRadius: 4,
            width: "75%",
            marginTop: 4,
          }}
        />
      </div>
      <div className="sio-stat-row">
        {[
          { n: "12", l: "Templates" },
          { n: "<10min", l: "Déploiement" },
        ].map((s, i) => (
          <div className="sio-stat-box" key={i}>
            <div className="sio-stat-num">{s.n}</div>
            <div className="sio-stat-label" />
          </div>
        ))}
      </div>
    </div>
  );
}
function VisualAffiliates() {
  return (
    <div className="sio-visual-content">
      <div className="sio-steps">
        {[
          "Sophie M. — 48 ventes",
          "Lucas D. — 31 ventes",
          "Emma R. — 22 ventes",
        ].map((t, i) => (
          <div
            className="sio-step"
            key={i}
            style={{ justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                className="sio-step-num"
                style={{ background: ["#f59e0b", "#9ca3af", "#cd7c2f"][i] }}
              >
                {i + 1}
              </div>
              {t}
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#10b981" }}>
              +{[480, 310, 220][i]}€
            </div>
          </div>
        ))}
      </div>
      <div className="sio-visual-card">
        <div className="sio-vc-row">
          <div className="sio-vc-dot" style={{ background: "#d1fae5" }} />
          <div className="sio-vc-lines">
            <div className="sio-vc-line dark" style={{ width: "70%" }} />
            <div className="sio-vc-line sm" />
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#10b981",
              marginLeft: "auto",
            }}
          >
            Payé
          </div>
        </div>
        <div className="sio-progress-bar">
          <div
            className="sio-progress-fill"
            style={{
              width: "62%",
              background: "linear-gradient(90deg, #10b981, #6ee7b7)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
function VisualCourses() {
  return (
    <div className="sio-visual-content">
      <div className="sio-visual-card">
        <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>
          Ma formation en ligne
        </div>
        {[
          "Module 1: Introduction",
          "Module 2: Fondamentaux",
          "Module 3: Avancé",
        ].map((m, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                background: i < 2 ? "#10b981" : "#e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {i < 2 && (
                <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>
                  ✓
                </span>
              )}
            </div>
            <span style={{ fontSize: 12, color: "#374151" }}>{m}</span>
          </div>
        ))}
      </div>
      <div className="sio-stat-row">
        {[
          { n: "1,240", l: "Élèves" },
          { n: "94%", l: "Satisfaction" },
        ].map((s, i) => (
          <div className="sio-stat-box" key={i}>
            <div className="sio-stat-num">{s.n}</div>
            <div className="sio-stat-label" />
          </div>
        ))}
      </div>
    </div>
  );
}
function VisualAutomation() {
  return (
    <div className="sio-visual-content">
      <div className="sio-steps">
        {[
          { label: "Email de bienvenue", delay: "0min", color: "#3b82f6" },
          { label: "Email de suivi", delay: "3 jours", color: "#8b5cf6" },
          { label: "Offre spéciale", delay: "7 jours", color: "#10b981" },
        ].map((s, i) => (
          <div
            className="sio-step"
            key={i}
            style={{ justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="sio-step-num" style={{ background: s.color }}>
                {i + 1}
              </div>
              {s.label}
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500 }}>
              +{s.delay}
            </div>
          </div>
        ))}
      </div>
      <div className="sio-visual-card">
        <div
          style={{
            fontSize: 12,
            color: "#6b7280",
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          Taux de conversion
        </div>
        <div className="sio-progress-bar">
          <div className="sio-progress-fill" style={{ width: "84%" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <span style={{ fontSize: 11, color: "#9ca3af" }}>0%</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#0f172a" }}>
            84%
          </span>
        </div>
      </div>
    </div>
  );
}

const VISUAL_COMPONENTS = [
  VisualFunnels,
  VisualEmail,
  VisualWebsite,
  VisualAffiliates,
  VisualCourses,
  VisualAutomation,
];

// Gradient backgrounds that cycle per section
const SECTION_BG_COLORS = [
  "linear-gradient(135deg, #e8f4fd 0%, #d0e9f8 100%)",
  "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
  "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)",
  "linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)",
  "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
  "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
];

const TABS = [
  { key: "Entreprises", label: "Entreprises" },
  { key: "Profession", label: "Profession" },
  { key: "Applications", label: "Applications" },
];

const getYouTubeID = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const getYouTubeEmbedUrl = (url, autoplay = false) => {
  const id = getYouTubeID(url);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&mute=${autoplay ? 1 : 0}`;
};

function LandingPageSection({
  section,
  idx,
  isReverse,
  bgColor,
  isLast,
  shouldPlayAudio,
}) {
  const isYoutube = section.hero_media_type === "youtube";
  const hasMedia = isYoutube ? !!section.hero_youtube_url : !!section.hero_media_path;
  const isVideo = section.hero_media_type === "video";

  // useEffect(() => {
  //   let audio = null;
  //   let timeoutId = null;

  //   if (shouldPlayAudio && section.audio_file) {
  //     audio = new Audio(section.audio_file);

  //     const playAudio = async () => {
  //       try {
  //         // Play the audio
  //         await audio.play();

  //         // Stop after 8 seconds
  //         timeoutId = setTimeout(() => {
  //           if (audio) {
  //             audio.pause();
  //             audio.currentTime = 0;
  //           }
  //         }, 8000);
  //       } catch (err) {
  //         console.warn("Audio autoplay blocked or failed:", err);
  //       }
  //     };

  //     playAudio();
  //   }

  //   return () => {
  //     if (audio) {
  //       audio.pause();
  //       audio = null;
  //     }
  //     if (timeoutId) {
  //       clearTimeout(timeoutId);
  //     }
  //   };
  // }, [shouldPlayAudio, section.audio_file]);

  return (
    <div>
      <section
        className={`sio-detail-section${isReverse && hasMedia ? " reverse" : ""}${!hasMedia ? " no-media" : ""}`}
      >
        <div className="sio-detail-content">
          {section.gate_name && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#eff6ff",
                color: "#1a56db",
                fontSize: 12,
                fontWeight: 700,
                padding: "4px 12px",
                borderRadius: 20,
                marginBottom: 14,
                border: "1px solid #dbeafe",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {section.gate_name}
            </div>
          )}
          <h2>{section.title}</h2>
          <p>{section.subtitle}</p>
          {section.gate_name && (
            <Link
              to={`https://tektime.io/gate/${section.gate_name}`}
              className="sio-detail-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={async (e) => {
                e.preventDefault();
                const link = `https://tektime.io/gate/${section.gate_name}`;
                if (section?.id) {
                  try {
                    await fetch(
                      `${API_BASE_URL}/landing-pages/${section.id}/click`,
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                      },
                    );
                  } catch (error) {
                    console.error("Error tracking click:", error);
                  }
                }
                if (link) window.open(link, "_blank");
              }}
            >
              En savoir plus <ArrowRight size={16} />
            </Link>
          )}
          {section.hero_benefits?.some((b) => b) && (
            <div className="sio-replaces">
              <div className="sio-replaces-label">Avantages</div>
              <div className="sio-replaces-tags">
                {section.hero_benefits
                  .filter((b) => b)
                  .map((b, i) => (
                    <span className="sio-tag" key={i}>
                      <Check
                        size={12}
                        className="sio-tag-check"
                        style={{ color: "#10b981" }}
                      />
                      {b}
                    </span>
                  ))}
              </div>
            </div>
          )}
        </div>

        {hasMedia && (
          <div className="sio-detail-visual">
            <div
              className="sio-visual-placeholder"
              style={{
                background: bgColor,
              }}
            >
              {isYoutube ? (
                <iframe
                  src={getYouTubeEmbedUrl(
                    section.hero_youtube_url,
                    section.hero_autoplay,
                  )}
                  title={section.hero_alt_text || section.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              ) : isVideo ? (
                <video
                  src={section.hero_media_path}
                  autoPlay={section.hero_autoplay}
                  muted={section.hero_autoplay}
                  loop={!!section.hero_autoplay}
                  playsInline
                  controls
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "12px",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              ) : (
                <img
                  src={section.hero_media_path}
                  alt={section.hero_alt_text || section.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "12px",
                  }}
                />
              )}
            </div>
          </div>
        )}
      </section>
      {!isLast && <div className="sio-section-divider" />}
    </div>
  );
}

export default function SystemeFeatures({ sections = [] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Entreprises");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      {/* <nav className="sio-nav">
        <div className="sio-nav-inner">
    
          <ul className="sio-nav-links">
           
          </ul>
          <div className="sio-nav-right">
            <a href="#login" className="sio-nav-login">Connexion</a>
            <button className="sio-btn">Commencer</button>
          </div>
        </div>
      </nav> */}

      {/* HERO */}
      <section className="sio-hero-section">
        <div className="sio-hero">
          <div className="sio-hero-content">
            <h1>
              Ne jonglez plus entre plusieurs outils pour votre entreprise
            </h1>
            <p>Tout votre environnement de travail dans un seul outil</p>
            {/* <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
            <input 
              type="email" 
              placeholder="Adresse email" 
              style={{
                padding:'12px 16px', 
                borderRadius:'6px', 
                border:'1px solid #d1d5db', 
                fontSize:'16px',
                width:'240px'
              }} 
            />
            <button className="sio-btn lg">Commencer gratuitement</button>
          </div> */}
            {/* <p style={{fontSize:'14px', color:'#9ca3af', marginTop:'12px'}}>Pas besoin de carte bancaire</p> */}
          </div>

          {/* <div className="sio-hero-img">
          <div className="sio-hero-img-inner">
            <div className="sio-hero-mock">
              <div className="sio-mock-sidebar">
                <div className="sio-mock-sidebar-logo">systeme.io</div>
                {['Tableau de bord','Tunnels','Emails','Formations','Affiliés'].map((item, i) => (
                  <div className={`sio-mock-nav-item${i === 0 ? ' active' : ''}`} key={item}>
                    <div className="sio-mock-nav-dot" style={{opacity: i === 0 ? 1 : 0.3}} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="sio-mock-main">
                <div className="sio-mock-header-bar">
                  <div className="sio-mock-title" />
                  <div className="sio-mock-badge" />
                </div>
                <div className="sio-mock-cards">
                  {[{n:'€12,450',c:'#dbeafe'},{n:'1,248',c:'#d1fae5'},{n:'94%',c:'#fef9c3'}].map((c,i) => (
                    <div className="sio-mock-card" key={i}>
                      <div className="sio-mock-card-num">{c.n}</div>
                      <div className="sio-mock-card-label" style={{background:c.c}} />
                    </div>
                  ))}
                </div>
                <div className="sio-mock-bar-row">
                  <div className="sio-mock-bar" style={{width:'88%'}} />
                  <div className="sio-mock-bar" style={{width:'65%', opacity:0.6}} />
                  <div className="sio-mock-bar-sm" style={{width:'45%'}} />
                </div>
                <div className="sio-mock-bar-row">
                  <div style={{display:'flex',gap:8}}>
                    {[80,55,70,45,90,60].map((w,i)=>(
                      <div key={i} style={{flex:1,height:40,borderRadius:4,background:`rgba(26,86,219,${0.15+w/400})`,alignSelf:'flex-end',marginTop:'auto'}} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </section>

      {/* TABS */}
      <div className="sio-tabs-wrapper">
        <div className="sio-tabs">
          {/* Desktop: tab buttons */}
          <div className="sio-tabs-desktop">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`sio-tab-btn${activeTab === tab.key ? " active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span className="sio-tab-indicator" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile: dropdown select */}
          <div className="sio-tabs-mobile">
            <select
              className="sio-tab-select"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {TABS.map((tab) => (
                <option key={tab.key} value={tab.key}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ALTERNATING DETAIL SECTIONS — dynamic from API */}
      <div>
        {sections.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px 24px",
              color: "#9ca3af",
              fontSize: 16,
            }}
          >
            Aucune section disponible pour le moment.
          </div>
        ) : (
          sections
            ?.filter(
              (section) =>
                section.gate_name !== "Tektime" &&
                (section.gate_type === activeTab ||
                  section.gate_type
                    ?.toLowerCase()
                    .includes(activeTab.toLowerCase())),
            )
            ?.map((section, idx, filteredArr) => (
              <LandingPageSection
                key={section.id}
                section={section}
                idx={idx}
                isReverse={idx % 2 !== 0}
                bgColor={SECTION_BG_COLORS[idx % SECTION_BG_COLORS.length]}
                isLast={idx === filteredArr.length - 1}
                shouldPlayAudio={idx === 0}
              />
            ))
        )}
      </div>

      {/* FOOTER */}
      {/* Footer commented out as user has their own footer component in Layout */}
      {/* <footer className="sio-footer">
        <div className="sio-footer-inner">
          <div className="sio-footer-top"> ... </div>
      </footer> */}
    </>
  );
}
