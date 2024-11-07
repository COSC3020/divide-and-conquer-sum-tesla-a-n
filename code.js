function divideAndConquerSum(a) {
    if (a.length === 0) {
        return 0; // Return 0 for an empty array
    } else if (a.length === 1) {
        return a[0]; // Return the single element
    } else if (a.length === 2) {
        // Sum two elements directly because we're thirding the lists
        return a[0] + a[1];
    }

    const split = Math.floor(a.length / 3);
    const left = divideAndConquerSum(a.slice(0, split)); //first third
    const mid = divideAndConquerSum(a.slice(split, split * 2)); //middle third
    const right = divideAndConquerSum(a.slice(split * 2));  //last third

    // Sum the results of left, mid, and right
    return left + mid + right;
}
/*
const array = [38, 27, 43, 3, 9, 82, 10, 0];
const summ = divideAndConquerSum(array);
console.log("Sum:", summ); */
