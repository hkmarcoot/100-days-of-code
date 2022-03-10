# Custom Hooks

Custom hooks allow you keep your components clean by extracting the logic needed for a task into one function you can then consume in your component. That logic can also then be reused across many components.

⚠️ For each hook you write, remember to write your plan first. While planning, discuss the following:

- Take a look at the components and familiarise yourself with their code and logic. Google anything you don't recognize. Once you can articulate what's happening, then decide on what logic you can pull out into a custom hook. (What is unique to that component? What isn't?)
- Does your custom hook need to have any parameters?
- Plan out the logic in the hook itself, breaking it down as usual. Do you need to use existing React hooks within your custom hooks e.g. `useState`?
- What does your hook need to return at the end? In other words, what does the component need from the hook?

## Task 1:

👉 1.1: In `src/hooks/useDocumentTitle.js`, create a custom `useDocumentTitle` hook that takes in a title and changes the document's title accordingly. Use this hook in the `BasicCounter` component so that the document title always reflects the `count`.

👉 1.2: Extract the common logic in the `BasicCounter` and the `SheepCounter` components into a custom hook called `useCounter`. Write your hook in `src/hooks/useCounter.js` and then import and use it within both components.

## Task 2:

👉 Tidy up the `ControlledInput` component by writing a custom hook called `usePersistentState`. Write your hook in `src/hooks/usePersistentState.js` and import it into the component.

If needed, have a look at the documentation for local storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

## Task 3:

👉 Extract the common logic in the `PokemonViewer` and the `DadJoke` components into a custom hook called `useFetch`. Write your hook in `src/hooks/useFetch.js` and import it into each component.

## Bonus:

⭐ Are there any other features you can think of to add via custom hooks to these components? Try some out!

⭐ Write a custom hook that can add any event listener to the window and calls a callback with the event object. Have it clean up after itself by returning a function from the useEffect callback!

⭐ Use the documentation for React hooks testing library (https://github.com/testing-library/react-hooks-testing-library) to write tests for the custom hooks you've written
