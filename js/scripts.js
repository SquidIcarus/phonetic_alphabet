function darkMode() {
    let buttonOne = document.querySelector("body");
    let header = document.querySelector("div.header")
    buttonOne.style.backgroundColor = "black";
    buttonOne.style.color = "white";
    header.style.borderColor = "white";
}

function lightMode() {
    let buttonTwo = document.querySelector("body");
    let header = document.querySelector("div.header");
    buttonTwo.style.backgroundColor = "white";
    buttonTwo.style.color = "black";
    header.style.borderColor = "black";
}