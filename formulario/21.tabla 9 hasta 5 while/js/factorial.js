function tabla(){
    let numero = parseInt(document.getElementById("numero").value);

    if(numero){
        let tablas = tabla9(numero);

        document.getElementById("factorial").innerHTML =  tablas;
                                                                                                                 
    }else{
        document.getElementById("factorial").innerHTML = `Ingrese las datos porfavor`;
    }
    return false;
}
  
function tabla9(ptabla){
    let tabla = ptabla;
    let contador = 0;
    let multiplicador = 5;

    let resultado;
    let msg = "";

    while(contador<multiplicador){
        contador = contador+1;
        resultado = tabla*contador;
        msg += (tabla)+ "x" +(contador)+  "="+ (resultado) +"<br>";
        msg += parImpar(resultado);
    }
        return msg += "<br>";
}

function parImpar(resultado){
    let msg ="";
    if(resultado%2==0){
        msg += "Par <br>";
    }else{
        msg += "Impar <br>";
    }
    return msg;
}

