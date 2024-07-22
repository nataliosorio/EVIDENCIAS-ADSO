function tabla(){
    let numero = parseInt(document.getElementById("numero").value);

    if(numero){
        let tablass = tablasA(numero);

        document.getElementById("factorial").innerHTML =  tablass;
                                                                                                                 
    }else{
        document.getElementById("factorial").innerHTML = `Ingrese las datos porfavor`;
    }
    return false;
}
  

let limite;
let par = 0;
let impar = 0;

function tablasA(plimite){
    limite = plimite;
    let tablas;
    let contador;
    let resultado;
    let msg = "";
    let hasta; 
    hasta = 5;

    for(tablas =1; tablas<=limite; tablas++){
        for(contador =1; contador<=hasta; contador++){
            resultado = tablas*contador;
            msg += (tablas)+ "x" +(contador)+  "="+ (resultado) +"<br>";
            msg += parImpar(resultado);
        }

         msg += "\n";
    }
    return msg+ "Total de pares es: "+par+"<br>"+
                "Total de impares es: "+impar+"<br>";
}

function parImpar(resultado){
    if(resultado%2==0){
        par = par+1
        return  "Buzz <br>";
    }else{
        impar = impar+1
        return "Bass<br>";
    }
}
