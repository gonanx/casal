import { Link } from 'react-router-dom';
import { Carousel } from '../../components/Carousel';
import '../../styles/ServiceDetail.css';
import foto6 from '../../assets/img/img-6.jpg';
import foto7 from '../../assets/img/img-7.jpg';
import foto8 from '../../assets/img/img-8.jpg';

const images = [foto6, foto7, foto8];

export function Reformas() {
    return (
        <div className="service-detail-page page-transition">
            <section className="detail-split-container">
                <div className="detail-text-side">
                    <header className="detail-header">
                        <h1>Reformas <span>Integrales</span></h1>
                        <p className="subtitle">Transformamos viviendas y locales con acabados de alta calidad.</p>
                    </header>

                    <div className="detail-main-text">
                        <h3>Nuestro Proceso</h3>
                        <p>
                            Desde el diseño inicial hasta la entrega de llaves, nos encargamos de todo.
                            Creamos espacios minimalistas, luminosos y 100% funcionales adaptados a tu estilo de vida.
                            Nuestro equipo supervisa cada detalle para asegurar un resultado impecable.
                        </p>
                    </div>
                </div>

                <div className="detail-visual-side">
                    <Carousel images={images} alt="Proyecto de Reforma" />
                </div>
            </section>

            <div className="next-service-wrapper">
                <Link to="/servicios/obra-nueva" className="nav-block next">
                    <span className="nav-label">Siguiente Servicio</span>
                    <span className="nav-title">Obra Nueva <span className="arrow">&#10230;</span></span>
                </Link>
            </div>
        </div>
    );
}