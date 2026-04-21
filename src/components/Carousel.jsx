import { useState, useEffect, useCallback } from 'react';
import '../styles/Carousel.css';

export function Carousel({
    images,
    alt = 'Imagen',
    interval = 5000,
    autoplay = true,
    variant = 'default',
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback((e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index, e) => {
        if (e) e.stopPropagation();
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!autoplay || images.length <= 1) return;
        const id = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(id);
    }, [autoplay, interval, images.length]);

    return (
        <div className={`mini-carousel carousel-${variant}`}>
            <div className="carousel-window">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`${alt} ${index + 1}`}
                        className={index === currentIndex ? 'carousel-img active' : 'carousel-img'}
                        loading={index === 0 ? 'eager' : 'lazy'}
                    />
                ))}
                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            className="carousel-arrow prev"
                            onClick={prevSlide}
                            aria-label="Imagen anterior"
                        >
                            &#10094;
                        </button>
                        <button
                            type="button"
                            className="carousel-arrow next"
                            onClick={nextSlide}
                            aria-label="Imagen siguiente"
                        >
                            &#10095;
                        </button>
                    </>
                )}
            </div>
            {images.length > 1 && (
                <div className="carousel-dots" role="tablist">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            role="tab"
                            aria-label={`Ir a la imagen ${index + 1}`}
                            aria-selected={index === currentIndex}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={(e) => goToSlide(index, e)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}