//1)Se pide crear la función/nes que devuelvan aquellas palabras que NO tiene las misma vocal.
//const entrada = ["racecar", "amalgam", "oligopoly", "zoom", "cama", "enano"];
//const esperado = ["racecar", "oligopoly", "enano"];

const entrada = ["racecar", "amalgam", "oligopoly", "zoom", "cama", "enano"];
function Vocales(array){
    var vocal = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
    return array.split("").filter (data => {
        return vocal.indexOf(data.toLowerCase())!=-1;
    });
}
function getPalabras(array){
    const r = [];
    array.forEach(data =>{
        const v = Vocales(data);
        for (i=1;i<=v.length-2;i++){
        if(v[0] != v[i])
        r.push(data)
        }
    })
    return r;
    }
    console.log("Palabras sin la misma vocal: ", getPalabras(entrada));