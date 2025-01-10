import {SEARCH_NUMBERS_ITEM, SORTED_NUMBERS_ARR} from "../mockData";


export const binarySearchCycle= (arr: number[], goal: number): number | null => {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid = Math.round((high + low) / 2);

        if(arr[mid] === goal) return mid;
        if(arr[mid] > goal) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}


console.log(binarySearchCycle(SORTED_NUMBERS_ARR, SEARCH_NUMBERS_ITEM));
