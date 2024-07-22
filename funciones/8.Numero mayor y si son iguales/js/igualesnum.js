/**
 * Funcion Numero mayor e igual 
 * Autor: Natalia osorio
 * Lunes 01 de abril de 2024
 */


//como Expresion
const nummayor = function(pnumUno, pnumDos){
    let numUno = pnumUno;
    let numDos = pnumDos;

    if(numUno!=numDos){
        if(numUno>numDos){
            return "Numero 1 es mayor"
        }else{
            return "Numero 2 es mayor"
        }
    }else{
        return "Los dos numeros son iguales"
    }
}

//con parametros

function nummayorP(pnumUno, pnumDos){
    let numUno = pnumUno;
    let numDos = pnumDos;
    
    if(numUno!=numDos){
        if(numUno>numDos){
            return "Numero 1 es mayor"
        }else{
            return "Numero 2 es mayor"
        }
    }else{
        return "Los dos numeros son iguales"
    }
}