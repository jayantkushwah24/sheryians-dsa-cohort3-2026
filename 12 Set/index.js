let set = new Set();
set.add(10);
set.add(50);
set.add(20);
set.add(30);
set.add(10);
// console.log(set);
set.delete(50);
// console.log(set);
// console.log(set.has(10));
// console.log(set.size);

// how to remove duplicate element
let arr = [1, 2, 34, 2, 4, 263, 554, 11, 8, 48, 42, 1, 11];
let arrSet = new Set();
for (let i = 0; i < arr.length; i++) {
  arrSet.add(arr[i]);
}
// console.log(arrSet);

let arrSet2 = new Set(arr);
// console.log(arrSet2);

let arr2 = [1, 8, 1, 8, 2, 3, 5, 3, 5, 7, 8, 8, 7];
let set2 = new Set();
for (let i = 0; i < arr2.length; i++) {
  if (set2.has(arr2[i])) {
    set2.delete(arr2[i]);
  } else {
    set2.add(arr2[i]);
  }
}
console.log(set2);
