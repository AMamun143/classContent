Solutions for 1-partners-do.md

BONUS ONE SOLUTION:
```
var gameboy = [ 'Game Boy', 'nintendo', 149.99 ];
var pokemon = [ 'Pokemon Blue', 'nintendo', 49.99 ];
var tetris = [ 'Tetris', 'SEGA', 49.99 ];

var cart = [gameboy, pokemon, tetris];
//cart.push(gameboy, pokemon, tetris)

cart[1][0]; //name of the pokemon game
cart[2][2]; //price of the tetris game
cart[2][2] = 9012; 
```

BONUS TWO SOLUTION:
* When we use a variable we are referencing the original value stored there. Cart is just an array, holding references to the three original arrays. If we change the arrays within cart it is the same as changing the original arrays directly.
