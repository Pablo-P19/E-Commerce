import {productoServicio} from "../service/productos.js"

const tablaProducto = (categoria, imagen, nombre, id) => {
    
    const card = document.createElement("div")
    const contenido = `
        <li class="producto__item">
            <span class="table__categoria">${categoria}</span>
            <img class="producto__img" src="${imagen}" alt=""/>
            <span class="producto__nombre">${nombre}</span>
            <div class="table__edit"><a class="edit__text" href="editar.html?identificador=${id}">Editar</a></div>
            <div class="table__trash"><i class="del_text" data-trash id="${id}">Eliminar</i></div>    
        </li>
    `;

    card.innerHTML = contenido;
    card.dataset.id = id;
    
    const iconTrash = card.querySelector('[data-trash]')
    iconTrash.addEventListener('click', () => {
        const identificador = iconTrash.id;
        
        // Ventana de confirmación
        const confirmacion = confirm('¿Estás seguro que quieres eliminar este producto?');
        if (!confirmacion) {
            return;
        }
        
        productoServicio.eliminarProducto(identificador)
            .then(respuesta => {
                window.location.href = "../pages/menu-admin.html";
            })
            .catch(error => alert('Error en iconTrash'))
    }) 

    return card;    
}

const listaEliminar = document.querySelector("[data-table]");

productoServicio.listaProductos()
    .then(valores => {
        valores.forEach(({categoria, imagen, nombre, id}) => {
            const tabla = tablaProducto(categoria, imagen, nombre, id)
            listaEliminar.appendChild(tabla)
        })
    })
    .catch(unerror => alert('Error'))
