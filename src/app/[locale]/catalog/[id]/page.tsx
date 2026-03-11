import { Metadata } from 'next';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { routing, Link } from '@/i18n/routing';

export const dynamic = 'force-static';

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        products.map((product) => ({
            locale,
            id: product.id,
        }))
    );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string, locale: string }> }): Promise<Metadata> {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) return {};

    return {
        title: `${product.brand} ${product.model} | İdeal Av`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string, locale: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);
    const t = await getTranslations('HomePage.Catalog');

    if (!product) {
        notFound();
    }

    return (
        <section className="catalog-section section-padding bg-darker" style={{ minHeight: '100vh', paddingTop: '120px' }}>
            <div className="container">

                <div className="catalog-nav-wrapper" style={{ marginBottom: '30px' }}>
                    <Link href="/#brands" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 15px', fontSize: '0.9rem', color: '#fff' }}>
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>{t('back')}</span>
                    </Link>
                </div>

                <div className="section-header">
                    <h2>{t('tech_details')} <span className="text-gold">{product.brand}</span> {product.model}</h2>
                    <div className="header-line left-align"></div>
                    <p>{product.description}</p>
                </div>

                <div className="catalog-layout">
                    {/* Product Imagery */}
                    <div className="product-gallery">
                        <div className="main-image-box">
                            <div className="image-placeholder">
                                <i className="fa-solid fa-box-open"></i>
                                <span>{product.brand} {product.category === 'CEO Guns' ? 'Silah' : 'Mühimmat'} Görseli</span>
                            </div>
                        </div>
                    </div>

                    {/* Technical Specs */}
                    <div className="product-specs">
                        <div className="spec-header">
                            <div className="badge">{product.category}</div>
                            <h3>{product.brand} <span className="text-gold">{product.model}</span></h3>
                        </div>

                        {/* Game Recommendations */}
                        {product.gameRecommendations && product.gameRecommendations.length > 0 && (
                            <div className="game-recommendations" style={{ marginBottom: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                {product.gameRecommendations.map((game, i) => (
                                    <div key={i} className="game-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                                        <i className={`fa-solid ${game.icon}`}></i>
                                        <span>{game.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Icon-Driven Technical Data */}
                        <div className="tech-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px', marginBottom: '40px' }}>
                            {product.specs.map((spec, index) => (
                                <div key={index} className="spec-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '20px', textAlign: 'center', transition: 'all 0.3s ease' }}>
                                    <i className={`fa-solid ${spec.icon}`} style={{ fontSize: '1.8rem', color: '#d4af37', marginBottom: '15px', display: 'block' }}></i>
                                    <div className="spec-value" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '5px' }}>{spec.value}</div>
                                    <div className="spec-label" style={{ fontSize: '0.8rem', color: '#9da3af', textTransform: 'uppercase', letterSpacing: '1px' }}>{spec.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="spec-actions">
                            <button className="btn btn-primary">
                                <i className="fa-solid fa-file-pdf"></i> {t('download_tds')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
