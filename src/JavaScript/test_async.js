const crazyAsyncFunction = async () => {
    await new Promise((resolve, reject) => {
        resolve("000");
        reject('error');
    });
}

crazyAsyncFunction().then((value) => console.log('I am in microtask queue!'), (error) => console.log('Im in microtask queue!'));
setTimeout(() => { console.log('I am in task queue 1!'); }, 0);

let currentIndex = 0;
const chunkSize = 2;

requestAnimationFrame(() => {
    const veryHugeArray = [0, 1, 2, 3, 4, 5, 6, 7];
    const end = Math.min(currentIndex + chunkSize, veryHugeArray.length);
    for (let i = 0; i < veryHugeArray.length; i++) {
        veryHugeArray[i] += 1;
    }
    console.log('I am in task queue 2!');
})
console.log('I am just in call stack');
