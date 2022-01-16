# TDD starter…

This is the repo for a School of Code session on TDD.

We'll start by creating a function that calculates a scrabble score for a given word, and returns the score.

We'll keep extending the functionality from there.

**Don't read ahead, don't try to predict what the code might need later, write the simplest code for each step in turn.**

## Step 1

Write the tests, and the implementation, for each letter score, this lets us know that the basic single letter scores are correct. Use `.each` ([jest docs](https://jestjs.io/docs/api#testeachtablename-fn-timeout)) to keep your tests nice and short.

## Step 2

Write some tests for word scores. The tests should look much the same as in Step 1, but the implementation will start to get more complex.

## Step 3

Write a test to ensure our function throws an error if any of the characters given are outside of A-Z. You can use `.toThrow` ([jest docs](https://jestjs.io/docs/expect#tothrowerror)) to catch and check the error.

## Step 4

If a player uses all seven tiles, they should score a bonus of 50 points on top of the word score.

## Bonus (if you're here in plenty of time)

Extend the tests and function to accept both uppercase and lowercase letters, and score correctly.

**--- Regroup ---**

## Step 5

The board contains Premium squares that double, or triple, the letter score. Extend the function to accept these squares and calculate the score correctly.

## Step 6

Premium squares can also double, or triple, the word score.
