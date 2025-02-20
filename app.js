// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = []; ///// Array vacío


console.log(listaNombres.length); ///// Muestra 0 porque el array está vacío

function asignarTextoElemento(resultado, texto) {
    let elemento = document.getElementById(resultado);
    if (elemento) {
        elemento.textContent = texto;
    }
}


function agregarAmigo(){
	let input = document.getElementById("amigo");
	let lista = document.getElementById("listaAmigos"); ///// Captura la lista en HTML

	let nombre = input.value.trim(); ///// Elimina espacios en blanco

	if (nombre) {
		listaNombres.push(nombre); ///// Agrega el nombre a la lista de JavaScript
	

 ///// Crear un nuevo elemento <li> y agregarlo a la lista visual
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);

        input.value = ""; ///// Limpia el input después de agregar el nombre
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}


///// Función para sortear un nombre de la lista y mostrarlo en el HTML /////
 
function sortearAmigo(){

  /////Verificamos si la lista está vacía
    /*if (listaNombres.length === 0) {
        // Si está vacía, mostramos un mensaje de alerta
        alert("No hay nombres en la lista para sortear.");
        // Salimos de la función para evitar errores
        return;
    }*/

    ///// Generamos un índice aleatorio basado en la longitud de la lista
	let indiceAleatorio = Math.floor(Math.random()*listaNombres.length); 
	///// Obtenemos el nombre correspondiente al índice aleatorio
	let nombreSorteado = listaNombres[indiceAleatorio];
	
	asignarTextoElemento("resultado",`Tu amigo secreto es ${nombreSorteado}`);
	console.log(nombreSorteado);
} 




