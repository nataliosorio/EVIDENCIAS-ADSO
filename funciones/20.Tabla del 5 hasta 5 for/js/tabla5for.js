/**
 * Funcion Tabla del 5 hasta 5 con for
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

// con parametros

let numero
function tabla5(pnumero){
    numero = pnumero;
    let contador;

    let multiplicador = 1;
    let resultado = "";

    for(contador =1; numero>=contador; contador++){
        multiplicador = numero*contador;
        resultado += (numero)+ "x" +(contador)+  "="+ (multiplicador +"\n");
    }
    return resultado;
}

//Como expresion 

const tablaExp5= function(pnumero){
    numero = pnumero;
    let contador;

    let multiplicador = 1;
    let resultado = "";

    for(contador =1; numero>=contador; contador++){
        multiplicador = numero*contador;
        resultado += (numero)+ "x" +(contador)+  "="+ (multiplicador +"\n");
    }
    return resultado;
}