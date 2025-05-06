function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // when it hits to the node that does not have any child (very bottom of the tree)
    if (!curr) {
        return path;
    }

    // pre

    // recursion
    walk(curr.left, path);
    walk(curr.right, path);
    // post

    path.push(curr.value);

    return path;
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
