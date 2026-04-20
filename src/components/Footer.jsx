export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Bloque Único: Horarios y Ubicación */}
                <div className="footer-section">
                    <h4>Showroom</h4>
                    <div className="footer-info">
                        <p>Lunes a Viernes: 09:00 — 19:00</p>
                        <p>Sábados: Cita previa</p>
                        <p className="footer-location">📍 Madrid, España</p>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
                <div className="footer-legal">
                    <a href="#">Aviso Legal</a>
                    <a href="#">Política de Privacidad</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </footer>
    );
}