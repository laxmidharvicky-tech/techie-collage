const promise = new Promise(function (resolve,reject) {
    resolve("success");
})
promise.then(function (result) {
    console.log(result)
}).catch((err) => {
    console.log(err);
})