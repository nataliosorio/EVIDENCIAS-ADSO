function numMayor(){
    let numerUno = parseFloat(document.getElementById("numero1").value);
    let numerDos = parseFloat(document.getElementById("numero2").value);

    if(numerUno && numerDos){
        if(numerUno != numerDos){
            if(numerUno > numerDos){            
            document.getElementById("operacioness").innerHTML = `El numero ${numerUno} es <strong> Mayor </strong>`;
            }else{            
            document.getElementById("operacioness").innerHTML = `El numero ${numerDos} es <strong> Mayor </strong>`;
            }
        }else{
            document.getElementById("operacioness").innerHTML = `Los numeros son <strong> iguales </strong>`;
            
        }
                
    }else{
        document.getElementById("operacioness").innerHTML = `Ingrese numeros`;
    }
    return false;
}



    
       

        

    


