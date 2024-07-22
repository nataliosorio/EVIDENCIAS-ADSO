/**
 * Funcion Numero mayor de 3 numeros
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

// con Parametros


function num(pnumero){
    let numero = pnumero;
    return numero 
}

function numMayor(pnum1, pnum2, pnum3){
    let num1 = pnum1;
    let num2 = pnum2;
    let num3 = pnum3;

    if(num1==num2 && num1==num3 && num3==num2){
        return "los Tres numeros son iguales " 
    }else{
        if(num1>num2 && num1>num3){
            return "El numero 1 es mayor"
        }else{
            if(num2>num1 && num2>num3){
                return "El numero 2 es mayor"
            }else{
                return "El numero 3 es mayor"
            }
        }
    }
}

// como Expresion

const numExp = function(pnumero){
    let numero = pnumero;
    return numero 
}

const numMayorExp = function(pnum1, pnum2, pnum3){
    let num1 = pnum1
    let num2 = pnum2
    let num3 = pnum3;

    if(num1==num2 && num1==num3 && num3==num2){
        return "los Tres numeros son iguales " 
    }else{
        if(num1>num2 && num1>num3){
            return "El numero 1 es mayor"
        }else{
            if(num2>num1 && num2>num3){
                return "El numero 2 es mayor"
            }else{
                return "El numero 3 es mayor"
            }
        }
    }
}
