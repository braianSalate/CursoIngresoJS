function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.round(Math.random()*10);
	if (aleatorio > 0 && aleatorio <4){
		alert("Vamos, la proxima se puede, tu nota es: " +aleatorio);
	} else if(aleatorio > 4 && aleatorio < 9){
		alert("Aprobado,  tu nota es: " +aleatorio);
	} else if(aleatorio>=9 && aleatorio <=10){
		alert("FELICITACIONES!!,  tu nota es: " +aleatorio);
	}

}//FIN DE LA FUNCIÓN