/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	txtIdNombre.value = prompt("Ingrese su nombre");
	var nombre = txtIdNombre.value;
	alert("su nombre es: " + nombre);
}

