# JS 101

## JS as part of a webpage

### Getting Set Up:

- Make a new folder, and within it, add an `index.html` file that contains the following:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Say Yes to Jay Ess</title>
  </head>
  <body></body>
</html>
```

- Make another new file in this same folder called `main.js`, and within it `console.log` the words "HELLO WORLD!" (or a message of your choice) like so:

```js
console.log("HELLO WORLD!");
```

### Linking your files:

- Link the JavaScript file to the HTML file with a `script` tag your HTML.

_\* NOTE: Script tags are normally placed as the last child/children of the body. This is because the browser will read each line of HTML from top to bottom, and most of the time we will want our HTML page to have fully loaded before we run any scripts._

- Open your HTML page in the browser and open the console, and if you've linked your files together correctly, you should see that the words "HELLO, WORLD!" (or your witty own take on the canonical hello world no doubt...) have been printed!

- This means success! We have an HTML page and a JavaScript file, linked and running, which means it's time to get coding!
