function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1); // for sorting we don't include pivot, because pivot position is already "sorted"
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            // swapping arr[i] to before pivot point
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    // moves pivot after the idx that is used to swap smaller values to left
    // it will be [----smaller values---, pivot, ---higher values---], and pivot is "sorted"
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1); // low inclusive, high inclusive
}

// example
// qs([8,7,6,4,5], 0, 4)
// ├─ qs([4,5,6,8,7], 0, 0)    → [4] (base case)
// └─ qs([4,5,6,8,7], 2, 4)
//    ├─ qs([4,5,6,7,8], 2, 2) → [6] (base case)
//    └─ qs([4,5,6,7,8], 4, 4) → [8] (base case)
