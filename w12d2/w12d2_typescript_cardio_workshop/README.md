# TypeScript Practice

The aim here is to become more familiar with TypeScript, not to finish all the tasks.

## Task 1

Experiment with TypeScript!

You can read the basics of transitioning from regular JS to TypeScript [here](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

Then work through the [basic tutorial on the TypeScript docs here](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html). You can also look through this [five minute article](https://medium.com/free-code-camp/learn-typescript-in-5-minutes-13eda868daeb).

Then navigate to the [TypeScript Playground](https://www.typescriptlang.org/play) and have a go at doing the following things:

- Declare variables of the types `boolean`, `string` and `number`.
- Declare variables that are the type of number array and string array.
- Declare an array which contains multiple data types.
- Declare a function where the parameter type and return values are checked.
- Declare a new interface and use it.

See how you can break the Typescript functionality as much as use it correctly. Learn what it can and can't do!

## Task 2

The aim of this task is to convert an existing rock, paper, scissors game (in `task-2/src/game.js`) from JavaScript to TypeScript. The game logic has already been written for you so that you can just focus on TypeScript.

(Normally, if you're going to use TypeScript, you would just write the app directly in TypeScript from the start. However, sometimes you might have to migrate an older/existing codebase to TypeScript.)

1. `cd` into the `task-2` folder and run `npm i` to install required dependencies.
2. Rename `src/game.js` to `src/game.ts`.
   - If your IDE starts underlining errors/problems in red, that's normal and they'll disappear as you work through the task and complete the migration.
3. Convert the JavaScript within `src/game.ts` to TypeScript. (You can optionally use `npm run dev` to see immediate feedback as you make changes. Be prepared to see lots of errors at the start.)

   1. Convert `OUTCOMES` to an enum called `Outcome`. (Make the necessary changes to the rest of the code so that it uses the new `Outcome` enum.)
   2. Convert `CHOICES` to an enum called `Choice`. (Make the necessary changes to the rest of the code so that it uses the new `Choice` enum.)
   3. Add type annotations for every function's parameters and return type.

If you've been running TypeScript in watch mode (via `npm run dev` earlier), then your `build` folder should already contain the latest `game.js`. If not, try running `npm run build` in your terminal. This should take your TypeScript file, compile it, transpile it to JavaScript and place a new `game.js` file in the `build` folder.

If you see compiler errors, read through the error message, google it and attempt to resolve them one by one.

Once complete, try serving the `index.html` locally (using something like Live Server) and seeing if the game works (check the buttons, check the scores displayed).

## Task 3 (bonus)

Let's write a simple web application which fetches a Kanye West quote and displays it on the page.

1. `cd` into the `task-3` folder
2. Run `npm i -D typescript` to install TypeScript as a development-only dependency.
3. Create a `src` folder within the `task-3` folder.
4. Create a `build` folder within the `task-3` folder.
5. Run `npx tsc --init` to create a `tsconfig.json` in the `task-3` folder. With the newly created `tsconfig.json`, uncomment and change:

   1. `compilerOptions.module` to be `"ES6"` (or newer if you prefer)
   2. `compilerOptions.rootDir` to be `"./src"`
   3. `compilerOptions.outDir` to be `"./build"`
   4. `compilerOptions.noEmitOnError` to be `true`
   5. `compilerOptions.strict` to be `true`

6. Add a `build` script to your `package.json` which runs the command `tsc`
7. Optionally, add a `dev` script to your `package.json` which runs the command `tsc --watch`. (You can use this whilst developing.)
8. Create an `index.html` which contains any starter HTML you'll need. Any JavaScript files you want to link should come from the `build` folder (as this is where TypeScript should output any JavaScript files based on the config above). You may want to add `type="module"` and `defer` attributes to the `script` tag in the HTML file (depending on your code).

9. Write a small front end using TypeScript which:

   1. Contains a HTML blockquote element (for displaying a fetched quote)
   2. Contains a HTML button element (so that the user can fetch a new quote by clicking)
   3. Fetches a new Kanye West quote (from `https://api.kanye.rest`) and displays it in the blockquote element whenever the button is clicked
   4. Fetches and displays a new Kanye West quote when the page initially loads
   5. Try to:
      - compose your app of simple, lean functions, each of which have a single responsibility. For example, a function which only fetches and returns the quote, etc.
      - have type annotations for each function's parameters and return type
      - have types defined for the data received from the API

10. Once done, you can run `npm run build`, which should then take your TypeScript files (from your `src` folder), check/compile them, transpile them and put the JavaScript output in your `build` folder. You can serve your `index.html` locally using something like Live Server to see if your app is working.

## Task 4 (bonus)

Write a small REST API using TypeScript and Express.

1. `cd` into the `task-4` folder
2. Install TypeScript as a development-only dependency.
3. Install Express.
4. Install the types for Express using `npm i -D @types/express`. When using NPM packages/third party code with your TypeScript code:

   - some NPM packages come with type declaration files (which allow TypeScript to understand the types within that third party code). In other words, you don't have to install anything other than the package itself
   - some NPM packages don't come with types, but you may be able to install the types separately via the Definitely Typed repo (which is a community-maintained repo which contains TypeScript declarations for many NPM packages). In other words, you have to install the package itself as well as something like `npm i -D @types/PACKAGE_NAME`.
   - some NPM packages don't come with types and unfortunately type declarations files may not available via Definitely Typed. In this case, you may need to write the type declarations yourself before you're able to use that third party code in your TypeScript app (depending on how strict your `tsconfig.json` is configured).

5. Create a `src` folder within the `task-4` folder.
6. Create a `build` folder within the `task-4` folder.
7. Run `npx tsc --init` to create a `tsconfig.json` in the `task-4` folder.
8. Structure your project however you want (e.g. create and name your folders) and configure `tsconfig.json` to reflect your project structure. (If you're stuck, feel free refer to the previous task to see how we set things up there.)

9. Add a `build` script to your `package.json` which runs the command `tsc`

10. Optionally, add a `dev` script to your `package.json` which runs the command `tsc --watch`. (You can use this whilst developing.)

11. The REST API should support least two routes. Try to:

    - Add type annotations for `req.query`, `req.body`, `req.params`, `res.body` (where appropriate)

12. Bonus: Have a look at `ts-node` (https://typestrong.org/ts-node/docs/), which can make it easier to write and run server-sided TypeScript.

13. Bonus: Have a look at tools like NestJS (https://docs.nestjs.com/) and Ts.ED (https://tsed.io/) for other ways of writing a server with TypeScript.

## Task 5 (bonus):

Once you've finished experimenting, work through [this course](https://www.codecademy.com/learn/learn-typescript) as a team.
