// "Make a command line Node app that takes in two arguments and returns true if they are both equal to each other"

// Bonus: "Make another command line Node app that takes in two numbers as arguments and returns true if they are both multiples of 7"

// use process.argv

var numOne = process.argv[2];

var numTwo = process.argv[3];

if (numOne == numTwo){
	console.log(true);
}else{
	console.log(false);
}

if ((numOne % 7 === 0) && (numTwo % 7 === 0)){
	console.log('multiples of 7');
}else{
	console.log('not multiples of 7');
}


