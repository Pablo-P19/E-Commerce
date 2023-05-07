import { productoServicio } from "../service/productos.js";

const formAddProducto = document.querySelector("[data-form]");

// Estilo mensaje check
const mostrarMensajeExito = () => {
    const mensaje = document.createElement("div");
    mensaje.innerHTML = "&#10004;";
    mensaje.style.position = "fixed";
    mensaje.style.top = "50%";
    mensaje.style.left = "50%";
    mensaje.style.transform = "translate(-50%, -50%)";
    mensaje.style.fontSize = "72px";
    mensaje.style.color = "green";
    document.body.appendChild(mensaje);
    setTimeout(() => {
      mensaje.remove();
    }, 1000);
  };

formAddProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const categoria = document.querySelector("[data-categoria]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productoServicio
        .crearProducto(categoria, imagen, nombre, precio, descripcion)
        .then(() => {
            mostrarMensajeExito();
            window.location.href = "../pages/agregar.html";
        })
        .catch((err) => console.log(err));
});
