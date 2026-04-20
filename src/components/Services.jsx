import { useNavigate } from 'react-router-dom';

export function Services() {
    const navigate = useNavigate();

    return (
        <section className="services">
            <div className="services-header">
                <h2>Nuestros <span>Servicios</span></h2>
            </div>

            <div className="services-grid">
                <div className="service-card" onClick={() => navigate('/servicios/reformas')}>
                    <div className="service-icon">01</div>
                    <h3>Reformas</h3>
                    <div className="red-line"></div>
                    <p>Haz clic para ver nuestros proyectos y metodología.</p>
                </div>

                <div className="service-card" onClick={() => navigate('/servicios/obra-nueva')}>
                    <div className="service-icon">02</div>
                    <h3>Obra Nueva</h3>
                    <div className="red-line"></div>
                    <p>Construcción desde cero con diseño vanguardista.</p>
                </div>

                <div className="service-card" onClick={() => navigate('/servicios/materiales')}>
                    <div className="service-icon">03</div>
                    <h3>Venta de Materiales</h3>
                    <div className="red-line"></div>
                    <p>Conoce nuestro showroom y catálogo de materiales.</p>
                </div>
            </div>
        </section>
    );
}