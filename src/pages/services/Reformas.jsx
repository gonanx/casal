export function Reformas() {
    return (
        <div className="service-detail-page">
            <header className="detail-header">
                <h1>Reformas <span>Integrales</span></h1>
                <p>Transformamos viviendas y locales con acabados de alta calidad.</p>
            </header>

            <section className="detail-content">
                <div className="detail-text">
                    <h3>Nuestro Proceso</h3>
                    <p>Desde el diseño inicial hasta la entrega de llaves, nos encargamos de todo. Creamos espacios minimalistas, luminosos y 100% funcionales adaptados a tu estilo de vida. Nuestro equipo supervisa cada detalle para asegurar un resultado impecable.</p>
                </div>

                <div className="mini-gallery">
                    <div className="gallery-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" alt="Reforma de salón moderno" className="gallery-item" />
                    </div>
                    <div className="gallery-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80&w=800" alt="Reforma de cocina minimalista" className="gallery-item" />
                    </div>
                </div>
            </section>
        </div>
    );
}