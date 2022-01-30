//3) Dada la siguiente matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ]
//y usando únicamente map, devuelva cada elemento de la matriz multiplicado por 3
//resultado esperado = [[3, 6, 9], [12, 15, 18], [21, 24, 27] ]

const matriz1 = [1,2,3];
const matriz2 = [4,5,6];
const matriz3 = [7,8,9];
const  map1 = matriz1.map(a => a*3);
const  map2 = matriz2.map(b => b*3);
const  map3 = matriz3.map(c => c*3); 

    console.log ("El resultado obtenido es:", [map1,map2,map3]);