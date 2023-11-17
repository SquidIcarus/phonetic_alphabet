
// Business Logic

let favoriteWords = [];
let para = document.createElement("p");
let favoriteWordsString = "I created an array with your favorite words and turned them into a string using a loop. Here they are... "
let prettyNeat = " Then I used JavaScript to insert them onto the page. Pretty neat eh?"
//let bold = document.createElement("bold"); cant figure out how to make the array "word" bold...



function getAndSetWordValues() {
    const wordInput1 = document.getElementById("wordInput1").value;
    const wordInput2 = document.getElementById("wordInput2").value;
    const wordInput3 = document.getElementById("wordInput3").value;



    document.querySelector("span#wordResult1").innerText = wordInput1;
    document.querySelector("span#wordResult2").innerText = wordInput2;
    document.querySelector("span#wordResult3").innerText = wordInput3;

    favoriteWords = [wordInput1, wordInput2, wordInput3];
    favoriteWords.forEach(function (word) {
        favoriteWordsString = favoriteWordsString.concat(" " + word + "...");
    });

    para.append(favoriteWordsString + prettyNeat);
    let p = document.getElementById("results");
    p.after(para);

}


// UI Logic

function setFormSubmissionEventHandler() {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        getAndSetWordValues();
        document.querySelector("div#results").removeAttribute("class");
    }
}

function setMouseAttributeH1() {
    const h1TextOn = document.querySelector("h1");
    h1TextOn.onmouseover = function () {
        h1TextOn.style.color = "yellow";

    }
}

function setMouseAttributeList() {
    const listOn = document.querySelector("ul.list");
    listOn.onmouseover = function () {
        listOn.style.color = "yellow";
    }
}

//function setOnMouseOutAttribute() {
//    let h1TextOut = document.querySelector("h1");
//    let listOff = document.querySelector("ul.list");
//    h1TextOut.onmouseout = function () {
//        h1TextOut.style.color = "black";
//        listOff.onmouseout = function () {
//            listOff.style.color = "black";
//        }
//    }
//}


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
    setMouseAttributeH1();
    setMouseAttributeList();
    //  setOnMouseOverAttribute();
    //  setOnMouseOutAttribute();
    setFormSubmissionEventHandler();
    darkMode();
    lightMode();
}




