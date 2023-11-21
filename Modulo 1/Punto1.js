function encontrarNumeroMasGrande(lista) {

  if (lista.length === 0) {
    console.error('La lista está vacía.');
    return;
  }

  let numeroMasGrande = lista[0];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > numeroMasGrande) {
      numeroMasGrande = lista[i];
    }
  }

  console.log('El número más grande en la lista es:', numeroMasGrande);
}

const numeros = [12, 5, 27, 8, 16, 3, 20];
encontrarNumeroMasGrande(numeros); //Salida esperada: 27
