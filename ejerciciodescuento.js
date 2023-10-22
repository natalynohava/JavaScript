// #Ejercicio 5: 
// # Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber
// # cuánto deberá pagar finalmente por su

var prompt = require('prompt-sync')(); //para que no aparezca prompt no defined

let valorCompra = prompt("Ingrese el valor de su compra ");

let desc = valorCompra - (valorCompra * 15 / 100);

console.log("Total a pagar: "+desc)