const applyScript = (src, callback) => {
    const script = document.createElement("script");
    script.src = src;
    console.log(script.onload);
    script.onload = () => callback(script);
    console.log(script.onload);
    document.head.append(script);
}

//
// applyScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     alert(`Script ${script.src} loaded!`);
// })

const promiseTest = () => {
    const promiseResult = new Promise((resolve, reject) => {
        const isSuccess = true;

        if (!isSuccess) {
            setTimeout(() => {
                reject(new Error("Wow! Something happen!"));
            }, 1000);
        }

        setTimeout(() => {
            resolve('done!');
        }, 1000);
    });

    const promiseSuccess = result => {
        console.log(result);
    };

    const promiseError = error => {
        console.error(error);
    }

    promiseResult.then(promiseSuccess, promiseError);
}


const applyScriptPromise = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Wow! Something bad happen!"));

        document.head.append(script);
    });
}
//
// const promise = applyScriptPromise('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js');
//
// promise
//     .then(script => {
//         throw new Error('Sorry, you are gay');
//     })
//     // .catch(error => console.error(error)); // Здесь поймается ошибка
//
// promise.catch(error => console.error(error));

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// delay(3000).then(() => alert('выполнилось через 3 секунды'));

function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    div.ontransitionend(() => {
        callback
    })

    setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
    }, 0);
}

showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});

