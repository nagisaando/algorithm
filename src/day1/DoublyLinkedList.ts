type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

// 1. attach the new node
// 2. break the old link
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head; // new node points to the current head
        this.head.prev = node; // current head points prev to new node
        this.head = node; // heads points to new head
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error(
                "We can not insert the node outside of the link chain",
            );
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;

        // for insert, we have to traverse the list
        // we will find the next index element of where we want to insert the new node
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        curr = curr as Node<T>;
        const node = { value: item } as Node<T>;
        node.next = curr; // New node points to current node
        node.prev = curr.prev; // New node's prev points to current's prev

        if (curr.prev) {
            curr.prev.next = node; // Old prev node's next now points to new node
        }

        curr.prev = node; // Current node's prev now points to new node
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
