firstloop: for (let i = 0; i < 10; i++) {
    secondloop: for (let j = 0; j < 10; j++) {
        if (i === j) {
            continue firstloop;
            break firstloop;
        }
    }
}
