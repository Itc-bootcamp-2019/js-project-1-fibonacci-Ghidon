
function fib(x) {
    if (x == 0) return 0;
    if (x <= 2) return 1;

    return fib(x - 1) + fib(x - 2);
}


//pass x to a request to server
//get an answer from the server and assign it to:
// document.getElementById("ynumber").innerText
function stopLoader() {
    document.getElementById("Loader").classList.add('loaded');
}

function getX() {
    let x = document.getElementById("xnumber").value;
    document.getElementById("ynumber").innerText = ""
    if (x > 50) {
        document.getElementById("50Error").classList.remove('loaded');
        document.getElementById("xnumber").classList.add("inputError");
    } else {
        document.getElementById("50Error").classList.add('loaded');
        document.getElementById("xnumber").classList.remove("inputError");
        let url = "http://localhost:5050/fibonacci/" + x;
        document.getElementById("Loader").classList.remove('loaded');
        fetch(url)

            .then(
                function (response) {
                    if (response.status !== 200) {
                        document.getElementById("errText").classList.remove('loaded');
                        throw response

                    } else {
                        document.getElementById("errText").classList.add('loaded');
                        return response.json();
                    }
                }
            )
            .then(function (data) {
                let y = data.result;
                stopLoader();
                document.getElementById("ynumber").innerText = y;

            })
            .catch(error => error.text())
            .then(meaning => {
                console.log(meaning);
                stopLoader();
                let error42 = "Server Error: " + meaning
                document.getElementById("errText").innerText = error42;

            })
    }
}
