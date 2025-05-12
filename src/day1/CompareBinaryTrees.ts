export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // structure check
    // if the both reach to the end of the tree
    if (a === null && b === null) {
        return true;
    }

    // structure check
    // whether if either of the binary tree hit the end and the other is not
    if (a === null || b === null) {
        return false;
    }

    // value check
    if (a.value !== b.value) {
        return false;
    }

    // checking left part tree and right part of three
    return compare(a.left, b.left) && compare(a.right, b.right);
}
