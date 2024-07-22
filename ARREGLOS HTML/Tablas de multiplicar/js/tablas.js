//tablas de multiplicar
// 10-07-2024
//Karol natalia osorio poveda
document.addEventListener(`DOMContentLoaded`, function(){
    let tablas = [];            // Array que contendrá todas las tablas de multiplicar
    let iteracionTabla;         // Variable para iterar a través de las tablas de multiplicar (1 a 6)
    let iteracionMultiplo;       // Variable para iterar a través de los múltiplos (1 a 10)
    let multiplo = [];           // Array temporal para almacenar los resultados de una tabla de multiplicar
    let numeroTabla;            // Variable que representa el número de la tabla actual (1 a 6)
    let numeroMultiplo;         // Variable que representa el múltiplo actual (1 a 10)
    let resultado;              // Variable para almacenar el resultado de la multiplicación
    let printResultado = ``;

    //Resultados de las tablas

    for(iteracionTabla = 0;iteracionTabla<6; iteracionTabla++){     // iteracion sobre las tablas de multiplicar
        multiplo = [];          //Se reinicia el array multiplo para almacenar los resultados de la nueva tabla.
        numeroTabla = iteracionTabla+ 1;    //obtener los números de tabla del 1 al 6.
        for(iteracionMultiplo = 0; iteracionMultiplo<10; iteracionMultiplo++){  //generar los múltiplos del 1 al 10 para la tabla actual
            numeroMultiplo = iteracionMultiplo+1;           //obtener los números del 1 al 10.
            resultado = numeroTabla * numeroMultiplo;
            multiplo.push(resultado);
        }
        tablas.push(multiplo) //el array multiplo que contiene los resultados de esa tabla se añade al array tablas.
    }

    for(iteracionTabla = 0;iteracionTabla< tablas.length;iteracionTabla++){
        numeroTabla = iteracionTabla+1;
        
        printResultado += `<div class="accordion-item">`;
        printResultado += `<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse`+numeroTabla+`" aria-expanded="false" aria-controls="flush-collapseOne">`;
        printResultado += `Tabla del `+numeroTabla;
        printResultado += `</button>`
        printResultado += `<div id="flush-collapse` +numeroTabla+`" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">`;
        
        for(iteracionMultiplo =0; iteracionMultiplo<10; iteracionMultiplo++){
            numeroMultiplo = iteracionMultiplo+1;

            printResultado += `<div class="accordion-body" style= "padding:0 !important;">`;
            printResultado += `<table class="table">`;
            printResultado += `<tr style ="padding:0,margin:0,"><td style="padding:0,margin:0,">`+numeroTabla+`X`+numeroMultiplo+`=`+tablas[iteracionTabla][iteracionMultiplo]+`</td></tr>`;
            printResultado += `</table>`;
            printResultado += `</div>`
        }
        
        printResultado += `</div>`  
        printResultado += `</div>`
    }
    document.getElementById(`accordionFlushExample`).innerHTML = printResultado;

})
