<<<<<<< HEAD
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





function getX() {
    let x = document.getElementById("xnumber").value;
    document.getElementById("ynumber").innerText = fib(x);

}

=======
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





function getX() {
    let x = document.getElementById("xnumber").value;
    document.getElementById("ynumber").innerText = fib(x);

}

>>>>>>> de2688a5f04d07d9773f76a7529ce4b572ed17be
