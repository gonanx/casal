import { useState } from 'react';

const productsData = [
    { id: 1, name: 'Suelo Cerámico Roble', tag: 'Tienda Física', price: '24.90€/m²' },
    { id: 2, name: 'Grifería Minimalista Roja', tag: 'Online', price: '89.00€' },
    { id: 3, name: 'Pack Iluminación LED', tag: 'Online', price: '120.00€' },
    { id: 4, name: 'Azulejo Hidráulico Vintage', tag: 'Tienda Física', price: '32.00€/m²' },
    { id: 5, name: 'Mueble Baño Suspendido', tag: 'Tienda Física', price: '210.00€' },
    { id: 6, name: 'Pintura Mate Premium', tag: 'Online', price: '45.00€' },
];

export function Store() {
    const [filter, setFilter] = useState('Todos');

    const filteredProducts = filter === 'Todos'
        ? productsData
        : productsData.filter(p => p.tag === filter);

    return (
        <section className="store-section" id="tienda">
            <aside className="sidebar">
                <h3>Filtrar por</h3>
                <ul>
                    <li
                        className={filter === 'Todos' ? 'active' : ''}
                        onClick={() => setFilter('Todos')}
                    >
                        Todos los productos
                    </li>
                    <li
                        className={filter === 'Online' ? 'active' : ''}
                        onClick={() => setFilter('Online')}
                    >
                        Venta Online
                    </li>
                    <li
                        className={filter === 'Tienda Física' ? 'active' : ''}
                        onClick={() => setFilter('Tienda Física')}
                    >
                        Exclusivo Tienda
                    </li>
                </ul>
            </aside>

            <div className="store-content">
                <div className="store-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-placeholder"></div>
                            <span className={`tag ${product.tag === 'Online' ? 'tag-online' : 'tag-store'}`}>
                                {product.tag}
                            </span>
                            <h4>{product.name}</h4>
                            <p className="price">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}