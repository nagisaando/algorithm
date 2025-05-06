function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // when it hits to the node that does not have any child (very bottom of the tree)
    if (!curr) {
        return path;
    }

    // pre

    // recursion
    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);
    // post

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
