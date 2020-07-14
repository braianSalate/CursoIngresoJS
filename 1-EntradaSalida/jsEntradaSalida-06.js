/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	txtIdNumeroUno.value = prompt("Ingrese primer numero");
	txtIdNumeroDos.value = prompt("Ingrese segundo numero");
	var numero1 = parseInt(txtIdNumeroUno.value);
	
	var numero2 = parseInt(txtIdNumeroDos.value);
	
	var suma = numero1 + numero2;
	alert("la suma total es: " + suma);

}

