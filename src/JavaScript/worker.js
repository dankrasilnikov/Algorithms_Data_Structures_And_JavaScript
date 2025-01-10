self.onmessage = (event) => {
    const data = event.data;

    const result = heavyCompution(data);
    console.log('Hey! I made it in a new thread!')
    self.postMessage(result);
}


const heavyCompution = (data) => {
    return data * data;
}
