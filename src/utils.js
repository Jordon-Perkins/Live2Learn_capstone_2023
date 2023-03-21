// generator gives me one chunk at a time
export function chunks(arr, n) {
    var output = []
    for (let i = 0; i < arr.length; i += n) {
        output.push(arr.slice(i, i + n));
    }
    return output
}
