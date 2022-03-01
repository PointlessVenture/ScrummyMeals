# CSI330-AgileProject: Scrummy Meals

## WE DO ***NOT*** USE PHP IN THIS DEVELOPMENT ENVIRONMENT


## How to use NodeJS and start a server

1. Install NodeJS onto your computer.
2. Navigate to the project folder.
3. Run

 ```bash
 npm install
 OR
 npm -i
 ```

 4. To start the page run (I recomend git bash but you can use whatever shell you want)

```bash
http-server
```

5. This will start the server and tell you where to go to access it.

## How to use modules

### If NOT using on the HTML page

Write your js code. Call the modules "insert name here".mjs. This is so we know that it is a js module, not entirely neccesary but good practice. At the end of you file don't forget to export your function/classes/whatever it is.

```javascript
//exporting
export { <put function/class names here>}

//OR

export default <type> <function definiton{}>

//importing
import { <function1> , <function2> } from "./<where its from>;

//OR
//this is for importing a default export
import <thingname> from "./<where its from>;
```

The later is generally used for modules that export only a single thing, like classes.

### If using ON the HTML page (functions only)

After you export the functions add:

```javascript
window.<function name>
```

This will make it so the HTML file knows what you are talking about when the function is called. Additionally add

```HTML
<script type="module" src"<file source here"></script>
```

to your HTML file. This actually imports the code from JS. Try to keep as much stuff as possible in the index.js file, from there you can add event listeners and the like.
