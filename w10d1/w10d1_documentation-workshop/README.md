[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6785636&assignment_repo_type=AssignmentRepo)

# Workshop - Documentation

Your task is to choose a project you or your partner have coded in the previous weeks (for scale, think hackathon or workshop rather than your week-long project!).

Write the best documentation you can for it in this README. Remember that good documentation includes (but isn't limited to!) the following:

- Purpose - what problem is it solving?
- What your components do and how they fit together - component tree
- How to start it and instructions for use
- Examples showing your software in use
- Dependencies list and what each dependency does in your code
- Any other information users and developers might need to know

When finished, you should be able to trade your documentation with any other group, and they should immediately be able to describe what your project does without seeing a single line of your actual code.

**Resources:**

- [Atlassian - Building Better Documentation](https://www.atlassian.com/software/confluence/documentation)
- [Write the Docs Guide](https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/)
- [README Editor with Template Sections](https://readme.so/editor)
- [How to Write a Good Documentation: Home](https://guides.lib.berkeley.edu/how-to-write-good-documentation)
- [Best Practices When Documenting Your Code for Software Engineers](https://betterprogramming.pub/best-practices-when-documenting-your-code-for-software-engineers-941f0897aa0)

You can also look at docs you've referred to before for inspiration, both large (Express, React, etc.) and smaller-scale (Chalk, Nodemon, etc.).

## Write your documentation below:

# W4d5 Full-stack Hackathon

### Purpose

An app that shows the food title, food photo, ingredients and the cooking instructions. User can add more food by providing information in the input boxes. It demonstrates a working backend that can link to the pre-built frontend.

### Component Tree

Libs
contains the Recipes data ( Title, ingredients and instructions)
the image URLs
|
models
contains the functions for CRUD API
getRecipes()
getRecipeByID()
createRecipe()
updateRecipeByID()
deleteRecipeByID()
searchRecipeByTitle()
searchRecipeByIngredient()
patchRecipeByID()

|
public folder:
The public component connects the front-end to the back-end by URL: localhost:3000.
|
views
This contains the HTML Document that displays the data from the back-end.

### How to start it and instructions for use

npm start to begin the server. You can go to http://localhost:3000 in browser to view the frontend (HTML).
npm run dev to start the server in development mode.

When you first start the webpage, it is already loaded with the first data "Beans on Toast". You have the title, image, ingredients, instructions displayed in a unorder list.

You have a form field to add new food by inputting your data in the fields accordingly.

### Examples showing your software in use

<!-- To search or create for recipes, use the form field
        |                     |
                             Create recipe

                                  |      |
                                  title   ingredients
                                         |
                                         create
        search by Title
                |
                search by Ingredient -->

Find a food recipe online. Put the food name in Title, a photo URL in Image URL, all the ingredients in Ingredients, food making instructions in Instructions. Press "Create Recipe" and then you can add this new recipe below the list.

### Dependencies list and what each dependency does in your code

npm ls and you will get the dependencies list
workshops_servers@1.0.0 /Users/marco/SOC National Bootcamp/w10d1/w4d5_api-hackathon-week4_room90 copy
├── express@4.17.1
└── nodemon@2.0.15

nodemon is a development tool that help us start the server again with each changes in the coding.
express is used to build the server. It is imported in the app.js.
