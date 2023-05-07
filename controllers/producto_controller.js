import {productoServicio} from"../service/productos.js"
const nuevoProducto = (categoria,imagen, nombre, precio, id) => {
    const card = document.createElement("div")
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
}

const clasico = document.querySelector("[data-clasico],[data-todo]");
const latino = document.querySelector("[data-latino],[data-todo]");
const variado = document.querySelector("[data-variado],[data-todo]");

productoServicio.listaProductos().then(valores => {
    valores.forEach(({categoria,imagen,nombre,precio,id}) => {
        const nuevaTarjeta = nuevoProducto(categoria,imagen,nombre,precio,id)
        if (categoria === "clasico") {
            clasico.appendChild(nuevaTarjeta);
          } else if (categoria === "latino") {
            latino.appendChild(nuevaTarjeta);
          } else if (categoria === "variado") {
            variado.appendChild(nuevaTarjeta);
          }           
    })
}).catch(unerror => alert('Error'))

