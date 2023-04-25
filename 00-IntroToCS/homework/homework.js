'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var z=0;
  var x=0;
  for(let i=num.length-1;i>=0;i--){
    var y=num[i]*Math.pow(2,x);
    z=z+y;
    x++;
  }
  return z;
  // --------------
  // var array = num.split('');
  // var num = 0;
  // for(var i = 0; i < array.length; i ++) {
  //   num = num + parseInt(array[i]) * Math.pow(2, array.length - 1 - i);
  // 	// ALTERNATIVA: 
  // 	// num+=parseInt(array[i]) * Math.pow(2, array.length - 1 - i);
  // 	// num+=array[i] * Math.pow(2, array.length - 1 - i);
  // 	// num+=array[i] * 2 ** (array.length-1-i);
  // }
  // return num;
  // --------------
  // ALTERNATIVA:
  // function BinarioADecimal(num){
  //   var array = num.split("");
  //   var sum = 0;  
  //   var pos = 0;
  //   for(var j = array.length-1; j>=0 ; j--){
  //     sum+=array[j]*Math.pow(2, pos); 
  //     pos++; 
  //   }

  //   return sum;
  // }
}

function DecimalABinario(num) {
  // tu codigo aca
  var r;
  var x;
  var y='';
  do{
    r=num%2;
    num=Math.trunc(num/2);
    y=r.toString()+y;
  }while(num>0);
  return y;
  
  // --------------
  // if(num <= 0) return '0'; 

  // var binario = [];

  // while(num > 0) {
  //   binario.unshift(num%2);
  // 	num = Math.floor(num/2);
  // }
  // return binario.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}