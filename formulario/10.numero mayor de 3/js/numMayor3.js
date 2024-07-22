function numMayor(){
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let num3 = parseFloat(document.getElementById("numero3").value);

    if(num1 && num2 && num3){
        if(num1==num2 && num1==num3 && num3==num2){
            document.getElementById("operacioness").innerHTML = `Los numeros son <strong> iguales </strong>`;
        }else{
            if(num1>num2 && num1>num3){
                document.getElementById("operacioness").innerHTML = `El numero ${num1} es <strong> Mayor </strong>`;
            }else{
                if(num2>num1 && num2>num3){
                    document.getElementById("operacioness").innerHTML = `El numero ${num2} es <strong> Mayor </strong>`;
                }else{
                    document.getElementById("operacioness").innerHTML = `El numero ${num3} es <strong> Mayor </strong>`;
                }
            }
        }
    }else{
        document.getElementById("operacioness").innerHTML = `Ingrese numeros`;
    }
    return false;        
}








    
       

        

    


