/**
 * FACTURA NOMBRE VALOR 
 * 14-05-2024
 * KAROL NATALIA OSORIO POVEDA
 * 
 */

let factura =[];
let valorTotalProducto;
let iteracion;
let totalPago = [];

// Cada producto tiene las siguientes propiedades:
// codigo: un número único que identifica el producto.
// nombreProducto: el nombre del producto.
// cantidad: la cantidad comprada de ese producto.
// valorUnidad: el precio por unidad del producto.

factura=[
    {codigo:1, nombreProducto:"Malteada", cantidad:2, valorUnidad:12000},
    {codigo:2, nombreProducto:"Picada", cantidad:3, valorUnidad:25000},
    {codigo:3, nombreProducto:"Hamburguesa Mixta", cantidad:4, valorUnidad:14000},
    {codigo:4, nombreProducto:"Churrazco", cantidad:3, valorUnidad:25000},
    {codigo:5, nombreProducto:"Gaseosa", cantidad:5, valorUnidad:5000},
    {codigo:6, nombreProducto:"Limonada", cantidad:5, valorUnidad:6000},
]

console.log(factura);

// Se calcula el valor total para el cuarto producto (Churrasco):

valorTotalProducto = factura[3].cantidad * factura[3].valorUnidad;
console.log(factura[3].nombreProducto);
console.log("Valor total: "+valorTotalProducto);

// Se itera sobre cada producto en el arreglo factura, calculando el total para cada uno y almacenando estos resultados en el arreglo totalPago:
// El arreglo totalPago contiene los detalles de cada producto junto con su valor total:

for (iteracion = 0; iteracion < factura.length; iteracion++) {
    valorTotalProducto = factura[iteracion].cantidad * factura[iteracion].valorUnidad
    totalPago.push({nombre: factura[iteracion].nombreProducto, cantidad: factura[iteracion].cantidad, valor: factura[iteracion].valorUnidad, total: valorTotalProducto})
    
}
console.log(totalPago);


