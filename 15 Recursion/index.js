// 1. function calling function

// 2. body and defination of function are same

// 3. while the function has not done executing, it will remain in stack.

// 4. when a function finished executing , it will be removed from the stack and
// the flow of program is restored to where the function was called.

// 5. Base condition in recursion : condition where our recursion will
// stop making new calls

function message1() {
  console.log("Hello World!");
  message2();
}
function message2() {
  console.log("Hello World!");
  message3();
}
function message3() {
  console.log("Hello World!");
  message4();
}
function message4() {
  console.log("Hello World!");
  message5();
}
function message5() {
  console.log("Hello World!");
}
// message1();

function printNum1(n) {
  console.log(n);
  printNum2(2);
}
function printNum2(n) {
  console.log(n);
  printNum3(3);
}
function printNum3(n) {
  console.log(n);
  printNum4(4);
}
function printNum4(n) {
  console.log(n);
  printNum5(5);
}
function printNum5(n) {
  console.log(n);
}
printNum1(1);
