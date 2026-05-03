// why recursion?
// - it helps us in solving bigger/complex problems in a simple way.
// - we can convert recursive solution into iterative solution and vice versa.
// - space complexity is not constant because of recursive calls.

// how to understand/approach problem?
// 1. identify if you can breakdown bigger problem into smaller problem.
// 2. write the recurence relation. (f(n) = f(n-1) + f(n-2))
// 3. draw the recursive tree.
// 4. About the tree:
// - see the flow of the functions , how they are getting into stack.
// - identify the flow of left tree calls and right tree calls.
// - draw the tree and pointer again and again on pen paper.
// - use the debugger to see the flow
// 5. see how the values are returned at each step. see where the function 
// call function will come out. in the end you will come of the main function


function print(n) {
  // base condition
  if (n == 5) {
    console.log(n);
    return;
  }

  //body
  console.log(n);

  // recursive call
  // if you are calling function again and again , you can treat it as a separate call in a stack.
  print(n + 1);
}
print(1);
