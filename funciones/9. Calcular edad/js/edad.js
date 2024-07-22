/**
 * Funcion Calcular edad y si es mayor de edad 
 * Autor: Natalia osorio
 * Lunes 01 de abril de 2024
 */



//como Expresion

const edadExp =  function(pfechaNac, pfechaActual){
    let fechaNac = pfechaNac;
    let fechaActual = pfechaActual;
    let edadd
    edadd=  fechaActual-fechaNac;
    return edadd;
}
const mayorExp = function(pedadd){
    let edadd = pedadd;

    if(edadd>=18){
        return "Es mayor de edad"
    }else{
        return "Es menor de edad"
    }
}

//con parametros
function edad(pfechaNac, pfechaActual){
    let fechaNac = pfechaNac;
    let fechaActual = pfechaActual;
    let edadd
    edadd=  fechaActual-fechaNac;
    return edadd;
}

function edadMayor(pedadd){
    let edadd = pedadd

    if(edadd>=18){
        return "Es mayor de edad"
    }else{
        return "Es menor de edad"
    }
}

