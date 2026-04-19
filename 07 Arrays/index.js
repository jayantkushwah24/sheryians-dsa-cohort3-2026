let arr = [1, 2, 3, 4, 5];

arr.push(6); // Adds 6 to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

arr.pop(); // Removes the last element (6) from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.unshift(0); // Adds 0 to the beginning of the array
console.log(arr); // Output: [0, 1, 2, 3, 4, 5]

arr.shift(); // Removes the first element (0) from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.splice(2, 1); // Removes 1 element at index 2 (the number 3)
console.log(arr); // Output: [1, 2, 4, 5]

arr.splice(2, 0, 3); // Inserts 3 at index 2 without removing any elements
console.log(arr); // Output: [1, 2, 3, 4, 5]

let slicedArr = arr.slice(1, 4); // Creates a new array with elements from index 1 to 3
console.log(slicedArr); // Output: [2, 3, 4]

let index = arr.indexOf(3); // Finds the index of the first occurrence of 3
console.log(index); // Output: 2

let includesFour = arr.includes(4); // Checks if the array includes the number 4
console.log(includesFour); // Output: true

let length = arr.length; // Gets the length of the array
console.log(length); // Output: 5

arr.fill(0); // Fills the array with 0
console.log(arr); // Output: [0, 0, 0, 0, 0]

let arr2 = new Array(7); // Creates a new array with 7 undefined elements
console.log(arr2); // Output: [undefined, undefined, undefined, undefined, undefined, undefined, undefined]

arr2.fill(1); // Fills the array with 1
console.log(arr2); // Output: [1, 1, 1, 1, 1, 1, 1]

