// “FizzBuzz”
// Do
//
// Write a script that prints the numbers from 1 to 100 in the console. But for multiples of three, print Fizz instead of the number and for multiples of five, print Buzz. For numbers which are multiples of both three and five, print FizzBuzz.

for (var i = 1; i <= 100; i++){
  if ((i % 3 == 0) && (i % 5 == 0)){
    console.log('FizzBuzz');
  }else if(i % 3 == 0){
    console.log('Fizz');
  }else if(i % 5 == 0){
    console.log('Buzz');
  }else{
    console.log(i);
  }
}

// if (2 === "2"){
//   console.log(true);
// }else{
//   console.log(false);
// }
