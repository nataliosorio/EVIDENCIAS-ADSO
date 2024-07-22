function numPorcentaje(){
    let numUno = parseFloat(document.getElementById("numero1").value);

    if(numUno){
        let porcentaje;

        porcentaje = numUno / 100;

        document.getElementById("operacioness").innerHTML = `El porcentaje de ${numUno} es: ${porcentaje} <br>`;
    }else{
        document.getElementById("operacioness").innerHTML = `Ingrese un Número porfavor`;
    }
    return false;
}



    
       

        

    


