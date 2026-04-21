import { useState } from 'react';
import '../styles/Contact.css';

export function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section className="contact-page page-transition">
            <div className="contact-header">
                <h2>Solicita tu <span>Presupuesto</span></h2>
                <p>Cuéntanos sobre tu proyecto. Te responderemos en menos de 24 horas.</p>
            </div>

            <div className="contact-container">
                <aside className="contact-info">
                    <div className="info-block">
                        <h4>Dirección</h4>
                        <p>Calle Example, 123<br />36201 Vigo, Pontevedra</p>
                    </div>

                    <div className="info-block">
                        <h4>Teléfono</h4>
                        <p><a href="tel:+34986000000">+34 986 000 000</a></p>
                    </div>

                    <div className="info-block">
                        <h4>Email</h4>
                        <p><a href="mailto:info@reformascasal.com">info@reformascasal.com</a></p>
                    </div>

                    <div className="info-block">
                        <h4>Horario</h4>
                        <p>Lun - Vie: 9:00 - 14:00 / 16:00 - 20:00<br />Sáb: 10:00 - 14:00</p>
                    </div>
                </aside>

                <form className="contact-form" onSubmit={handleSubmit}>
                    {submitted && (
                        <div className="form-success" role="status">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>¡Mensaje enviado con éxito! Te responderemos en menos de 24 horas.</span>
                        </div>
                    )}

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Nombre completo</label>
                            <input type="text" id="name" placeholder="Ej. Ana García" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" placeholder="tu@email.com" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono <span className="optional">(opcional)</span></label>
                            <input type="tel" id="phone" placeholder="Ej. 600 123 456" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service">Tipo de consulta</label>
                            <select id="service" defaultValue="">
                                <option value="" disabled>Selecciona una opción</option>
                                <option value="reforma">Reforma Integral</option>
                                <option value="obra-nueva">Obra Nueva</option>
                                <option value="materiales">Consulta sobre Materiales</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" rows="3" placeholder="Detalles de tu idea o proyecto..." required></textarea>
                    </div>

                    <button type="submit" className="btn-primary btn-block">Enviar Solicitud</button>
                </form>
            </div>
        </section>
    );
}