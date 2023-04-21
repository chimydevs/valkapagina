const life1 = document.getElementById('life1');
const attack1 = document.getElementById('attack1');
const defense1 = document.getElementById('defense1');
const life2 = document.getElementById('life2');
const attack2 = document.getElementById('attack2');
const defense2 = document.getElementById('defense2');
const life3 = document.getElementById('life3');
const attack3 = document.getElementById('attack3');
const defense3 = document.getElementById('defense3');
const fortressLife = document.getElementById('fortressLife');


const form = document.querySelector('form');
form.addEventListener('input', calculateTotals);

function calculateTotals() {
  const lifeTotal = parseInt(life1.value) + parseInt(life2.value) + parseInt(life3.value) + parseInt