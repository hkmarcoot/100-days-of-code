[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6558279&assignment_repo_type=AssignmentRepo)
# Express Middleware Workshop

Today, you've been hired by a small bookshop to expand their API to add some useful functionality.

If you ever need to reset your "Database" of books, run the command `npm run reset`

## Task 1: What Is Being Requested?

What the owner wants here is every time a request comes into the API, they can have a log in the console of what is being requested.

Create a piece of [middleware](https://expressjs.com/en/guide/using-middleware.html) in `index.js`.

- First, structure your middleware so that it uses `console.log` to output "Request received!" each time your server receives a request. Run your server and test this to make sure that the console.log appears when a request comes in, and the request is still handled correctly.
- Once your middleware is working, refactor it so that it also logs the body of the request in the console.

<details>
 <summary>Click here for a hint!</summary>
 - Remember that the request is an object, and body is a property on that object. You can console.log your request object to investigate further!
 - Don't forget to use your next() function so that the request continues through the middleware chain to your request handlers.
</details>

## Task 2: Can We Get A Time On That?

When a new book is added to the API, the owner wants to have a timestamp added to the record. Create a piece of middleware that adds a date and time to POST requests.

- Create another piece of middleware. In it, use JavaScript's built in [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to generate a timestamp (a string with the current date and time). Start by console.logging this with each request to ensure it's working.
- Now use your middleware to add a property `timestamp` to your request body.

<details>
 <summary>Click here for a hint!</summary>
 - Remember that the request is an object, and method is a property on that object.
 - If you need a refresher, use the docs to review how to work with objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 - Don't forget to use console.log (such as console.logging your request body) to check if it's working!
</details>

## Bonus

Once you have your middleware above up and running, if you have extra time, try out the challenges below.

### More Middleware?

What else can you think of that would be useful for middleware? Perhaps a logger which prints out to console some details about each request as it comes in? Maybe something that blocks certain users from accessing the API? Could you count how many calls your API receives?

## Resources

- [Express docs on using middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Rithm School article on Express middleware with examples](https://www.rithmschool.com/courses/node-express-fundamentals/helpful-express-middleware)
