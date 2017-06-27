function WeaponAttacks(){
  var name = document.getElementsByClassName('name')[0].value;
  var diceStyle = document.getElementsByName('diceType')[0].value;
  var diceCount = document.getElementsByName('diceNumber')[0].value;
  var baseStat = document.getElementsByName('baseStat')[0].value;
  var description = getElementsByClassName('description')[0].value;
}
//Character.WeaponAttacks.push(new WeaponAttacks(name, diceStyle, diceCount, baseStat, description));

function SpellAttacks(){
  var name = document.getElementsByClassName('name')[1].value;
  var diceStyle = document.getElementsByName('diceType')[1].value;
  var diceCount = document.getElementsByName('diceNumber')[1].value;
  var baseStat = document.getElementsByName('baseStat')[1].value;
  var spellLevel = document.getElementsByName('spellLevel')[1].value;
  var description = getElementsByClassName('description')[1].value;
}
//character.SpellAttacks.push(new SpellAttacks(name, diceStyle, diceCount, baseStat, spellLevel, description));

//submit for spellAttacks
var form = document.querySelector('form')[1];
form.addEventListener('submit', formSubmit);
function formSubmit(event){
  event.preventDefault();
  var name = document.querySelector('input[name="name"]');
  var diceStyle = document.querySelector('input[name="diceStyle"]');
  var diceCount = document.querySelector('input[name="diceCount"]');
  var baseStat = document.querySelector('input[name="baseStat"]');
  var spellLevel = document.querySelector('input[name="spellLevel"]');
  var description = document.querySelector('input[name="description"]');

  var spellAttacks = new SpellAttacks( name.value, diceStyle.value, diceCount.value, baseStat.value, spellLevel.value, description.value);

  Character.SpellAttacks.push(new SpellAttacks(name, diceStyle, diceCount, baseStat, spellLevel, description));
};
//submit for weaponAttacks
var form = document.querySelector('form')[0];
form.addEventListener('submit', formSubmit);
function formSubmit(event){
  event.preventDefault();
  var name = document.querySelector('input[name="name"]');
  var diceStyle = document.querySelector('input[name="diceStyle"]');
  var diceCount = document.querySelector('input[name="diceCount"]');
  var baseStat = document.querySelector('input[name="baseStat"]');
  var spellLevel =  document.querySelector('input[name="description"]');

  var wpellAttacks = new WeaponAttacks( name.value, diceStyle.value, diceCount.value, baseStat.value, description.value);

  Character.WeaponAttacks.push(new WeaponAttacks
    (name, diceStyle, diceCount, baseStat, spellLevel, description));
};
