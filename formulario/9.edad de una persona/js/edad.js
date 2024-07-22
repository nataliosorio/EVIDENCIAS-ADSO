
function edadPerson() {
    let fechaHoy = new Date(document.getElementById('fecha-hoy').value);
    let fechaNac = new Date(document.getElementById('fecha-nac').value);
    if(fechaHoy && fechaNac){
        let edad = fechaHoy.getFullYear() - fechaNac.getFullYear();
        let mesDifer = fechaHoy.getMonth() - fechaNac.getMonth();

        if (mesDifer < 0 || (mesDifer === 0 && fechaHoy.getDate() < fechaNac.getDate())) {
            edad--;
        }
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




    
       

        

    


