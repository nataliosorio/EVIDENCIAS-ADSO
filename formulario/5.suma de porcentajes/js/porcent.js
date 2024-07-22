function sumaPorcentaje(){
    let notaUno = parseFloat(document.getElementById("nota1").value);
    let notaDos = parseFloat(document.getElementById("nota2").value);
    let notaTres = parseFloat(document.getElementById("nota3").value);

    if(notaUno && notaDos && notaTres){
        let porcentaje1;
        let porcentaje2;
        let porcentaje3;
        let suma;

        porcentaje1 = (notaUno*30) / 100;
        porcentaje2 = (notaDos*30) / 100;
        porcentaje3 = (notaTres*40) / 100;
        suma = porcentaje1 +porcentaje2 +porcentaje3;

        document.getElementById("sumaporcent").innerHTML =  `El porcentaje de la nota 1 es: ${porcentaje1} <br>` +
                                                            `El porcentaje de la nota 2 es: ${porcentaje2} <br>` + 
                                                            `El porcentaje de la nota 3 es: ${porcentaje3} <br>` + 
                                                            `Suma de los porcentajes de las notas: ${suma} <br>`;
    }else{
        document.getElementById("sumaporcent").innerHTML = `Ingrese las notas porfavor`;
    }
    return false;
}






    
       

        

    


