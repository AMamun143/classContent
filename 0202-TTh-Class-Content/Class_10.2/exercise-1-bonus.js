var argOne = process.argv[2]
var argTwo = process.argv[3]
var remainderOne = argOne % 7;
var remainderTwo = argTwo % 7;

if (( remainderOne == 0) && ( remainderTwo == 0)) {
	console.log(true);
}else{
	console.log(false);
}
