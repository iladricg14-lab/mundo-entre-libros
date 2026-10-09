import { useState } from "react";
import libros from "../data/libros.json";
import BookCard from "./BookCard";

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  // El JSON público solo contiene libros con disponibilidad actual.
  // No publicamos el stock exacto ni los precios del inventario privado.
  const librosDisponibles = libros.filter(
    (libro) => libro.disponible === true
  );

  const categorias = [
    "Todas",
    ...new Set(
      librosDisponibles.map((libro) => libro.categoria).filter(Boolean)
    ),
  ];

  categorias.sort((a, b) => {
    if (a === "Todas") return -1;
    if (b === "Todas") return 1;
    return a.localeCompare(b, "es");
  });

  const normalizar = (texto = "") =>
    String(texto)
      .toLocaleLowerCase("es")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const librosFiltrados = librosDisponibles.filter((libro) => {
    const termino = normalizar(busqueda.trim());
    const coincideBusqueda =
      normalizar(libro.titulo).includes(termino) ||
      normalizar(libro.autor).includes(termino);
    const coincideCategoria =
      categoria === "Todas" || libro.categoria === categoria;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <section id="catalogo" className="catalogo-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="catalogo-titulo">
            ✨ Explora nuestro universo literario
          </h2>
          <p className="catalogo-subtitulo">
            Encuentra tu próxima lectura favorita
          </p>
        </div>

        <div className="row g-3 mb-5">
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
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              aria-label="Filtrar por categoría"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="resultados-texto">
          {librosFiltrados.length}{" "}
          {librosFiltrados.length === 1
            ? "libro encontrado"
            : "libros encontrados"}
        </p>

        {librosFiltrados.length > 0 ? (
          <div className="row g-4">
            {librosFiltrados.map((libro) => (
              <BookCard key={libro.id} libro={libro} />
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <i className="bi bi-search fs-1"></i>
            <h4 className="mt-3">No encontramos libros</h4>
            <p>Prueba con otra búsqueda o categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalogo;
