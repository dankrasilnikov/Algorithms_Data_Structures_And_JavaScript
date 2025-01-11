export const selectionSort = (arr: number[]) => {
    for(let j = 0; j< arr.length - 1; j++) {

        let i = j;
        let min = j;

        while (i < arr.length) {
            if(arr[i] < arr[min]) min = i;
            i++;
        }

        let tempValue = arr[j];

        arr[j] = arr[min];
        arr[min] = tempValue;
    }

    return arr;
}

console.log(selectionSort([0, 55, 2, 3, 77, 31, 3252, 64, 1161, 3, 2]))
