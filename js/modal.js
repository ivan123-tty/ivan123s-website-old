// fixme: do everything modal related in one function
function modal() {
var modal = document.getElementById("modalBg");
var close = document.getElementsByClassName("close");
	modal.style.display = "block";

window.onclick = function(event) {
	if (event.target == modal) 
	  modal.style.display = "none";
	}
}

function closeModal() {
var modal = document.getElementById("modalBg");
	modal.style.display = "none";
}