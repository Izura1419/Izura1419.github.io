let login = localStorage.getItem("login");
let password = localStorage.getItem("password");

let bye = document.querySelector(".one:nth-child(3)");
let sleep = document.querySelector(".one:nth-child(4)");

function Click() {
	bye.innerHTML = login;
	bye.classList.add("two");
	bye.style.cursor = "default";

			if (login.length > 24) {
		bye.style.width = "60vw";
	}
			if (login.length > 35) {
		bye.style.width = "80vw";
	}

}
function Click2() {
	sleep.innerHTML = password;
	sleep.classList.add("two");
	sleep.style.cursor = "default";

			if (password.length > 24) {
		sleep.style.width = "60vw";
	}
			if (login.length > 35) {
		bye.style.width = "80vw";
	}
}