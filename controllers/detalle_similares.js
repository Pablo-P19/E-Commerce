import { productoServicio } from "../service/productos.js";
const nuevoProducto = (categoria, imagen, nombre, precio, id) => {
    const card = document.createElement("div");
    card.classList.add("card__div");
    const contenido = `
    <li class="producto__item" ${categoria}>
    <img
        class="producto__img"
        src="${imagen}"
        alt=""
    /><span class="producto__nombre">${nombre}</span
    ><span class="producto__precio">$ ${precio}</span
    ><a href="../pages/detalles.html?identificador=${id}" class="producto__link"
        ><span class="producto__link"
            >Ver Producto</span
        ></a
    >
</li>`;

    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
};

const clasico = document.querySelector("[data-similares]");
const latino = document.querySelector("[data-similares]");
const variado = document.querySelector("[data-similares]");

function aleatorio (array) {
    const indice = Math.floor(Math.random() * array.length);    
    return array[indice];
}

let clasicos = [];
let latinos = [];
let otros = [];

productoServicio
    .listaProductos()
    .then((valores) => {
        valores.forEach(({ categoria, imagen, nombre, precio, id }) => {
            if (categoria === "clasico") {
                clasicos.push({ categoria, imagen, nombre, precio, id });
            } else if (categoria === "latino") {
                latinos.push({ categoria, imagen, nombre, precio, id });
            } else if (categoria === "variado") {
                otros.push({
                    categoria,
                    imagen,
                    nombre,
                    precio,
                    id
                });
            }
        });
        for (let i = 0; i < 2; i++) {
            const productoClasico = aleatorio (clasicos);
            const nuevaTarjetaClasico = nuevoProducto(
                productoClasico.categoria,
                productoClasico.imagen,
                productoClasico.nombre,
                productoClasico.precio,
                productoClasico.id
            );
            clasico.appendChild(nuevaTarjetaClasico);

            const productoLatino = aleatorio(latinos);
            const nuevaTarjetaLatino = nuevoProducto(
                productoLatino.categoria,
                productoLatino.imagen,
                productoLatino.nombre,
                productoLatino.precio,
                productoLatino.id
            );
            latino.appendChild(nuevaTarjetaLatino);

            const productoVariado = aleatorio(otros);
            const nuevaTarjetaVariado = nuevoProducto(
                productoVariado.categoria,
                productoVariado.imagen,
                productoVariado.nombre,
                productoVariado.precio,
                productoVariado.id
            );
            variado.appendChild(nuevaTarjetaVariado);
        }
    })
    .catch((unerror) => alert("Error"));
