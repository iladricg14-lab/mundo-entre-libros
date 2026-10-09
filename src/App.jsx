import Catalogo from "./components/Catalogo";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Estrellas from "./components/Estrellas";
import ClubLectura from "./components/ClubLectura";

function App() {
  return (
    <div className="app-container">
      <Estrellas />
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#inicio">
            <i className="bi bi-stars me-2"></i>
            Mundo Entre Libros
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuPrincipal">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#inicio">
                  Inicio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#catalogo">
                  Catálogo
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#nosotros">
                  Nosotros
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#club-lectura">
                  Comunidad
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Página de inicio */}
      <main id="inicio" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6 text-center text-lg-start">
              <span className="hero-star">✦</span>

              <h1 className="hero-title">
                Donde cada libro abre un
                <span> nuevo mundo</span>
              </h1>

              <p className="hero-description">
                Explora historias, descubre aventuras y encuentra tu próxima
                lectura favorita. ¡Un universo de libros te espera!
              </p>

              <a href="#catalogo" className="btn btn-explorar">
                Explorar catálogo
                <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img
                src="/Logo.png"
                alt="Logo de Mundo Entre Libros"
                className="img-fluid hero-logo"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Catálogo dinámico */}
      <Catalogo />

      {/* Sección Nosotros */}
      <Nosotros />
      <ClubLectura />
      <Contacto />

      {/* Pie de página */}
      <footer className="footer-custom text-center">
        <div className="container">
          <p className="mb-0">
            © {new Date().getFullYear()} Mundo Entre Libros.
          </p>
          <small>Donde cada libro abre un nuevo mundo ✨</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
