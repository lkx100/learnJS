const prompt = require("prompt-sync")()

const shouldWeContinue = prompt("Shall we Start ? ")

function getnumber(numberString) {
    while (true) {
        const num = parseInt(prompt("Enter Number " + numberString + ": "))
        if (isNaN(num)) console.log("Invalid Number")
        else return num
    }
}

if (shouldWeContinue.toLowerCase() === "y") {
    console.log("Lets Begin")
    let n1 = getnumber(1)
    let n2 = getnumber(2)
    let opr = prompt("Which operation you want to do ? ")
    switch (opr) {
        case "+":
            console.log("Result = ", n1+n2)
            break;
        case "-":
            console.log("Result = ", n1-n2)
            break;
        case "*":
            console.log("Result = ", n1*n2)
            break;
        case "/":
            if (n2 != "0") console.log("Result = ", n1/n2)
            else console.log("Division By 0 Not Possible")
            break;
        default:
            console.log("Invalid Operation")
    }
}
else if (shouldWeContinue.toLowerCase() === "n") {
    console.log("Bye :(")
}
else {
    console.log("Invalid Input")
    console.log("y or Y -> Yes")
    console.log("n or N -> No")
    console.log("Try Again with proper Input")
}