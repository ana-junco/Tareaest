//4) Dada la siguiente matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
//utilice reduce para encontrar el producto de sus elementos,
//resultado esperado: 720

matrizReduce = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
var integrado = matrizReduce.reduce(function(a,b) {
    return a.concat(b);
});
//Multiplicar los valores de un array
var total = integrado.reduce(function(a, b){
    return a * b;
    });
console.log ("El resultado obtenido es:", total);