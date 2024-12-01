const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let color = e.target.id;
        switch (color) {
            case "yellow":
                body.style.backgroundColor = color;
                console.log(`${color}`);
                break
            case "white":
                body.style.backgroundColor = color;
                console.log(`${color}`);
                break
            case "grey":
                body.style.backgroundColor = color;
                console.log(`${color}`);
                break
            case "blue":
                body.style.backgroundColor = color;
                console.log(`${color}`);
                break
        }
    })
})