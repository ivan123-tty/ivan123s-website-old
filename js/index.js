window.onload = () => {;
	document.getElementById("lang").style = "opacity: 100%;"};

function langRU() {;
	/*translations itself*/
	document.getElementById("main").innerHTML = "Привет!"
	document.getElementById("menu1").innerHTML = "Мои творения"
	document.getElementById("menu2").innerHTML = "Обо мне"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/uk.svg"
	document.getElementById("lang").onclick = langEN;
}
function langEN() {;
	/*translations itself*/
	document.getElementById("main").innerHTML = "Hello!"
	document.getElementById("menu1").innerHTML = "My creations"
	document.getElementById("menu2").innerHTML = "About me"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/ru.svg"
	document.getElementById("lang").onclick = langRU;
}
