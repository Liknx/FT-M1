'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function Node(value){
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
};

LinkedList.prototype.add=function(data){
  let node = new Node(data);
  let x = this.head;
  if(!x){
    this.head = node;
  }else{
    while(x.next){
      x = x.next;
    }
    x.next = node;
  }
}

LinkedList.prototype.search=function(data){
  let x = this.head;
  if(x.value === data){
    return x.value;
  }else{
    while(x){
      if(x.value === data){
        return x.value;
      }else if(typeof(data)==='function'){
        if(data(x.value)){
          return x.value;
        }
      }
      x = x.next;
    }
  }
  return null;
}

LinkedList.prototype.remove=function(){
  let x = this.head;
  let y;
  if(!x){
    return x;
  }else if(x.value && !x.next){
    y = x.value;
    this.head = null;
    return y;
  }else if(x.value && !x.next.next){
    y = x.next.value;
    x.next = null;
    return y;
  }else{
    while(x.next.next){
      x = x.next;
      y = x.next.value;
    }
    x.next = null;
    return y;
  }
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.bucket = new Array(35);
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(key){
  let x = 0;
  for (let i = 0; i < key.length; i++) {
    x += key.charCodeAt(i);
  }
  return x % this.bucket.length;
};

HashTable.prototype.set = function(key, value){
  if(typeof(key) != 'string'){
    throw TypeError('Keys must be strings');
  }else{
    let x = this.hash(key);
    if(this.bucket[x] === undefined){
      this.bucket[x] = {}
    }
    this.bucket[x][key] = value;
  }
};

HashTable.prototype.get = function(key){
  let x = this.hash(key);
  return this.bucket[x][key];
};

HashTable.prototype.hasKey = function (key){
  let i = this.hash(key);
  return this.bucket[i].hasOwnProperty(key);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
