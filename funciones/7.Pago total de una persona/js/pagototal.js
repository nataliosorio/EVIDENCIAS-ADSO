/**
 * Funcion Pago total 
 * Autor: Natalia osorio
 * Lunes 01 de abril de 2024
 */

//como Expresion 
const sueldoExp = function(pdiasTrab, pvalorDia){
    let diasTrab = pdiasTrab; 
    let valorDia = pvalorDia;
    let salario;
    salario = diasTrab*valorDia;
    return salario; 
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

const arlExp= function(psalario){ 
    let salario = psalario;
    let arlP;
    arlP = salario * 0.052
    return arlP;
}

const totalSueldoExp = function(psalario){
    let salario = psalario;
    let saludF = salud(salario); 
    let pensionF = pension(salario); 
    let arlF = arl(salario); 
    
    let descuento = saludF + pensionF + arlF; 

    let totalSalario = salario - descuento;

    return "Se aplica un descuento de: "+descuento + "\n"+ "El Total a pagar es: "+totalSalario
   
}

//con parametros

function sueldo(pdiasTrab, pvalorDia){
    let diasTrab = pdiasTrab; 
    let valorDia = pvalorDia;
    let salario;
    salario = diasTrab*valorDia;
    return salario; 
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
    
    let descuento = saludF + pensionF + arlF; 

    let totalSalario = salario - descuento;

    return "Se aplica un descuento de: "+descuento + "\n"+ "El Total a pagar es: "+totalSalario
   
           
}
 
  





   








