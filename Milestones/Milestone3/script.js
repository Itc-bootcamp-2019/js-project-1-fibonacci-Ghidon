//calculate all fibonacci numbrs with a loop,
// in a range that goes from 0 to x
//then return the last result as Y

function fib(x) {
  let a = 0;
  let b = 1;
  let y;

  for (let i = 2; i <= x; i++) {
    y = a + b;
    a = b;
    b = y;
  }
  return y;
}

let x = 7;
let y = fib(x);

document.getElementById("x").innerText = x;
document.getElementById("y").innerText = y;
