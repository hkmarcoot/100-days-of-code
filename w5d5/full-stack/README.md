[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6604164&assignment_repo_type=AssignmentRepo)
# Energiser Score Tracker

We will be building our first full stack app to keep track of energiser scores. It will be a chance to embed everything we've learned so far and practice breaking down problems into solvable chunks.

**Take time to plan before you start coding.** This is where all that work we've done on planning and breaking things down will really help. 

## Requirements

- Must use a database for persistent storage
- Must use a REST API server with routes to manage requests and serve responses
- Must use the models pattern to allow easy interaction with the database
- Once your API is up and running, should have a front end which allows users to at least view the data
- Bonus: Once users can view the data on the front end, try implementing other request types from the front end (remember your CRUD actions and think about how you could build front end functionality around them)

The rest is up to you!

## Helpful resources

- If you need a review on using fetch from your front end, check out this short [video here](https://drive.google.com/file/d/1HWDkpK11y9wgzPURBx5-QSkQHb4Y-XsO/view?usp=sharing).
- If you want to look more closely at using the second argument of fetch (where you specify the HTTP method, headers, body, etc.), watch this even shorter [video here](https://drive.google.com/file/d/1tdgoLo-7GxS9vJtPkYfDlShAuftzZctL/view?usp=sharing).
- When sending a request with a body, you'll need a `Content-Type` header to tell the Express server that you're sending JSON. This way, the `express.json()` middleware can work correctly. Read more about this header in this [article here](https://www.freecodecamp.org/news/what-is-the-correct-content-type-for-json-request-header-mime-type-explained/), including how to set the right `Content-Type` header for sending JSON.
- Remember that we build software iteratively - that means that we get the software working first to MVP level (minimum viable product), and then you can iterate and add additional features each time rather than trying to build it all at once. You can see more context around the concept of MVP in software [here](https://www.interaction-design.org/literature/article/minimum-viable-product-mvp-and-design-balancing-risk-to-gain-reward).
