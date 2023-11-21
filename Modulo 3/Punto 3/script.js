document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var valorNombre = document.getElementById('nombre').value;
    if (valorNombre.trim() === '') {
        document.getElementById('errorCampoEntrada').textContent = '¡El campo no puede estar vacío!';
    } else {
        document.getElementById('errorCampoEntrada').textContent = '';
        console.log({ nombre: valorNombre });
        alert('Formulario correctamente diligenciado');
        document.getElementById('nombre').value = '';
    }
});