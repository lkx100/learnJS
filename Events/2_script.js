var text = document.querySelector(".name");
const changeName = function() {
    console.log(text.innerHTML);
    text.innerHTML = "Unknown";
    console.log(text.innerHTML);
}

var changetext;

document.querySelector(".start").addEventListener("click", function(e) {
    changetext = setTimeout(changeName, 2000);
    console.log("Starting ...");
});

var interval = setInterval(function(){
    console.log("Hello World");
}, 1000);

document.querySelector(".stop").addEventListener('click', function(e) {
    console.log("Stopping ...");
    clearTimeout(changetext);
    clearInterval(interval);
    console.log("Text Not Changed");
});

