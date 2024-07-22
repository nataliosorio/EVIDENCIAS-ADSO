function tabla(){
    let tablaFin = parseInt(document.getElementById("tablalimite").value);

    if(tablaFin){
        let tablass = tablasA(tablaFin);

        document.getElementById("factorial").innerHTML =  tablass;
                                                                                                                 
    }else{
        document.getElementById("factorial").innerHTML = `Ingrese las datos porfavor`;
    }
    return false;
}

let limite;
let par = 0
let impar =0

function tablasA(plimite){
    limite = plimite;
    let tablas;
    let contador;
    let resultado;
    let hasta;
    let msg = "";
    tablas = 0;
    hasta = 5;

    while(tablas<limite){
        contador = 0;
        tablas = tablas+1;

        while(contador<hasta){
            contador = contador+1;
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
        return "Buzz <br>";
    }else{
        impar = impar+1
        return "Bass<br>";
    }
}
   
