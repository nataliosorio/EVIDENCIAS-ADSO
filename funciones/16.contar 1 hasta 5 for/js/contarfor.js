/**
 * Funcion Contar 1 hasta 5 for
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

// con parametros

let numero
function contar(pnumero){
    numero = pnumero;
    let contador;
    let resultado = "";

    for(contador =1; numero>=contador; contador++){
        resultado += contador + "\n";
    }
    return resultado;
}


//Como expresion 

const contarExp = function(pnumero){
    numero = pnumero;
    let contador;
    let resultado = "";

    for(contador =1; numero>=contador; contador++){
        resultado += contador + "\n";
    }
    return resultado;
}