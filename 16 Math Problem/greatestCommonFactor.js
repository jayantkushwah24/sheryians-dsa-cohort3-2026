// Every recursive call pauses the current function
// It waits for the inner call to finish
// Stack grows until base case hits
// Then everything resolves in reverse order
// Recursion = Deferred returns stacked on top of each other

let num1 = 20;
let num2 = 44;

// subtraction-based Euclidean algorithm.
function greatestCommonFactor3(num1, num2) {
  while (num1 > 1 && num2 > 1) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
    if (num1 == num2) return num1;
  }
}
// console.log(greatestCommonFactor3(num1, num2));

// subtraction-based Euclidean algorithm in recursive way
function greatestCommonFactor4(num1, num2) {
  if (num1 == num2) return num1;
  if (num1 > num2) {
    // “Before I return anything, I need the result of another function call.”
    return greatestCommonFactor4(num1 - num2, num2);
  } else {
    return greatestCommonFactor4(num1, num2 - num1);
  }
}
// console.log(greatestCommonFactor4(num1, num2));

//Euclidean algorithm
function greatestCommonFactor5(num1, num2) {
  if (num2 == 0) return num1;
  return greatestCommonFactor5(num2, num1 % num2);
}
console.log(greatestCommonFactor5(num1, num2));

// brute force approach
function greatestCommonFactor(num1, num2) {
  for (let i = num1; i >= 1; i--) {
    if (num1 % i == 0 && num2 % i == 0) {
      return i;
    }
  }
}
// console.log(greatestCommonFactor(num1, num2));

// brute force approach with recursive way
function greatestCommonFactor2(num1, num2, i) {
  if (i == 1) return 1;
  if (num1 % i == 0 && num2 % i == 0) {
    return i;
  }
  return greatestCommonFactor2(num1, num2, i - 1);
}

let i = Math.min(num1, num2);
// console.log(greatestCommonFactor2(num1, num2, i));
