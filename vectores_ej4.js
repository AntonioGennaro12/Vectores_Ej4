const   numeros = [7, 9];
const   letras  = ["D", "h"];
const   diaSem  = ["Mie", "SAB"];

console.log (numeros);
console.log (letras);
console.log (diaSem);

let aux = 0;

aux = numeros[0];
numeros[0]=numeros[1];
numeros[1] = aux;

aux = letras[0];
letras[0]=letras[1];
letras[1] = aux;

aux = diaSem[0];
diaSem[0]=diaSem[1];
diaSem[1] = aux;

console.log (numeros);
console.log (letras);
console.log (diaSem);