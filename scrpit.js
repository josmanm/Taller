
function guardarEnLocalStorage() {
    var dato = document.getElementById('datoInput').value;

    // Guardar en LocalStorage
    localStorage.setItem('miDato', dato);

    // Mostrar mensaje en la página
    document.getElementById('resultadoLocalStorage').textContent = 'Dato guardado en LocalStorage: ' + dato;
}

// Recuperar dato almacenado en LocalStorage al cargar la página
window.onload = function() {
    var datoAlmacenado = localStorage.getItem('miDato');
    if (datoAlmacenado) {
        document.getElementById('resultadoLocalStorage').textContent = 'Dato recuperado de LocalStorage: ' + datoAlmacenado;
    }
};

function guardarEnSessionStorage() {
    var dato = document.getElementById('datoInput').value;

    // Guardar en SessionStorage
    sessionStorage.setItem('miDato', dato);

    // Mostrar mensaje en la página
    document.getElementById('resultadoSessionStorage').textContent = 'Dato guardado en SessionStorage: ' + dato;
}

// Recuperar dato almacenado en SessionStorage al cargar la página
window.onload = function() {
    var datoAlmacenado = sessionStorage.getItem('miDato');
    if (datoAlmacenado) {
        document.getElementById('resultadoSessionStorage').textContent = 'Dato recuperado de SessionStorage: ' + datoAlmacenado;
    }
};

function cambiarColorFondo() {
    var elementoObjetivo = document.getElementById('elementoObjetivo');
    var colores = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    elementoObjetivo.style.backgroundColor = colorAleatorio;
}
var boton = document.getElementById('botonCambioColor');
boton.addEventListener('click', cambiarColorFondo);

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

document.getElementById('miLista').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        console.log('Clic en: ' + event.target.textContent);
    }
});