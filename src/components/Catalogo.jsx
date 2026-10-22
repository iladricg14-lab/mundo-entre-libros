
import { useRef, useState } from "react";
import libros from "../data/libros.json";
import BookCard from "./BookCard";

const LIBROS_POR_PAGINA = 8;

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [paginaActual, setPaginaActual] = useState(1);

  const resultadosRef = useRef(null);

  // LIBROS DISPONIBLES
  const librosDisponibles = libros.filter(
    (libro) => libro.disponible === true
  );

  // CATEGORÍAS
  const categorias = [
    "Todas",
    ...new Set(
      librosDisponibles
        .map((libro) => libro.categoria)
        .filter(Boolean)
    ),
  ].sort((a, b) => {
    if (a === "Todas") return -1;
    if (b === "Todas") return 1;

    return a.localeCompare(b, "es");
  });

  // NORMALIZAR TEXTO
  const normalizar = (texto = "") =>
    String(texto)
      .toLocaleLowerCase("es")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  // FILTRAR LIBROS
  const librosFiltrados = librosDisponibles.filter(
    (libro) => {
      const textoBusqueda = normalizar(busqueda.trim());

      const coincideBusqueda =
        normalizar(libro.titulo).includes(textoBusqueda) ||
        normalizar(libro.autor).includes(textoBusqueda);

      const coincideCategoria =
        categoria === "Todas" ||
        libro.categoria === categoria;

      return coincideBusqueda && coincideCategoria;
    }
  );

  // TOTAL DE PÁGINAS
  const totalPaginas = Math.max(
    1,
    Math.ceil(librosFiltrados.length / LIBROS_POR_PAGINA)
  );

  // LIBROS DE LA PÁGINA ACTUAL
  const indiceInicial =
    (paginaActual - 1) * LIBROS_POR_PAGINA;

  const librosPagina = librosFiltrados.slice(
    indiceInicial,
    indiceInicial + LIBROS_POR_PAGINA
  );

  // CONTADOR
  const primerLibro =
    librosFiltrados.length === 0 ? 0 : indiceInicial + 1;

  const ultimoLibro = Math.min(
    indiceInicial + LIBROS_POR_PAGINA,
    librosFiltrados.length
  );

  // MANEJAR BÚSQUEDA
  const manejarBusqueda = (evento) => {
    setBusqueda(evento.target.value);
    setPaginaActual(1);
  };

  // MANEJAR CATEGORÍAS
  const manejarCategoria = (evento) => {
    setCategoria(evento.target.value);
    setPaginaActual(1);
  };

  // CAMBIAR DE PÁGINA
  const cambiarPagina = (numeroPagina) => {
    if (
      numeroPagina < 1 ||
      numeroPagina > totalPaginas ||
      numeroPagina === paginaActual
    ) {
      return;
    }

    setPaginaActual(numeroPagina);

    resultadosRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // PAGINACIÓN COMPACTA
  const paginasVisibles = [
    1,
    totalPaginas,
    paginaActual - 1,
    paginaActual,
    paginaActual + 1,
  ]
    .filter(
      (numero) =>
        numero >= 1 && numero <= totalPaginas
    )
    .filter(
      (numero, indice, arreglo) =>
        arreglo.indexOf(numero) === indice
    )
    .sort((a, b) => a - b);

  const paginasCompactas = [];

  paginasVisibles.forEach((numero, indice) => {
    if (
      indice > 0 &&
      numero - paginasVisibles[indice - 1] > 1
    ) {
      paginasCompactas.push("...");
    }

    paginasCompactas.push(numero);
  });

  return (
    <section
      id="catalogo"
      className="catalogo-section"
    >
      <div className="container">

        {/* ENCABEZADO */}
        <div className="text-center mb-5">
          <h2 className="catalogo-titulo">
            ✨ Explora nuestro universo literario
          </h2>

          <p className="catalogo-subtitulo">
            Encuentra tu próxima lectura favorita
          </p>
        </div>

        {/* BUSCADOR Y FILTROS */}
        <div className="row g-3 mb-4">

          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="search"
                className="form-control"
                placeholder="Buscar por título o autor..."
                aria-label="Buscar libros"
                value={busqueda}
                onChange={manejarBusqueda}
              />
            </div>
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              aria-label="Filtrar por categoría"
              value={categoria}
              onChange={manejarCategoria}
            >
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* RESULTADOS */}
        <div
          ref={resultadosRef}
          className="catalogo-resultados-info"
        >
          <p className="resultados-texto mb-0">
            {librosFiltrados.length}{" "}
            {librosFiltrados.length === 1
              ? "libro encontrado"
              : "libros encontrados"}
          </p>

          {librosFiltrados.length > 0 && (
            <span className="catalogo-rango">
              Mostrando {primerLibro}–{ultimoLibro}
            </span>
          )}
        </div>

        {/* TARJETAS */}
        {librosPagina.length > 0 ? (
          <>
            <div className="row g-4">
              {librosPagina.map((libro) => (
                <BookCard
                  key={libro.id}
                  libro={libro}
                />
              ))}
            </div>

            {/* PAGINACIÓN */}
            {totalPaginas > 1 && (
              <nav
                className="catalogo-paginacion"
                aria-label="Páginas del catálogo"
              >

                {/* ANTERIOR */}
                <button
                  type="button"
                  className="btn pagina-boton pagina-navegacion"
                  onClick={() =>
                    cambiarPagina(paginaActual - 1)
                  }
                  disabled={paginaActual === 1}
                >
                  <i className="bi bi-chevron-left me-1"></i>
                  Anterior
                </button>

                {/* NÚMEROS Y PUNTOS */}
                <div className="catalogo-paginas">
                  {paginasCompactas.map(
                    (numero, indice) =>
                      numero === "..." ? (
                        <span
                          key={`puntos-${indice}`}
                          className="pagina-puntos"
                          aria-hidden="true"
                        >
                          ...
                        </span>
                      ) : (
                        <button
                          key={numero}
                          type="button"
                          className={`btn pagina-boton ${
                            paginaActual === numero
                              ? "pagina-activa"
                              : ""
                          }`}
                          onClick={() =>
                            cambiarPagina(numero)
                          }
                          aria-label={`Ir a página ${numero}`}
                          aria-current={
                            paginaActual === numero
                              ? "page"
                              : undefined
                          }
                        >
                          {numero}
                        </button>
                      )
                  )}
                </div>

                {/* SIGUIENTE */}
                <button
                  type="button"
                  className="btn pagina-boton pagina-navegacion"
                  onClick={() =>
                    cambiarPagina(paginaActual + 1)
                  }
                  disabled={
                    paginaActual === totalPaginas
                  }
                >
                  Siguiente
                  <i className="bi bi-chevron-right ms-1"></i>
                </button>

              </nav>
            )}

            {/* INDICADOR */}
            {totalPaginas > 1 && (
              <p className="catalogo-pagina-texto">
                Página {paginaActual} de {totalPaginas}
              </p>
            )}
          </>
        ) : (
          <div className="text-center py-5">
            <i className="bi bi-search fs-1"></i>

            <h4 className="mt-3">
              No encontramos libros
            </h4>

            <p>
              Prueba con otra búsqueda o categoría.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Catalogo;
