export function ObraNueva() {
    return (
        <div className="service-detail-page">
            <header className="detail-header">
                <h1>Obra <span>Nueva</span></h1>
                <p>Construcción desde cero con los más altos estándares de calidad y diseño.</p>
            </header>

            <section className="detail-content">
                <div className="detail-text">
                    <h3>Nuestra Metodología</h3>
                    <p>Gestionamos todo el proyecto arquitectónico y la ejecución de la obra para que no tengas que preocuparte por nada. Trabajamos con líneas limpias, eficiencia energética y materiales de vanguardia para crear la casa de tus sueños.</p>
                </div>

                <div className="mini-gallery">
                    <div className="gallery-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" alt="Exterior de casa moderna" className="gallery-item" />
                    </div>
                    <div className="gallery-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="Planos de arquitectura" className="gallery-item" />
                    </div>
                </div>
            </section>
        </div>
    );
}