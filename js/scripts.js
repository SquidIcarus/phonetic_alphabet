
// UI Logic
let wordArray = [];

function getAndSetWordValues() {
    const wordInput1 = document.getElementById("wordInput1").value;
    const wordInput2 = document.getElementById("wordInput2").value;
    const wordInput3 = document.getElementById("wordInput3").value;

    document.querySelector("span#wordResult1").innerText = wordInput1;
    document.querySelector("span#wordResult2").innerText = wordInput2;
    document.querySelector("span#wordResult3").innerText = wordInput3;

    wordArray = [wordInput1, wordInput2, wordInput3];


}



function setFormSubmissionEventHandler() {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        getAndSetWordValues();
        document.querySelector("div#results").removeAttribute("class");
    }
}

function setOnMouseOverAttribute() {
    let h1TextOn = document.querySelector("h1");
    let listOn = document.querySelector("ul.list");
    h1TextOn.onmouseover = function () {
        h1TextOn.style.color = "yellow";
        listOn.onmouseover = function () {
            listOn.style.color = "yellow";
        }
    }
}

function setOnMouseOutAttribute() {
    let h1TextOut = document.querySelector("h1");
    let listOff = document.querySelector("ul.list");
    h1TextOut.onmouseout = function () {
        h1TextOut.style.color = "black";
        listOff.onmouseout = function () {
            listOff.style.color = "black";
        }
    }
}


function darkMode() {
    let h1Text = document.querySelector("h1");
    let buttonOne = document.querySelector("body");
    let header = document.querySelector("div.header");
    let list = document.querySelector("ul.list");
    h1Text.style.color = "white"
    buttonOne.style.backgroundColor = "black";
    buttonOne.style.color = "white";
    header.style.borderColor = "white";
    list.style.color = "white";
    list.style.borderColor = "white";
    let h1TextOut = document.querySelector("h1");
    h1TextOut.onmouseout = function () {
        h1TextOut.style.color = "white";
    }
    let listOff = document.querySelector("ul.list");
    listOff.onmouseout = function () {
        listOff.style.color = "white";
    }
}


function lightMode() {
    let h1Text = document.querySelector("h1");
    let buttonTwo = document.querySelector("body");
    let header = document.querySelector("div.header");
    let list = document.querySelector("ul.list");
    h1Text.style.color = "black";
    buttonTwo.style.backgroundColor = "white";
    buttonTwo.style.color = "black";
    header.style.borderColor = "black";
    list.style.color = "black";
    list.style.borderColor = "black";
    let h1TextOut = document.querySelector("h1");
    h1TextOut.onmouseout = function () {
        h1TextOut.style.color = "black";
    }
    let listOff = document.querySelector("ul.list");
    listOff.onmouseout = function () {
        listOff.style.color = "black";
    }
}

window.onload = function () {
    setOnMouseOverAttribute();
    setOnMouseOutAttribute();
    setFormSubmissionEventHandler();
    darkMode();
    lightMode();
}




