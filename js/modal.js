// fixme: do everything modal related in one function
function modal() {
var modal = document.getElementById("modalBg");
var close = document.getElementsByClassName("close");
	modal.style.display = "block";
}
// fixme: implement closing if user clicked outside of the modal
function closeModal() {
var modal = document.getElementById("modalBg");
	modal.style.display = "none";
}