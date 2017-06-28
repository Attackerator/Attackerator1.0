'use strict';
console.log('localStorage.js loaded');

var attacks;
var characters;
window.onload = function() {
  load();
  attackForm();
};
function load() {
  if (localStorage.getItem('attacks') != null){
    attacks = JSON.parse(localStorage.getItem('attacks'));
    console.log('attacks loaded');
  } else {
    console.log('attacks not found');
    attacks = [];
  }
  if (localStorage.getItem('characters') != null){
    characters = JSON.parse(localStorage.getItem('characters'));
    console.log('characters loaded');
    renderCharacter(characters[0]);
  } else {
    console.log('characters not found');
    characters = [];
  }
}
function deleteStorage(){
  localStorage.clear();
  location.reload();
}
