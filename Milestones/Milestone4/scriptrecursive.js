<<<<<<< HEAD
function fib(x) {
    if (x == 0) return 0;
    if (x <= 2) return 1;

    return fib(x - 1) + fib(x - 2);
}


function getX() {
    let x = document.getElementById("xnumber").value;
    document.getElementById("ynumber").innerText = fib(x);

=======
function fib(x) {
    if (x == 0) return 0;
    if (x <= 2) return 1;

    return fib(x - 1) + fib(x - 2);
}


function getX() {
    let x = document.getElementById("xnumber").value;
    document.getElementById("ynumber").innerText = fib(x);

>>>>>>> de2688a5f04d07d9773f76a7529ce4b572ed17be
}