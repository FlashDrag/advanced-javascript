// Filter is a array method that used to filter unwanted elements out
// of an array and return an array of only the elements for which callback func returned true

// Simple Filtering
const people = [
  {
    name: 'Mike',
    age: 23,
  },
  {
    name: 'John',
    age: 18,
  },
  {
    name: 'Jane',
    age: 20,
  },
];


const oldEnaugh = people.filter(person => person.age >= 21)
console.log(oldEnaugh)  // [ { name: 'Mike', age: 23 } ]

const john = people.filter(p => p.name === 'John')
console.log(john)  // [ { name: 'John', age: 18 } ]


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    proffesion: 'Developer',
    skills: [
      { name: 'html', yrsExp: 6 },
      { name: 'css', yrsExp: 5 },
      { name: 'javascript', yrsExp: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    proffesion: 'Designer',
    skills: [
      { name: 'html', yrsExp: 4 },
      { name: 'css', yrsExp: 5 },
      { name: 'javascript', yrsExp: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    proffesion: 'Developer',
    skills: [
      { name: 'html', yrsExp: 2 },
      { name: 'css', yrsExp: 1 },
      { name: 'javascript', yrsExp: 1 },
    ]
  },
];

const has5yearsExp = skill => skill.yrsExp >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
console.log(candidates)

// or in shorter form
const candidates2 = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExp >= 5);
  return strongSkills.length > 0;
});
console.log(candidates2);

// get canditate names using map
let names = candidates2.map(canditate => canditate.name);
console.log(names);  // [ 'Mark', 'Ariel' ]