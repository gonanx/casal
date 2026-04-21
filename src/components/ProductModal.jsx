import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Carousel } from './Carousel';
import '../styles/ProductModal.css';

export function ProductModal({ product, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const navbar = document.querySelector('.navbar');

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        if (navbar) navbar.style.paddingRight = `calc(5% + ${scrollbarWidth}px)`;

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            if (navbar) navbar.style.paddingRight = '';
        };
    }, [onClose]);

    if (!product) return null;

    const hasImages = product.images && product.images.length > 0;

    return createPortal(
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    className="modal-close"
                    onClick={onClose}
                    aria-label="Cerrar"
                >
                    &times;
                </button>

                <div className="modal-visual">
                    {hasImages ? (
                        <Carousel
                            images={product.images}
                            alt={product.name}
                            autoplay={false}
                            variant="modal"
                        />
                    ) : (
                        <div className="modal-image-placeholder"></div>
                    )}
                </div>

                <div className="modal-info">
                    <span className={`tag ${product.tag === 'Online' ? 'tag-online' : 'tag-store'}`}>
                        {product.tag}
                    </span>
                    <h2 id="modal-title">{product.name}</h2>
                    <p className="modal-price">{product.price}</p>

                    {product.description && (
                        <div className="modal-section">
                            <h4>Descripción</h4>
                            <p>{product.description}</p>
                        </div>
                    )}

                    {product.materials && (
                        <div className="modal-section">
                            <h4>Materiales</h4>
                            <p>{product.materials}</p>
                        </div>
                    )}

                    <button type="button" className="btn-add-cart" aria-label="Añadir al carrito">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}