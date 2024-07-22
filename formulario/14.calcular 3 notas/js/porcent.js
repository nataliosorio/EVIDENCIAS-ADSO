function sumaPorcentaje(){
    let notaUno = parseFloat(document.getElementById("nota1").value);
    let notaDos = parseFloat(document.getElementById("nota2").value);
    let notaTres = parseFloat(document.getElementById("nota3").value);

    if(notaUno && notaDos && notaTres){
        let porc1 = 0.2
        let porc2 = 0.35
        let porc3 = 0.45
        let sumaPorc;

        let porcentaje1 = porcNotas(notaUno, porc1);
        let porcentaje2 = porcNotas(notaDos, porc2);
        let porcentaje3 = porcNotas(notaTres, porc3);

        sumaPorc = suma(porcentaje1, porcentaje2, porcentaje3);

        document.getElementById("sumaporcent").innerHTML =  `El 20% de la nota 1 es: ${porcentaje1} <br>` +
                                                            `El 35% de la nota 2 es: ${porcentaje2} <br>` + 
                                                            `El 45% de la nota 3 es: ${porcentaje3} <br>` + sumaPorc;
    }else{
        document.getElementById("sumaporcent").innerHTML = `Ingrese las notas porfavor`;
    }
    return false;
}


function porcNotas(pnota, pporc){
    let nota = pnota;
    let porc = pporc;
    let result;
    result = nota * porc;
    return result;
} 


    function suma(por1, por2, por3){
        let sumar;
        sumar= por1+por2+por3
        if(sumar>4.5){
            return "Es una nota superior";
        }else{
            if(sumar<4.5 && sumar>3.5){
                return "Es una nota buena";
            }else{
                if(sumar<3.5 && sumar>3.0){
                    return "Es una nota media";
                }else{
                    return "Es una nota mala";
                }
            }
        }
    }

    
       

        

    


