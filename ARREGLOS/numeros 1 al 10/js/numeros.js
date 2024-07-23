let arreglo = [];
let iteracion;
let resultado;
let numero;
arreglo = [1,2,3,4,5,6,7,8,9,10];
for(iteracion =0; iteracion< arreglo.length; iteracion++){
    resultado += `<option value="1">${arreglo[iteracion]}</option>`;

}
document.getElementById("hola").innerHTML = resultado;

arreglo = [];
// Crear arreglo
for(iteracion=0; iteracion<10; iteracion++){
    numero = iteracion + 1;
    arreglo.push(numero);
}

resultado = "";

//LEER EL ARREGLO
for(iteracion =0; iteracion< arreglo.length; iteracion++){
    resultado += `<option value="1">${arreglo[iteracion]}</option>`;

}

document.getElementById("hola").innerHTML = resultado;