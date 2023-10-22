// hacer un programa que pida 2 números y se de cuenta cuál de ellos es par, o si ambos lo son.

var prompt = require('prompt-sync')();

let iNum1 = prompt("Ingrese primer numero ");
let num1 = parseInt(iNum1);
let iNum2 = prompt("Ingrese segundo numero ");
let num2 = parseInt(iNum2);

if(num1 % 2 == 0 && num2 % 2 == 0){
    console.log("El numero "+ num1 + " y " + num2 + " son par")
}else if(num1 % 2 == 0){
    console.log("El numero " + num1 + " es par")
    console.log("El numero " + num2 + " es impar")
}else if(num2 % 2 == 0){
    console.log("El numero " + num1 + " es impar")
    console.log("El numero " + num2 + " es par")
}else{
    console.log("Ninguno es par")
}
