
function attackForm() {
  console.log(attacks);
  var select = document.getElementById('attacks');
  for(var i = 0; i < attacks.length; i++) {
    var attack = attacks[i];
    var el = document.createElement('option');
    el.textContent = attack.name;
    el.value = i;
    select.appendChild(el);
  };
}
