//Ejercicios en clase Tareaest

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
    const cad = "Tus numeros de la suerte son: ";
    return cad + array.reduce ((ac, va, index, array) =>{
        var aux = index < ( array.length -1)? " , ": ", y ";
        return (ac) + aux + (va);

    });
}

console.log (numerosDeLaSuerte(arrayNumeros)); 

// verificar si uno de los elementos del array es mayor a 10
const goodInput = [8,9,12,6,7];
function numerosMayorq10(array){
    return array.some(data => {
        return data > 10;
    })
}
console.log("¿Los numeros son mayor a 10?: ", numerosMayorq10(goodInput));
//1) Verificar si una de las cadenas de caracteres del array
//tiene más de 10 caracteres
//const vectorCadenas = ["Ecuador", "Argentina", "Dinamarca","Coreal del Norte"];
const vectorCadenas = ["Ecuador", "Argentina", "Dinamarca","Coreal del Norte"];
function cadenaMayorq10(array){
  return array.some (item => item.length > 10);
 
}
console.log(cadenaMayorq10(vectorCadenas));

//2) Chequear si uno de los elementos de la matriz es true
const vectorBooleano = [
    [false, false, false],
[false, true, false],
[false, false, false]
]; 

function existeVerdaderoMatriz(matriz){
    return matriz.some (element => {
       return element.some(item => item == true);
       
    })
}
console.log ("Ejercicio matriz de booleanos: "); 
 console.log(existeVerdaderoMatriz(vectorBooleano));

 //3) verificar si la palabra 'Lost' existe dentro del siguiente array:

const matrizParrafo = [
    "Strange is the night where black stars rise,",
    "And strange moons circle through the skies",
    "Lost",
    "But stranger still is", "Lost Carcosa."
  ];
function existePalabraLost(matriz){
    const palabra = "Lost";
    return matriz.some( data => {
        return data.indexOf (palabra) != -1;
    })
}
console.log("Existe Palabra lost: ");
console.log(existePalabraLost(matrizParrafo));


// 4) se tiene la siguiente matriz
// matriz1 = [['Esmeraldas','28c'],['Guayaquil', '26c'],['Quito','18c']]
//se pide diseñar la funcion para convertir la matriz en un objeto
// resultado esperado:
/*
{
    'Esmeraldas' : '28'
    'Guayaquil' : '26'
    'Quito' : '18'
}
*/
//utilice reduce, some (ac,va, index,array),{}

const matriz1 = [['Esmeraldas','28c'],['Guayaquil', '26c'],['Quito','18c']];
function objectify (array){
    return array.reduce ((ac, va, index, array) =>{
       ac[va[0]] = va[1];
      // console.log(ac)
       return ac;

    }, {});
}
console.log (objectify(matriz1)); 

//5) se tiene el siguiente vector ["A", "B", "C", "D", "E"]
//se pide diseñar la funcion shiftTRight (desplazamiento a a derecha)
// que permite retonar el resultado siguiente:
//["E", "A", "B", "C", "D"]
// utilizar map (element, index, array)

const VectorLetras = ["A", "B", "C", "D", "E"];
function shiftRight(array)
{
 return array.map((element, index, arrayv) => {
  const n=index++; 
  const vec=arrayv[5]
  const aux=arrayv[n-1];
  for(element=n-2;element>=0;element --){
   arrayv[element+1]= arrayv[element];
  }
  arrayv[-1]=aux;
  //arrayv[-2]=vec;
  //console.log(vec);
  return aux;
  
})//.reverse().join();
}
console.log("Las siguientes letras son:  ",shiftRight(VectorLetras));
