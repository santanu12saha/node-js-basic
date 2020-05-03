var somePromiseResolve = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey, It worked!');
    }, 2500);
});

somePromiseResolve.then((message) => {
    console.log(`Success: ${message}`);
});

var somePromiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Unable to fulfill promise');
    }, 2500);
});

somePromiseReject.then((message) => {
    console.log(`Success: ${message}`);
}, (errorMessage) => {
    console.log(`Error: ${errorMessage}`);
});