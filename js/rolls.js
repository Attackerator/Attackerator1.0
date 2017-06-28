'use strict';
console.log('rolls.js loaded');

function abilityScore(baseStat) {
    var stat = Character[baseStat];
    if(stat <= 3 ){
      return -4;
    }
    if(stat <= 5 ){
      return -3;

    }
    if(stat <= 7 ){
      return -2;

    }
    if(stat <= 9 ){
      return -1;

    }
    if(stat <= 11 ){
      return 0;

    }
    if(stat <= 13 ){
      return 1;

    }
    if(stat <= 15 ){
      return 2;

    }
    if(stat <= 17){
      return 3;

    }
    if(stat <= 19 ){
      return 4;

    }
    if(stat <= 21 ){
      return 5;

    }
}

function attackRoll () {
  var selectedAttack = document.getElementById('attacks').value;
  selectedAttack = attacks[selectedAttack];
  console.log(selectedAttack);

  var diceType = parseInt(selectedAttack[diceType]);
  var diceNumber = parseInt(selectedAttack[diceNumber]);
  console.log(typeof(diceType));
  console.log(typeof(diceNumber));

  var rolls = [];
  for (var i = 0; i < diceNumber; i++){
    var randomNumber = Math.floor(Math.random() * (diceType + 1));
    rolls.push(randomNumber);
  }
  var total = 0;
  for(var i = 0; i < rolls.length; i++){
    var index = rolls[i];
    total += index;
  }
}
