// O(log N)

export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        if (this.length === 1) {
            this.data = [];
            this.length--;
            return out;
        }

        this.data[0] = this.data[this.length - 1];
        this.length--;
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        // this means idx already reached to the lowest position of the tree
        if (idx >= this.length) {
            return;
        }

        const leftChildIndex = this.leftChild(idx);
        const rightChildIndex = this.rightChild(idx);
        const leftChildValue = this.data[leftChildIndex];
        const rightChildValue = this.data[rightChildIndex];
        const currentValue = this.data[idx];

        // since we are filling from left to right,
        // if left index is greater than the length, that means children does not exist
        if (leftChildIndex >= this.length) {
            return;
        }

        // if the right value is smaller or greater than left value, and if the current value is greater than right value
        if (
            leftChildValue >= rightChildValue &&
            currentValue > rightChildValue
        ) {
            this.data[rightChildIndex] = currentValue;
            this.data[idx] = rightChildValue;
            this.heapifyDown(rightChildIndex);
        } else if (
            // if the left value is smaller than the right value, and if the current value is greater than left value
            rightChildValue > leftChildValue &&
            currentValue > leftChildValue
        ) {
            this.data[leftChildIndex] = currentValue;
            this.data[idx] = leftChildValue;
            this.heapifyDown(leftChildIndex);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }
        const parentIndex = this.parent(idx);
        const parentValue = this.data[parentIndex];
        const currentValue = this.data[idx];
        if (parentValue > currentValue) {
            this.data[parentIndex] = currentValue;
            this.data[idx] = parentValue;
            this.heapifyUp(parentIndex);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}
