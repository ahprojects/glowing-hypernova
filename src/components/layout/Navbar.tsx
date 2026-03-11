'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export default function Navbar() {
    const t = useTranslations('HomePage.Navbar');
    const locale = useLocale();
    const pathname = usePathname();
    const otherLocale = locale === 'tr' ? 'en' : 'tr';

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link href="/" className="logo">
                    <span className="logo-accent">İDEAL</span> AV
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link href="/" className={pathname === '/' ? 'active' : ''}>{t('home')}</Link>
                    </li>
                    <li>
                        <Link href="/#brands">{t('brands')}</Link>
                    </li>
                    <li>
                        <Link href="/#catalog">{t('catalog')}</Link>
                    </li>
                    <li>
                        <Link href="/#corporate">{t('corporate')}</Link>
                    </li>
                    <li>
                        <Link href="/#contact">{t('contact')}</Link>
                    </li>
                </ul>
                <div className="lang-switch" style={{ display: 'flex', gap: '15px', marginLeft: '30px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        {locale.toUpperCase()}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                    <Link href={pathname} locale={otherLocale} style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '1px', transition: 'color 0.3s' }}>
                        {otherLocale.toUpperCase()}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
