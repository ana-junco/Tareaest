console.log("Primer programa funcional...");

//listar los elementos pares del vector de numeros
// utilice la funcion filter
const pares = numeros.filter(data => {
    return data%2==0;
});

const paresv2 = numeros.filter(data => data%2==0);
console.log("Elementos pares del vector: ", paresv2);

const arreglo=[1, 2, 3, 4, 5, 6, 7, 8, 9];

//elementos impares del vector numeros
const impares = function getImpares(array){
return array.filter(data => {
    return (data%2==1);
});
}

console.log("Impares del vector numeros; ", impares(numeros));
console.log("Impares del vector arreglos: ", impares(arreglo));

//Se tiene un vector de ciudades. Se pide imprimir cada ciudad
const ciudades = ["Esmeraldas", "Guayaquil","Portoviejo", "Quito", "Manta"];
ciudades.forEach(data =>{
    console.log(data);
});

//Se tiene un parrafo, cada palabra esta separada por un espacio blanco
//Se pide, utilizando la funcion split, imprimir cada palabra del parrafo
//Bienvenido a la PUCE sede Esmeraldas
//Bienvenido
//a
//la
//PUCE
//sede
//Esmeraldas

const parrafo = "Bienvenido a la PUCE sede Esmeraldas";
function getPalabras(str){
    str.split(" ").forEach (data =>{
        console.log(data);
    })
}

getPalabras(parrafo);