export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        const curr = q.shift();
        if (!curr) {
            continue;
        }

        if (curr.value === needle) {
            return true;
        }

        // first in / first out
        // because q.shift() will pop off curr.left first (first in first out)
        q.push(curr.left);
        q.push(curr.right);
    }

    // we traverse the entire tree, and could not find needle, hence return false
    return false;
}
