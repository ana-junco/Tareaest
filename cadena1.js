//4) Dada la siguiente matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
//utilice reduce para encontrar el producto de sus elementos,
//resultado esperado: 720

const array1= [1, 2, 3, 4];
const x2 = array1. reduce ((ac, va) =>{
    return ac + va;
})
// 1+2+3+4
console.log(x2);
matrizRed = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];

//matrizred=[1,2,3,4,5,6]
function multiplicaMatriz (array) {
    return array.reduce ((ac, va) =>{
      return ac.concat(va);
    }). reduce((ac, va) => {
        return (ac* va);
    });
}

console.log ("matriz Original : ", matrizRed)
console.log (multiplicaMatriz(matrizRed));

//se tiene un vector con los siguientes elementos
// input = [30, 48, 11,5, 32]
//se pide diseñar la funcion que devuelva la siguiente cadena:
//tus numeros de la suerte son: 30,48,11,5 y 32
// use la funcion reduce

const arrayNumeros = [30, 48, 11,5, 32];
function numerosDeLaSuerte (array){
    const cad = "tus numeros de la suerte son: ";
    return cad + array.reduce ((ac, va, index, array) =>{
        var aux = index < ( array.length -1)? " , ": ", y ";
        return (ac) + aux + (va);

    });
}

console.log (numerosDeLaSuerte(arrayNumeros)); 

// verificar si uno de los elementos del array es mayor a 10
const goodInput = [8,9,10,11,16];
function numerosMayorq10(array){
    return array.some(data => {
        return data > 10;
    })
}
console.log(numerosMayorq10(goodInput));

//1) Verificar si una de las cadenas de caracteres del array
//tiene más de 10 caracteres

const vectorCadenas = ["Ecuador", "Argentina", "Dinamarca","Coreal del Norte"];
function cadenMayorq10(array){
  return array.some (item => item.length>10) 
}
console.log(cadenMayorq10(vectorCadenas));

//2) Chequear si uno de los elementos de la matriz es true

const vectorBooleano = [
  [false, false, false],
[false, false, false],
[false, false, true]
]; 

function existeVerdaderoMatriz(matriz){
  return matriz.some (element =>{
    console.log (element)
    return false;
  })
}
console.log ("Ejercicio matriz de booleanos: ");
console.log(existeVerdaderoMatriz(vectorBooleano));


//3) verificar si la palabra 'Lost' existe dentro del siguiente array:

//const vectorParrafo = [
   // "Strange is the night where black stars rise,",
    //"And strange moons circle through the skies,",
    //"But stranger still is",
    //"Lost Carcosa."
  //];
  var vectorParrafo = ["Strange is the night where black stars rise,","Lost", "And strange moons circle through the skies,",
  "But stranger Lost still is","Lost Carcosa."
  ];
if(vectorParrafo.includes("Lost")){
  console.log("Si esta la palabra Lost");
}else{
  console.log("No esta la palabra Lost");
}