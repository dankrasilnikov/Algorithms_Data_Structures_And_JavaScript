console.log(x); //undefined
var x = 10;

function outer() {
    console.log(y); //undefined
    let y = 20;

    function inner() {
        console.log(z); // 30
        var z = 30;
        if (!w) {
            let w = 40;
        }
        console.log(w); // undefined
    }

    inner();
    console.log(z); // 30
}

outer();
