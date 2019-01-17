

const flatten = (arr, skipNulls = false) => {
    if (arr == null || !Array.isArray(arr)) {
        throw `Invalid arguments. First argument must be an array. Was: ${arr}`
    }
    const flattener = (acc, curr) => {
        if (Array.isArray(curr)) {
            return curr.reduce(flattener, acc);
        }
        if (skipNulls && curr == null) {
            return acc;
        }
        acc.push(curr);
        return acc;
    }
    return arr.reduce(flattener, []);
}

module.exports = flatten;