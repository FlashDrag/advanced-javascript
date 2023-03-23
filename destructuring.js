// Destructuring arrays
let ages = [30, 26, 27];
let [john, mary, joe]  = ages;
console.log(mary);  // 26


// Destructuring objects
let jobs = {
  mike: "designer",
  jill: "developer",
  alicia: "accountant"
};

let {mike, jill, alicia} = jobs;
console.log(alicia);  // accountant


// Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);  // english french

// skip values by leaving commas in place of the skipping value
let [, maryNative, , marySecondary] = languages;
console.log(maryNative, marySecondary);  // french german

// destructuring subsets in objects
let languages2 = {
  firstLanguage: 'english',
  secondLanguage: 'french',
  thirdLanguage: 'german',
  fourthLanguage: 'japanese'
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);  // english german


// Using rest parameter syntax
// array
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);  // apple
console.log(secondFavorite);  // orange
console.log(others);  // ['banana', 'peach', 'cherry']

// object
let favoriteFoods = {
  brian: "pizza",
  anna: "pasta",
  sarah: "vegeterian",
  andrea: "steak"
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);  // pizza
console.log(anna);  // pasta
console.log(rest);  // {sarah: 'vegeterian', andrea: 'steak'}
