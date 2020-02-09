//var test = require('tape');
var todoFunctions = require("./logic");

/// Testing the addTodo()
test("Testing addTodo(), it should return the array plus the new object", function() {
  const actual = todoFunctions.addTodo([], "play football");

  const expected = [{ id: 1, description: "play football", done: false }];
  expect(actual).toEqual(expected);
});

// Testing the deleteTodo()
test("Testing deleteTodo(), it should return a new array and delete the target object", function() {
  const todoArr = [
    { id: 1, description: "First task", done: false },
    { id: 3, description: "Second task", done: false },
    { id: 2, description: "Third task", done: false }
  ];

  const actual = todoFunctions.deleteTodo(todoArr, 3);

  const expected = [
    { id: 1, description: "First task", done: false },
    { id: 2, description: "Third task", done: false }
  ];

  expect(actual).toEqual(expected);
});

//Testing the markTodo function
test("Testing markTodo(), it should change between done and not done yet", () => {
  const todoArr = [
    { id: 10, description: "Eating Breakfast", done: false },
    { id: 15, description: "Visting my grandma", done: true }
  ];
  const actual = todoFunctions.markTodo(todoArr, 10);
  const expected = [
    { id: 10, description: "Eating Breakfast", done: true },
    { id: 15, description: "Visting my grandma", done: true }
  ];
  expect(actual).toEqual(expected);
});

test("Testing markTodo(), it should change between done and not done yet", () => {
  const todoArr = [
    { id: 10, description: "Eating Breakfast", done: false },
    { id: 15, description: "Visting my grandma", done: true }
  ];
  const actual = todoFunctions.markTodo(todoArr, 15);
  const expected = [
    { id: 10, description: "Eating Breakfast", done: false },
    { id: 15, description: "Visting my grandma", done: false }
  ];
  expect(actual).toEqual(expected);
});
