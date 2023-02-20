
/* --------Menu--------------------- */

const button = document.getElementById("btn-hamburguesa"); // traigo boton

function mostrarMenu() {
	let menu = document.getElementById("estado-menu"); 
	if(menu.classList.contains("desabilitado-hamb")){

		menu.classList.remove("desabilitado-hamb");
		menu.classList.add("habilitado-hamb");
	} else {
		menu.classList.remove("habilitado-hamb");
		menu.classList.add("desabilitado-hamb");
	}
}

button.addEventListener("click", mostrarMenu);  //escuha y llama funcion

/* var navList = document.getElementsByClassName("nav-lista");
for(var i=0; i< navList.length; i++){
	navList[i].addEventListener("click", showMenu);
} */

/* -------- FIN Menu--------------------- */





