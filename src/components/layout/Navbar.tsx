'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const t = useTranslations('HomePage.Navbar');
    const locale = useLocale();
    const pathname = usePathname(); // e.g., "/en/catalog/id" or "/catalog/id"
    const otherLocale = locale === 'tr' ? 'en' : 'tr';
    
    // Calculate the target pathname manually to prevent next-intl double-prefix bugs
    const getTogglePath = () => {
        if (!pathname) return '/';
        const segments = pathname.split('/');
        // If the first path segment is the current locale (e.g., "/en/...")
        if (segments[1] === locale) {
            segments[1] = otherLocale;
            return segments.join('/');
        }
        // If it's the default locale (no prefix in URL, e.g., "/catalog/..." -> "/en/catalog/...")
        return `/${otherLocale}${pathname === '/' ? '' : pathname}`;
    };

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
                        <Link href="/#corporate">{t('corporate')}</Link>
                    </li>
                    <li>
                        <Link href="/#catalog">{t('brands')}</Link>
                    </li>
                    <li>
                        <Link href="/#contact">{t('contact')}</Link>
                    </li>
                </ul>
                <div className="lang-switch">
                    <span className="lang-active">
                        {locale.toUpperCase()}
                    </span>
                    <span className="lang-divider">|</span>
                    <a href={getTogglePath()} className="lang-inactive">
                        {otherLocale.toUpperCase()}
                    </a>
                </div>
            </div>
        </nav>
    );
}
