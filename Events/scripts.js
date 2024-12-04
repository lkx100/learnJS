// document.getElementById('river').addEventListener('click', function(e) {
//     console.log("River Clicked");
//     e.stopPropagation();  // No event bubbling: stop propagation imediately after clicked.
//     if (this.className === "") console.log(`No class assigned to ${this.id}`);
//     else console.log(`Class for ${this.id}: \"${this.className}\"`);
// }, false);

// document.getElementById('images').addEventListener('click', function(e) {
//     console.log("Images Clicked");
// }, false);

const google = document.getElementById("google");
google.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Google Clicked");
}, false);

/*
event propagation (how the event flows in a DOM Tree)
false: event bubbling  --> inside to outside
true: event capturing  --> outside to inside
*/

const images = document.getElementById("images")
images.addEventListener("click", function(e) {
    console.log(e.target.tagName);
    // console.log(e.target);
    // console.log(e.target.parentNode);
    const removeFromList = e.target.parentNode;
    // removeFromList.remove();
    if (e.target.tagName === "IMG") removeFromList.parentNode.removeChild(removeFromList);
})
