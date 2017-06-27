var weaponAttacks = JSON.parse(localStorage.getItem('weaponAttacks'));

var spellAttacks = JSON.parse(localStorage.getItem('spellAttacks'));

var select = document.getElementById('attacks');
for(var i = 0; i < weaponAttacks.length; i++) {
  var options = weaponAttacks[i];
  var el = document.createElement('option');
  el.textContent = 'name';
  el.value = 'diceNumber';
  select.appendChild(el);
};
