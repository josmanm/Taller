function sumarNumerosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0);
    const sumaPares = numerosPares.reduce((acumulador, numero) => acumulador + numero, 0);
    
    return sumaPares;
}

const numerosEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultadoSumaPares = sumarNumerosPares(numerosEjemplo);

console.log('Array de ejemplo:', numerosEjemplo);
console.log('Suma de números pares:', resultadoSumaPares);