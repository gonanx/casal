import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" className="logo-link">
                    <h2>Reformas <span>CASAL</span></h2>
                </Link>
            </div>

            <button
                type="button"
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><NavLink to="/" end>Inicio</NavLink></li>
                <li><NavLink to="/servicios">Servicios</NavLink></li>
                <li><NavLink to="/tienda">Nuestra Tienda</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    )
}