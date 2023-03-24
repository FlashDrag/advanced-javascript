/* Map is a array method that used to execute a callback function on every
element of an array and return a new array of the results

callback function - is a func that we pass as parameter to the method,
which will be called on every element of the array the method is operating on
*/

// Using a loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results)  // [2, 4, 6, 8, 10]

// Using map() method
const multByTwo = function (num) {
  return num * 2
}
const mapResults = nums.map(multByTwo)

// Simplified w/ map()
const simplified = nums.map(function(num) {return num * 2})

// Simplified w/ map() + arrow func
let arrow = nums.map(num => num * 2)


// With object
let students = [
  {
    id: 1,
    name: 'John',
    proffesion: 'developer',
    skill: 'javascript'
  },
  {
    id: 2,
    name: 'Jane',
    proffesion: 'designer',
    skill: 'css'
  },
  {
    id: 3,
    name: 'Jack',
    proffesion: 'developer',
    skill: 'html'
  }
];

let studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

// add ages
let ages = {john: 33, jane: 26, jack: 38};
let studentsWithIds2 = students.map(student => {
  let name = student.name.toLowerCase();
  let age = ages[name];
  let res = {...student, age: age};
  return res;
});
console.log(studentsWithIds2);
/* result:
[
  {
    id: 1,
    name: 'John',
    proffesion: 'developer',
    skill: 'javascript',
    age: 33
  },
  {
    id: 2,
    name: 'Jane',
    proffesion: 'designer',
    skill: 'css',
    age: 26
  },
  {
    id: 3,
    name: 'Jack',
    proffesion: 'developer',
    skill: 'html',
    age: 38
  }
]
*/