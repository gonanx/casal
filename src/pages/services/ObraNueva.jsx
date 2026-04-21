import { Link } from 'react-router-dom';
import { Carousel } from '../../components/Carousel';
import '../../styles/ServiceDetail.css';
import foto9 from '../../assets/img/img-9.jpg';
import foto10 from '../../assets/img/img-10.jpg';
import foto11 from '../../assets/img/img-11.jpg';

const images = [foto9, foto10, foto11];

export function ObraNueva() {
    return (
        <div className="service-detail-page page-transition">
            <section className="detail-split-container">
                <div className="detail-text-side">
                    <header className="detail-header">
                        <h1>Obra <span>Nueva</span></h1>
                        <p className="subtitle">
                            Construcción desde cero con los más altos estándares de calidad y diseño.
                        </p>
                    </header>

                    <div className="detail-main-text">
                        <h3>Nuestra Metodología</h3>
                        <p>
                            Gestionamos todo el proyecto arquitectónico y la ejecución de la obra para que no
                            tengas que preocuparte por nada. Trabajamos con líneas limpias, eficiencia energética
                            y materiales de vanguardia para crear la casa de tus sueños.
                        </p>
                    </div>
                </div>

                <div className="detail-visual-side">
                    <Carousel images={images} alt="Proyecto de Obra Nueva" />
                </div>
            </section>

            <div className="next-service-wrapper">
                <Link to="/servicios/reformas" className="nav-block prev">
                    <span className="nav-label">Servicio Anterior</span>
                    <span className="nav-title"><span className="arrow">&#10229;</span> Reformas Integrales</span>
                </Link>
                <Link to="/servicios/materiales" className="nav-block next">
                    <span className="nav-label">Siguiente Servicio</span>
                    <span className="nav-title">Venta de Materiales <span className="arrow">&#10230;</span></span>
                </Link>
            </div>
        </div>
    );
}