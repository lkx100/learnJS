const hex = "0123456789ABCDEF";

const validRandomColor = function() {
    let randomColorCode = "#";
    for (let i = 0; i < 6; i++) 
        randomColorCode += hex[Math.floor(Math.random() * 16)];
    return randomColorCode;
}

var setIntervalID;

document.getElementById("start").addEventListener("click", function(){
    console.log("Color Changing Started ...");
    setIntervalID = setInterval(function(){
        let hexColor = validRandomColor();
        console.log(hexColor);
        document.querySelector("body").style.backgroundColor = hexColor;
    }, 1000);
});

document.getElementById("stop").addEventListener("click", function(){
    if (setIntervalID === undefined) console.log("Start the Color Change Effect first");
    else {
        console.log("Color Changing STOPPED!");
        clearInterval(setIntervalID);
        setIntervalID = undefined;
    }
});
