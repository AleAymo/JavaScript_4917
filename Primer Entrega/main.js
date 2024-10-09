// 1 -
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es un numero par`);
    }
    else {
        console.log(`${numero} es un numero impar`);
    }
}
verificarParImpar(5);
verificarParImpar(10);


// 2 -
function compararnumeros(num1, num2) {
    if (num1 > num2){
        console.log(`${num1} es mayor que ${num2}`);
    }
    else {
        console.log(`Ambos números son iguales: ${num1}`);
    }
}
compararnumeros(10, 5);
compararnumeros(5, 5);


// 3 -
function multiplodecinco(numero) {
    if (numero % 5 === 0) {
        console.log(`${numero} es múltiplo de 5`);
    }
    else {
        console.log(`${numero} no es múltiplo de 5`);
    }
}
multiplodecinco(10);
multiplodecinco(3);


// 4 -
function imprimirnumeros(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}
imprimirnumeros(10)

// 5 -
function imprimirpalabracantidad(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}
imprimirpalabracantidad("Hola", 2)
imprimirpalabracantidad("Mundo", 2)

// 6 -


// 7 -
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i< numbers.length; i++){
    if(i === 5){
        continue
    }
    console.log(numbers [i]);
}


// 8 -