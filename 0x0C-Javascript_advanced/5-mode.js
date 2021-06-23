function changeMode(size, weight, transform, background, color) {
	return function () {
		document.body.style.fontSize = `${size}px`;
		document.body.style.fontWeight = `${weight}`;
		document.body.style.textTransform = `${transform}`;
		document.body.style.backgroundColor = `${background}`;
		document.body.style.color = `${color}`;
	}
}

let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

var p = document.createElement("p");
p.textContent = "Welcome Holberton!"
document.body.appendChild(p);


var btnSpooky = document.createElement("button");
btnSpooky.setAttribute("onClick", "spooky()");
btnSpooky.textContent = "spooky"
document.body.appendChild(btnSpooky);

var btnDark = document.createElement("button");
btnDark.setAttribute("onClick", "darkMode()");
btnDark.textContent = "Dark mode"
document.body.appendChild(btnDark);


var btnScream = document.createElement("button");
btnScream.setAttribute("onClick", "screamMode()");
btnScream.textContent = "Scream mode"
document.body.appendChild(btnScream);

