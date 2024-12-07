document.getElementById("request").addEventListener("click", function(e) {
    const url = "https://api.github.com/users/lkx100";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {   // this method runs on every change in state
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            const name = data.name;
            const followers = data.followers;
            const username = data.login;
            const location = data.location;
            const avatar_url = data.avatar_url;
            // console.log(data);
            const insert = document.querySelector(".insert");
            const card = document.createElement("div");
            card.innerHTML = `
                <h2>Name: ${name}</h2>
                <h2>Username: ${username}</h2>
                <img src="${avatar_url}">
                <h3>Followers: ${followers}</h3>
                <h3>Location: ${location}</h3>
            `;
            if (!insert.hasChildNodes()) insert.appendChild(card);
            else console.log("Card Already been displayed!");
        }
    }
    xhr.send();
});

document.getElementById("clear").addEventListener("click", function(e) {
    const insert = document.querySelector(".insert");
    if (!insert.hasChildNodes()) {
        console.log("No DATA Fetched yet!");
    } else {
        insert.innerHTML = "";
        console.log("CLeared");
    }
});
