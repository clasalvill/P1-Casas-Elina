// Importar estilos
import "./styles.scss";

// Importar imágenes para que Parcel genere rutas correctas
import lucena1 from "./imagenes/lucena1.jpg";
import lucena3 from "./imagenes/lucena3.jpg";

// Asignar las imágenes procesadas a los elementos del DOM
document.addEventListener("DOMContentLoaded", () => {
  const portada1 = document.getElementById("portada1");
  const portada2 = document.getElementById("portada2");

  if (portada1) portada1.src = lucena1;
  if (portada2) portada2.src = lucena3;
});
