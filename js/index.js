window.onload = () => {;
	document.getElementById("lang").style = "opacity: 100%;"};

function langRU() {;
	/*translations itself*/
	document.getElementById("avatar2").innerHTML = "Это мой аватар"
	document.getElementById("menu1").innerHTML = "Мои творения"
	document.getElementById("main").innerHTML = "Привет!"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/uk.svg"
	document.getElementById("lang").onclick = langEN;
}
function langEN() {;
	/*translations itself*/
	document.getElementById("avatar2").innerHTML = "This is my avatar."
	document.getElementById("menu1").innerHTML = "My creations"
	document.getElementById("main").innerHTML = "Hello"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/ru.svg"
	document.getElementById("lang").onclick = langRU;
}
