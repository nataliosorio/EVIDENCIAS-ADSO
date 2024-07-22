function contar(){
    let contador = parseInt(document.getElementById("numInicio").value);
    let numero = parseInt(document.getElementById("numLimite").value);

    if(contador && numero){
        let contarr = contarksks(contador, numero);

        document.getElementById("contar").innerHTML =  contarr;
                                                                                                                 
    }else{
        document.getElementById("contar").innerHTML = `Ingrese las datos porfavor`;
    }
    return false;
}

function contarksks(contador, numero){
    let resultado = "";
    contador = contador-1;

    while(contador<numero){
        contador = contador+1;
        resultado += contador + `<br>` ;
    }
    return resultado;

}

       

        

    


