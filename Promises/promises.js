const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async Task is Completed');
        resolve();
    }, 1000);
});

promise1.then(function() {
    console.log('Promise Completed');
})

const p3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Promise Started ...');
        resolve({username: "Lucky", email: "lk@gmail.com"});
    }, 1000);
})

p3.then(function(user) {
    console.log('Promise Resolved!');
    console.log(user);
})

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username: "Lucky", password: "1234"});
        } else {
            reject("Some Error Occured!");
        }
    }, 2000);
})

myPromise
.then((user) => {
    console.log(user);
    return user.password;
})
.then((password) => {
    console.log(password);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('Thank You, Task is Performed!');
})
