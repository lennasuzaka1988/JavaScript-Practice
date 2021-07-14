var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var deleteButtons = document.getElementsByClassName("delete")


function inputLength() {
    return input.value.length;
}


function createListElement() {
    var lis = document.createElement("li");
    lis.appendChild(document.createTextNode(input.value));
    ul.appendChild(lis);
    input.value = "";
}


function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


button.addEventListener("click", addListAfterClick, deletion);


lis.forEach(function (li) {
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });
});

function deletion() {
    for(var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", removeLi, false);
    }
}

input.addEventListener("keypress", addListAfterKeypress);

function removeLi(event) {
    event.target.removeEventListener("click", removeLi, false);
    event.target.parentElement.remove();
}


// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)