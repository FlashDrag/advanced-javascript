// Reduce is an array method that used to reduce all elements of an array to a singular value
/*
On the 1-st iteration acc takes the 1-st value of the array if acc initial value is not specified
as a second parameter of reduce method "reduce(callback-func, initial_acc)""
*/

// Summing an array of numbers
let nums = [0, 1, 2, 3, 4, 5]
let sum = nums.reduce((acc, curr) => {
  console.log(
    `Accumulator: ${acc} Current value: ${curr} Total: ${acc + curr}`
  )
  return acc + curr
})
console.log(sum)
/* _result_
Accumulator: 0 Current value: 1 Total: 1
Accumulator: 1 Current value: 2 Total: 3
Accumulator: 3 Current value: 3 Total: 6
Accumulator: 6 Current value: 4 Total: 10
Accumulator: 10 Current value: 5 Total: 15
15
*/

// simplified version
let nums2 = [0, 1, 2, 3, 4, 5]
let sum2 = nums2.reduce((acc, curr) => acc + curr, 0)
console.log(sum2)  // 15


const teamMembers = [
  {
    name: 'John',
    proffesion: 'developer',
    yrsExp: 5,
  },
  {
    name: 'Jane',
    proffesion: 'designer',
    yrsExp: 4,
  },
  {
    name: 'Mike',
    proffesion: 'developer',
    yrsExp: 3,
  },
  {
    name: 'Ariel',
    proffesion: 'designer',
    yrsExp: 1,
  },
  {
    name: 'Mark',
    proffesion: 'manager',
    yrsExp: 10
  }
];

// Totaling a specific object property
let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExp, 0)
console.log(totalExp)  // 23

// Grouping by a property, and totaling it too
let expByProffesion = teamMembers.reduce((acc, curr) => {
  let proff = curr.proffesion;
  let yrsExp = curr.yrsExp;
  if (!acc[proff]) {
    acc[proff] = yrsExp
  } else {
    acc[proff] += yrsExp
  }
  return acc;
}, {})
console.log(expByProffesion)  // { developer: 8, designer: 5, manager: 10 }

// namesByProffesions
let namesByProffesions = teamMembers.reduce((acc, curr) => {
  let proff = curr.proffesion;
  let name = curr.name;
  if (!acc[proff]) {
    acc[proff] = [name];
  } else {
    acc[proff].push(name);
  }
  return acc;
}, {});
console.log(namesByProffesions);
/* {
  developer: [ 'John', 'Mike' ],
  designer: [ 'Jane', 'Ariel' ],
  manager: [ 'Mark' ]
} */