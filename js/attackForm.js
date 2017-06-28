var weaponAttacks = JSON.parse(localStorage.getItem('weaponAttacks'));

var spellAttacks = JSON.parse(localStorage.getItem('spellAttacks'));

console.log(weaponAttacks);
var select = document.getElementById('attacks');
for(var i = 0; i < weaponAttacks.length; i++) {
  var weaponAttack = weaponAttacks[i];
  var el = document.createElement('option');
  el.textContent = weaponAttack.name;
  el.value = 'diceNumber';
  select.appendChild(el);
};
var select = document.getElementById('attacks');
for(var i = 0; i < spellAttacks.length; i++) {
  var spellAttack = spellAttacks[i];
  var el = document.createElement('option');
  el.textContent = spellAttack.name;
  el.value = 'diceNumber';
  select.appendChild(el);
};
