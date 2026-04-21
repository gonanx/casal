import { useState, useEffect } from 'react';
import '../../styles/ServiceDetail.css';

import foto6 from '../../assets/img/img-6.jpg';
import foto7 from '../../assets/img/img-7.jpg';
import foto8 from '../../assets/img/img-8.jpg';

const images = [foto6, foto7, foto8];

export function Reformas() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="service-detail-page page-transition">
            <section className="detail-split-container">
                {/* Columna Izquierda: Contenido de Texto */}
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

                {/* Columna Derecha: Carrusel Compacto */}
                <div className="detail-visual-side">
                    <div className="mini-carousel">
                        <div className="carousel-window">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Proyecto ${index + 1}`}
                                    className={index === currentIndex ? 'carousel-img active' : 'carousel-img'}
                                />
                            ))}

                            <button className="carousel-arrow prev" onClick={prevSlide}>&#10094;</button>
                            <button className="carousel-arrow next" onClick={nextSlide}>&#10095;</button>
                        </div>

                        <div className="carousel-dots">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}