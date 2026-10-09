
export const WHATSAPP_NUMERO = "5215571531245";

export function crearEnlaceWhatsApp(libro) {
  const mensaje =
    `¡Hola, Mundo Entre Libros! ` +
    `Me interesa el libro "${libro.titulo}". ` +
    `¿Podrían darme información sobre su precio ` +
    `y cómo puedo adquirirlo? ¡Gracias!`;

  const enlace = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;

  return enlace;
}
