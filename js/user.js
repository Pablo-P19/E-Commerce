const botonx = document.getElementById("login__submit");
botonx.addEventListener("click", (evento) => {
    evento.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasenia").value;

    var usuarioLogin = "adm@email.com";
    var contrasenaLogin = "1234";

    if (usuario == usuarioLogin && contrasena == contrasenaLogin) {
        window.location.href = "../pages/agregar.html";
        return true;
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
    return false;
});
