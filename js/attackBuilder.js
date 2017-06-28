WeaponAttack.prototype.render = function (){
  var newWeapon = document.createElement('td');
  var weaponName = document.createTextNode(this.name);
  newWeapon.appendChild(weaponName);
  var newRow = document.createElement('tr');
  newRow.appendChild(newWeapon);
  var tableContainer = document.getElementById('weaponTable');
  tableContainer.appendChild(newRow);
};
SpellAttack.prototype.render = function (){
  var newSpell = document.createElement('td');
  var spellName = document.createTextNode(this.name);
  newSpell.appendChild(spellName);
  var newRow = document.createElement('tr');
  newRow.appendChild(newSpell);
  var tableContainer = document.getElementById('spellTable');
  tableContainer.appendChild(newRow);
};
//weapon attack!
function WeaponAttack(name, diceType, diceNumber, baseStat, description){
  this.name = name;
  this.diceType = diceType;
  this.diceNumber = diceNumber;
  this.baseStat = baseStat;
  this.description = description;
}
//submit for weaponattacks
var form = document.querySelectorAll('form')[0];
form.addEventListener('submit', submitAttack);
function submitAttack(event){
  event.preventDefault();
  var name = document.querySelectorAll('input[name="name"]')[0];
  var diceType = document.querySelectorAll('select[name="diceType"]')[0];
  var diceNumber = document.querySelectorAll('select[name="diceNumber"]')[0];
  var baseStat = document.querySelectorAll('select[name="baseStat"]')[0];
  var description =  document.querySelectorAll('input[name="description"]')[0];

  var weaponAttack = new WeaponAttack( name.value, diceType.value, diceNumber.value, baseStat.value, description.value);
  weaponAttack.render();

  attacks.push(weaponAttack);
  console.log(attacks);
  localStorage.setItem('attacks', JSON.stringify(attacks));;
};
//spell attacks!
function SpellAttack(name, diceType, diceNumber, baseStat, spellLevel, description){
  this.name = name;
  this.diceType = diceType;
  this.diceNumber = diceNumber;
  this.baseStat = baseStat;
  this.spellLevel = spellLevel;
  this.description = description;
}
//submit for spellattacks
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

  var spellAttack = new SpellAttack( name.value, diceType.value, diceNumber.value, baseStat.value, spellLevel.value, description.value);
  spellAttack.render();

  attacks.push(spellAttack);
  console.log(attacks);
  localStorage.setItem('attacks', JSON.stringify(attacks));;
};
