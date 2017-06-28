'use strict';
console.log('localStorage.js loaded');

var attacks;
window.onload = function() {
  load();
  attackForm();
};
function load() {
  if (localStorage.getItem('attacks') != null){
    attacks = JSON.parse(localStorage.getItem('attacks'));
    console.log('attacks loaded');
    return attacks;
  } else {
    console.log('attacks not found');
    attacks = [];
    return;
  }
}
function deleteStorage(){
  localStorage.clear();
  location.reload();
}
