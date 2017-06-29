'use strict';
console.log('localStorage.js loaded');

var characters;
var selectedCharacter;
function attackOnLoad() {
  load();
  renderCharacterList();
  if (localStorage.getItem('characters') != null){
  renderCharacter(characters[selectedCharacter]);
  attackForm();
  }
}
function buildOnLoad(){
  load();
}
function load() {
  if (localStorage.getItem('characters') != null){
    characters = JSON.parse(localStorage.getItem('characters'));
    console.log('characters loaded');
  } else {
    console.log('characters not found');
    characters = [];
  }
  if (localStorage.getItem('selectedCharacter') != null){
    selectedCharacter = JSON.parse(localStorage.getItem('selectedCharacter'));
    console.log('selectedcharacter loaded');
  } else {
    console.log('No selectedCharacter found');
  }
}
function deleteStorage(){
  localStorage.clear();
  location.reload();
}
