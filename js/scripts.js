
window.onload = function () {
    let h1TextOn = document.querySelector("h1");
    let listOn = document.querySelector("ul.list");
    h1TextOn.onmouseover = function () {
        h1TextOn.style.color = "yellow";
        listOn.onmouseover = function () {
            listOn.style.color = "yellow";
        }
    };

    let h1TextOut = document.querySelector("h1");
    let listOff = document.querySelector("ul.list");
    h1TextOut.onmouseout = function () {
        h1TextOut.style.color = "black";
        listOff.onmouseout = function () {
            listOff.style.color = "black";
        }
    };
};

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
    let h1TextOut = document.querySelector("h1");
    h1TextOut.onmouseout = function () {
        h1TextOut.style.color = "white";
    }
    let listOff = document.querySelector("ul.list");
    listOff.onmouseout = function () {
        listOff.style.color = "white";
    };
};


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
    let h1TextOut = document.querySelector("h1");
    h1TextOut.onmouseout = function () {
        h1TextOut.style.color = "black";
    }
    let listOff = document.querySelector("ul.list");
    listOff.onmouseout = function () {
        listOff.style.color = "black";
    }
};


