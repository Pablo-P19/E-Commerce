var input = document.getElementById("cabecera__input");
var button = document.getElementById("icono__buscar");
var resultado = document.getElementById("resultado");
var clear = document.getElementById("limpiar");

clear.addEventListener("click", () => {
    resultado.innerHTML = "";
    resultado.style.display = "none";
    clear.style.display = "none";
});

var data;
fetch("https://my-json-server.typicode.com/Pablo-P19/E-Commerce/producto")
    .then((response) => response.json())
    .then((json) => (data = json));

input.addEventListener("keyup", () => {
    var value = input.value.toLowerCase();
    var productos = data.filter((item) =>
        item.nombre.toLowerCase().includes(value)
    );
    productos.sort((a, b) => a.precio - b.precio);

    if (productos.length > 0) {
        resultado.innerHTML = "";
        for (var producto of productos) {
            resultado.innerHTML += `${producto.nombre}, $ ${producto.precio}<br>`;
        }
        resultado.innerHTML += `<strong style="color: blue; cursor: pointer;" id="cerrar__resultado">Cerrar</strong>`;
    } else {
        resultado.innerHTML = `No hay resultados con:${value}<br><strong style="color: blue; cursor: pointer;" id="cerrar__resultado">Cerrar</strong>`;
    }

    resultado.style.display = "block";
    // clear.style.display = "block";

    var cerrarResultado = document.getElementById("cerrar__resultado");
    cerrarResultado.addEventListener("click", () => {
        resultado.innerHTML = "";
        resultado.style.display = "none";
        clear.style.display = "none";
    });
});
