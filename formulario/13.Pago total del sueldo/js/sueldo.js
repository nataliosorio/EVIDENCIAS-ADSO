//Funcion para calcular el salario
function salario(diasTrab, valorDia){
    let salario;

    salario = diasTrab*valorDia;
    return salario;
}

//Funcion para hallar la salud
function salud(salario){
    let sal;
    sal = salario * 0.12
    return sal;
}

//Funcion para hallar la pensión
function pension(salario){ 
    let pensi;
    pensi = salario * 0.16
    return pensi;
}

//Funcion para el ARL
function arl(salario){ 
    let arlP;
    arlP = salario * 0.052
    return arlP;
}

function subTraspor(salario){
    let salarioM= 1300000
    let subTrab;
  
    if(salario < 2*salarioM){
        subTrab = 114000;
    }else{
        subTrab = 0;
    }

    return subTrab;
}

function retencionn(salario){
    let retencion;
    let salarioM;
    if(salario>4*salarioM){
        retencion = salario * 0.04
    }else{
        retencion = 0
    }
    return retencion; 
}


//Funcion pago total
function totalSueldo(){

    let diasTrab = parseFloat(document.getElementById("dias").value);
    let valorDia = parseFloat(document.getElementById("valor").value);
   
    if(diasTrab && valorDia){
        let salarioP = salario(diasTrab,valorDia) 
        let totalSalario;
        let descuento;

        let saludF = salud(salarioP); 
        let pensionF = pension(salarioP); 
        let arlF = arl(salarioP);
        let sub = subTraspor(salarioP);
        let retencion = retencionn(salarioP);

         descuento = saludF + pensionF + arlF; 
         totalSalario = (salarioP + sub) - (retencion + descuento);

        document.getElementById("salario").innerHTML =  `Sueldo bruto: ${salarioP} <br>` +
                                                        `Salud: ${saludF} <br>` +
                                                        `Pensión: ${pensionF} <br>`+
                                                        `ARL: ${arlF} <br>` +
                                                        `Deducibles: ${descuento} <br>`+
                                                        `Retención: ${retencion} <br>`+
                                                        `Subsidio de transporte: ${sub} <br>`+
                                                        `Sueldo neto: ${totalSalario} <br>` ;

    }else{
        document.getElementById("salario").innerHTML = `Ingrese los datos pedidos`;
    }
    return false;     
}







    
       

        

    


