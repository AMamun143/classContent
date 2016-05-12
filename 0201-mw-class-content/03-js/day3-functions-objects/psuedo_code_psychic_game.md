wins is 0
losses is 0
guessesLeft = 9

1. make a list of letters that are correct and store into variable called correctLetters

listOfLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

2. choose a random letter from that above list to be what the computer guessed

var computerGuess = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];

2. we capture a letter that the user typed

	var userGuess = 'f'

	3. we check if that letter is in that list

	userGuess == computerGuess
		wins++
	if it isn't equal
		guessLeft goes down by 1

		4. if that returns -1 then it is not in the list

		5. if that returns anything but -1 then IT IS IN THE LIST

	if guessLeft is 0
		losses++
