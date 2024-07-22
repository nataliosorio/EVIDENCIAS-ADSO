/**
 * funcion Promedio de 3 notas  
 * Autor: Natalia osorio
 * Lunes 01 de abril de 2024
 */

//como Expresión
const notasExp = function(pnota){
    let nota = pnota;
    return nota;
}
const promedioExp = function(pnota1, pnota2, pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    nota1 = notasExp(pnota1);
    nota2 = notasExp(pnota2);
    nota3 = notasExp(pnota3);
    let promedio;
    promedio = (nota1+nota2+nota3)/3
    return promedio;
}

//con parametros

function notas(pnota){
    let nota = pnota;
    return nota;
    }

function prom(pnota1, pnota2, pnota3){
    let nota1 = pnota1
    let nota2 = pnota2
    let nota3 = pnota3
    nota1 = notas(pnota1);
    nota2 = notas(pnota2);
    nota3 = notas(pnota3);
    let promedio;
    promedio = (nota1+nota2+nota3)/3
    return promedio;
}