// Realizar un programa al cual se le ingresen 2 numeros y calcule el mayor de los 2

/*let num1 = parseInt ( prompt("Ingrese un numero"));
let num2 = parseInt ( prompt("Ingrese un numero"));

if (num1 < num2){
    alert("El numero mayor es: "+ num2)
} else if(num1 > num2){
    alert("El numero mayor es: "+ num1)
} else {
    alert("Los numero son iguales")
}*/

//Hacer un menu de conversor de divisas donde se pueda convertir a dolares, euros y yenes. Entonces el usuario debe elegir a cual moneda convertir el valor ingresado

/*alert("Este programa calcula la conversion a 3 divisas dadas.");
				let divisa =  parseInt(prompt("valor a convertir 1. Dolar, 2.Euro, 3.Yenes") )  // int
				let valor =  parseInt(prompt("ingresa el valor en pesos a convertir") )  // int

				if ((divisa < 1 ) || (divisa > 3 )) {
						alert("el numero de divisa no se encuentra disponible:" )
				}
				if (divisa == 1) {
						conversion = valor *4400
						alert("paso a dolar es:" + conversion  )
				}else if (divisa == 2) {
						conversion = valor *4488
						alert("paso a euro es:" + conversion  )

				}else if (divisa == 3) {
						conversion = valor * 32
                }*/

//Un programa al cual se le ingrese las 3 notas de un estudiante (1-5), calular el promedio de las notas ingresadas y decir si el estudiante va perdiendo (Se pierde con 3)

alert("Calcula el promedio de las notas de un estudiante");
				let note1 = parseInt(prompt("Ingresa la nota 1 (entre 1 y 5)"));
				let note2 = parseInt(prompt("Ingresa la nota 2 (entre 1 y 5)"));
				let note3 = parseInt(prompt("Ingresa la nota 3 (entre 1 y 5)"));
				const result = (note1 + note2 + note3) / 3;
				if(result < 3){
						alert("El estudiante va perdiendo con: " + result);
				}else{
						alert("El estudiante va pasando con: " + result);
				}
