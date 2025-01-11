export const selectionSort = (arr: number[]) => {
    for(let j = 0; j< arr.length - 1; j++) {

        let key = arr[j];
        let i = j + 1;
        let min = j;

        while (i < arr.length) {
            if(arr[i] < arr[min]) min = i;
            i++;
        }

        arr[j] = arr[min];
        arr[min] = key;
    }

    return arr;
}

console.log(selectionSort([0, 55, 2, 3, 77, 31, 3252, 64, 1161, 3, 2]));

export const selectionSort2 = (arr: number[]): number[] => {
    const n = arr.length;
    for (let j = 0; j < n - 1; j++) {
        let minIndex = j;

        for (let i = j + 1; i < n; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }

        if (minIndex !== j) {
            [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]];
        }
    }
    return arr;
}

console.log(selectionSort2([0, 55, 2, 3, 77, 31, 3252, 64, 1161, 3, 2]));

