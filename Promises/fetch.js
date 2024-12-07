const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            console.log('Promise made...');
            // https://jsonplaceholder.typicode.com/users
            resolve("Hehe");
        }
        else {
            reject('Something went wrong')
        }
    }, 1000)
})

async function consumeMyPromise() {
    try {
        const response = await myPromise;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumeMyPromise();

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('Promise made!');
})
