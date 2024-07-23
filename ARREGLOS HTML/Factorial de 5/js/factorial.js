let arreglo = [];
let resultado = "";
let numero = 5;


let contador;
let factorial = 1;


for(contador =1; contador<=numero; contador++){
    factorial = factorial * contador;
    arreglo.push(factorial);
}

for(contador = 0; contador < arreglo.length; contador++){
    resultado += `<tr>`;
    resultado += `<td>!${contador + 1}</td>`;
    resultado += `<td>${arreglo[contador]}</td>`;
    resultado += `</tr>`
}

document.getElementById("tableFac").innerHTML = resultado;
