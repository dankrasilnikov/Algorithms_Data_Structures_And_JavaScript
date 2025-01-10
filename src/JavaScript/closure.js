function useState() {
    let value = 0;
    let aboba = 0;
    return function() {
        return value++
    };
}

const getValue = useState();

console.log(getValue());
console.log(getValue());
