function divideAndConquerSum(a) {
    if (a.length <= 1){ //base case 1, if element is only element it is both sorted and the sum
        return a;
    } else if (a.length === 2) { //Cannot divide 2 by 3 so base case #2 avoids recursive errors
        const left = divideAndConquerSum(a.slice(0,1));
        const right = divideAndConquerSum(a.slice(1));
        return merge(left, [], right) //pass empty mid array
    }
        //Divides the array by 3 and then slices by thirds
    const split = Math.floor(a.length / 3);
    const left = divideAndConquerSum(a.slice(0, split));
    const mid = divideAndConquerSum(a.slice(split, (split*2)));
    const right = divideAndConquerSum(a.slice(split*2));

    return merge(left, mid, right);
}

function merge( left, mid, right){
    let result = [];
    let leftIndex = 0;
    let midIndex = 0;
    let rightIndex = 0;

    while( leftIndex < left.length && rightIndex < right.length && midIndex < mid.length){
        if (left[leftIndex] < mid[midIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else if (mid[midIndex] < right[rightIndex]){
            result.push(mid[midIndex]);
            midIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
        
    return result.concat(left.slice(leftIndex)).concat(mid.slice(midIndex)).concat(right.slice(rightIndex));
}

function sum(a){
    return a.reduce((total, num) => total + num, 0);
}

const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = divideAndConquerSum(array);
console.log("Sorted Array:", sortedArray); // Output: Sorted Array: (7) [3, 9, 10, 27, 38, 43, 82]

const total = sum(sortedArray);
console.log("Sum:", total); // Output: Sum: 212
