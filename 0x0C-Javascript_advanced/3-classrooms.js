function createClassRoom(NumbersOfStudents) {
	function studentSeat(seat) {
		return function () {
			return seat;
		}
	}
	let students = [];
	for (i = 0; i < NumbersOfStudents; i++) {
		students[i] = studentSeat(i + 1)
	}
	return students;
}

let classRoom = createClassRoom(10);