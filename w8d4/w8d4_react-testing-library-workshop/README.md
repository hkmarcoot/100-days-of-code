[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6693823&assignment_repo_type=AssignmentRepo)
# React Component Testing Workshop

Use the React Testing Library to test each of the components in the shopping list app according to the requirements below. The more your tests resemble the way your software is used, the more confidence they can give you.

Run the app and spend a few minutes playing around with it to figure out how each component works before you start the tasks below.

Have a look through the `index.js` file in each of the component folders so you understand how each component works:

- The `<ListDisplay />` component takes in `list` (array) and `tickItem` (function) as props.
- The `<ListItem />` component takes in `name` (string), `completed` (boolean) and `tickItem` (function) as props.
- The `<AddItem />` component takes in a `addToList` function as and `buttonText` string as props.
- The `<ClearList />` component takes in a `clearList` function and `buttonText` string as props.

⚠️ Remember, Jest is already included as part of the React app. Don't install it separately! ⚠️

## Part One:

_Note: When you're creating your props object with your dummy test props within your test files, pass the value of all function props into your components as `jest.fn()` (for example, `handleClick: jest.fn()`). We'll explore why later in the lesson!_

👉 1.1: Create test files for each component. Use the correct naming convention for each file.

👉 1.2: For each component, write a basic test that tests whether the component renders successfully using the `.toBeInTheDocument` matcher.

Now, try your hand at writing some more specific tests for each component. You can use the following resources to guide you:

- [React Testing Library docs](https://testing-library.com/docs/react-testing-library/intro/)
- [React Testing Library cheatsheet with different query options](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Full list of jest-dom matchers](https://github.com/testing-library/jest-dom)

👉 1.3: For `AddItem`:

- Test that the inner text of the `<button>` element is the value of the buttonText prop.

👉 1.4: For `ClearList`:

- Test that the inner text of the `<button>` element is the value of the buttonText prop.

👉 1.5: For `ListDisplay`:

- Test that the `<ol>` element contains the correct number of components.

👉 1.6: For `ListItem`:

- Test that the inner text of the `<li>` element is the value of the name prop.
- Test that the class of the `<li>` element is 'tickedItem' if the completed boolean is false, or 'untickedItem' if it is true.

## Part Two:

Now it's time to test the functions and event listeners in your components to make sure everything's hooked up correctly.

👉 2.1: For `AddItem`:

- Test whether the `addToList` function is called when the button is clicked.

👉 2.2: For `ClearList`:

- Test whether the `clearList` function is called when the button is clicked.

👉 2.3: For `ListItem`:

- Test whether the `addToList` function is called when the `<li>` is clicked.

## Part Three - BONUS Extension Tasks:

⭐ Research and use 'jest-axe' to test the app for accessibility: https://www.npmjs.com/package/jest-axe.

⭐ Are there any additional scenarios you can think of to test the app for? Brainstorm some and try to write tests for them.
