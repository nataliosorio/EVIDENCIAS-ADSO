
function edadPerson() {

    let fechaHoy = document.getElementById('fecha-hoy').value;
    let fechaNac = document.getElementById('fecha-nac').value;
    if(fechaHoy && fechaNac){
        let edad = fechaHoy - fechaNac;

        if(edad >= 18){
            document.getElementById('operacioness').innerHTML = `Usted es mayor de edad y su edad es: ${edad} años`;

        }else{
            document.getElementById('operacioness').innerHTML = `Usted es menor de edad y su edad es: ${edad} años`;
        }
    
    }else{
        document.getElementById("operacioness").innerHTML = `Ingrese las fechas pedidas porfavor`;
    }
    return false;   
}




    
       

        

    


