let year = new Date();

let thisYear = year.getFullYear();

let twozerotwozero = document.querySelector("h5");
twozerotwozero.innerHTML = thisYear;

function Click() {
	document.querySelector("input").style.background = "white";
};
function Value() {
	let login = document.querySelector("#login").value;
	localStorage.setItem("login",login);
	console.log("Логин пользователя - " + login);

	let password = document.querySelector("#password").value;
	localStorage.setItem("password",password);
	console.log("Пароль пользователя - " + password);

	if (login.length > 40) {
		document.querySelector(".warn").innerHTML = "ты че дурак, зачем тебе такой большой логин?";
		document.querySelector(".warn").style.display = "block";
	};

	if (password.length > 40) {
		document.querySelector(".warn").innerHTML = "ты че дурак, зачем тебе такой большой пароль?";
		document.querySelector(".warn").style.display = "block";
	};

	if (login.length < 5 || password.length < 5) {
		document.querySelector(".warn").innerHTML = "ты дебил, можно покреативней?";
		document.querySelector(".warn").style.display = "block";
	};

	if (login == "" || password == "") {
		document.querySelector(".warn").innerHTML = "ты че самый умный?";
		document.querySelector(".warn").style.display = "block";
	};

	if (login != "" && password != "" && login.length < 40 && password.length < 40 && login.length > 5 && password.length > 5){
		document.querySelector(".warn").style.display = "none";
		window.location.href="3/index.html";
	};
};