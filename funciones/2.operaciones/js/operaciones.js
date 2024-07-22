/**
 * Operaciones aritméticas aplicando funciones 
 * Autor: Natalia osorio 
 * lunes 01 de abril de 2024 
 */

//como Expresión

const sumaExp = function(pnumUno, pnumDos){ 
    let sumar;
    let numUno = pnumUno;
    let numDos = pnumDos;
    sumar = numUno + numDos;
    return sumar;

}

const restaExp= function(pnumUno, pnumDos){
    let numUno = pnumUno;
    let numDos = pnumDos;
    let restar;
    restar = numUno - numDos;
    return restar;
}

const multiplicacionExp = function(pnumUno, pnumDos){
    let multiplicar;
    let numUno = pnumUno;
    let numDos = pnumDos;
    multiplicar = numUno * numDos;
    return multiplicar;
}

const divisionExp = function(pnumUno, pnumDos){
    let dividir;
    let numUno = pnumUno;
    let numDos = pnumDos;
    dividir = numUno / numDos;
    return dividir;
}

const operacionesExp = function(poperador, pnumUno, pnumDos){
    let operador = poperador;
    let numUno = pnumUno;
    let numDos = pnumDos;
    if(operador=="sumaExp"){
        return sumaExp(numUno,numDos);
    }
    else if(operador=="restaExp"){
        return restaExp(numUno,numDos);
    }
    else if(operador=="multiplicacionExp"){
        return multiplicacionExp(numUno,numDos);
    }
    else if(operador=="divisionExp"){
        return divisionExp(numUno,numDos);
    }
    else{
        return "Error!!! no reconoce operador";
    }
}

// con Parametros 

function suma(pnumUno, pnumDos){
    let sumar;
    let numUno = pnumUno;
    let numDos = pnumDos;
    sumar = numUno + numDos;
    return sumar;
    }

function resta(pnumUno, pnumDos){
    let restar;
    let numUno = pnumUno;
    let numDos = pnumDos;
    restar = numUno - numDos;
    return restar;
    }

function multiplicacion(pnumUno, pnumDos){
    let multiplicar;
    let numUno = pnumUno;
    let numDos = pnumDos;
    multiplicar = numUno * numDos;
    return multiplicar;
    }

function division(pnumUno, pnumDos){
    let dividir;
    let numUno = pnumUno;
    let numDos = pnumDos;
    dividir = numUno / numDos;
    return dividir;
    }

function operaciones(poperador, pnumUno, pnumDos){
    let operador = poperador;
    let numUno = pnumUno;
    let numDos = pnumDos;
    if(operador=="suma"){
        return suma(numUno,numDos);
    }
    else if(operador=="resta"){
        return resta(numUno,numDos);
    }
    else if(operador=="multiplicacion"){
        return multiplicacion(numUno,numDos);
    }
    else if(operador=="division"){
        return division(numUno,numDos);
    }
    else{
        return "Error!!! no reconoce operador";
    }
}
    