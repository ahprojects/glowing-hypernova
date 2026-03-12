'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { products } from '@/data/products';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('HomePage.Index');

  const jetProducts = products.filter(p => p.brand === 'JET');

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title font-heritage">
            {t('title').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gold">{t('title').split(' ').slice(-1)}</span>
          </h1>
          <p className="hero-subtitle">{t('subtitle')}</p>
          <div className="hero-sectors">
            <a href="#brands" className="btn btn-outline btn-hunting">
              <i className="fa-solid fa-tree"></i> {t('btn_hunting')}
            </a>
            <a href="#idetech-defense" className="btn btn-primary btn-defense">
              <i className="fa-solid fa-shield-halved"></i> {t('btn_defense')}
            </a>
            <a href="#ceo-guns" className="btn btn-outline btn-guns">
              <i className="fa-solid fa-crosshairs"></i> {t('btn_guns')}
            </a>
          </div>
        </div>
      </section>

      {/* Product Catalog / Brands Showcase */}
      <section id="catalog" className="brands-section section-padding">
        <div id="brands" className="container">
          <div className="section-header text-center">
            <h2 className="font-heritage" style={{ fontSize: '3.5rem', letterSpacing: '1px' }}>{t('catalog_section_title')} <span className="text-gold">{t('catalog_section_title_gold')}</span></h2>
            <div className="header-line"></div>
            <p style={{ letterSpacing: '0.5px' }}>{t('catalog_section_subtitle')}</p>
          </div>

          {/* JET Brand Full Products */}
          <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '50px' }}>
            <h3 className="font-heritage" style={{ fontSize: '2.2rem', color: '#fff' }}>{t('prof_tactical_title')}</h3>
            <p style={{ color: '#9da3af' }}>{t('prof_tactical_desc')}</p>
          </div>

          <div className="brands-grid" style={{ marginBottom: '60px' }}>
            {/* JET */}
            <Link href="/brand/jet" className="brand-card shadow-hover" style={{ textDecoration: 'none' }}>
              <div className="brand-logo-container">
                <h3 className="brand-name jet-brand" style={{ fontSize: '2.5rem' }}>JET<span style={{ fontSize: '1rem', fontStyle: 'normal', background: 'none', WebkitTextFillColor: '#aaa', verticalAlign: 'super' }}>®</span></h3>
              </div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '15px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t('jet_title')}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{t('jet_desc')}</p>
              <div style={{ marginTop: '20px', color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            {/* APPORT */}
            <Link href="/brand/apport" className="brand-card shadow-hover" style={{ textDecoration: 'none' }}>
              <div className="brand-logo-container">
                <h3 className="brand-name" style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, color: '#3498db', letterSpacing: '1px' }}>
                  APPORT
                </h3>
              </div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '15px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t('apport_title')}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{t('apport_desc')}</p>
              <div style={{ marginTop: '20px', color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>
          </div>

          {/* IDETECH */}
          <div id="idetech-defense" className="brand-card defense-brand-card">
            <div className="brand-logo-container">
              <h3 className="brand-name jet-brand" style={{ color: '#e74c3c', background: 'none', WebkitTextFillColor: '#e74c3c', fontSize: '3rem' }}>
                IDETECH
              </h3>
            </div>
            <h4 style={{ color: '#e74c3c', marginBottom: '20px', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('idetech_title')}</h4>
            <p className="section-subtitle-premium" style={{ maxWidth: '800px', marginBottom: '30px' }}>{t('idetech_desc')}</p>

            <div className="defense-grid">
              <div className="defense-feature">
                <h5><i className="fa-solid fa-shield-virus"></i> {t('idetech_less_lethal')}</h5>
                <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{t('idetech_less_lethal_desc')}</p>
              </div>
              <div className="defense-feature">
                <h5><i className="fa-solid fa-door-open"></i> {t('idetech_breach')}</h5>
                <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{t('idetech_breach_desc')}</p>
              </div>
              <div className="defense-feature">
                <h5><i className="fa-solid fa-smog"></i> {t('idetech_cs')}</h5>
                <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{t('idetech_cs_desc')}</p>
              </div>
            </div>

            <a href="https://idetech.com.tr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: '#c0392b', borderColor: '#c0392b', color: '#fff' }}>
              {t('visit_website')} <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>

          {/* Heritage & Classic Line */}
          <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '80px' }}>
            <h3 className="font-heritage" style={{ fontSize: '2.2rem', color: '#fff' }}>{t('heritage_classic_title')}</h3>
            <p style={{ color: '#9da3af' }}>{t('heritage_classic_desc')}</p>
          </div>
          <div className="brands-grid">
            {/* GOLD HORSE */}
            <Link href="/brand/gold-horse" className="brand-card shadow-hover" style={{ textDecoration: 'none' }}>
              <div className="brand-logo-container">
                <h3 className="brand-name gold-horse-brand">Gold Horse</h3>
              </div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '15px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t('gold_horse_title')}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{t('gold_horse_desc')}</p>
              <div style={{ marginTop: '20px', color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            {/* MIRACLE */}
            <Link href="/brand/miracle" className="brand-card shadow-hover" style={{ textDecoration: 'none' }}>
              <div className="brand-logo-container">
                <h3 className="brand-name" style={{ textTransform: 'lowercase', fontWeight: 500, fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '1px', color: '#a0a0a0', fontSize: '2.2rem', borderBottom: '2px solid #555', paddingBottom: '5px' }}>
                  miracle
                </h3>
              </div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '15px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t('miracle_title')}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{t('miracle_desc')}</p>
              <div style={{ marginTop: '20px', color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            {/* APOLLO */}
            <Link href="/brand/apollo" className="brand-card shadow-hover" style={{ textDecoration: 'none' }}>
              <div className="brand-logo-container">
                <h3 className="brand-name apollo-brand" style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, color: '#2ecc71' }}>APOLLO</h3>
              </div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '15px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t('apollo_title')}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{t('apollo_desc')}</p>
              <div style={{ marginTop: '20px', color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            {/* CEO GUNS */}
            <div id="ceo-guns" className="brand-card shadow-hover tactical-brand-card">
              <div className="brand-logo-container">
                <h3 className="brand-name" style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, color: '#ecf0f1', background: 'none', WebkitTextFillColor: '#ecf0f1', letterSpacing: '2px' }}>
                  CEO GUNS
                </h3>
              </div>
              <h4 style={{ color: '#ecf0f1', marginBottom: '15px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('ceoguns_title')}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{t('ceoguns_desc')}</p>
              <a href="https://ceoguns.com.tr/#1" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '25px', borderColor: '#7f8c8d', color: '#ecf0f1', padding: '12px 25px', fontSize: '0.9rem' }}>
                {t('visit_website')} <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '8px' }}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" className="corporate-section section-padding bg-darker" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="font-heritage" style={{ fontSize: '3.5rem', letterSpacing: '1px' }}>{t('corporate_title')} <span className="text-gold">{t('corporate_title_gold')}</span></h2>
            <div className="header-line"></div>
            <p style={{ letterSpacing: '0.5px' }}>{t('corporate_subtitle')}</p>
          </div>

          <div className="corp-grid">
            <div className="corp-main-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#fff' }}>Hakkımızda</h3>
              <p style={{ lineHeight: '1.8', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                {t('about_text')}
              </p>
            </div>

            <div className="corp-sub-column">
              <div className="corp-sub-card">
                <h4>
                  <i className="fa-solid fa-bullseye" style={{ marginRight: '10px' }}></i> {t('mission_title')}
                </h4>
                <p style={{ fontSize: '0.9rem' }}>{t('mission_text')}</p>
              </div>

              <div className="corp-sub-card">
                <h4>
                  <i className="fa-solid fa-clock-rotate-left" style={{ marginRight: '10px' }}></i> {t('history_title')}
                </h4>
                <p style={{ fontSize: '0.9rem' }}>{t('history_text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealer Map Section (Contact) */}
      <section id="contact" className="dealers-section section-padding bg-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2>{t('contact_title')} <span className="text-gold">{t('contact_title_gold')}</span></h2>
            <div className="header-line"></div>
            <p>{t('contact_subtitle')}</p>
          </div>
          <div className="map-canvas">
            <div className="map-placeholder-dots"></div>
            <div style={{ zIndex: 2, textAlign: 'center' }}>
              <i className="fa-solid fa-map-location-dot" style={{ fontSize: '4rem', color: 'var(--accent-gold)', marginBottom: '15px' }}></i>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{t('map_title')}</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 20px auto' }}>{t('map_desc')}</p>
              <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                <i className="fa-solid fa-location-crosshairs"></i> {t('map_btn')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
