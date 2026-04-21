import { Link } from 'react-router-dom';
import { Carousel } from '../../components/Carousel';
import '../../styles/ServiceDetail.css';
import foto12 from '../../assets/img/img-12.jpg';
import foto13 from '../../assets/img/img-13.jpg';
import foto14 from '../../assets/img/img-14.jpg';
import foto15 from '../../assets/img/img-15.jpeg';

const images = [foto12, foto13, foto14, foto15];

export function MaterialesDetalle() {
    return (
        <div className="service-detail-page page-transition">
            <section className="detail-split-container">
                <div className="detail-text-side">
                    <header className="detail-header">
                        <h1>Venta de <span>Materiales</span></h1>
                        <p className="subtitle">Visita nuestro showroom y descubre nuestro catálogo exclusivo.</p>
                    </header>

                    <div className="detail-main-text">
                        <h3>Calidad Garantizada</h3>
                        <p>
                            Trabajamos con las mejores marcas en cerámicas, maderas, grifería y acabados
                            de primera línea. Te asesoramos personalmente para que encuentres la textura
                            y el tono perfecto para tu reforma.
                        </p>
                    </div>
                </div>

                <div className="detail-visual-side">
                    <Carousel images={images} alt="Muestra de Material" />
                </div>
            </section>

            <div className="next-service-wrapper">
                <Link to="/servicios/obra-nueva" className="nav-block prev">
                    <span className="nav-label">Servicio Anterior</span>
                    <span className="nav-title"><span className="arrow">&#10229;</span> Obra Nueva</span>
                </Link>
            </div>
        </div>
    );
}