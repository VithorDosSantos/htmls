let counter = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("mais").onclick = function() {
  counter++;
  counterDisplay.textContent = counter;
};

document.getElementById("menos").onclick = function() {
  counter--;
  counterDisplay.textContent = counter;
};
