export default function bs_list(haystack: number[], needle: number): boolean {
    let lowPoint = 0; // lowPoint is inclusive: The element at lowPoint is always included in the search range.
    let highPoint = haystack.length; // highPoint is exclusive: The element at highPoint is always excluded from the search range.
    let i = 1;

    do {
        const midPoint = Math.floor(lowPoint + (highPoint - lowPoint) / 2);
        const value = haystack[midPoint];
        i++;
        if (value === needle) {
            return true;
        } else if (value > needle) {
            highPoint = midPoint;
        } else {
            lowPoint = midPoint + 1;
        }
    } while (lowPoint < highPoint);

    return false;
}
