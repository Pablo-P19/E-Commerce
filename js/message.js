const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#formulario__nombre');
    const mensaje = document.querySelector('#formulario__textarea');
    
    if (nombre.value.length < 3 || nombre.value.length > 40) {
        alert('El nombre debe tener entre 3 y 40 caracteres.');
        return;
    }
    
    if (mensaje.value.length < 5 || mensaje.value.length > 120) {
        alert('El mensaje debe tener entre 5 y 120 caracteres.');
        return;
    }
    
    // Si todo está correcto, se envía el formulario
    mostrarMensaje('Mensaje enviado exitosamente.');
    document.querySelector('#formulario__nombre').value = ''; // Vaciar el campo de nombre
    document.querySelector('#formulario__textarea').value = ''; // Vaciar el campo de mensaje
});

function mostrarMensaje(mensaje) {
    // Crear un elemento <div> con el mensaje
    const div = document.createElement('div');
    div.innerText = mensaje;
  
    // Agregar estilos CSS al elemento <div> para que se muestre como mensaje flotante
    div.style.position = 'fixed';
    div.style.bottom = '60px';
    div.style.left = '50%';
    div.style.transform = 'translateX(-50%)';
    div.style.padding = '15px';
    div.style.background = 'rgba(0, 0, 0, 0.8)';
    div.style.color = '#fff';
    div.style.borderRadius = '5px';
    div.style.textAlign = "center";
  
    // Agregar el elemento <div> al cuerpo del documento
    document.body.appendChild(div);
  
    // Desaparecer el mensaje después de 4 segundos
    setTimeout(() => {
      div.remove();
    
    }, 4000);
  }