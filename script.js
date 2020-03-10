//recursive fibonacci function
let x;
function fib(x) {
    if (x == 0) return 0;
    if (x <= 2) return 1;

    return fib(x - 1) + fib(x - 2);
}

// display none function for loader
function stopLoader() {
    document.getElementById("Loader").classList.add('loaded');
}

// get X on click button function
// return error if X>50 
// calls checkbox function

function getX() {
    x = document.getElementById("xnumber").value;
    document.getElementById("ynumber").innerText = ""
    if (x > 50) {
        document.getElementById("50Error").classList.remove('loaded');
        document.getElementById("xnumber").classList.add("inputError");
    } else {
        checkbox()
    }
}

// interrogate checkbox and calls the appropriate functions to calculate Fibonacci of X
function checkbox() {
    if (document.getElementById('checkbox').checked) {
        fibServer()
    } else {
        document.getElementById("ynumber").innerText = fib(x)
    }
}

// fetch Fibonacci of X from server
// throws and catch error to display server error to user
// refreshes previous result list

function fibServer() {
    console.log(x)
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
            })
        .then(function (data) {
            let y = data.result;
            stopLoader();
            document.getElementById("ynumber").innerText = y;
            fetchResult()
        })
        .catch(error => error.text())
        .then(meaning => {
            console.log(meaning);
            stopLoader();
            let error42 = "Server Error: " + meaning
            document.getElementById("errText").innerText = error42;

        })
}

// fetch Array of previous results from server and display to user on a list in HTML
function fetchResult() {
    const resultsURL = "http://localhost:5050/getFibonacciResults"
    fetch(resultsURL)
        .then(response => response.json())
        .then(function (array) {
            //console.log(array.results)

            for (let i = 0; i < array.results.length; i++) {
                var myDate = new Date(array.results[i].createdDate);
                //console.log(myDate)
                let myDiv = document.getElementById("dataArray");
                let line = document.createElement("p")
                line.classList.add("listStyle");
                line.innerHTML += "The Fibonacci of <b>" + array.results[i].number + "</b> is <b>" + array.results[i].result + "</b>. Calculated at " + myDate;
                myDiv.appendChild(line)
            }
            document.getElementById("resLoader").classList.add('loaded')
        })

};

// On page load calls function to display previous results
document.addEventListener("DOMContentLoaded", fetchResult)
