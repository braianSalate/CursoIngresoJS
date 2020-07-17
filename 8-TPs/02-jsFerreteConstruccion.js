/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno = txtIdLargo.value;
    var anchoTerreno = txtIdAncho.value;
    var cantidadAlambre;
    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    cantidadAlambre = (2 * largoTerreno) + (2 * anchoTerreno);
    alert("Hay que comprar " + cantidadAlambre + " metros de alambre");
}
function Circulo () 
{
    var radio;
    var perimetro;
    radio = txtIdRadio.value;
    radio = parseInt(radio);
    perimetro = 2 * Math.PI * radio;
    alert("Para el terreno circular habria que comprar " + perimetro + " metros de alambre");
    
	
}
function Materiales () 
{
    var largoTerreno = txtIdLargo.value;
    var anchoTerreno = txtIdAncho.value;
    var radio = txtIdRadio.value;
    var bolsasCementoCuadrado;
    var bolsasCalCuadrado;
    var bolsasCementoCirculo;
    var bolsasCalCirculo;
    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    radio = parseInt(radio);
    superficieCuadrada = anchoTerreno * largoTerreno;
    superficieCircular = (Math.PI * radio) * (Math.PI * radio);
    bolsasCementoCuadrado = 2 * superficieCuadrada;
    bolsasCalCuadrado = 3 * superficieCuadrada;
    bolsasCementoCirculo = 2 * superficieCircular;
    bolsasCalCirculo = 3 * superficieCircular;
    alert("Si el terreno es cuadrado se necesitan "+bolsasCementoCuadrado+ " bolsas de cemento y "+bolsasCalCuadrado + ". Y si el terreno es circular se necesitan " + bolsasCementoCirculo + " bolsas de cemento y "+bolsasCalCirculo + " bolsas de cal");
    


	
}