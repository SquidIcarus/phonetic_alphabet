
window.onload = function () {
    let h1TextOn = document.querySelector("h1");
    h1TextOn.onmouseover = function () {
        h1TextOn.style.color = "yellow";
    };

    let h1TextOut = document.querySelector("h1");
    h1TextOut.onmouseout = function () {
        h1TextOut.style.color = "black";
    };
};

function darkMode() {
    let h1Text = document.querySelector("h1");
    let buttonOne = document.querySelector("body");
    let header = document.querySelector("div.header");
    h1Text.style.color = "white"
    buttonOne.style.backgroundColor = "black";
    buttonOne.style.color = "white";
    header.style.borderColor = "white";
    let h1TextOut = document.querySelector("h1");
    h1TextOut.onmouseout = function () {
        h1TextOut.style.color = "white";
    };
};

function lightMode() {
    let h1Text = document.querySelector("h1");
    let buttonTwo = document.querySelector("body");
    let header = document.querySelector("div.header");
    h1Text.style.color = "black";
    buttonTwo.style.backgroundColor = "white";
    buttonTwo.style.color = "black";
    header.style.borderColor = "black";
    let h1TextOut = document.querySelector("h1");
    h1TextOut.onmouseout = function () {
        h1TextOut.style.color = "black";
    };
};


