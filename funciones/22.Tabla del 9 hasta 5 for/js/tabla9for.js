/**
 * Funcion Tabla del 9 hasta 5 con for
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

// con parametros
function tabla9(ptabla){
    let tabla = ptabla;
    let contador;
    let multiplicador = 5;
    let resultado;
    let msg = "";
    
    for(contador=1; multiplicador>=contador; contador++){
        resultado = tabla*contador;
        msg += (tabla)+ "x" +(contador)+  "="+ (resultado) +"\n";
        msg += parImpar(resultado);
    }
    return msg += "\n";
}
function parImpar(resultado){
    let msg = "";
        if(resultado%2==0){
            msg += "Par\n";
        }else{
            msg += "Impar\n";
        }
        return msg;    
    }
    

//Como expresion 

const tablaExp9= function(ptabla){
    let tabla = ptabla;
    let contador;
    let multiplicador = 5;
    let resultado;
    let msg = "";
    
    for(contador=1; multiplicador>=contador; contador++){
        resultado = tabla*contador;
        msg += (tabla)+ "x" +(contador)+  "="+ (resultado) +"\n";
        msg += parImpare(resultado);
    }
    return msg += "\n";
}

const parImpare = function(resultado){
    let msg = "";
        if(resultado%2==0){
            msg += "Par\n";
        }else{
            msg += "Impar\n";
        }
        return msg;    
}
    
