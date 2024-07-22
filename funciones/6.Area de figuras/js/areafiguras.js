/**
 * funcion Area de figuras 
 * Autor: Natalia osorio
 * Lunes 01 de abril de 2024
 */

//como Expresión
const areaExpc = function(plado){
    let areaC;
    let lado = plado;
    areaC = lado*lado;
    return areaC;
}

const areaExpr = function(pbaseRec, palturaRec){
    let areaR;
    let baseRec = pbaseRec;
    let alturaRec = palturaRec;
    areaR = baseRec*alturaRec;
    return areaR;
}

const areaExpt = function(pbaseTri, palturaTri){
    let areaT;
    let baseTri = pbaseTri;
    let alturaTri = palturaTri;
    areaT = (baseTri*alturaTri)/2;
    return areaT;
}

//con Parametros

function areaCuadrado(plado){
    let areaC;
    let lado = plado;
    areaC = lado*lado;
    return areaC;
    }

function areaRectangulo(pbaseRec, palturaRec){
    let areaR;
    let baseRec = pbaseRec;
    let alturaRec = palturaRec;
    areaR = baseRec*alturaRec;
    return areaR;
    }

function areaTriangulo(pbaseTri, palturaTri){
    let areaT;
    let baseTri = pbaseTri;
    let alturaTri = palturaTri;
    areaT = (baseTri*alturaTri)/2;
    return areaT;
    }

