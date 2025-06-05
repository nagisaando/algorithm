// const matrix2: WeightedAdjacencyMatrix = [
//     // graph looks like this:
//     /*       0  1   2  3 */
//     /* 0 */ [0, 10, 0, 5], // if 0 points to the vertex, specifies with weight (0 points to 1 with weight 10)
//     /* 1 */ [0,  0, 0, 0], // 1 points to any vertex, so all of them are 0
//     /* 2 */ [1,  0, 0, 0],
//     /* 3 */ [0,  2, 2, 0],
// ];

// bfs(matrix2, 2, 0);

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    // graph looks like this:
    // [
    //         /*       0  1  2  3 */
    //         /* 0 */ [0,10, 0, 5], // if 0 points to the vertex, specifies with weight (0 points to 1 with weight 10)
    //         /* 1 */ [0, 0, 0, 0], // 1 points to any vertex, so all of them are 0
    //         /* 2 */ [1, 0, 0, 0],
    //         /* 3 */ [0, 2, 2, 0],

    // ];

    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1); // this means no element has parent yet

    seen[source] = true; // [false,false,true,false]

    const q: number[] = [source]; // [2]

    do {
        const curr = q.shift() as number; // we take out the current from q

        if (curr === needle) {
            // we found needle!
            break; // so we stop looping
        }

        // [1, 0, 0, 0], for the first loop for our case since 2 is the source
        const adjs = graph[curr];

        for (let i = 0; i < adjs.length; ++i) {
            // if there is no edge (connection between two nodes)
            if (adjs[i] === 0) {
                continue;
            }

            // if we have seen it before
            if (seen[i]) {
                continue;
            }

            // if we haven't seen it, and if there is edge
            // 1: we push it to q array
            // 2: mark it true in seen array
            // 3: mark where it came from

            seen[i] = true;
            prev[i] = curr; // we were using curr(parent) and looping children "for (let i = 0; i < adjs.length; ++i)", and the child's parent is curr

            console.log(i); // 0 (for the first loop)
            console.log(seen); // [true,false,true,false] (for the first loop)

            console.log(prev); // [2,-1,-1,-1] (first loop)

            q.push(i);
        }

        seen[curr] = true;
    } while (q.length);

    // build it backwards

    let curr = needle;
    const out: number[] = []; // this will hold the path from needle to the source

    // while curr has its parent
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr]; // set curr to its parent
    }

    if (out.length) {
        return [source].concat(out.reverse()); // we have to concat source because source has no parent, and we can not push to out array in the while loop because of " while (prev[curr] !== -1) {"
    }

    return null;
}
