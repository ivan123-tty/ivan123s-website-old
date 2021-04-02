function langRU() {;
	/*translations itself*/
	document.getElementById("main").innerHTML = "Творения ivan123"
	document.getElementById("nothing").innerHTML = "Здесь еще ничего нет :("
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/uk.svg"
	document.getElementById("lang").onclick = langEN;
}
function langEN() {;
	/*translations itself*/
	document.getElementById("main").innerHTML = "ivan123's creations"
	document.getElementById("nothing").innerHTML = "Nothing here yet :("
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/ru.svg"
	document.getElementById("lang").onclick = langRU;
}