function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // when it hits to the node that does not have any child (very bottom of the tree)
    if (!curr) {
        return path;
    }

    // pre
    path.push(curr.value);

    // recursion
    walk(curr.left, path);
    walk(curr.right, path);
    // post

    return path;
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
