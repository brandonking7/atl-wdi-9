console.log('tamagotchi file is loaded');

//your constructor function here
function Tamagotchi(name, creatureType) {
  this.name = name;
  this.creatureType = creatureType;
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;
  this.cry = function() {
    this.foodInTummy--;
    console.log(this.name + " has ate " + this.foodInTummy + " times today!");
    console.log("WAHH!!!!");
  };
  this.puke = function() {
    this.health--;
    console.log(this.name + " has a health of: " + this.health);
  };
  this.yawn = function() {
    this.restedness--;
    console.log(this.name + " has current restedness of: " + this.restedness);
  };
  this.start = function() {
    var self = this;
    console.log("Start " + this.name);
    this.hungerTimer = setInterval (function() {self.cry();}, 6000);
    this.yawnTimer = setInterval (function() {self.yawn();}, 10000);
    this.sickTimer = setInterval (function() {self.puke();}, 20000);

  };
  this.stop = function() {
    console.log("Stop " + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  };
};

// tama1.cry();
// tama3.cry();
//
// tama4.cry();
// tama5.puke();

//create new Tamagotchis
var tama1 = new Tamagotchi();
var tama2 = new Tamagotchi();

var tama3 = new Tamagotchi("Bernardii", "Alien");
var tama4 = new Tamagotchi("Sarahii" , "Human");

var tama5 = new Tamagotchi("Tim", "Alien");
var tama6 = new Tamagotchi("Ben", "Human");


tama5.start();
tama5.stop();
//test out your Tamagotchies below via console.logs
// console.log(tama1);
// console.log(tama2);

// console.log(tama3.cry);
