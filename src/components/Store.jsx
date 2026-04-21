import { useState } from 'react';
import { Carousel } from './Carousel';
import { ProductModal } from './ProductModal';
import '../styles/Store.css';

const productsData = [
    {
        id: 1,
        name: 'Suelo Cerámico Roble',
        tag: 'Tienda Física',
        price: '24.90€/m²',
        images: [],
        description: 'Pavimento cerámico con acabado imitación madera de roble natural. Ideal para salones, dormitorios y cocinas, aporta calidez visual con la durabilidad y fácil mantenimiento de la cerámica. Formato rectificado para juntas mínimas y apto para suelo radiante.',
        materials: 'Gres porcelánico esmaltado. Resistencia al deslizamiento clase 2. Espesor 9mm. Formato 20x120cm.'
    },
    {
        id: 2,
        name: 'Grifería Minimalista Roja',
        tag: 'Online',
        price: '89.00€',
        images: [],
        description: 'Monomando de diseño minimalista con acabado rojo mate. Perfecto para baños y cocinas modernos que buscan un punto de color. Cartucho cerámico de alta durabilidad y sistema de ahorro de agua integrado.',
        materials: 'Latón macizo con recubrimiento epoxi rojo mate. Cartucho cerámico 35mm. Flexibles de acero inoxidable incluidos.'
    },
    {
        id: 3,
        name: 'Pack Iluminación LED',
        tag: 'Online',
        price: '120.00€',
        images: [],
        description: 'Conjunto de 6 focos LED empotrables con luz cálida regulable. Consumo reducido y vida útil de hasta 30.000 horas. Incluye transformador y guía de instalación paso a paso para montaje en falso techo.',
        materials: 'Aluminio lacado blanco. LED SMD 2835, 7W por foco (equivalente a 60W). Temperatura de color 3000K. Driver incluido.'
    },
    {
        id: 4,
        name: 'Azulejo Hidráulico Vintage',
        tag: 'Tienda Física',
        price: '32.00€/m²',
        images: [],
        description: 'Azulejo inspirado en los clásicos suelos hidráulicos de principios del siglo XX. Patrón geométrico en tonos neutros, perfecto para crear ambientes con carácter en cocinas, baños o zonas de paso.',
        materials: 'Gres porcelánico decorado. Acabado mate. Espesor 10mm. Formato 20x20cm. Apto para suelo y pared.'
    },
    {
        id: 5,
        name: 'Mueble Baño Suspendido',
        tag: 'Tienda Física',
        price: '210.00€',
        images: [],
        description: 'Mueble de baño suspendido de dos cajones con cierre amortiguado. Diseño flotante que facilita la limpieza del suelo y aporta sensación de amplitud. Incluye lavabo cerámico integrado y espacio para toma de agua central.',
        materials: 'Tablero MDF hidrófugo con laminado antihumedad. Guías metálicas con sistema soft-close. Lavabo de cerámica blanca. Medidas 80x45x50cm.'
    },
    {
        id: 6,
        name: 'Pintura Mate Premium',
        tag: 'Online',
        price: '45.00€',
        images: [],
        description: 'Pintura plástica mate de altas prestaciones para interiores. Excelente cubrición en una sola mano, antimanchas y lavable. Sin olor y con bajas emisiones, apta para dormitorios infantiles. Bote de 4 litros (rinde aproximadamente 40m²).',
        materials: 'Base acuosa con resinas acrílicas. Acabado mate sedoso. Certificado A+ en emisiones. Disponible en 24 tonos de la carta CASAL.'
    },
];

const filters = [
    { label: 'Todos los productos', value: 'Todos' },
    { label: 'Venta Online', value: 'Online' },
    { label: 'Exclusivo Tienda', value: 'Tienda Física' },
];

export function Store() {
    const [filter, setFilter] = useState('Todos');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = filter === 'Todos'
        ? productsData
        : productsData.filter(p => p.tag === filter);

    return (
        <section className="store-section page-transition">
            <div className="store-header">
                <h2>Nuestra <span>Tienda</span></h2>
                <p>Descubre nuestra selección de materiales y productos de calidad para tu próximo proyecto.</p>
            </div>

            <div className="store-layout">
                <aside className="sidebar">
                    <h3>Filtrar por</h3>
                    <ul>
                        {filters.map(f => (
                            <li key={f.value}>
                                <button
                                    type="button"
                                    className={filter === f.value ? 'active' : ''}
                                    onClick={() => setFilter(f.value)}
                                >
                                    {f.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="store-content">
                    {filteredProducts.length === 0 ? (
                        <p className="no-results">No hay productos disponibles en esta categoría.</p>
                    ) : (
                        <div className="store-grid">
                            {filteredProducts.map(product => (
                                <div
                                    key={product.id}
                                    className="product-card"
                                    onClick={() => setSelectedProduct(product)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedProduct(product);
                                        }
                                    }}
                                >
                                    <div className="product-image">
                                        {product.images && product.images.length > 0 ? (
                                            <Carousel
                                                images={product.images}
                                                alt={product.name}
                                                autoplay={false}
                                                variant="card"
                                            />
                                        ) : (
                                            <div className="product-image-placeholder"></div>
                                        )}
                                    </div>
                                    <span className={`tag ${product.tag === 'Online' ? 'tag-online' : 'tag-store'}`}>
                                        {product.tag}
                                    </span>
                                    <h4>{product.name}</h4>
                                    <p className="price">{product.price}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
}