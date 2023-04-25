'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
	let l=[];
	let m=[];
	let r=[];
	if(array.length > 1){
		m.push(array[0]);
		for(let i=1;i<array.length;i++){
			if(array[i]>=m[0]){
				// console.log('R--->'+array[i])
				r.push(array[i]);
			}else{
				// console.log('L--->'+array[i])
				l.push(array[i]);
			}
		}
		console.log('m--->'+m);
		console.log('l--->'+l);
		console.log('r--->'+r);
		// quickSort(l);
		// quickSort(m);
		// quickSort(r);
		return quickSort(l).concat(quickSort(m),quickSort(r));
	}else{
		return array;
	}
}

function our_split(array){
	let l=[];
	let r=[];
	let x = Math.trunc(array.length/2);
	l = array.slice(0,x);
	r = array.slice(x);
	return [l,r];
}

function merge(left,right){
	let max = left.length+right.length;
	let l=0;
	let r=0;
	let x=[];
	while(x.length<max){
		if(left[l]<right[r]||right[r] === undefined){
			x.push(left[l]);
			l++;
		}else{
			x.push(right[r]);
			r++;
		}
	}
	console.log('x--->'+x.length);
	return x;
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
	if(array.length === 1){
		return array;
	}else{
		let l=[];
		let r=[];
		let x = our_split(array);
		l=x[0];
		r=x[1];
		return merge(mergeSort(l),mergeSort(r));
	}
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
