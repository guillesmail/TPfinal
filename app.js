let formulario=document.getElementById('formulario')
let nombre=document.getElementById('nombre')
let divHTML=document.getElementById('div')


const enviarformulario = (event) =>{
event.preventDefault()
 
console.log(event.target.nombre.value)



}

formulario.addEventListener('submit',enviarformulario)





/* // selector
var menu = document.querySelector(".hamburger");

// method
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".menuppal").classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener("click", toggleMenu, false); */

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/
