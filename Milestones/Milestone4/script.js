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

