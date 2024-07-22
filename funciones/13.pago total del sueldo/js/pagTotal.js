/**
 * Funcion Pago total del sueldo 
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

// con parametros
 
function sueldo(pdiasTrab, pvalorDia){
    let diasTrab = pdiasTrab; 
    let valorDia = pvalorDia;
    let salario;
    salario= diasTrab*valorDia;
    return  salario; 
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

function salud(psalario){
    let salario = psalario;
    let sal;
    sal = salario * 0.12
    return sal;
}
function pension(psalario){ 
    let salario = psalario;
    let pensi;
    pensi = salario * 0.16
    return pensi;
}
function arl(psalario){ 
    let salario = psalario;
    let arlP;
    arlP = salario * 0.052
    return arlP;
}


function totalSueldo(psalario){
    let salario = psalario;
    let saludF = salud(salario); 
    let pensionF = pension(salario); 
    let arlF = arl(salario); 

    let retencion = retencionn(salario); 
    let subTrasporte = subTraspor(salario); 
    let descuento = saludF + pensionF + arlF; 

    let totalSalario = (salario + subTrasporte) - (retencion + descuento);

    return "Se aplica un descuento de: "+descuento + "\n"+ "El Total a pagar es: "+totalSalario; 
}

//como Expresion

const sueldoExp = function(pdiasTrab, pvalorDia){
    let diasTrab = pdiasTrab; 
    let valorDia = pvalorDia;
    let salario;
    salario= diasTrab*valorDia;
    return  salario; 
}
const subExp = function(salario){
    let salarioM;
    let subTrab;
    if(salario < 2*salarioM){
        subTrab = 114000;
    }else{
        subTrab = 0;
    }

    return subTrab;
}
const retenExp= function(salario){
    let retencion;
    let salarioM;
    if(salario>4*salarioM){
        retencion = salario * 0.04
    }else{
        retencion = 0
    }
    return retencion; 
}

const saludExp = function(psalario){
    let salario = psalario;
    let sal;
    sal = salario * 0.12
    return sal;
}

const pensionExp = function(psalario){
    let salario = psalario;
    let pensi;
    pensi = salario * 0.16
    return pensi;
}
const arlExp = function(psalario){
    let salario = psalario;
    let arlP;
    arlP = salario * 0.052
    return arlP;
}

function totalSueldoExp(psalario){
    let salario = psalario;
    let saludF = salud(salario); 
    let pensionF = pension(salario); 
    let arlF = arl(salario); 

    let retencion = retencionn(salario); 
    let subTrasporte = subTraspor(salario); 
    let descuento = saludF + pensionF + arlF; 

    let totalSalario = (salario + subTrasporte) - (retencion + descuento);

    return "Se aplica un descuento de: "+descuento + "\n"+ "El Total a pagar es: "+totalSalario;
}