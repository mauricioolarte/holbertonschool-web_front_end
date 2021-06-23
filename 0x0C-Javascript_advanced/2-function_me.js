function welcomeMessage(fullName) {
	var name = fullName;
	function alertMessage() {
		alert(`Welcome ${name}`)
	}
	return alertMessage;
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred")