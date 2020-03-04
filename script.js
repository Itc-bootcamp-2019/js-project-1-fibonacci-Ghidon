//function fib(x) {
//  if (x == 0) return 0;
//if (x <= 2) return 1;
//
//  return fib(x - 1) + fib(x - 2);
//}


//pass x to a request to server
//get an answer from the server and assign it to:
// document.getElementById("ynumber").innerText


function getX() {
    let x = document.getElementById("xnumber").value;
    let url = "http://localhost:5050/fibonacci/" + x
    console.log("hello")
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            let y = data.result;
            document.getElementById("ynumber").innerText = y

        })
}


