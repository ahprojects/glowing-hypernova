'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { products } from '@/data/products';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('HomePage.Index');
  const [activeSector, setActiveSector] = useState<'hunting' | 'defense' | 'rifles'>('hunting');

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
            <button 
              onClick={() => {
                setActiveSector('hunting');
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="btn btn-outline btn-hunting"
            >
              <i className="fa-solid fa-tree"></i> {t('btn_hunting')}
            </button>
            <button 
              onClick={() => {
                setActiveSector('defense');
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="btn btn-primary btn-defense"
            >
              <i className="fa-solid fa-shield-halved"></i> {t('btn_defense')}
            </button>
            <button 
              onClick={() => {
                setActiveSector('rifles');
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="btn btn-outline btn-guns"
            >
              <i className="fa-solid fa-crosshairs"></i> {t('btn_guns')}
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </section>

      {/* Sector Selection Cards */}
      <section id="catalog" className="sector-selection section-padding">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2 className="font-heritage">{t('brands_title')} <span className="text-gold">{t('brands_title_gold')}</span></h2>
            <div className="header-line"></div>
            <p>{t('brands_subtitle')}</p>
          </div>
          
          <div className="sector-grid reveal">
            {/* Hunting & Sport Card */}
            <div 
              className={`sector-card ${activeSector === 'hunting' ? 'active' : ''}`}
              onClick={() => {
                setActiveSector('hunting');
                setTimeout(() => document.getElementById('brand-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
              }}
            >
              <div 
                className="sector-card-bg" 
                style={{ backgroundImage: 'url("/sector-hunting.png")' }}
              ></div>
              <div className="sector-card-content">
                <i className="fa-solid fa-tree"></i>
                <h3>{t('btn_hunting')}</h3>
                <p>{t('heritage_classic_desc')}</p>
              </div>
            </div>

            {/* Defense & Tactical Card */}
            <div 
              className={`sector-card defense ${activeSector === 'defense' ? 'active' : ''}`}
              onClick={() => {
                setActiveSector('defense');
                setTimeout(() => document.getElementById('brand-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
              }}
            >
              <div 
                className="sector-card-bg" 
                style={{ backgroundImage: 'url("/sector-defense.png")' }}
              ></div>
              <div className="sector-card-content">
                <i className="fa-solid fa-shield-halved"></i>
                <h3>{t('btn_defense')}</h3>
                <p>{t('prof_tactical_desc')}</p>
              </div>
            </div>

            {/* Rifles Card */}
            <div 
              className={`sector-card ${activeSector === 'rifles' ? 'active' : ''}`}
              onClick={() => {
                setActiveSector('rifles');
                setTimeout(() => document.getElementById('brand-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
              }}
            >
              <div 
                className="sector-card-bg" 
                style={{ backgroundImage: 'url("/sector-rifles.png")' }}
              ></div>
              <div className="sector-card-content">
                <i className="fa-solid fa-crosshairs"></i>
                <h3>{t('btn_guns')}</h3>
                <p>{t('ceoguns_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog / Brands Showcase */}
      <section id="brand-results" className="brands-showcase section-padding-small bg-darker">
        <div className="container">
          {/* Hunting Group */}
          <div className={`brand-group-container ${activeSector === 'hunting' ? 'active' : ''}`}>
            <div className="group-header text-center reveal">
              <h3 className="group-title">{t('hunting_brands_title')}</h3>
              <div className="group-line"></div>
            </div>
            
            <div className="brands-grid">
              {/* JET */}
              <Link href="/brand/jet" className="brand-card shadow-hover reveal reveal-delay-1">
                <div className="brand-logo-container">
                  <h3 className="brand-name jet-brand">JET<span className="reg-mark">®</span></h3>
                </div>
                <h4>{t('jet_title')}</h4>
                <p>{t('jet_desc')}</p>
                <div className="brand-action">
                  {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
                </div>
              </Link>


              {/* GOLD HORSE */}
              <Link href="/brand/gold-horse" className="brand-card shadow-hover reveal reveal-delay-1">
                <div className="brand-logo-container">
                  <h3 className="brand-name gold-horse-brand">Gold Horse</h3>
                </div>
                <h4>{t('gold_horse_title')}</h4>
                <p>{t('gold_horse_desc')}</p>
                <div className="brand-action">
                  {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
                </div>
              </Link>

              {/* MIRACLE */}
              <Link href="/brand/miracle" className="brand-card shadow-hover reveal reveal-delay-2">
                <div className="brand-logo-container">
                  <h3 className="brand-name miracle-brand">miracle</h3>
                </div>
                <h4>{t('miracle_title')}</h4>
                <p>{t('miracle_desc')}</p>
                <div className="brand-action">
                  {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
                </div>
              </Link>

              {/* APOLLO */}
              <Link href="/brand/apollo" className="brand-card shadow-hover reveal reveal-delay-3">
                <div className="brand-logo-container">
                  <h3 className="brand-name apollo-brand">APOLLO</h3>
                </div>
                <h4>{t('apollo_title')}</h4>
                <p>{t('apollo_desc')}</p>
                <div className="brand-action">
                  {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
                </div>
              </Link>
            </div>
          </div>

          {/* Defense Group */}
          <div className={`brand-group-container ${activeSector === 'defense' ? 'active' : ''}`}>
            <div className="group-header text-center reveal">
              <h3 className="group-title text-red">{t('defense_brands_title')}</h3>
              <div className="group-line bg-red"></div>
            </div>
            
            <div id="idetech-defense" className="brand-card defense-brand-card reveal">
              <div className="brand-logo-container">
                <Image 
                  src="/idetech-logo.png" 
                  alt="IDETECH Logo" 
                  width={280} 
                  height={80} 
                  className="ide-brand"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 className="ide-title">{t('idetech_title')}</h4>
              <p className="section-subtitle-premium">{t('idetech_desc')}</p>

              <div className="defense-grid">
                <div className="defense-feature">
                  <h5><i className="fa-solid fa-shield-virus"></i> {t('idetech_less_lethal')}</h5>
                  <p>{t('idetech_less_lethal_desc')}</p>
                </div>
                <div className="defense-feature">
                  <h5><i className="fa-solid fa-door-open"></i> {t('idetech_breach')}</h5>
                  <p>{t('idetech_breach_desc')}</p>
                </div>
                <div className="defense-feature">
                  <h5><i className="fa-solid fa-smog"></i> {t('idetech_cs')}</h5>
                  <p>{t('idetech_cs_desc')}</p>
                </div>
              </div>

              <a href="https://idetech.com.tr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-idetech ide-btn">
                {t('visit_website')} <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>

          </div>

          {/* Rifles Group */}
          <div className={`brand-group-container ${activeSector === 'rifles' ? 'active' : ''}`}>
            <div className="group-header text-center reveal">
              <h3 className="group-title">{t('rifles_brands_title')}</h3>
              <div className="group-line"></div>
            </div>
            
            <div id="ceo-guns" className="brand-card shadow-hover tactical-brand-card reveal">
              <div className="brand-logo-container">
                <h3 className="brand-name ceo-brand">CEO GUNS</h3>
              </div>
              <h4 className="ceo-title">{t('ceoguns_title')}</h4>
              <p>{t('ceoguns_desc')}</p>
              <a href="https://ceoguns.com.tr/#1" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-guns">
                {t('visit_website')} <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" className="corporate-section section-padding bg-darker">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2 className="font-heritage">{t('corporate_title')} <span className="text-gold">{t('corporate_title_gold')}</span></h2>
            <div className="header-line"></div>
            <p>{t('corporate_subtitle')}</p>
          </div>

          <div className="corp-grid">
            <div className="corp-main-card reveal reveal-left">
              <h3>Hakkımızda</h3>
              <p>{t('about_text')}</p>
            </div>

            <div className="corp-sub-column">
              <div className="corp-sub-card reveal reveal-right reveal-delay-1">
                <h4><i className="fa-solid fa-bullseye"></i> {t('mission_title')}</h4>
                <p>{t('mission_text')}</p>
              </div>

              <div className="corp-sub-card reveal reveal-right reveal-delay-2">
                <h4><i className="fa-solid fa-clock-rotate-left"></i> {t('history_title')}</h4>
                <p>{t('history_text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealer Map Section (Contact) */}
      <section id="contact" className="dealers-section section-padding bg-dark">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>{t('contact_title')} <span className="text-gold">{t('contact_title_gold')}</span></h2>
            <div className="header-line"></div>
            <p>{t('contact_subtitle')}</p>
          </div>
          <div className="map-canvas reveal">
            <div className="map-placeholder-dots"></div>
            <div className="map-content">
              <i className="fa-solid fa-map-location-dot"></i>
              <h3>{t('map_title')}</h3>
              <p>{t('map_desc')}</p>
              <button className="btn btn-primary">
                <i className="fa-solid fa-location-crosshairs"></i> {t('map_btn')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
