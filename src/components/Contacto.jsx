
import { WHATSAPP_NUMERO } from "../config/contacto";

function Contacto() {
  const mensaje = encodeURIComponent(
    "¡Hola, Mundo Entre Libros! Me gustaría recibir información sobre sus libros y recomendaciones de lectura."
  );

  const whatsapp = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`;
  const instagram = "https://www.instagram.com/mundo.entre.libros/";
const facebook = "https://www.facebook.com/Mund0Entr3L1br0s";


  return (
    <section id="contacto" className="contacto-section">
      <div className="container">

        <div className="text-center mb-5">
          <span className="contacto-etiqueta">
            ✦ CONECTEMOS ENTRE HISTORIAS ✦
          </span>

          <h2 className="contacto-titulo mt-3">
            ¿Buscas tu próxima lectura?
          </h2>

          <p className="contacto-descripcion mx-auto">
            Estamos aquí para ayudarte a encontrar
            ese libro especial. Escríbenos o síguenos
            en nuestras redes sociales.
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          <div className="col-md-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-card"
            >
              <i className="bi bi-whatsapp whatsapp-icon"></i>
              <h3>WhatsApp</h3>
              <p>Pregúntanos por libros y recomendaciones.</p>
              <span>Enviar mensaje →</span>
            </a>
          </div>

          {instagram && (
            <div className="col-md-4">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-card"
              >
                <i className="bi bi-instagram instagram-icon"></i>
                <h3>Instagram</h3>
                <p>Descubre novedades y recomendaciones.</p>
                <span>Visitar Instagram →</span>
              </a>
            </div>
          )}

          {facebook && (
            <div className="col-md-4">
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-card"
              >
                <i className="bi bi-facebook facebook-icon"></i>
                <h3>Facebook</h3>
                <p>Conoce las novedades de nuestro catálogo.</p>
                <span>Visitar Facebook →</span>
              </a>
            </div>
          )}

        </div>

        <div className="contacto-ubicacion text-center mt-5">
          <i className="bi bi-geo-alt-fill me-2"></i>
          Sauces, Toluca, Estado de México
        </div>

      </div>
    </section>
  );
}

export default Contacto;
