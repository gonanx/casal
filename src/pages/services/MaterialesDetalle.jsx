export function MaterialesDetalle() {
    return (
        <div className="service-detail-page">
            <header className="detail-header">
                <h1>Venta de <span>Materiales</span></h1>
                <p>Visita nuestro showroom y descubre nuestro catálogo exclusivo.</p>
            </header>

            <section className="detail-content">
                <div className="detail-text">
                    <h3>Calidad Garantizada</h3>
                    <p>Trabajamos con las mejores marcas en cerámicas, maderas, grifería y acabados de primera línea. Te asesoramos personalmente para que encuentres la textura y el tono perfecto para tu reforma.</p>
                </div>

                <div className="mini-gallery">
                    <div className="gallery-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800" alt="Textura de materiales y acabados" className="gallery-item" />
                    </div>
                    <div className="gallery-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" alt="Muestras de madera y cerámica" className="gallery-item" />
                    </div>
                </div>
            </section>
        </div>
    );
}