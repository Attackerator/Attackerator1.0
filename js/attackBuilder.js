function weaponAttacks(){
  var name = document.getElementsByClassName('name')[0].value;
  var diceStyle = document.getElementsByName('diceType').value;
  var diceCount = document.getElementsByName('diceNumber').value;
  var baseStat = document.getElementsByName('baseStat').value;
}
character.weaponAttacks.push(new weaponAttacks(name, diceStyle, diceCount, baseStat));
