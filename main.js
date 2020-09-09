let nicknames = ["Crusher", "the Scientist", "Twinkle-toes", "the Coder", "the Jester", "the Sloth", "Quick-Silver"]

document.getElementById('rn').addEventListener('click', randomname);

function randomname() {
  firstname = document.getElementById('fn').value;
  lastname = document.getElementById('ln').value;
  for (i=1; i<7; i++) {
    document.getElementById('result' + i).innerHTML = '';
  }
  document.getElementById('result1').innerHTML = firstname + " " + nicknames[Math.floor(Math.random() * 6)] + " " + lastname;
}

document.getElementById('an').addEventListener('click', allnames);

function allnames() {
  firstname = document.getElementById('fn').value;
  lastname = document.getElementById('ln').value;
  for (i=1; i<7; i++) {
    document.getElementById('result' + i).innerHTML = firstname + " " + nicknames[i-1] + " " + lastname;
  }
}
