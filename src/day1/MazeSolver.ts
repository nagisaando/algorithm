// we will find the path from start to goal
// example maze (2 dimension array):
// ['#', '#', '#', 'E', '#'
//  '#', '#', ' ', ' ', '#',
//  '#', ' ', ' ', '#', '#',
//  '#', ' ', '#', '#', '#',
//  '#', 'S', '#', '#', '#']

function walk(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
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
        return true;
    }

    // if it's already in the place before
    if (seen[current.y][current.x]) {
        return false;
    }
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {}
