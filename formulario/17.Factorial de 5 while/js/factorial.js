function factorial(){
    let numero = parseInt(document.getElementById("numeroFac").value);

    if(numero){
        let factoriall = factor2(numero);

        document.getElementById("factorial").innerHTML =  factoriall;
                                                                                                                 
    }else{
        document.getElementById("factorial").innerHTML = `Ingrese las datos porfavor`;
    }
    return false;
}
  

let numero
function factor2(pnumero) {
    numero = pnumero;
    let contador = 0;
    let factorial = 1;

    while (contador < numero) {
        contador = contador+1;
        factorial = factorial * contador;
    }

    return factorial;
}  

