Part 1

* explain what arrays are to your partner

Part 2

* start with this array:

```
var animalsIamThinkingOf = ["lizards", "skunks", "chipmunks"]
```

ask the user to guess a type of animal you are thinking of (if it's in the above array then you're thinking of it)

if the animal is in the pets array then alert 'You guessed right!'

* use the indexOf method. The indexOf method returns -1 if it's not in the array
  * http://www.w3schools.com/jsref/jsref_indexof_array.asp

Part 3

* run the following code and explain things to your partner

```
var word = 'jupiter';

var wordsLetters = word.split(); //doesn't work as expected why?

var wordsLetters = word.split(''); //creates an array of the string 

var letterIndex = wordsLetters.indexOf('a')

wordsLetters.splice(letterIndex, 1); //gets rid of that letter in the array

wordsLetters;
```