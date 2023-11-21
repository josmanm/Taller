
function sumarNumeros(a, b) {
    return a + b;
}
const sumarNumerosArrow = (a, b) => a + b;
const numero1 = 5;
const numero2 = 8;

const resultadoFuncionTradicional = sumarNumeros(numero1, numero2);
console.log('Resultado función tradicional:', resultadoFuncionTradicional);

const resultadoFuncionFlecha = sumarNumerosArrow(numero1, numero2);
console.log('Resultado función flecha:', resultadoFuncionFlecha);