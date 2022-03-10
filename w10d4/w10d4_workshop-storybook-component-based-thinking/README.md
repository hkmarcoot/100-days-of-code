[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6825485&assignment_repo_type=AssignmentRepo)
# Build Your Own Blog With Components

This repository contains two generic components, and one component that needs refactoring. Each component folder also contains a `stories.js` file, exporting an example of the component to storybook. You can view the storybook for the app by running `npm run storybook` in the console. Use these components as a guide to producing your own generic components.

## Task 1 - Make the 'SubmitButton' component generic.

The 'SubmitButton' component is currently not a generic component. Refactor the component to make it more reusable elsewhere in an app.

## Task 2 - Plan your blog components.

Think about the components that make up a traditional blog. The functionality you want your components to provide could include: a header, navigation, posts and comments (these are not necessarily the components themselves, but rather the higher level design that you want to create with your components). How could you achieve each piece of functionality by composing together generic components? What props does each component need? How much user customisation are you allowing for each one? Think [component driven UIs.](https://www.componentdriven.org/)

## Task 3 - Code a component

Make a folder for each component from your plan. Make each component as generic as possible, thinking carefully about what aspects of the component will change depending on the props they are given.

## Task 4 - Style a component

Make a CSS file in your component folder to style the component. Import the CSS file in the component.

## Task 5 - Export your component to storybook

Make a `[component].stories.js` file in your component folder and export an example of your component to storybook.

## Task 6 - Rinse and repeat

Follow tasks 3-5 for all the other components that will make up your blog.

## Task 7 - BONUS - Use your components to construct your blog.

Put all of the components together in App to construct a blog page. Assemble your components in such a way that you can scale your blog to handle multiple posts. HINT: react-router will help you to manage multiple pages!
