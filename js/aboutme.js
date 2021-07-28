window.onload = () => {
	document.getElementById("lang").style = "opacity: 100%;"};

function langRU() {
	/*translations itself*/
	document.getElementById("main1").innerHTML = "Привет!"
    document.getElementById("main2").innerHTML = "Я ivan123,<br> подросток интересующийся технологиями.<br> Живу в России."
    document.getElementById("main3").innerHTML = "Кстати, у меня есть Discord сервер.<br> Если хотите присоединиться к нему,<br>"
    document.getElementById("main4").innerHTML = "вот приглашение."
	document.getElementById("main5").innerHTML = "Моя электронная почта:<br>ivan123another@gmail.com"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "svg/uk.svg"
	document.getElementById("lang").onclick = langEN;
}
function langEN() {
	/*translations itself*/
	document.getElementById("main1").innerHTML = "Hello!"
    document.getElementById("main2").innerHTML = "I'm ivan123,<br> a teenager interested in tech.<br> I'm living in Russia."
    document.getElementById("main3").innerHTML = "Btw, i have a Discord server.<br> If you want to join it,<br>"
    document.getElementById("main4").innerHTML = "invite is here."
	document.getElementById("main5").innerHTML = "My e-mail:<br>ivan123another@gmail.com"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "svg/ru.svg"
	document.getElementById("lang").onclick = langRU;
}