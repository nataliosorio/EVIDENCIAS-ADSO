//Nomina 
//Autor: Karol natalia osorio

let nomina = [];
let iteracion;
let estrato;
let totalPagos = [];

//Función para sueldo 
function sueldo(pdiasTrab, pvalorDia){
    let diasTrab = pdiasTrab; 
    let valorDia = pvalorDia;
    let salario;
    salario= diasTrab*valorDia;
    return  salario; 
}

//Función para salud
function salud(psalario){
    let salario = psalario;
    let sal;
    sal = salario * 0.12
    return sal;
}

//Función para pension 
function pension(psalario){ 
    let salario = psalario;
    let pensi;
    pensi = salario * 0.16
    return pensi;
}

//Funcion para el arl
function arl(psalario){ 
    let salario = psalario;
    let arlP;
    arlP = salario * 0.052
    return arlP;
}

//Función Para el Subsidio de transporte
function subTraspor(salario){
    let salarioM= 1300000
    let subTraspor;
  
    if(salario < 2*salarioM){
        subTraspor = 114000;
    }else{
        subTraspor = 0
    }
    return subTraspor;
}

//Función para abonos 
function abonos(salario, estrato){
    let salarioM= 1300000;
    let abono;
  
    if(salario <=salarioM && estrato ==1 ){
        abono = 100000;
    }else{
        if(salario <=salarioM && estrato ==2 ){
            abono = 100000;

        }else{
            abono = 0;
        }
        }
    return abono;
}

//Funcion Retenciones
function retencionn(salario, estrato){
    let retencion;
    let salarioM = 1300000;

    if(salario>4*salarioM && salario<6*salarioM){
        retencion = salario * 0.03
    }else{
       if(salario>8*salarioM && estrato ==6){
        retencion =salario * 0.05
       }else{
        if(salario>6*salarioM){
            retencion = salario*0.04
        }else{
            retencion = 0
        }
        }
    }
    return retencion;
}



nomina = [
    {id: 1075793094, nombres: "Karol Natalia", apellidos: "Osorio Poveda", edad: 17, estrato: 2, valorDia: 43330, diasTrabajados: 30},
    {id: 1073723422, nombres: "Brayan Santiago", apellidos: "Guerrero Mendez", edad: 17, estrato: 6, valorDia: 43330, diasTrabajados: 30},
    {id: 1075793093, nombres: "Camilo Andres", apellidos: "Losada Ramirez", edad: 17, estrato: 2, valorDia: 130000, diasTrabajados: 30 },
    {id: 1074793094, nombres: "Ingrid Yulisa", apellidos: "Medina Esquivel", edad: 17, estrato: 3, valorDia: 218000, diasTrabajados: 30 },
    {id: 1075723054, nombres: "Jesús Fernando", apellidos: "Carvajal Anacona", edad: 17, estrato: 1, valorDia: 304000, diasTrabajados: 30 },
    {id: 1025694094, nombres: "Juan Manuel", apellidos: "Gutierrez", edad: 17, estrato: 6, valorDia: 304000, diasTrabajados: 30 },
    {id: 1075219122, nombres: "Yerson Stiven", apellidos: "Cuellar Rubiano", edad: 17, estrato: 6, valorDia: 350000, diasTrabajados: 30 },
    {id: 1076503347, nombres: "Mauricio", apellidos: "Noscue", edad: 17, estrato: 6, valorDia: 350000, diasTrabajados: 30 },
    {id: 1076490275, nombres: "Maria Isabel", apellidos: "Puentes", edad: 17, estrato: 1, valorDia: 43330, diasTrabajados: 30 },
    {id: 1075764001, nombres: "Jesus David", apellidos: "Fierro", edad: 17, estrato: 4, valorDia: 43330, diasTrabajados: 30 },
]    

console.log(nomina);



// datos de todos

for (iteracion = 0; iteracion < nomina.length; iteracion++) {
    let sueldo1 = sueldo(nomina[iteracion].diasTrabajados, nomina[iteracion].valorDia);
    let salud1 =  salud(sueldo1);
    let pension1 = pension(sueldo1);
    let arl1 = arl(sueldo1);
    let retencion1 = retencionn(sueldo1, nomina[iteracion].estrato);
    let subsidio = subTraspor(sueldo1);
    let abonoo = abonos(sueldo1, nomina[iteracion].estrato);
    let descuento = salud1+pension1+arl1;
    let total = (sueldo1+subsidio+abonoo)-(retencion1+descuento);
    totalPagos.push({Id: nomina[iteracion].id ,Nombres: nomina[iteracion].nombres, Apellidos: nomina[iteracion].apellidos, Edad: nomina[iteracion].edad, Estrato: nomina[iteracion].estrato, ValorDia: nomina[iteracion].valorDia, DiasTrabajados: nomina[iteracion].diasTrabajados, Salario: sueldo1, Salud: salud1,
        Pension : pension1, Arl: arl1, Retencion: retencion1, SubsidioTransporte: subsidio, Abono: abonoo, Descuento: descuento, SueldoTotal: total});
    
}
console.table(totalPagos);



