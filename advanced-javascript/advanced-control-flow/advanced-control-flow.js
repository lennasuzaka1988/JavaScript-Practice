// Syntax for ternary operator:

// condition ? expr1 : expr2;

// Is true or false? If true provide this value. If false provide expr2

function isUserValid(bool) {
    return bool;
}

// var answer = isUserValid(false) ? "You may enter" : "Access Denied"


// var automatedAnswer =
//     "Your account # is " + ( isUserValid(true)) ? "1234" : "not available."

function condition() {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access denied";
    }
}

// Syntax: Switch statements

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You encounter a monster";
            break;
        case "back":
            whatHappens = "You arrived home";
            break;
        case "right":
            whatHappens = "You found a river";
            break;
        case "left":
            whatHappens = "You run into a troll";
            break;
        default:
            whatHappens = "Please enter a valid direction"
    }
    return whatHappens;
}

console.log(moveCommand("right"))