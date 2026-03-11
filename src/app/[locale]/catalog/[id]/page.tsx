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

                        <table className="tech-table">
                            <tbody>
                                {product.specs.map((spec, index) => (
                                    <tr key={index}>
                                        <td>{spec.icon && <i className={`fa-solid ${spec.icon}`}></i>} {spec.label}</td>
                                        <th>{spec.value}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

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
