/**
 * Funcion Contar 1 hasta 5 while
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

// con parametros
let numero
function contar(pnumero){
    numero = pnumero;
    let contador = 0;
    let resultado = "";

    while(contador<numero){
        contador = contador+1;
        resultado += contador + "\n";
    }
    return resultado;

}

//Como expresion 

const contarExp = function(pnumero){
    numero = pnumero;
    let contador = 0;
    let resultado = "";
    
    while(contador<numero){
        contador = contador+1;
        resultado += contador + "\n";
    }
    return resultado;
    
}