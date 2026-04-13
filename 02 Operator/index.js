// arithmetic operator
console.log(Math.floor(10 / 3)); // it ignores the values after decimal
console.log(10 % 3); //give remainder
console.log(1 % 3); // if divident is smaller than diviser then it always give divident
console.log(23423 % 10); // it gives last digit of the divident

// relational operator
console.log(10 < 9);
console.log(11 <= 12);
console.log(9 === 9);
console.log("11" == 11);
console.log(22 != 22);

// logical operator
console.log(12 > 4 && 23 < 45 && 6 < 7); // if all condition are true then only output is true
console.log(12 != 4 || 23 >= 45 || 6 < 7); // if any one condition is true then output is true
console.log(!(12 === "12")); // if the condition is true then it will return false and vice versa

// unary operator
let a = 5;
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);
