import { Link } from 'react-router-dom';
import '../styles/Services.css';

export function Services() {
    return (
        <section className="services page-transition">
            <div className="services-header">
                <h2>Nuestros <span>Servicios</span></h2>
                <p>Soluciones integrales para transformar tu hogar, local o proyecto desde el diseño hasta la entrega de llaves.</p>
            </div>

            <div className="services-grid">
                <Link to="/servicios/reformas" className="service-card">
                    <div className="service-icon">01</div>
                    <h3>Reformas</h3>
                    <div className="red-line"></div>
                    <p>Haz clic para ver nuestros proyectos y metodología.</p>
                </Link>

                <Link to="/servicios/obra-nueva" className="service-card">
                    <div className="service-icon">02</div>
                    <h3>Obra Nueva</h3>
                    <div className="red-line"></div>
                    <p>Construcción desde cero con diseño vanguardista.</p>
                </Link>

                <Link to="/servicios/materiales" className="service-card">
                    <div className="service-icon">03</div>
                    <h3>Venta de Materiales</h3>
                    <div className="red-line"></div>
                    <p>Conoce nuestro showroom y catálogo de materiales.</p>
                </Link>
            </div>
        </section>
    );
}