//Part One
var dog = {
  sleepy : false,
  noise : "woof",
  makeNoise: function(){
    if (sleepy ===false) {
      console.log(this.noise);
    }
  },
  michaelAsked: function(){
    console.log(this);
  }
}

// Part Dos
var cat = {
  sleepy: true,
  noise: "meow",
  makeNoise: function() {
    if(this.sleepy === false) {
      console.log(this.noise);
    }
  }
}

// Part San - Japanese for 3

//make the dog bark
dog.makeNoise();
//make the cat make noise
cat.makeNoise(); // doesn't work... why? because cats are
// lazy/awesome WAKE IT UP
cat.sleepy = false; // ok that's done... now make noise
cat.makeNoise();



// Part 4
// Why are parts one and two redundant?  What are ways we can write dry code?
// D.ont R.eapeat Y.ourself ;)


// Let's make a constructor function :)
//Object factory that spits out an object
function Animal(noise, sleepy){
  // this.noise = noise;
  var animalNoise = {
    sleepy : false,
    noise : noise,
    makeNoise: function(){
      if (sleepy ===false) {
        console.log(this.noise);
      }
    }
  }
}

//Constructor function
function Animal(kevin, noise) {
  this.sleepy = kevin;
  this.noise = noise;

  this.makeNoise = function (){
    if (this.sleepy === false) {
      console.log(this.noise);
    }
  }
}
function Band(name, startDate, genre, tourbusColor){
  this.name = name;
  this.startDate = startDate;
  this.genre = genre;
  this.tourbusColor = tourbusColor;
}
