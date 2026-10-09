function Nosotros() {
  return (
    <section id="nosotros" className="nosotros-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="nosotros-etiqueta">✦ CONOCE NUESTRO UNIVERSO ✦</span>
        </div>

        <div className="row align-items-center g-5">
          {/* Información del negocio */}
          <div className="col-lg-6">
            <h2 className="nosotros-titulo">
              Mucho más que libros,
              <span> un universo de historias</span>
            </h2>

            <p className="nosotros-texto">
              Mundo Entre Libros nació del amor por la lectura y del deseo de
              compartir con más personas la magia que se esconde entre las
              páginas de un libro.
            </p>

            <p className="nosotros-texto">
              Somos un pequeño negocio local ubicado en la zona de Sauces, en
              Toluca, Estado de México. Aunque nuestra historia apenas comienza,
              poco a poco hemos ido creciendo, impulsados por la pasión por los
              libros y las ganas de acercar nuevas historias a más lectores.
            </p>

            <p className="nosotros-texto">
              Creemos que cada libro es una oportunidad para descubrir nuevos
              mundos, despertar la imaginación y vivir experiencias
              inolvidables. Por eso, nuestro propósito es seguir fomentando la
              lectura y ayudar a cada persona a encontrar ese libro especial que
              se convierta en su próxima gran aventura.
            </p>

            <div className="nosotros-frase">
              <i className="bi bi-stars me-2"></i>
              Donde cada libro abre un nuevo mundo.
            </div>

            <a href="#catalogo" className="btn btn-explorar mt-4">
              Explorar nuestros libros
              <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>

          {/* Imagen */}
          <div className="col-lg-6 text-center">
            <div className="nosotros-imagen-contenedor">
              <span className="estrella estrella-1">✦</span>
              <span className="estrella estrella-2">✧</span>
              <span className="estrella estrella-3">✦</span>

              <img
                src="/Logo.png"
                alt="Mundo Entre Libros"
                className="img-fluid nosotros-imagen"
              />
            </div>
          </div>
        </div>

        {/* Valores del negocio */}
        <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="valor-card">
              <i className="bi bi-book-half"></i>
              <h4>Pasión por leer</h4>
              <p>Cada historia es una oportunidad para aprender y soñar.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="valor-card">
              <i className="bi bi-stars"></i>
              <h4>Imaginación</h4>
              <p>
                Creemos en el poder de los libros para descubrir nuevos
                universos.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="valor-card">
              <i className="bi bi-heart"></i>
              <h4>Amor por las historias</h4>
              <p>
                Queremos que cada lector encuentre su próxima aventura favorita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
