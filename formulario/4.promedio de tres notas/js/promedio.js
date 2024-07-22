function notasPromedio(){
    let notaUno = parseFloat(document.getElementById("nota1").value);
    let notaDos = parseFloat(document.getElementById("nota2").value);
    let notaTres = parseFloat(document.getElementById("nota3").value);

    if(notaUno && notaDos && notaTres){
        let promedio;
        promedio = (notaUno+notaDos+notaTres)/3;

        document.getElementById("operacioness").innerHTML = `El promedio de las tres notas es: ${promedio} <br>`;
    }else{
        document.getElementById("operacioness").innerHTML = `Ingrese las Notas porfavor`;
    }
    return false;
}



    
       

        

    


