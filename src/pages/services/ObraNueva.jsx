import { useState, useEffect } from 'react';
import '../../styles/ServiceDetail.css';

import foto9 from '../../assets/img/img-9.jpg';
import foto10 from '../../assets/img/img-10.jpg';
import foto11 from '../../assets/img/img-11.jpg';

const images = [foto9, foto10, foto11];

export function ObraNueva() {
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
                {/* Columna Izquierda: Texto Compacto */}
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

                {/* Columna Derecha: Carrusel Compacto */}
                <div className="detail-visual-side">
                    <div className="mini-carousel">
                        <div className="carousel-window">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Proyecto de Obra Nueva ${index + 1}`}
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