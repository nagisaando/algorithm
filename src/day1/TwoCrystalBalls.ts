// O (Square root of N)
export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length)); //  Math.floor returns integer so it can jump the square root of n amount in the array. For example, in case of square root of 3, it will return 1

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    // j is like the another crystal ball.
    for (let j = 0; j <= jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
