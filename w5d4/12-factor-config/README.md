[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6600018&assignment_repo_type=AssignmentRepo)
# 12 factor app and config management

For this workshop you will need to use the project from yesterday (w5d3_node-pg-codealong)
So... open that up, and let's see what issues there are from a 12 factor app perspective.

## DB Connection.

As you can see in `db/index.js` all of your database credentials are in PLAIN TEXT.

Consider... 
If you had sensitive data on that database how easy would it be for a hacker to access it and steal it?

Yeah, super easy, all they would need to do is scrape github to find those credentials and they're in! 

There are presently many malicious bots that are scraping github and similar services for credentials, and once they get them, their malicious owner can steal data, modify repos to inject malicious code, and even spin up instances in the cloud to mine bitcoin (all on your credit card!).

This contravenes the 3rd aspect of a 12 factor app, `config management`.

After each change, you can run `npm test` to run tests to see if your changes have worked (there are a number of tests, so look up in your console for the one that you were trying to address and see the reason for failures, if applicable). This will require an `npm install`.

## Managing secrets

There are many ways that we can manage environment variables.

We will be using the `dotenv package` to read from a .env file.

## Task 1

- Install the dotenv package. (This will only need to be a development dependency using the `-D` or `--save-dev` flag - [More info here](https://docs.npmjs.com/cli/v8/commands/npm-install).)

- Create a .env file.

- Use the `.gitignore` file to make sure that any files with a `.env` extension are not tracked for git (the file should be greyed out in your vscode file browser if you have done this successfully).

- You will need to modify the start script in your `package.json` to preload the .env file; details of this can be found [HERE](https://www.npmjs.com/package/dotenv) under the `Preload` heading.

## Task 2

- Add entries in the .env file for each of the required variables the format should be as follows
```
VARIABLE1=foo
VARIABLE2=bar
```
env vars are ALWAYS strings (but you do not need to use '' or "" in the .env file).

- Use the dotenv package to populate `config.js` (use the readme [HERE](https://www.npmjs.com/package/dotenv) to help). You will need:
    - databaseHost string (connection string) - set this to `dbhost`
    - databaseName - set this to `dbname`
    - username - set this to `username`
    - password - set this to `password`

**TOP TIP:** environment variable keys are usually formatted in `screaming snake case` e.g. `DATABASE_HOST`

## Task 3

- Go back to yesterday's project. See if you can abstract away all of those database credentials to a .env file and a config object.

## Bonus tasks
You may want to change databases.

- Set up a cloud postgres database using [elephantsql](https://elephantsql.com/) (don't worry, it's free but I always recommend removing the database when you're finished with it!)

- Change your connection details to those provided by elephantsql. This should work without any further code changes! (Oh look! This is adhering to the 4th rule of 12 factor apps!)

- Run your app as you did yesterday. Run your migration and seed scripts first to create and populate your table. (Oh look! You are implementing the 12th rule of twelve factor apps!)
