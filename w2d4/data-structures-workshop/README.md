[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6449012&assignment_repo_type=AssignmentRepo)
# Data Structures Workshop: The Shop Needs You!

## Introduction

You have been hired by a local shop.  They want to implement some simple processes that deal with their shopping cart experience.  This Workshop takes you through the processes they want.

In the `main.js` file you will find some variables set up for you.  This is * NOT * already linked to the `index.html` file, but a blank `styles.css` is

## Section 1

### Task 1: I Don't Want To Sell This Any More

The shop owner has asked to remove the items from the inventory that are not healthy.  Using filter, remove from the inventory any items that are marked Not Healthy

## Section 2
### Task 1: No More Junk Food!

A trolley has been taken to the checkout but the customer noticed that some junk food items have mysteriously been added to their trolley. Remove all items that are not healthy.

### Task 2: Incorrect Item In The Bagging Area

The customer is now at the point they're running through the self checkout.  Inside this cart there are several items.  Unfortunately, some items in the cart have been recalled and are no longer available.  Remove all items from the cart that are marked for recall

### Task 3: Can I have a receipt?

The customer wants a receipt for this shopping cart. Using the shopping basket array and inventory object, create an array of objects that includes name, quantity and total price of product.  See the example below for a clearer example

 
```
[
  {
    name: ‘Chocolate bar’,
    quantity: 3,
    totalPrice: 6
  }
]
```

### Task 4: Bulk Buy Discount

The store has an offer on! If you buy 3 or more items that are the same, you can get 25% off! Build a function to do that from the above receipt.  Add a discount to all elements, calculating the correct discount.

### Bonus Task: Show Receipt

You now have the opportunity to show the receipt on screen.  from the receipt built by the above tasks, please show this on the DOM (which, if you remember, is the model the browser has for what appears on screen).  Think about how this might need to be styled.
