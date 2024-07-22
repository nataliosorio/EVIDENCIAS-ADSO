function operaciones(){

    let numUno = parseInt(document.getElementById("numero1").value);
    let numDos= parseInt(document.getElementById("numero2").value);

    if(numUno && numDos){
        let sumar;
        let restar;
        let multiplicar;
        let dividir;

        sumar = numUno + numDos;
        restar = numUno - numDos;
        multiplicar = numUno *  numDos;
        dividir = numUno / numDos;

        document.getElementById("operacioness").innerHTML=  `Suma: ${sumar} <br> Resta: ${restar} <br> Multiplicación: ${multiplicar} <br> División: ${dividir} <br>`;
    }else{
        document.getElementById("operacioness").innerHTML= 'Ingrese datos porfavor';
    }
    
    return false;
}
