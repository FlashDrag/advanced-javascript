const addition = require("../calc");

describe("Calculator", () => {
  describe("Addition fuction", () => {
    test("should return 42 for 20 + 22", () => {
      expect(addition(20, 22)).toBe(42);
    })
    test("should return 402 for 31 + 73", () => {
      expect(addition(42, 31)).toBe(73);
    })
    // other potential test ideas:
    /*
    - test for no parameters
    - test for missing parameter
    - string as one or both parameters
    - undefined as a param
    - Does it work with floating point numbers?
    - negative nubers
    */
  });
  describe("Subtraction fuction", () => {

  });
  describe("Multiply fuction", () => {

  });
  describe("Division fuction", () => {

  });
})