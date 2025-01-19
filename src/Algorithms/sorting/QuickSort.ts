export function recursiveQuickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let less = [];
    let greater = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] >= pivot) {
            greater.push(arr[i]);
        } else if(arr[i] < pivot) {
            less.push(arr[i]);
        }
    }

    return [...recursiveQuickSort(less), pivot ,...recursiveQuickSort(greater)];
}


console.log(recursiveQuickSort([5,1,2,4,8,2,2,2,4,9,13,866,223,55,2,8,4]))

