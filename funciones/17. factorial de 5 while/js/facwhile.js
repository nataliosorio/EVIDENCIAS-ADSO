/**
 * Funcion factorial de 5 while
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

// con parametros

let numero
function factor(pnumero){
    numero = pnumero;
    let contador;
    let factorial;

    contador = 0;
    factorial = 1;

    while(contador<numero){
        contador = contador+1;
        factorial = factorial* contador + "\n";
    }
    return factorial;

}

//Como expresion 

const factorialExp = function(pnumero){
    numero = pnumero;
    let contador;
    let factorial;

    contador = 0;
    factorial = 1;

    while(contador<numero){
        contador = contador+1;
        factorial = factorial* contador + "\n";
    }
    return factorial;
}