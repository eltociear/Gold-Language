[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

# Gold-Language
The **Gold** Programming Language is an Programming Language designed to be really easy to
edit and overall just being an very Permeable coding Language.

## Setup

The **Gold** Language uses the Following Packages:

```javascript
npm i prompt
```

```javascript
npm i open
```

```javascript
npm i colors
```

Check the packages out here:

[prompt](https://www.npmjs.com/package/prompt)   
[open](https://www.npmjs.com/package/open)   
[colors](https://www.npmjs.com/package/colors)   


# Commands/Booting 

There are several ways that you can run your **Gold** file:

```javascript
node .
```

```javascript
npm run index
```

**Or you can just use the .bat files:**

- *shell.bat*: opens the Gold-Shell.
- *setup.bat*: creates an blank directory with some setup files.
- *index.bat*: Boot directly into the Index.js File.
- *save.bat*: Save current program into the editor.
- *install.bat*: Install all packages required in the current Version.
- *run.bat*: Run currently saved gold file.

# Programming
**Gold** is ran inside of the **.gold** file extension, so your directory would look something like this:   

*/.bat*   
*/Blank-Project*   
*/info*   
*/modules*   
*/myProjectSettings*      
*/node_modules*     
*package-lock.json*   
*package.json*   
*program.gold*   
*README.md*   
*run.bat*    
*shell.bat*  


The **.gold** file is your program.   

Your **Gold** Program is interpreted using the interpreter you have, or the default one if you don't have a one.

An Basic **Gold** Program would look something like this:

```javascript
var myGoldProgram = {
    name: "Example Gold Program",
    des: "An Example Gold Program for the README file.",
    ex: [
        {
            fun: "log",
            val1: "Hello World!"
        }
    ]
};

export { myGoldProgram };
```

# Advanced Programming

Think you got the hang of the **Gold** language? There are still many different things that you can do with the **Gold** language. Check out some tutorials inside of the wiki, or follow the basic Coding guide Below:

```javascript

fun // add, sub, mul, div, if, log, var, logVar
saveToVar // true/false
val1 // Your First Value, used for logging things and math equations.
val2 // Second Value for math equations.
slot // Variable slot for saving. Possibilites are 0, 1, or 2.
type // =, >, <, ! 
logvaluetrue // What to log if your if statement is true
logvaluefalse // What to log if your if statement is false

```

# Contribution

Wanting to Contribute to **Gold**? Check out the *contributing.md* inside of the */info* folder to learn how you can contribute to the **Gold** language.

# Used By

This project is used in the following projects:

- [Gold](https://github.com/Shining-Gold-Studios/Gold-Language)   



Have any more questions? Join our Discord - [Discord](https://discord.gg/CUJrdW5vKn)

