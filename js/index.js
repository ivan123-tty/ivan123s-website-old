function changeLang() {;
	/*translations itself*/
	document.getElementById("avatar2").innerHTML = "Это мой аватар"
	document.getElementById("menu1").innerHTML = "Мои работы"
	document.getElementById("main").innerHTML = "Привет!"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/uk.svg"
	document.getElementById("lang").onclick = changeLang2;
}
function changeLang2() {;
	/*translations itself*/
	document.getElementById("avatar2").innerHTML = "This is my avatar."
	document.getElementById("menu1").innerHTML = "My works"
	document.getElementById("main").innerHTML = "Hello"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/ru.svg"
	document.getElementById("lang").onclick = changeLang;
}