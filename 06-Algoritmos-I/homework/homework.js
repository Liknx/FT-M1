'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let x = [1];
  let y = 2;
  while(num !== 1){
    while(num%y === 0){
      x.push(y);
      num = num/y;
    }
    y++;
  }
  return x
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0;i<array.length;i++){
		let x = 1;
    let aux;
		while(x < array.length){
			if(array[x-1] > array[x]){
				console.log(array[x-1]);
				aux = array[x];
				array[x] = array[x-1];
				array[x-1] = aux;
			}
			x++;
		}
	}
	return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
	for(let i=1;i<array.length;i++){
		let x = i;
    let aux;
		while(x > 0){
			if(array[x-1] > array[x]){
				aux = array[x-1];
				array[x-1] = array[x];
				array[x] = aux;
				x--;
			}else{
				x--;
			}
		}
	}
	return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let k = 0;
  let aux;
	while(k < array.length){
		let x = array[k];
		var y;
		for(let i=k;i<array.length;i++){
			if(array[i] <= x){
				x = array[i];
				y = i;
			}
		}
		aux = array[k];
		array[k] = array[y];
		array[y] = aux;
		k++;
	}
	return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
