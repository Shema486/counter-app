let homeNumber = document.getElementById("homeNum");
let guestNumber = document.getElementById("guestNum");
let count1 = 0;
let count2 = 0;
function add1() {
  count1 += 1;
  homeNumber.textContent = count1;
}
function add2() {
  count1 += 2;
  homeNumber.textContent = count1;
}
function add3() {
  count1 += 3;
  homeNumber.textContent = count1;
}

function add11() {
  count2 += 1;
  guestNumber.textContent = count2;
}
function add22() {
  count2 += 2;
  guestNumber.textContent = count2;
}
function add33() {
  count2 += 3;
  guestNumber.textContent = count2;
}
function restart() {
  guestNumber.textContent = 0;
  homeNumber.textContent = 0;
  count1 = 0;
  count2 = 0;
}
