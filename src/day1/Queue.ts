type Node<T> = {
    value: T;
    next?: Node<T>; // we don't know how many nodes are there, if there is always "next", so we make it optional
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        // checking if queue is empty
        if (!this.tail || !this.head) {
            this.tail = this.head = node;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const head = this.head; // save current head
        this.head = this.head.next; // update to new head

        head.next = undefined; // clean up (javascript does this for you so technically you don't need it)
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head.value;
    }
    // see the next value returned without mutating the state of queue
    peek(): T | undefined {
        return this.head?.value;
    }
}
