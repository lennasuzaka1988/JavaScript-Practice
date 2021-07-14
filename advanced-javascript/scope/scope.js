// Root Scope (window)
var fun = 5
function funFunction() {
    //child scope
    var fun = "hello";
    console.log(1, fun);
}

function funnerFunction() {
    //child scope
    var fun = "Bye";
    console.log(2, fun);
}

function funnestFunction() {
    // child scope
    fun = "Ahhhh";
    console.log(3, fun);
}

console.log("window", fun);

// naming conflict = lose access to original variable value