// Prime Checker
// Do
//
// Write a function which checks to see if a number is a prime number or not. Have it return true if it is, or false if it is not.
//
// Info
//
// // A Prime number is a number greater than one that can only be divided by one and itself.
// //
// // More info on Prime numbers
//
//
//
// 10 is not a prime number
// because you can divide it by 5 or 2
//
// 55
// is 2 divisible no
// is 3 divisible no
// is 4 no
// is 5 YES
//
//
// IT IS NOT A PRIME NUMBER
//
// 66
// is 2 divisible YES


//
// 2 is a prime number because
// you can only divide it by itself and 1.

// if (33 % 2){
//   console.log(true)
// }

// if (number % 1){
//   console.log(false)
// }

//FOR 10 you're checking 2 to 9
function isPrime(number){
  if (number == 2){
    return true;
  }else{
    for (var i=2; i < number; i++){
      if (number % i == 0){
        return false;
      }
    }

    if (number > 1){
      return true;
    }
  }
}
// value = isPrime(process.argv[2]);
// console.log(value);

if (isPrime(55)){
  console.log('it is prime')
}
