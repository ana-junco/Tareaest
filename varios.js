const vector= [10,20,30,40,50];

vector.forEach((data, indice,array) => {
    console.log(data, indice, array[0]);
})

//Se tiene un array de nombres de personas.
//Se pide devolver el array que incluya unicamente los nombres
// que tiene una sola palabras

const nombres =["Juan", "Pedro", "Maria", "Hector Perez", "Jose de la Cuadra"];
//Resultado esperado ["Juan", "Pedro", "Maria"]

function getNombresDeUnaPalabras(array){
    return array.filter (data =>{
        
        return data.indexOf(' ')==-1;
    })
}

const nom = getNombresDeUnaPalabras(nombres);
console.log (nom);

//Una funcion recibe una cadena de caracteres.
//Se pide que la funcion devuelva la palabra ingresada sin consonantes
//Por ejemplo: Universidad
//Resultado esperado: uieia
//ayuda: indexOf, split

function soloVocales(array){
    var vocales = ['a', 'e', 'i', 'o', 'u', 'á','é'];
    return array.split("").filter(data => {
        return vocales.indexOf(data.toLowerCase()) !=-1;
    }).join('');
}
    
const p1 = soloVocales("Universidad");
console.log(p1);
console.log(soloVocales("Pérez"));

//Una funcion recibe un array de palabras
//Se pide que la funcion devuelva las palabras que tiene las misma vocal
//Entrada: ["amalgam", "zoom", "casa", "jinete", "iglesia"]
//Salida; ["amalgam", "zoom", "casa"]

entrada = ["amalgam", "zoom", "casa", "jinete", "iglesia"];

function VocalesIguales(array){
    array. filter (data => {
        
        
        const strvocales = soloVocales(data);
        console.log(strvocales);
       
    })
}

VocalesIguales(entrada);