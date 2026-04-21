import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';
import foto1 from '../assets/img/img-1.jpg';
import foto2 from '../assets/img/img-2.jpg';
import foto3 from '../assets/img/img-3.jpg';
import foto4 from '../assets/img/img-4.jpg';
import foto5 from '../assets/img/img-5.jpg';

const images = [foto1, foto2, foto3, foto4, foto5];

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero page-transition">
            <div className="hero-content">
                <h1>Diseño y construcción de <span>espacios únicos</span></h1>
                <p>
                    Transformamos viviendas y locales con un enfoque minimalista,
                    creando espacios luminosos y funcionales. Descubre nuestro
                    showroom y elige los mejores materiales para tu próximo proyecto.
                </p>
                <button className="btn-primary" onClick={() => navigate('/contacto')}>
                    Solicitar Presupuesto
                </button>
            </div>

            <div className="hero-image-container">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Proyecto ${index + 1}`}
                        className={index === currentIndex ? 'hero-img active' : 'hero-img'}
                        loading={index === 0 ? 'eager' : 'lazy'}
                    />
                ))}
            </div>
        </section>
    );
}