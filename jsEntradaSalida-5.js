/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var numerouno;
    var numerodos
    var resultado;
    numerouno = document.getElementById("numerouno").value;//2
    numerodos = document.getElementById("numerodos").value;//2
    numerouno = parseInt(numerouno);
    numerodos = parseInt(numerodos);
    resultado = numerouno+numerodos;
    alert("la suma es" +resultado);
	
}

