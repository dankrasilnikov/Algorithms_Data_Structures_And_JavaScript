const controller = new AbortController();
const signal = controller.signal;

fetch('https://jsonplaceholder.typicode.com/posts', {signal})
    .then((response) => {
        response.json();
    }).then(data => console.log(data))
    .catch((error) => {
        if (error.name === 'AbortError') {
            console.log('Запрос был отменён');
        } else {
            console.error('Ошибка:', error);
        }
    });

queueMicrotask(() => {
        controller.abort();
    }
);
