function attackForm() {

  console.log(characters[selectedCharacter].attacks);
  var select = document.getElementById('attacks');
  while (select.firstChild) {
    select.removeChild(select.firstChild);
  }
  for (var i = 0; i < characters[selectedCharacter].attacks.length; i++) {
    var attack = characters[selectedCharacter].attacks[i];
    var el = document.createElement('option');
    el.textContent = attack.name;
    el.value = i;
    select.appendChild(el);
  };
}
