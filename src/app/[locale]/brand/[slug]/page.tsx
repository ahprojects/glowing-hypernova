import { Metadata } from 'next';
import Image from 'next/image';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, Link } from '@/i18n/routing';

export const dynamic = 'force-static';

const slugToBrand: Record<string, string> = {
    'jet': 'JET',
    'gold-horse': 'Gold Horse',
    'miracle': 'Miracle',
    'apollo': 'APOLLO',
    'apport': 'APPORT'
};

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        Object.keys(slugToBrand).map((slug) => ({
            locale,
            slug,
        }))
    );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string, locale: string }> }): Promise<Metadata> {
    const { slug, locale } = await params;
    setRequestLocale(locale);
    const brandName = slugToBrand[slug];

    if (!brandName) return {};

    return {
        title: `${brandName} Serisi | İdeal Av`,
        description: `${brandName} markasına ait tüm ürünler.`,
    };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const { slug, locale } = await params;
    setRequestLocale(locale);
    
    const brandName = slugToBrand[slug];
    const tc = await getTranslations('HomePage.Catalog');

    if (!brandName) {
        notFound();
    }

    const brandProducts = products.filter(p => p.brand === brandName);

    return (
        <section className="catalog-section section-padding bg-darker" style={{ minHeight: '100vh', paddingTop: '120px' }}>
            <div className="container">
                <div className="catalog-nav-wrapper" style={{ marginBottom: '30px' }}>
                    <Link href="/#brands" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 15px', fontSize: '0.9rem', color: '#fff' }}>
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>{tc('back')}</span>
                    </Link>
                </div>

                <div className="section-header text-center" style={{ marginBottom: '50px' }}>
                    <h2 className="font-heritage" style={{ fontSize: '3rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{brandName} <span className="text-gold">Serisi</span></h2>
                    <div className="header-line"></div>
                </div>

                <div className="spec-grid">
                    {brandProducts.map(product => (
                    <Link
                        key={product.id}
                        href={`/catalog/${product.id}`}
                        className="product-mini-card"
                    >
                        <div className="product-image-wrapper">
                            <Image
                            src={product.imageUrl || '/images/jet-box.png'}
                            alt={`${product.brand} ${product.model}`}
                            width={300}
                            height={300}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                            }}
                            />
                        </div>
                        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase' }}>{product.brand}</div>
                            <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 800, lineHeight: 1.3 }}>
                            {product.brand} {product.model}
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                            {product.specs?.find((s: any) => s.label === 'load')?.value} · Kalibre {product.caliber}
                            </div>
                            <div style={{ marginTop: 'auto', paddingTop: '15px', fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                            {tc('tech_details')} <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem', marginLeft: '5px' }}></i>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
