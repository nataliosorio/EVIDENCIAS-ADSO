function tabla(){
    let numero = parseInt(document.getElementById("numero").value);

    if(numero){
        let factoriall = tabla5(numero);

        document.getElementById("factorial").innerHTML =  factoriall;
                                                                                                                 
    }else{
        document.getElementById("factorial").innerHTML = `Ingrese las datos porfavor`;
    }
    return false;
}
  

let numero
function tabla5(pnumero){
    numero = pnumero;
    let contador = 0;
    let multiplicador = 1;
    let resultado = "";

    while(contador<numero){
        contador = contador+1;
        multiplicador = numero*contador;
        resultado += (numero)+ "x" +(contador)+  "="+ (multiplicador +"<br>");
    
    }
    return resultado;

}
