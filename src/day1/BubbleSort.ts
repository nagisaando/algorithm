// O of N squared
// swap the number if the right index's number is smaller than the target index's
// after the first iteration, the last index becomes the largest number of the array
// repeat the comparison until there is one position (first index) is left, that means the whole array is sorted
// https://frontendmasters.com/courses/algorithms/bubble-sort/
export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        // [arr.length - 1 - i]
        // 1. "arr.length - 1": we can not loop the last element because we compare with the target element and target +1index element
        // 2. "- i": every iteration, the last element becomes the largest so "- n" excludes the last element

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
