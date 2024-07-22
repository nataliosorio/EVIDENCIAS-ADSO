/**
 * Funcion Edad de 3 pesonas
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

//con parametros
let edadd
function edad(pfechaNac, pfechaActual){
    let fechaNac = pfechaNac;
    let fechaActual = pfechaActual;
    edadd=  fechaActual-fechaNac;
    return edadd;
}
function mayorEdad(edadd){
    if(edadd>=18){
        return "Es mayor de edad y su edad es: "+edadd
    }else{
        return "Es menor de edad y su edad es: "+edadd
    }
}
function promedioEdades(pedadd){
    edadd = pedadd
    if(edadd>=18){
        return "El promedio de edades esta en la mayoria de edad ";
    }else{
        return " El promedio de edades no esta en la mayoria de edad ";
    }
    }
    
    //como Expresion

    const edadExp = function(pfechaNac, pfechaActual){
        let fechaNac = pfechaNac;
        let fechaActual = pfechaActual;
        edadd=  fechaActual-fechaNac;
        return edadd;
    }
    
    const mayorEdadExp = function(edadd){
        if(edadd>=18){
            return "Es mayor de edad y su edad es: "+edadd
        }else{
            return "Es menor de edad y su edad es: "+edadd
        }
    }
    
    const promedioEdadExp = function(pedadd){
        edadd = pedadd
        if(edadd>=18){
            return "El promedio de edades esta en la mayoria de edad ";
        }else{
            return " El promedio de edades no esta en la mayoria de edad ";
    }
    }