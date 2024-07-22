function saludar(){
    let nombre = document.getElementById("txtNombre").value;
    if(nombre){
        document.getElementById("saludo").innerHTML=`<strong> Hola <i> ${nombre}</strong>`;
    }else{
        document.getElementById("saludo").innerHTML=`<strong> Ingrese un nombre por favor</strong>`;

    }

    return false;
}
