
function areas(){
    let lado = parseFloat(document.getElementById("lado").value);
    let baseRec = parseFloat(document.getElementById("baseR").value);
    let alturaRec = parseFloat(document.getElementById("alturaR").value);
    let baseTri = parseFloat(document.getElementById("baseT").value);
    let alturaTri = parseFloat(document.getElementById("alturaT").value);

    let resultado = "";

    if (!isNaN(lado) && lado > 0) {
        let areaC = lado * lado;
        resultado += `El área del cuadrado es: ${areaC} <br>`;
    }

    if (!isNaN(baseRec) && !isNaN(alturaRec) && baseRec > 0 && alturaRec > 0) {
        let areaR = baseRec * alturaRec;
        resultado += `El área del rectángulo es: ${areaR} <br>`;
    }

    if (!isNaN(baseTri) && !isNaN(alturaTri) && baseTri > 0 && alturaTri > 0) {
        let areaT = (baseTri * alturaTri) / 2;
        resultado += `El área del triángulo es: ${areaT} <br>`;
    }

    if (resultado === "") {
        resultado = "Ingrese medidas válidas para calcular el área.";
    }
    document.getElementById("areafiguras").innerHTML = resultado;

    return false; 
}




// if(lado && baseRec && alturaRec && baseTri && alturaTri){
//     let areaC;
//     let areaR;
//     let areaT;
    
//     areaC = lado*lado;
//     areaR = baseRec * alturaRec;
//     areaT = (baseTri * alturaTri) / 2;
//     document.getElementById("areafiguras").innerHTML = `El area del cuadrado es: ${areaC} <br>`+ `El area del Rectangulo es: ${areaR} <br>`+ `El area del Triangulo es: ${areaT}`;
// }else{
//     document.getElementById("areafiguras").innerHTML = `Ingrese las medidas porfavor`;
// }
// return false;
 




    
       

        

    


