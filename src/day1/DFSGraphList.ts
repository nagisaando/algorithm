function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (seen[curr]) {
        return false;
    }

    // recurse
    // pre
    seen[curr] = true;
    path.push(curr);

    if (curr === needle) {
        return true;
    }

    const list = graph[curr];

    for (let i = 0; i < list.length; i++) {
        const edge = list[i];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();
    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const path: number[] = [];
    const seen: boolean[] = new Array(graph.length).fill(false);

    walk(graph, source, needle, seen, path);

    if (path.length) {
        return path;
    } else {
        return null;
    }
}
