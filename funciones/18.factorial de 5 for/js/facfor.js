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
    let factorial =1;

    
    for(contador =1; numero>=contador; contador++){
        factorial = factorial* contador + "\n";
    }
    return factorial;

}


//Como expresion 

const factorialExp = function(pnumero){
    numero = pnumero;
    let contador;
    let factorial =1;

    
    for(contador =1; numero>=contador; contador++){
        factorial = factorial* contador + "\n";
    }
    return factorial;

}
