window.onload = () => {;
	document.getElementById("lang").style = "opacity: 100%; "};

function langRU() {;
	/*translations itself*/
	document.getElementById("creations").innerHTML = "Творения <br>ivan123";
	document.getElementById("menu1").innerHTML = "Обои, созданные мной.";
	document.getElementById("menu2").innerHTML = "Этот сайт";
	document.getElementById("all").innerHTML = "На этом пока все.";
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/uk.svg";
	document.getElementById("lang").onclick = langEN;
}
function langEN() {;
	/*translations itself*/
	document.getElementById("creations").innerHTML = "Creations <br>of ivan123";
	document.getElementById("menu1").innerHTML = "wallpapers, created by me.";
	document.getElementById("menu2").innerHTML = "this website";
	document.getElementById("all").innerHTML = "That's all for now.";
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/ru.svg";
	document.getElementById("lang").onclick = langRU;
}
