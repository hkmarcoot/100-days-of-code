[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6871225&assignment_repo_type=AssignmentRepo)
# Recursion

# What is a recursive function?

A recursive function is a function designed to call itself directly or indirectly. Using recursion, a problem can be solved by returning the value call of the same particular function.

A recursive function needs to be terminated at some point. The return of a recursive function is usually based on internal conditions which forwards the logic down to a new iteration until the base case is met.

# Base cases in recursive functions.

⚠️ When writing a recursive function remember to write your base case! The base case is that iteration of a recursive function that does not need an additional recursion to solve the problem. Base cases are mandatory on recursive functions. Without a base case a recursive function will never terminate leading it to an infinite loop.

In this workshop you will be tasked to refactor the following functions to recursive functions.

Note: Once you've refactored the code you can check if the solution is correct by running the tests for each task. Check the scripts in package.json to see how to run each test individually.

## Task 1: Sum of n Natural numbers

👉 Use a recursive function to sum all values from 0 to given number and return the result.

## Task 2: Sum all even numbers

👉 Use a recursive function to sum all even numbers from 0 to given number and return the result.

## Task 3: Number exponent (power)

[Definition of Power](https://www.mathsisfun.com/definitions/power.html#:~:text=The%20power%20(or%20exponent)%20of,and%20above%20the%20base%20number.&text=But%20power%20can%20also%20mean,is%20also%20called%20the%20power.)

👉 Use a recursive function to return the value of an exponent operation from given number and power.

## Task 4: Factorial

[Factorials: What Are They, How To Calculate Them and Examples](https://www.indeed.com/career-advice/career-development/how-to-calculate-factorial)

👉 Use a recursive function to return the factorial to given number.

## Task 5: Fibonacci

[Fibonacci Sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html)

Given an index number N return the value of the Fibonacci sequence, where the sequence is:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

👉 Use a recursive function to return the value of the Fibonacci sequence at index number N.

## Bonus:

⭐ Create a recursive function to console.log all the names of the children for the following tree:

```
const tree = {
  name: 'John',
  children: [
    {
      name: 'Zoe',
      children: []
    },
    {
      name: 'Bob',
      children: [
        {
          name: 'Joe',
          children: []
        },
        {
          name: 'Eloise',
          children: []
        }
      ]
    }
  ]
}
```