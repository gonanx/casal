export function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("¡Formulario enviado! (Simulación)");
    };

    return (
        <section className="contact-page">
            <div className="contact-header">
                <h2>Solicita tu <span>Presupuesto</span></h2>
                <p>Cuéntanos sobre tu proyecto o duda. Te responderemos en menos de 24 horas.</p>
            </div>

            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre completo</label>
                        <input type="text" id="name" placeholder="Ej. Ana García" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" id="email" placeholder="tu@email.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="service">Tipo de consulta</label>
                        <select id="service">
                            <option value="reforma">Reforma Integral</option>
                            <option value="obra-nueva">Obra Nueva</option>
                            <option value="materiales">Consulta sobre Materiales</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" rows="5" placeholder="Detalles de tu idea o proyecto..." required></textarea>
                    </div>

                    <button type="submit" className="btn-primary btn-block">Enviar Solicitud</button>
                </form>
            </div>
        </section>
    )
}