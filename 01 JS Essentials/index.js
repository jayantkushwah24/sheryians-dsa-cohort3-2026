// difference between var, let and const
let city = "dhar";
city = "indore";
const firstName = "jayant";
// name = "mahi"; Assignment to constant variable not allowed
// console.log(lastName); // undefined
var lastName = "kushwah";
// console.log(lastName);

//sum of integer
let a = 10;
let b = 20;
let sum = a + b;
// console.log(sum);

// relationship between string and integer
// string + string = string (concatenation)
// string + integer = string (concat)
let s1 = "jayant";
let s2 = "kushwah";
let s3 = s1 + s2;
// console.log(s3);
let i1 = 10;
// console.log(s1 + i1); //jayant10
// console.log(typeof (s1 + i1)); //string
// js engine works like if it finds two operand and one operator then engine solve it first
// console.log("the sum of " + a + " and " + b + " is " + a + b);
// console.log(a + b + "the sum of " + a + " and " + b + " is ");
// + has only two function :- (1)if both operands are integer then add
// (2) if both or one operand is string the concat
console.log("1" + 1);
// - has only one function i.e. subtration
console.log("1" - 1);

// swap the value in variales
let x = 8;
let y = 5;
console.log(x, y);
x = x + y; //13
y = x - y; //8
x = x - y; //5
console.log(x, y);
// swapping with destructuring array
[x, y] = [y, x];
console.log(x, y);
