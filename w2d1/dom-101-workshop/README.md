[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6418341&assignment_repo_type=AssignmentRepo)
# Working with the DOM in the Browser Console

Every website you use in your day-to-day browsing has a DOM (document object model) underpinning it - the DOM is the skeleton of the modern web. You can review more about the DOM [here](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

For the following activity, you'll be using the console in the browser to start interacting with the DOM on the Wikipedia page [here](https://en.wikipedia.org/wiki/Document_Object_Model). 

<details>
<summary>Click here for a reminder about how to access the browser console</summary>
    
Remember, to access the console, right click anywhere on the website and click `inspect`, or you can use the `ctrl-shift-i` keyboard shortcut on Windows or `command-option-i` on Mac. Under the Elements tab in the console, you can see the HTML structure of the website, what becomes the DOM tree. You can hover over elements to see them highlighted on the page itself or use the inspect tool to hone in on specific elements. If you change tabs to the one called Console, it's here that you can start writing the JavaScript that you'll be using to interact with the DOM for the following activities.

</details><br /> 

1. Use `document.querySelector()` to select the main title on the page using its id, `firstHeading`, and save it in a variable called `mainTitle`. You can then type that variable name into your console to view what its value is - so you should see that `<h1>` element that you selected.

    <details>
    <summary>Hint</summary>
    
    Remember to assign your variable with `const` or `let` and the assignment operator `=`. 
    
    Don't forget as well that `querySelector()` needs to take in a string! 
    
    </details>

2. We're programmers, so we like short, snappy abbreviations. Use JavaScript to change the `innerText` property of this main title to the abbreviation DOM. Have a look on the page itself, and you'll see that you've changed the actual title on the page using nothing but JavaScript. 
      
    <details>
    <summary>Hint</summary>
    
    Remember that you need to use the variable that you stored that DOM element in... So for example, if I wanted to access the inner text of an element I stored in the variable myParagraph, I would access it with myParagraph.innerText.
    
    </details>

3. Now use `document.querySelector()` again to select using the tag `h2`; save this in a variable called `subheading`. Have a look at the value of `subheading` in the console and notice which `<h2>` tag it selected on the page.
   
4. That's great if we want to select the first of that type of element on the page, but what if you want to select *all* the `<h2>` elements on the page? Do this by using `document.querySelectorAll()` to select all the `h2` elements on the page and save them in a variable called `allSubheadings`. Have a look at the value of `allSubheadings` in the console.

5. You can see that `allSubheadings` has become a NodeList, a list of all of the DOM nodes that matched your query; in this case, it's a list of all the `<h2>` elements on this page. If you try to change the inner text of this NodeList like we did before with a variable that contains a single element, it won't do what you wanted on the page. 
   
   Can you think why this might be the case? Discuss your hypotheses with your partner before you move on.

    Instead of using the `innerText` property directly with `allSubheadings`, you need to *iterate* over this NodeList just like you would an array with a `for loop`, changing the inner text of each element to a word of your choice. Once you code your for loop and press enter, you should see each subheading on the page change to the word you chose.

    <details>
    <summary>Hint</summary>
    - Remember, for loops need three things: a **variable** to count through the list (such as *i*), a **condition** for the loop to run (such as *i < myList.length*), and a way to increase that *i* value, aka to iterate it to move through each item in the list (such as *i++*).  <br /> 
    - If you need a further for loop refresher, remember that you can Google! Try searching for "JavaScript for loop" or "js for loop" to find the pages about for loops on websites like MDN or W3Schools.  <br /> 
    - Once you're inside the for loop, use the *i* variable's value as your index to access that specific item in the list at that point.
    </details>

6. Now do a similar thing to select the links in the Contents section. Inspect them under the Elements tab in the console to see what details they have in common that you could use to select just the list items within the table of contents. Then create two new variables, `tocLevel1` and `tocLevel2`. Select the relevant `<li>` elements and save them as the value of their respective variables. 
   
   Now, use a for loop like you did before for each of these two variables, but this time, instead of changing the inner text, change the font color using the style property. Change all of the `<li>` elements in `tocLevel1` to red and all those in `tocLevel2` to blue.

    🌟 Bonus challenge: You're not limited to just text when you're manipulating the DOM. You can also change different properties of the elements themselves! 
    
    Let's change what's shown in the image to the right of the introduction and contents. Create a variable called `mainImg`, and use your DOM selecting skills to save that `<img>` tag as its value. Now, change the source (`src`) attribute of `mainImg` to the following image link: https://cf.ltkcdn.net/cats/images/orig/245861-1600x1066-black-cat-close-up-sitting.jpg (or an image link of your choosing). You should see the picture change on the page.

If you finish these tasks, congrats! You're ready to move on and manipulate the DOM in VS Code!
