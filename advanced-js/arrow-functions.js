// ___Vanilla JS___
function addTwoNumbers(a, b) {
  return a + b
}
let sum = addTwoNumbers(3, 5)
console.log(sum)

// ___ES6___
// ES6 arrow functions should be defined as constans
// (This ensures that they can't be overwritten or misused later)
// => - 'fat arrow'

// Arrow func with parameters
const addTwoNumbers2 = (a, b) => {
  return a + b
}
let sum2 = addTwoNumbers2(3, 5)
console.log(sum2)

// Single line Arrow func with param (for small simple functions)
const addTwoNumbers3 = (a, b) => (a + b);  // (the parenheses in return statement are optional)
// or
const addTwoNumbers4 = (a, b) => a + b;

// Implicit return
const print = msg => console.log(msg)
print("Hello World")

const sayHi = () => console.log('Hi!')
sayHi()

// Returnning Multiple Lines
// The parenheses in return statement are required!
// This goes for using an explicit return statement inside a set of curly braces, too.
// If you need to return multiple lines of code, you must wrap whatever comes after the return keyword in parentheses.

// - implicit return
const returnMultipleLines = () => (
  `
  <p>
  This is multiline string!
  </p>
  `
)

// - explicit return
const returnMultipleLines2 = () => {
  return (
    `
    <p>
    This is multiline string!
    </p>
    `
  )
}
console.log(returnMultipleLines())