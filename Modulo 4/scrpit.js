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