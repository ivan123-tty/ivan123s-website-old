window.onload = () => {;
	document.getElementById("lang").style = "opacity: 100%;"};

function langRU() {;
	/*translations itself*/
	document.getElementById("main1").innerHTML = "Привет!"
    document.getElementById("main2").innerHTML = "Я ivan123,<br> 15-летний подросток<br> интересующийся технологиями.<br> Живу в России."
    document.getElementById("main3").innerHTML = "Кстати, у меня есть Discord сервер.<br> Если хотите присоединиться к нему,<br>"
    document.getElementById("main4").innerHTML = "здесь приглашение."
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/uk.svg"
	document.getElementById("lang").onclick = langEN;
}
function langEN() {;
	/*translations itself*/
	document.getElementById("main1").innerHTML = "Hello!"
    document.getElementById("main2").innerHTML = "I'm ivan123,<br> a 15 years old teenager<br> interested in tech.<br> I'm living in Russia."
    document.getElementById("main3").innerHTML = "Btw, i have a Discord server.<br> If you want to join it,<br>"
    document.getElementById("main4").innerHTML = "invite is here."
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "country-flags/ru.svg"
	document.getElementById("lang").onclick = langRU;
}
