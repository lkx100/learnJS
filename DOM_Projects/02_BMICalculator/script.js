const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if (isNaN(height) || height < 0 || isNaN(weight) || weight < 0) result.innerHTML = "Invalid Values";
    else {
        const ans = (weight / ((height*height)/10000)).toFixed(2);
        if (ans < 18.6) result.innerHTML = `BMI: ${ans} | Under Weight`;
        else if (ans < 24.9) result.innerHTML = `BMI: ${ans} | Normal Range`;
        else result.innerHTML = `BMI: ${ans} | Over Weight`;
    }
})