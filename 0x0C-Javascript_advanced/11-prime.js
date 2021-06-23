// const {
// 	performance
// } = require('perf_hooks');

function countPrimeNumbers() {
	const time0 = performance.now();

	let numbers = []
	for (let i = 1; i <= 100; i++) {
		let flag = 0;

		// looping through 2 to user input number
		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				flag = 1;
				break;
			}
		}

		// if number greater than 1 and not divisible by other numbers
		if (i > 1 && flag == 0) {
			numbers.push(i)
		}
	}
	const time1 = performance.now()

	console.log(`Execution time of printing countPrimeNumbers was ${time1 - time0} milliseconds`)
	return numbers
}

timeInit = performance.now();

setTimeout(() => {
	for (let i = 0; i < 100; i++) {
		countPrimeNumbers();
	}
}, 0)

timeEnd = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${timeEnd - timeInit} milliseconds`)

