import { useState } from "react";
import { createPortal } from "react-dom";
import { crearEnlaceWhatsApp } from "../config/contacto";

function BookCard({ libro }) {
  const [errorImagen, setErrorImagen] = useState(false);
  const enlaceWhatsApp = crearEnlaceWhatsApp(libro);
  const sinPortada = !libro.imagen || errorImagen;

  const portadaProvisional = (enModal = false) => (
    <div className={`portada-provisional${enModal ? " modal-portada" : ""}`}>
      <i className="bi bi-book"></i>
      <span>{libro.titulo}</span>
    </div>
  );

  return (
    <>
      <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
        <div className="card libro-card h-100">
          <div className="libro-imagen">
            {sinPortada ? portadaProvisional() : (
              <img
                src={libro.imagen}
                alt={`Portada de ${libro.titulo}`}
                loading="lazy"
                onError={() => setErrorImagen(true)}
              />
            )}
          </div>

          <div className="card-body d-flex flex-column">
            <span className="libro-categoria">{libro.categoria}</span>
            <h5 className="card-title mt-2">{libro.titulo}</h5>
            <p className="libro-autor">{libro.autor}</p>
            <p className="libro-descripcion">{libro.descripcion}</p>

            <div className="d-grid gap-2 mt-auto">
              <button
                type="button"
                className="btn btn-detalles"
                data-bs-toggle="modal"
                data-bs-target={`#libroModal${libro.id}`}
              >
                <i className="bi bi-book me-2"></i>
                Ver detalles
              </button>
              <a
                href={enlaceWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                aria-label={`Consultar por WhatsApp sobre ${libro.titulo}`}
              >
                <i className="bi bi-whatsapp me-2"></i>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {createPortal(
        <div
          className="modal fade"
          id={`libroModal${libro.id}`}
          tabIndex="-1"
          aria-labelledby={`tituloModal${libro.id}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content modal-libro">
              <div className="modal-header">
                <h4 className="modal-title" id={`tituloModal${libro.id}`}>
                  ✨ {libro.titulo}
                </h4>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Cerrar"
                ></button>
              </div>

              <div className="modal-body p-4">
                <div className="row g-4 align-items-start">
                  <div className="col-md-5 text-center">
                    {sinPortada ? portadaProvisional(true) : (
                      <img
                        src={libro.imagen}
                        alt={`Portada de ${libro.titulo}`}
                        className="img-fluid modal-imagen"
                        onError={() => setErrorImagen(true)}
                      />
                    )}
                  </div>

                  <div className="col-md-7">
                    <span className="modal-categoria">{libro.categoria}</span>
                    <h5 className="mt-4">
                      <i className="bi bi-person me-2"></i>
                      Autor
                    </h5>
                    <p>{libro.autor}</p>
                    <h5 className="mt-4">
                      <i className="bi bi-book me-2"></i>
                      Sinopsis
                    </h5>
                    <p className="modal-descripcion">
                      {libro.sinopsis || libro.descripcion}
                    </p>

                    {(libro.editorial || libro.anio || libro.isbn) && (
                      <div className="informacion-libro mt-4">
                        <h5>
                          <i className="bi bi-info-circle me-2"></i>
                          Información adicional
                        </h5>
                        {libro.editorial && (
                          <p><strong>Editorial:</strong> {libro.editorial}</p>
                        )}
                        {libro.anio && (
                          <p><strong>Año:</strong> {libro.anio}</p>
                        )}
                        {libro.isbn && (
                          <p><strong>ISBN:</strong> {libro.isbn}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-footer modal-footer-libro">
                <a
                  href={enlaceWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-modal"
                  aria-label={`Consultar el libro ${libro.titulo} por WhatsApp`}
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Consultar este libro
                </a>
                <button
                  type="button"
                  className="btn btn-cerrar-modal"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default BookCard;
