//weapon attack!
var weaponAttacks = [];
function WeaponAttacks(name, diceType, diceNumber, baseStat, description){
  this.name = name;
  this.diceType = diceType;
  this.diceNumber = diceNumber;
  this.baseStat = baseStat;
  this.description = description;
  weaponAttacks.push(this);
}
//submit for weaponAttacks
var form = document.querySelectorAll('form')[0];
form.addEventListener('submit', submitAttack);
function submitAttack(event){
  event.preventDefault();
  var name = document.querySelectorAll('input[name="name"]')[0];
  var diceType = document.querySelectorAll('select[name="diceType"]')[0];
  var diceNumber = document.querySelectorAll('select[name="diceNumber"]')[0];
  var baseStat = document.querySelectorAll('select[name="baseStat"]')[0];
  var description =  document.querySelectorAll('input[name="description"]')[0];

  var weaponAttacks = new WeaponAttacks( name.value, diceType.value, diceNumber.value, baseStat.value, description.value);
  console.log(weaponAttacks);
};
//spell Attacks!
var spellAttacks = [];
function SpellAttacks(name, diceType, diceNumber, baseStat, spellLevel, description){
  this.name = name;
  this.diceType = diceType;
  this.diceNumber = diceNumber;
  this.baseStat = baseStat;
  this.spellLevel = spellLevel;
  this.description = description;
  spellAttacks.push(this);
}
//submit for spellAttacks
var form = document.querySelectorAll('form')[1];
form.addEventListener('submit', submitSpell);
function submitSpell(event){
  event.preventDefault();
  var name = document.querySelectorAll('input[name="name"]')[1];
  var diceType = document.querySelectorAll('select[name="diceType"]')[1];
  var diceNumber = document.querySelectorAll('select[name="diceNumber"]')[1];
  var baseStat = document.querySelectorAll('select[name="baseStat"]')[1];
  var spellLevel = document.querySelectorAll('select[name="spellLevel"]')[0];
  var description =  document.querySelectorAll('input[name="description"]')[1];

  var spellAttacks = new SpellAttacks( name.value, diceType.value, diceNumber.value, baseStat.value, spellLevel.value, description.value);
  console.log(spellAttacks);
};
