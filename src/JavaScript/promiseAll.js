const promiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        const finishedPromises = [];
        let secondIndex = 0;

        for(let i = 0; i < promises.length; i++){
            promises[i].then((value) => {
                finishedPromises[i] = value;
                secondIndex++;
                if (secondIndex === promises.length) resolve(finishedPromises);
            }).catch(error => {
                reject(error);
            });
        }
    });
}

const resolve = (value, timeout) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(value);
    }, timeout);
});

const reject = (value, timeout) => new Promise((_, reject) => {
    setTimeout(() => {
        reject(value);
    }, timeout);
});


promiseAll([resolve(1, 100), resolve(2, 200), resolve(3, 300)]).then(
    result => {
        console.log(result);
    }
);
promiseAll([reject(1, 100), resolve(2, 200), resolve(3, 300)]).catch(
    error => {
        console.error(error);
    }
);
