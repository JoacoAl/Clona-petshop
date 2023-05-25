function validarFormulario() {

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
  
    if (nombre === '' || email === '') {
 
      alert('Por favor, rellena todos los campos del formulario.');
    } else if (!email.includes('@')) {

      alert('Por favor, introduce una dirección de correo electrónico válida.');
    } else {

      var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
      modal.show();
    }
  }