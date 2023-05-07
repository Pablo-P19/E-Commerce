import { productoServicio } from "../service/productos.js";

const formulario = document.querySelector("[data-form]");

const infoProducto = () => {
    const url = new URL(window.location);
    const idnt = url.searchParams.get("identificador");

    if (idnt === null) {
        window.location.href = "../pages/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const categoria = document.querySelector("[data-categoria]");
    const imagen = document.querySelector("[data-imagen]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    productoServicio.datosProducto(idnt).then((producto) => {
        nombre.value = producto.nombre;
        categoria.value = producto.categoria;
        imagen.value = producto.imagen;
        precio.value = producto.precio;
        descripcion.value = producto.descripcion;
    });   
};

infoProducto();
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
  
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const idnt = url.searchParams.get("identificador");

    const nombre = document.querySelector("[data-nombre]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    console.log(nombre, categoria, imagen, precio, descripcion);
    productoServicio
        .updateProducto(categoria, imagen, nombre, precio, descripcion, idnt)
        .then(() => {
            mostrarMensajeExito();
            window.location.href = "../pages/menu-admin.html";
        });
});
