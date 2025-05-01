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

        // we will find the next index element of where we want to insert the new node
        // since we already checked if the item exists in top condition, we can just be sure that it will return Node<T> by "as Node<T>;"
        const curr = this.getAt(idx) as Node<T>;

        const node = { value: item } as Node<T>;
        node.next = curr; // New node points to current node
        node.prev = curr.prev; // New node's prev points to current's prev
        curr.prev = node; // Current node's prev now points to new node
        if (node.prev) {
            node.prev.next = node; // Old prev node's next now points to new node
        }
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
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }
        return this.removeNode(curr);
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined;
        }
        return this.removeNode(node);
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr;
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        // ===========================
        // removing current item from the link list
        if (node.prev) {
            node.prev = node.next;
        }
        if (node.next) {
            node.next = node.prev;
        }
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }
        // ===========================

        // break current item from the linked list (clean up)
        node.next = node.prev = undefined;

        return node.value;
    }
}
