'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function(value){
  if(this.value < value){
    if(this.right === null){
      this.right = new BinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }
  if(this.value > value){
    if(this.left === null){
      this.left = new BinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value){
  if(this.value == value){
    return true;
  }else{
    if(value > this.value){
      if(!this.right){
        return false;
      }else{
        return this.right.contains(value);
      }
    }
    if(value < this.value){
      if(!this.left){
        return false
      }else{
        return this.left.contains(value);
      }
    }
  }
}

BinarySearchTree.prototype.size = function(){
  if(!this.left && !this.right){
    return 1;
  }
  if(!this.left && this.right){
    return 1 + this.right.size();
  }
  if(this.left && !this.right){
    return 1 + this.left.size();
  }
  if(this.left && this.right){
    return 1 + this.left.size() + this.right.size()
  }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
  switch(order){
    case 'pre-order'://root - izq - der
      cb(this.value);
      if(this.left){this.left.depthFirstForEach(cb,order);};
      if(this.right){this.right.depthFirstForEach(cb,order);};
    break;
    case 'post-order'://izq - der - root
      if(this.left){this.left.depthFirstForEach(cb,order);};
      if(this.right){this.right.depthFirstForEach(cb,order);};
      cb(this.value);
    break;
    default://'in order'://izq - root - der
      if(this.left){this.left.depthFirstForEach(cb,order);};
      cb(this.value);
      if(this.right){this.right.depthFirstForEach(cb,order);};
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb,array=[]){
  if(this.left) array.push(this.left);
  if(this.right !== null) array.push(this.right);
  cb(this.value);
  if(array.length > 0)array.shift().breadthFirstForEach(cb, array);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
