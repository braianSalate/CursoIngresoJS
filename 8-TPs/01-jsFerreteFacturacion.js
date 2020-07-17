/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var precio1 = txtIdPrecioUno.value;
    var precio2 = txtIdPrecioDos.value;
    var precio3 = txtIdPrecioTres.value;
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    var suma;
    suma = precio1 + precio2 + precio3;
    alert("la suma de los precios es: " + suma);
    
	
}
function Promedio () 
{
    var precio1 = txtIdPrecioUno.value;
    var precio2 = txtIdPrecioDos.value;
    var precio3 = txtIdPrecioTres.value;
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    var promedio;
    promedio = (precio1 + precio2 + precio3)/3;
    alert("El promedio es: " + promedio);
	
}
function PrecioFinal () 
{
    var precio1 = txtIdPrecioUno.value;
    var precio2 = txtIdPrecioDos.value;
    var precio3 = txtIdPrecioTres.value;
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    var precioFinal;
    precioFinal = (precio1 + precio2 + precio3) * 1.21;
    alert("El precio final es: " + precioFinal)
}