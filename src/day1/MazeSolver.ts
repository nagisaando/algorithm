// we will find the path from start to goal
// example maze (2 dimension array):
// [['#', '#', '#', 'E', '#'],
//  ['#', '#', ' ', ' ', '#'],
//  ['#', ' ', ' ', '#', '#'],
//  ['#', ' ', '#', '#', '#'],
//  ['#', 'S', '#', '#', '#']]

// Big O is O of N
const dir = [
    //  [x, y]
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // top
    [0, 1], // bottom
];
function walk(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
) {
    // [defining base case]

    // if it's off the map
    if (
        current.x < 0 ||
        current.x >= maze[0].length ||
        current.y < 0 ||
        current.y >= maze.length
    ) {
        return false;
    }
    // if it's on a wall
    if (maze[current.y][current.x] === wall) {
        return false;
    }
    // if it's on goal
    if (current.x === end.x && current.y === end.y) {
        path.push(end);
        return true;
    }

    // if it's already in the place before
    if (seen[current.y][current.x]) {
        return false;
    }

    // [recurse]
    // 3 steps for recurse:
    // 1. pre
    path.push(current);
    seen[current.y][current.x] = true;
    // 2. recurse
    for (let i = 0; i < dir.length; i++) {
        // we loop every direction
        const [x, y] = dir[i];
        if (
            // if we find the end, walk() returns true
            walk(
                maze,
                wall,
                {
                    // this is new current, for example if dir's x = 1, y = 0,
                    // the new current goes right.
                    x: current.x + x,
                    y: current.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }
    // 3. post
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        // we are making seen array something like
        // [[false, false, false]
        //  [false, false, false]
        //  [false, false, false]]
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    console.log(path);
    return path;
}
