/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 	var sueldo = parseInt(txtIdSueldo.value);
	var resultado = sueldo + (sueldo * 0.1);
	 alert("El resultado es: " + resultado);
}
