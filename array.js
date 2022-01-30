//2) Dado el siguiente vector array=[5,4,20,7,5,10]
//use map, para devolver  cada elemento del vector multiplicado por 10
//resultado esperado [50,40,200,70,50,100]

var array=[5,4,20,7,5,10];
var Multiplicar = array.map(function(data) {
   return data * 10;
});
console.log("Los numeros multiplicado x10 es: ", Multiplicar);