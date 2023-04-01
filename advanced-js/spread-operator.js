// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)
// first array is changed too
console.log(arr1)  // [1, 2, 3, 4]

// Copying an array
let arr3 = [4, 5, 6]
let arr4 = [...arr3]
arr4.push(7)
console.log(arr3) // [4, 5, 6]
console.log(arr4) // [4, 5, 6, 7]

// Copying an object
let obj1 = {a: 1, b: 2, c: 3}
let obj2 = {...obj1, d: 4}
console.log(obj2)  // {a: 1, b: 2, c: 3, d: 4}
// overwrite property and assign it to the new obj
let obj3 = {...obj1, b: 0}
console.log(obj3)  // {a: 1, b: 0, c: 3}

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z" ]
console.log(arr5)