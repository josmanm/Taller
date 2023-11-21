function cambiarColorFondo() {
    var elementoObjetivo = document.getElementById('elementoObjetivo');
    var colores = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    elementoObjetivo.style.backgroundColor = colorAleatorio;
}
var boton = document.getElementById('botonCambioColor');
boton.addEventListener('click', cambiarColorFondo);