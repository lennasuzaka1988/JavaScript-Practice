var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button")

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomizingHexCode() {
    var hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var colorCode = "#";

    while (colorCode.length < 7) {
        colorCode += hexDigits[Math.floor(Math.random() * hexDigits.length)]
    }
    return colorCode
}

function newHex() {
    var hexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var colorCode = "#";
    while (colorCode.length < 7) {
        colorCode += hexNum[Math.floor(Math.random() * hexNum.length)]
    }
    return colorCode
}

function setGradientRandom() {
    return body.style.background =
        "linear-gradient(to right, " + randomizingHexCode() + "," + newHex() + ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener('click', setGradientRandom);



