function edad(pfechaNac, pfechaHoy){
    let edadd;
    let fechaNac = pfechaNac;
    let fechaHoy = pfechaHoy;
    edadd = fechaHoy- fechaNac;
    return edadd;
}

function mayorEdad(edadd){
    if(edadd>=18){
        return "Es mayor de edad";
    }else{
        return "Es menor de edad";
    }
}


function promedioEdades(edad1,edad2,edad3){
    let promedio;
    promedio = (edad1+edad2+edad3)/3
    if(promedio>=18){
        return "El promedio de edades esta en la mayoria de edad ";
    }else{
        return " El promedio de edades no esta en la mayoria de edad ";
    }
}

function edadPersonas() {
    let fechaHoy = document.getElementById('fecha-hoy').value;
    let fechaNac1 = document.getElementById('fecha-nac1').value;
    let fechaNac2 = document.getElementById('fecha-nac2').value;
    let fechaNac3 = document.getElementById('fecha-nac3').value;

    if(fechaHoy && fechaNac1 && fechaNac2 && fechaNac3){
        let edad1 = edad(fechaNac1, fechaHoy);
        let edad2 = edad(fechaNac2, fechaHoy);
        let edad3 = edad(fechaNac3, fechaHoy);

        let mayor1 = mayorEdad(edad1);
        let mayor2 = mayorEdad(edad2);
        let mayor3 = mayorEdad(edad3);

        let promedioEdadd = promedioEdades(edad1, edad2, edad3);

        document.getElementById('operacioness').innerHTML = `La persona 1 tiene ${edad1} años y ${mayor1} <br>`+
                                                            `La persona 2 tiene ${edad2} años y ${mayor2} <br>`+
                                                            `La persona 3 tiene ${edad3} años y ${mayor3} <br>`+ promedioEdadd

    }else{
        document.getElementById("operacioness").innerHTML = `Ingrese las fechas pedidas porfavor`;
    }
    return false;
}

   




    
       

        

    


