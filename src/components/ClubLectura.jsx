
function ClubLectura() {
  const enlaceGrupo =
    "https://chat.whatsapp.com/HAQWVUILPicBRfI8kz4pwe";

  return (
    <section
      id="club-lectura"
      className="club-lectura-section"
    >
      <div className="container">

        <div className="row align-items-center g-5">

          {/* CARTEL DEL CLUB */}
          <div className="col-lg-5 text-center">
            <div className="club-imagen-contenedor">
              <img
                src="/club-lectura.png"
                alt="Cartel del club de lectura Entre Libros y Café"
                className="club-imagen"
                loading="lazy"
              />
            </div>
          </div>

          {/* INFORMACIÓN DEL CLUB */}
          <div className="col-lg-7">

            <span className="club-etiqueta">
              ✨ NUESTRA COMUNIDAD LECTORA
            </span>

            <h2 className="club-titulo mt-3">
              Entre Libros
              <span> y Café ☕</span>
            </h2>

            <p className="club-descripcion">
              Creemos que las mejores historias
              se disfrutan aún más cuando
              podemos compartirlas.
            </p>

            <p className="club-texto">
              Por eso creamos Entre Libros y Café,
              un espacio para conocer nuevas
              lecturas, intercambiar opiniones,
              hacer amistades y disfrutar de
              grandes conversaciones.
            </p>

            <p className="club-texto">
              ¡Ya tuvimos nuestra primera reunión
              y estamos muy emocionados por
              todas las historias que nos esperan!
              Nos encantaría que también
              formaras parte de esta comunidad.
            </p>

            {/* BENEFICIOS */}
            <div className="club-beneficios">

              <div className="club-beneficio">
                <i className="bi bi-book"></i>
                <span>Descubre nuevas lecturas</span>
              </div>

              <div className="club-beneficio">
                <i className="bi bi-people"></i>
                <span>Comparte tus ideas</span>
              </div>

              <div className="club-beneficio">
                <i className="bi bi-cup-hot"></i>
                <span>Disfruta de buenos momentos</span>
              </div>

            </div>

            {/* BOTÓN DE WHATSAPP */}
            <a
              href={enlaceGrupo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-unirse-club"
              aria-label="Unirme al grupo de WhatsApp de Entre Libros y Café"
            >
              <i className="bi bi-whatsapp me-2"></i>
              ¡Quiero unirme al club!
            </a>

            <p className="club-nota mt-3">
              <i className="bi bi-heart-fill me-2"></i>
              Todos son bienvenidos.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ClubLectura;
