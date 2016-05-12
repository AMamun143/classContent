function equalOrNot(one, two) {
	if(one === two) {
		console.log("They are the same");
	} else {
		console.log("They are not the same")
	}
}
​
equalOrNot(1, 1);
​
function nodeEqualOrNot() {
	if(process.argv[2] === process.argv[3]) {
		console.log("This is true");
	} else {
		console.log("This is false");
	}
}
​
nodeEqualOrNot();
​
function nodeMultipleOfSeven() {
	if(7 % process.argv[2] === 0 && 7 % process.argv[3] === 0) {
		console.log(process.argv[2] + " " + process.argv[3] + " are multiples of seven");
	} else {
		console.log("These together are not multiples of seven: " + process.argv[2] + " and " + process.argv[3]);
	}
}
​
nodeMultipleOfSeven();
