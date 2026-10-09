
import { useMemo } from "react";

function Estrellas() {
  const estrellas = useMemo(() => {
    return Array.from({ length: 90 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duracion: 2 + Math.random() * 4,
      retraso: Math.random() * 5,
      tamano: 2 + Math.random() * 3,
      destello: i % 12 === 0,
    }));
  }, []);

  return (
    <div className="universo-fondo" aria-hidden="true">
      {estrellas.map((estrella) => (
        <span
          key={estrella.id}
          className={
            estrella.destello
              ? "estrella estrella-destello"
              : "estrella"
          }
          style={{
            left: `${estrella.x}%`,
            top: `${estrella.y}%`,
            "--duracion": `${estrella.duracion}s`,
            "--retraso": `${estrella.retraso}s`,
            "--tamano": `${estrella.tamano}px`,
          }}
        />
      ))}

      <span className="estrella-fugaz fugaz-1" />
      <span className="estrella-fugaz fugaz-2" />
      <span className="estrella-fugaz fugaz-3" />
    </div>
  );
}

export default Estrellas;
