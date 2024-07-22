/**
 * Funcion Tabla del 1 hasta 5 con while
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

// con parametros
let limite;
let par = 0
let impar =0

function tablas(plimite){
    limite = plimite;
    let tabla;
    let contador;
    let resultado;
    let msg = "";
    tabla = 0;
    


    while(tabla<limite){
        contador = 0;
        tabla = tabla+1;

        while(contador<limite){
            contador = contador+1;
            resultado = tabla*contador;
            msg += (tabla)+ "x" +(contador)+  "="+ (resultado) +"\n";
            msg += parImpar(resultado);
        } 
            msg += "\n";
    }
    return msg+ "Total de pares es: "+par+"\n"+
                "Total de impares es: "+impar+"\n";
    }
function parImpar(resultado){
    if(resultado%2==0){
        par = par+1
        return "Buzz\n";
    }else{
        impar = impar+1
        return "Bass\n";
    }
}
    



//Como expresion 

const tablasExp= function(plimite){
    limite = plimite;
    let tabla;
    let contador;
    let resultado;
    let msg = "";
    tabla = 0;
    


    while(tabla<limite){
        contador = 0;
        tabla = tabla+1;

        while(contador<limite){
            contador = contador+1;
            resultado = tabla*contador;
            msg += (tabla)+ "x" +(contador)+  "="+ (resultado) +"\n";
            msg += parImpare(resultado);
        } 
            msg += "\n";
    }
    return msg+ "Total de pares es: "+par+"\n"+
                "Total de impares es: "+impar+"\n";
    }

const parImpare = function(resultado){
    let par;
    let impar;
    if(resultado%2==0){
        par = par+1
        return "Buzz\n";
    }else{
        impar = impar+1
        return "Bass\n";
    }
}