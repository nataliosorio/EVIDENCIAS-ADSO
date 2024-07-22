function factorial(){
    let numero = parseInt(document.getElementById("numeroFac").value);

    if(numero){
        let factoriall = factor(numero);

        document.getElementById("factorial").innerHTML =  factoriall;
                                                                                                                 
    }else{
        document.getElementById("factorial").innerHTML = `Ingrese las datos porfavor`;
    }
    return false;
}
       

let numero
function factor(pnumero){
    numero = pnumero;
    let contador;
    let factorial =1;

    
    for(contador =1; numero>=contador; contador++){
        factorial = factorial* contador + "\n";
    }
    return factorial;

}
