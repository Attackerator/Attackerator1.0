'use strict';
console.log('character.js loaded');

//character constuctor
function Character(characterName) {
  this.name = characterName;
  this.strength = this.generateStat();
  this.dexterity = this.generateStat();
  this.constitution = this.generateStat();
  this.intelligence = this.generateStat();
  this.wisdom = this.generateStat();
  this.charisma = this.generateStat();
}

//method for generating stats | roll 4 D6 then take out the lowest number and add the rest together
Character.prototype.generateStat = function() {
  var rolls = [];
  for(var i = 0; i < 4; i++){
    //while using math.floor the and math.random * 7 the highest value is 6
    var randomNumber = Math.floor(Math.random() * 7);
    rolls.push(randomNumber);
  }
  console.log(rolls);
  //sorts array lowest to highest
  rolls.sort();
  //pulls up the first index, the lowest number
  rolls.splice(0,1);
  var stat = 0;
  //loops through and adds up the array
  for(var i = 0; i < rolls.length; i++){
    var index = rolls[i];
    stat += index;
  }
  //return the final stat value
  return stat;
};
