const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            console.log("Promise started...");
            resolve({username: "Lucky", age: 18});
        }
        else {
            reject("Error: Something went Wrong");
        }
    }, 2000);
});

// async await connot handle reject/errors directly (like catch) --> use try & catch block
async function consumePromise() {
    try {
        const response = await promise;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromise();
