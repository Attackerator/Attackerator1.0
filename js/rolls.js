'use strict';
console.log('rolls.js loaded');

function abilityScore(baseStat) {
    var stat = Character[baseStat];
    var bonus;
    if(2 <= stat <= 3 ){
      bonus = -4;
      return bonus;
    }
    if(4 <= stat <= 5 ){
      bonus = -3;
      return bonus;
    }
    if(6 <= stat <= 7 ){
      bonus = -2;
      return bonus;
    }
    if(8 <= stat <= 9 ){
      bonus = -1;
      return bonus;
    }
    if(10 <= stat <= 11 ){
      bonus = 0;
      return bonus;
    }
    if(12 <= stat <= 13 ){
      bonus = 1;
      return bonus;
    }
    if(14 <= stat <= 15 ){
      bonus = 2;
      return bonus;
    }
    if(16 <= stat <= 17){
      bonus = 3;
      return bonus;
    }
    if(18 <= stat <= 19 ){
      bonus = 4;
      return bonus;
    }
    if(20 <= stat <= 21 ){
      bonus = 5;
      return bonus;
    }
}

function attackRoll () {

}
