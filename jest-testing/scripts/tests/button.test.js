/**
 * @jest-environment jsdom
 */

// install the jsdom environment: $ npm install -D jest-environment-jsdom
const buttonClick = require("../button");

/*
// It is a setup function that ensures a clean testing environment before each tests runs.
// It resets/clears the HTML content of the body element
// and inserts a new p element with the id of "par".
beforeEach(() => {
  document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () => {
  test("expects p content to change", () => {
    // Testing the buttonClick function.
    buttonClick();
    // Checking that the content of the p element with the id of "par" is equal to "You Clicked".
    expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
  });
});
*/

// Refactoring the above code.
// Before all test cases, load the entire HTML page into Jest for testing as the page can be changed dynamically.
// This code will be the same for every HTML file that you want to load into the DOM.
beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.write(fileContents);
  document.close();
});

describe("DOM tests 2", () => {
  test("expects p content to change", () => {
    // Testing the buttonClick function.
    buttonClick();
    // Checking that the content of the p element with the id of "par" is equal to "You Clicked".
    expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
  });
  test("h1 should exist", () => {
    expect(document.getElementsByTagName("h1").length).toBe(1);
  });
});