[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6429069&assignment_repo_type=AssignmentRepo)
# Events

## Task 1 - The event object:

In `main.js`, you will find some code that looks like this:

```js
const button = document.querySelector("#click-me");

function handleClick(event) {
  // code goes here!
}

button.addEventListener("click", handleClick);
```

We have stored a reference to the button with id `#click-me` in the `button` variable and have added an event listener to listen for when the button is pressed. When the button is pressed, the function `handleClick` will be called.

👉 Add code so that if the `shiftKey` property of the event is `true`, then change the inner text of the button to be `"NAILED IT!!"`.

## Task 2 - Adding an event listener:

There is also a button with a class of `.task-2` in the HTML.

👉 Select this button with `querySelector` and store it in a variable called `flowerButton`.

👉 Write a function that changes the title of the document to be these flower emojis `💐🌷🌼`.

👉 Add an event listener to the `flowerButton` which listens to the `click` event and calls your function from the previous step. 

You can check if your code has worked by loading your page in the browser and checking to see that what's in the browser's tab for the pages changes to flowers when you press the flower button.

## Task 3 - Different events:

There are [many different kinds of events](https://developer.mozilla.org/en-US/docs/Web/Events) other than `click`.

Event.target is a reference to the element that fired the event. If we clicked on a button like before, the target would be that button. In this case, for this task, we will be listening to a text input instead.

👉 Select the input element with id `#title-changer`.

👉 Write a function that takes in an event object as a parameter.

👉 When that function is called, read the value from the `value` property, which is nested in an object on the `target` property of the event. Set the text in the `h1` tag on the page to be that value.

👉 Add an event listener to that input which listens to the `keyup` event and calls your function.

You can check if your code has worked by loading your page in the browser again; when you type in the input field, you should see your text show up on the page.

## Task 4 - Different events:

👉 Listen to the `mouseenter` event on the `img` element and change the color of the `h1` to `hotpink` when the mouse cursor is over the image.

👉 Listen to the `mouseleave` event on the `img` element and change the color of the `h1` back to `initial` when the mouse cursor is then removed from the image.

## Task 5 - Inline listener and toggle:

The function for this task should be declared inline, meaning it is declared as an argument to the `addEventListener` function instead of defined separately. Because it's declared inline, this function will not need a name and will not be able to be invoked elsewhere in our code.

To toggle is to switch between two states. In this task we will be toggling a class on an element. This means that when the function is first called, it should add the class to that element, and when the function is next called, it should remove the class. See [this page for more context](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).

👉 Add an event listener to the checkbox input that listens to the `change` event, and declare an inline function that toggles a class of `.funky` on and off of the `h1` element.

## Task 6 - Keep practicing:

👉 Delete and repeat any tasks you struggled with. Build that muscle memory! 🧠💪  
  
👉 Find even more [types of events](https://developer.mozilla.org/en-US/docs/Web/Events) and practice listening to them.
