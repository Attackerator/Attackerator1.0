WeaponAttack.prototype.render = function (){
  var weaponTable = document.getElementById('weaponTable');
  var headers = ['Name', 'Description', 'Base Stat', 'Dice Number', 'Dice Type'];
  for (var i = 0; i < headers.length; i++){
    var header = document.createElement('th');
    header.textContent = headers[i];
    weaponTable.appendChild(header);
  }

  var attackRow = document.createElement('tr');
  weaponTable.appendChild(attackRow);
  var attackName = document.createElement('td');
  attackName.textContent = this.name;
  attackRow.appendChild(attackName);
  var attackDescription = document.createElement('td');
  attackDescription.textContent = this.description;
  attackRow.appendChild(attackDescription);
  var attackStat = document.createElement('td');
  attackStat.textContent = this.baseStat;
  attackRow.appendChild(attackStat);
  var attackDiceNumber = document.createElement('td');
  attackDiceNumber.textContent = this.diceNumber;
  attackRow.appendChild(attackDiceNumber);
  var attackDiceType = document.createElement('td');
  attackDiceType.textContent = this.diceType;
  attackRow.appendChild(attackDiceType);
};

SpellAttack.prototype.render = function (){
  var spellTable = document.getElementById('spellTable');
  var headers = ['Name', 'Description', 'Base Stat', 'Dice Number', 'Dice Type'];
  for (var i = 0; i < headers.length; i++){
    var header = document.createElement('th');
    header.textContent = headers[i];
    spellTable.appendChild(header);
  }

  var attackRow = document.createElement('tr');
  spellTable.appendChild(attackRow);
  var attackName = document.createElement('td');
  attackName.textContent = this.name;
  attackRow.appendChild(attackName);
  var attackDescription = document.createElement('td');
  attackDescription.textContent = this.description;
  attackRow.appendChild(attackDescription);
  var attackStat = document.createElement('td');
  attackStat.textContent = this.baseStat;
  attackRow.appendChild(attackStat);
  var attackDiceNumber = document.createElement('td');
  attackDiceNumber.textContent = this.diceNumber;
  attackRow.appendChild(attackDiceNumber);
  var attackDiceType = document.createElement('td');
  attackDiceType.textContent = this.diceType;
  attackRow.appendChild(attackDiceType);
};//weapon attack!
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
  localStorage.setItem('attacks', JSON.stringify(attacks));
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
