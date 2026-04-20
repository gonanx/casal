import { useState, useEffect } from 'react';

const images = [
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200", // Salón
    "https://images.unsplash.com/photo-1556912176-12bb89db2c50?auto=format&fit=crop&q=80&w=1200", // Cocina Minimalista (NUEVA)
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"  // Interior Moderno
];

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Diseño y construcción de <span>espacios únicos</span></h1>
                <p>
                    Transformamos viviendas y locales con un enfoque minimalista,
                    creando espacios luminosos y funcionales. Descubre nuestro
                    showroom y elige los mejores materiales para tu próximo proyecto.
                </p>
                <button className="btn-primary">Solicitar Presupuesto</button>
            </div>

            <div className="hero-image-container">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Proyecto ${index + 1}`}
                        className={index === currentIndex ? 'hero-img active' : 'hero-img'}
                    />
                ))}
            </div>
        </section>
    );
}