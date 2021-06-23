function createElement(data) {
	let p = document.createElement("p");
	p.textContent = data;
	document.body.appendChild(p)
}

function queryWikipedia(callback) {
	req = new XMLHttpRequest();
	req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*")
	req.onreadystatechange = function () {
		// In local files, status is 0 upon success in Mozilla Firefox
		if (req.readyState === XMLHttpRequest.DONE) {
			var status = req.status;
			if (status === 0 || (status >= 200 && status < 400)) {
				// The request has been completed successfully
				// console.log(req.responseText);
				callback(req.responseText);
			} else {
				console.log("error")
			}
		}
	};
	req.send();


}

queryWikipedia(createElement);