function welcome(firstName, lastName) {
	let fullName = `${firstName} ${lastName}`
	function displayFullName(fullName) {
		alert(`welcome ${fullName}!`)
	}
	displayFullName(fullName)
}