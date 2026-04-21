import { useState, useEffect } from 'react';
import '../../styles/ServiceDetail.css';

import foto12 from '../../assets/img/img-12.jpg';
import foto13 from '../../assets/img/img-13.jpg';
import foto14 from '../../assets/img/img-14.jpg';
import foto15 from '../../assets/img/img-15.jpeg';

const images = [foto12, foto13, foto14, foto15];

export function MaterialesDetalle() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Deslizamiento automático cada 5 segundos
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
                {/* Columna Izquierda: Texto Compacto */}
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

                {/* Columna Derecha: Carrusel Compacto */}
                <div className="detail-visual-side">
                    <div className="mini-carousel">
                        <div className="carousel-window">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Muestra de Material ${index + 1}`}
                                    className={index === currentIndex ? 'carousel-img active' : 'carousel-img'}
                                />
                            ))}

                            {/* Flechas de navegación */}
                            <button className="carousel-arrow prev" onClick={prevSlide}>&#10094;</button>
                            <button className="carousel-arrow next" onClick={nextSlide}>&#10095;</button>
                        </div>

                        {/* Indicadores (puntos) */}
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